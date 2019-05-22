let _theLibYouUse = null;
let _sharedAwesomeService = null;

class AwesomeService {
    /* a lazy loading singleton. It ensures the lib would not be required if the service is not used. It may seems a bit dirty for requiring lib in functions. But it makes this service able to move into the core framework some days.
     */

    static get queueTask() {
        if (!_queueTask) {
            _queueTask = require('queueTask');
        }

        return _queueTask;
    }

    /* A singleton. Most of the case you will just need to init one Service instance. You still better do a signleton pattern so that you can do stubbing easily when doing unit test on Model methods that make use of this service */

    static get sharedAwesomeService() {
        if (!_sharedAwesomeService) {
            _sharedAwesomeService = new AwesomeService();
        }

        return _sharedAwesomeService;
    }

    /* As singleton is used, it will be hard to pass the config when initializing the service. That's why we use init instead of constructor. Besides, we may not want to set the config or directly get the global config inside this class because it's better to keep it with fewer dependencies. The config should be passed to the signleton in the motherbroad */

    init(config) {
        this.endpoint = config.endpoint;
        this.abc = config.abc;
    }
}

module.exports = AwesomeService;
