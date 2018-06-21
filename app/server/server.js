import express from 'express';
import AppWrapper from 'main/AppWrapper';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { serverSideStore } from 'reducers/configureStore';

const app = express();
const store = serverSideStore();

/**
 * MAIN
 */
app.get('/', (req, res) => {
    const App = (
        <Provider store={store}>
            <AppWrapper />
        </Provider>
    );

    res.write(`<!doctype html>
<html class="no-js" lang="">
    <head>
        <title>FANDOM React Boilerplate</title>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div id="root">`);
    const stream = renderToNodeStream(App);
    stream.pipe(res, { end: false });
    const preloadedState = store.getState();
    const json = JSON.stringify(preloadedState);

    stream.on('end', () => res.end(`</div>
        <script>window.__INITIAL_STATE__ = ${json}</script>
        <script src="/public/client.js"></script>
    </body>
</html>`));
});

export default app;
