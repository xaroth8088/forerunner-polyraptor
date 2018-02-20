import express from 'express';
import AppMain from 'main/AppMain';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();

app.get('*', (req, res) => {
    let application = renderToString(
        <AppMain/>
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
