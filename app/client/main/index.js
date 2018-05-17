import AppWrapper from 'main/AppWrapper';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'reducers/configureStore';

const store = configureStore();

hydrate(
    (
        <Provider store={store}>
            <AppWrapper/>
        </Provider>
    ),
    document.getElementById('root')
);
