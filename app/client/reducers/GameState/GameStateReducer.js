import GameStateRecord from 'records/GameStateRecord';
import {
    ADD_FORERUNNER,
    ADD_POLYRAPTOR,
    CAST_DINOSAUR,
    PROCESS_STACK,
    RESET
} from 'reducers/GameState/GameStateActions';

/* Reducers */
function reduceAddForerunner(state) {
    return state.addForerunner();
}

function reduceAddPolyraptor(state) {
    return state.addPolyraptor();
}

function reduceProcessStack(state) {
    return state.processStackEvent();
}

function reduceReset(state) {
    return state.clear();
}

function reduceCastDinosaur(state) {
    return state.castDinosaur();
}

export default function ExampleReducer(state = GameStateRecord, action = null) {
    switch (action.type) {
        case ADD_FORERUNNER:
            return reduceAddForerunner(state, action.payload);
        case ADD_POLYRAPTOR:
            return reduceAddPolyraptor(state, action.payload);
        case PROCESS_STACK:
            return reduceProcessStack(state, action.payload);
        case RESET:
            return reduceReset(state, action.payload);
        case CAST_DINOSAUR:
            return reduceCastDinosaur(state, action.payload);
        default:
            return state;
    }
}
