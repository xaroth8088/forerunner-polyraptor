import AppMain from 'main/AppMain';
import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

hydrate(
    (
        <AppContainer>
            <AppMain/>
        </AppContainer>
    ),
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('main/AppMain', () => {
        hydrate(
            (
                <AppContainer>
                    <AppMain/>
                </AppContainer>
            ),
            document.getElementById('root'))
    });
}
