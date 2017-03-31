'use strict';

const Generator = require('yeoman-generator');
const path = require('path');
const _ = require('lodash');
const settings = require('../../settings');


module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        // set template dir to current this modules directory
        this.sourceRoot(__dirname);

        this.desc('Create new controller');

        this.argument('name', {
            type: String,
            require: true,
            description: 'controller name'
        });
    }

    copy() {
        this.fs.copyTpl(
            this.templatePath('controller.template.js'),
            this.destinationPath(`${this.options.name}.controller.js`),
            {
                name: _.upperFirst(this.options.name),
                module: settings.APP_MODULE,
            }
        )
    }
};
