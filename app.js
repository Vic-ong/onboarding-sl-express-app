const { App: SuperApp } = require('@shopline/sl-express');

class Server extends SuperApp {
    async startService() {
        if (this.config.app.role == 'CONSUMER') {
            await this.startConsumer();
            return;
        }
        await this.startExpress();
    }
}

let server = new Server();
module.exports = server;
