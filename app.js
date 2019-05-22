const { App: SuperApp } = require('@shopline/sl-express');

class Server extends SuperApp {
    async connectAwesomeService() {
        await AwesomeService.sharedAwesomeService
            .init(this.config.awesomeService)
            .connect();
    }

    async disconnectAwesomeService() {
        await AwesomeService.SharedAwesomeService.disconnect();
    }

    async connectDependencies() {
        await super.connectDependencies();
        // await this.connectAwesomeService();
    }

    async disconnectDependencies() {
        // await this.disconnectAwesomeService();
        await super.disconnectDependencies();
    }

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
