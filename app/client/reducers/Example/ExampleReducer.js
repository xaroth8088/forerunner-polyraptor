import ExampleRecord from 'records/ExampleRecord';
import { INCREMENT_COUNTER } from 'reducers/Example/ExampleActions';

/* Reducers */
function reduceIncrementCounter(state, payload) {
    return state.increment(payload.amount);
}

export default function ExampleReducer(state = ExampleRecord, action = null) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return reduceIncrementCounter(state, action.payload);
        default:
            return state;
    }
}
