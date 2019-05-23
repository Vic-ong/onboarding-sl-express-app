const { App: SuperApp } = require('@shopline/sl-express');

class Server extends SuperApp {
    async startService() {
        if (this.config.app.role == 'CONSUMER') {
            await this.startConsumer();
            return;
        }
        await this.startExpress();
    }

    async startApp() {
        await this.start();

        return this;
    }
}

let server = new Server();
module.exports = server;
