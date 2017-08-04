const Recipe = require('../Recipe');
const settings = require('../settings');


module.exports = class extends Recipe {
    constructor(args, opts) {
        super(args, opts);

        this.desc('Create new factory');

        this.argument('name', {
            type: String,
            require: true,
            description: 'factory name'
        });
    }

    make() {
        this._makeFactory(this.options.name, settings.FACTORY_DESTINATION);
        this._makeFactorySpec(this.options.name, settings.FACTORY_DESTINATION);
    }
};
