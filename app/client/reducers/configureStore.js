import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'reducers/rootReducer';

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept(
            './rootReducer.js',
            () => {
                const nextRootReducer = require('reducers/rootReducer').default; // eslint-disable-line global-require
                store.replaceReducer(nextRootReducer);
            }
        );
    }

    return store;
}
