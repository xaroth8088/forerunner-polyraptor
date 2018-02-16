const clientConfig = require('./webpack-dev-client.conf.js');
const serverConfig = require('./webpack-dev-server.conf.js');

module.exports = [
    serverConfig,
    clientConfig
];
