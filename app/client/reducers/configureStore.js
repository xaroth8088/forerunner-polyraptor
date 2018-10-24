import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'reducers/rootReducer';

export default function configureStore(preloadedState, hot = true) {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunkMiddleware)),
    );

    if (hot && module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept(
            './rootReducer.js',
            () => {
                const nextRootReducer = require('reducers/rootReducer').default; // eslint-disable-line global-require
                store.replaceReducer(nextRootReducer);
            },
        );
    }

    return store;
}

export function serverSideStore() {
    return configureStore({}, false);
}
