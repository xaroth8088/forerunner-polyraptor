import AppWrapper from 'main/AppWrapper';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'reducers/configureStore';

const store = configureStore();

render(
    (
        <Provider store={store}>
            <AppWrapper />
        </Provider>
    ),
    document.getElementById('root')
);
