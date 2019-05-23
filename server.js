const app = require('./app.js');

const errorHandler = function(err) {
    console.log(err);
    console.log('##### SERVER IS NOT STARTING CORRECTLY! #####');
};

const ROLES = ['PUBLISHER', 'CONSUMER'];

const role = process.env.APP_ROLE;
const queue = process.env.CONSUMER_QUEUE_ID;

if (!ROLES.includes(role)) {
    console.log(`Please set environment variable APP_ROLE (${ROLES})`);
}

if (role === 'PUBLISHER') {
    app.startApp().catch(errorHandler);
}

if (role === 'CONSUMER') {
    app.startApp(queue).catch(errorHandler);
}
