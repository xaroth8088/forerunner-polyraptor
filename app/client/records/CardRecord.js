import { Record } from 'immutable';

export const CARD_RECORD_KEYS = Object.freeze({
    name: 'name',
    damage: 'damage',
    toughness: 'toughness',
    alive: 'alive'
});

export const CARD_NAMES = Object.freeze({
    POLYRAPTOR: 'Polyraptor',
    FORERUNNER: 'Forerunner of the Empire'
});

const cardRecordSchema = {
    [CARD_RECORD_KEYS.name]: '',
    [CARD_RECORD_KEYS.damage]: -1,
    [CARD_RECORD_KEYS.toughness]: -1,
    [CARD_RECORD_KEYS.alive]: true
};

class CardRecord extends Record(cardRecordSchema, 'CardRecord') {
    asForerunner() {
        return this
            .clear()
            .set(CARD_RECORD_KEYS.name, CARD_NAMES.FORERUNNER)
            .set(CARD_RECORD_KEYS.damage, 0)
            .set(CARD_RECORD_KEYS.toughness, 3)
            .set(CARD_RECORD_KEYS.alive, true);
    }

    asPolyraptor() {
        return this
            .clear()
            .set(CARD_RECORD_KEYS.name, CARD_NAMES.POLYRAPTOR)
            .set(CARD_RECORD_KEYS.damage, 0)
            .set(CARD_RECORD_KEYS.toughness, 5)
            .set(CARD_RECORD_KEYS.alive, true);
    }

    damage() {
        return this
            .set(
                CARD_RECORD_KEYS.damage,
                this.get(CARD_RECORD_KEYS.damage) + 1
            )
            .set(
                CARD_RECORD_KEYS.alive,
                ( this.get(CARD_RECORD_KEYS.damage) + 1 ) < this.get(CARD_RECORD_KEYS.toughness)
            );
    }
}

export default new CardRecord();
