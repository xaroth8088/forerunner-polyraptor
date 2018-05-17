import express from 'express';
import AppWrapper from 'main/AppWrapper';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from "reducers/configureStore";

const app = express();
const store = configureStore();

app.get('*', (req, res) => {
    let application = renderToString(
        <Provider store={store}>
            <AppWrapper/>
        </Provider>
    );

    let html = `<!doctype html>
        <html class="no-js" lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>FANDOM React Boilerplate</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width,  initial-scale=1">
        </head>
        <body>
            <div id="root">${application}</div>
            <script src="/public/client.js"></script>
        </body>
    </html>`;

    res.send(html)
});

export default app;
