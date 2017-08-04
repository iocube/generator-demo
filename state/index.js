const Recipe = require('../Recipe');
const _ = require('lodash');
const settings = require('../settings');


module.exports = class extends Recipe {
    constructor(args, opts) {
        super(args, opts);

        this.desc('Create new state');

        this.argument('name', {
            type: String,
            require: true,
            description: 'state name'
        });
    }

    make() {
        const stateFolderName = _.kebabCase(this.options.name);
        const destination = `${settings.STATE_DESTINATION}/${stateFolderName}`;

        this._makeHtml(this.options.name, destination);
        this._makeLess(this.options.name, destination);
        this._makeController(this.options.name, destination);
        this._makeControllerSpec(this.options.name, `src/state/${stateFolderName}`);
    }
};
