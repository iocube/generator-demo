const Recipe = require('../Recipe');
const settings = require('../settings');


module.exports = class extends Recipe {
    constructor(args, opts) {
        super(args, opts);

        this.desc('Create new directive');

        this.argument('name', {
            type: String,
            require: true,
            description: 'directive name'
        });
    }

    make() {
        this._makeDirective(this.options.name, settings.DIRECTIVE_DESTINATION);
    }
};
