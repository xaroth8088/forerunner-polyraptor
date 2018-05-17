import http from 'http';
import app from './server'; // eslint-disable-line no-restricted-imports

const server = http.createServer(app);

let currentApp = app;
server.listen(3000);

if (module.hot) {
    module.hot.accept(
        './server.js',
        () => {
            console.log('RELOADING SERVER');
            server.removeListener('request', currentApp);
            server.on('request', app);
            currentApp = app;
        }
    );
}
