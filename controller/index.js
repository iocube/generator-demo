const Recipe = require('../Recipe');
const settings = require('../settings');


module.exports = class extends Recipe {
    constructor(args, opts) {
        super(args, opts);

        this.desc('Create new controller');

        this.argument('name', {
            type: String,
            require: true,
            description: 'controller name'
        });
    }

    make() {
        this._makeController(this.options.name, settings.CONTROLLER_DESTINATION);
        this._makeControllerSpec(this.options.name, settings.CONTROLLER_DESTINATION);
    }
};
