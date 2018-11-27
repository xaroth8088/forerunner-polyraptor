import { List, Record } from 'immutable';
import CardRecord, { CARD_NAMES } from 'records/CardRecord';

export const GAME_STATE_RECORD_KEYS = Object.freeze({
    stack: 'stack',
    total_creature_damage: 'total_creature_damage',
    battlefield: 'battlefield'
});

const gameStateRecordRecordSchema = {
    [GAME_STATE_RECORD_KEYS.stack]: new List(),
    [GAME_STATE_RECORD_KEYS.total_creature_damage]: 0,
    [GAME_STATE_RECORD_KEYS.battlefield]: new List()
};

export const EVENT_TYPES = Object.freeze({
    FORERUNNER_ETB: 'FORERUNNER_ETB',
    POLYRAPTOR_ENRAGE: 'POLYRAPTOR_ENRAGE'
});

class GameStateRecord extends Record(gameStateRecordRecordSchema, 'GameStateRecord') {
    addForerunnerEtbEvent() {
        return this.set(
            GAME_STATE_RECORD_KEYS.stack,
            this.get(GAME_STATE_RECORD_KEYS.stack).push(EVENT_TYPES.FORERUNNER_ETB)
        );
    }

    addPolyraptorEnrageEvent() {
        return this.set(
            GAME_STATE_RECORD_KEYS.stack,
            this.get(GAME_STATE_RECORD_KEYS.stack).push(EVENT_TYPES.POLYRAPTOR_ENRAGE)
        );
    }

    addForerunner() {
        return this
            .set(
                GAME_STATE_RECORD_KEYS.battlefield,
                this.get(GAME_STATE_RECORD_KEYS.battlefield).push(CardRecord.asForerunner())
            );
    }

    addPolyraptor() {
        return this
            .set(
                GAME_STATE_RECORD_KEYS.battlefield,
                this.get(GAME_STATE_RECORD_KEYS.battlefield).push(CardRecord.asPolyraptor())
            );
    }

    processStackEvent() {
        if (this.get(GAME_STATE_RECORD_KEYS.stack).size === 0) {
            return this;
        }

        const event = this.stack.last();
        if (event === EVENT_TYPES.POLYRAPTOR_ENRAGE) {
            return this.processPolyraptorEvent();
        }

        if (event === EVENT_TYPES.FORERUNNER_ETB) {
            return this.processForerunnerEvent();
        }
    }

    processPolyraptorEvent() {
        let newState = this
            .set(
                GAME_STATE_RECORD_KEYS.stack,
                this.get(GAME_STATE_RECORD_KEYS.stack).pop()
            )
            .addPolyraptor();

        this.get(GAME_STATE_RECORD_KEYS.battlefield)
            .filter(
                card => card.name === CARD_NAMES.FORERUNNER && card.alive === true
            )
            .forEach(
                () => {
                    newState = newState.addForerunnerEtbEvent();
                }
            );

        return newState;
    }

    processForerunnerEvent() {
        let newState = this
            .set(
                GAME_STATE_RECORD_KEYS.stack,
                this.get(GAME_STATE_RECORD_KEYS.stack).pop()
            );

        const newPolyraptors = newState
            .get(GAME_STATE_RECORD_KEYS.battlefield)
            .filter(
                card => card.name === CARD_NAMES.POLYRAPTOR
            ).size;

        newState = newState
            .set(
                GAME_STATE_RECORD_KEYS.total_creature_damage,
                this.get(GAME_STATE_RECORD_KEYS.total_creature_damage) + 1
            )
            .set(
                GAME_STATE_RECORD_KEYS.battlefield,
                newState.get(GAME_STATE_RECORD_KEYS.battlefield).map(
                    card => card.damage()
                ).filter(
                    card => card.alive === true
                )
            );

        for (let i = 0; i < newPolyraptors; i++) {
            newState = newState.addPolyraptorEnrageEvent();
        }

        return newState;
    }

    castDinosaur() {
        let newState = this;

        this.get(GAME_STATE_RECORD_KEYS.battlefield)
            .filter(
                card => card.name === CARD_NAMES.FORERUNNER && card.alive === true
            )
            .forEach(
                () => {
                    newState = newState.addForerunnerEtbEvent();
                }
            );

        return newState;
    }
}

export default new GameStateRecord();
