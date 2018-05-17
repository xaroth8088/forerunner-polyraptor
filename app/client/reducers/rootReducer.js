import ExampleReducer from 'reducers/Example/ExampleReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    ExampleReducer,
});

export default rootReducer;
