const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    createConfig() {
        // create .yo-rc.json file
        this.config.save();
    }
};
