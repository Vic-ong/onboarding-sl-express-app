const { App: SuperApp } = require('@shopline/sl-express');

class Server extends SuperApp {
    // async connectAwesomeService() {
    //     await AwesomeService.sharedAwesomeService
    //         .init(this.config.awesomeService)
    //         .connect();
    // }

    // async disconnectAwesomeService() {
    //     await AwesomeService.SharedAwesomeService.disconnect();
    // }

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
