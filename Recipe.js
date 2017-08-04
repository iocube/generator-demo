const Generator = require('yeoman-generator');
const _ = require('lodash');
const path = require('path');
const settings = require('./settings');


module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        // set template dir to current this modules directory
        this.sourceRoot(path.join(__dirname, 'templates'));
    }

    _makeController(name, destinationPath = '.') {
        const controllerName = _.upperFirst(name) + 'Controller';

        this.fs.copyTpl(
            this.templatePath('controller.js.ejs'),
            this.destinationPath(`${destinationPath}/${controllerName}.js`),
            {
                controllerName: controllerName,
                moduleName: settings.ANGULAR_MODULE_NAME
            }
        );
    }

    _makeControllerSpec(name, destinationPath = '.') {
        const controllerName = _.upperFirst(name) + 'Controller';
        const controllerShortName = _.lowerFirst(name) + 'Ctrl';
        const specName = controllerName + 'Spec';

        this.fs.copyTpl(
            this.templatePath('controller.spec.js.ejs'),
            this.destinationPath(`${destinationPath}/${specName}.js`),
            {
                controllerName: controllerName,
                controllerShortName: controllerShortName,
                moduleName: settings.ANGULAR_MODULE_NAME
            }
        );
    }

    _makeDirective(name, destinationPath = '.') {
        const directiveName = _.lowerFirst(name);
        const folderName = _.lowerFirst(name);
        const fileName = _.lowerFirst(name) + 'Directive';

        this.fs.copyTpl(
            this.templatePath('directive.js.ejs'),
            this.destinationPath(`${destinationPath}/${folderName}/${fileName}.js`),
            {
                directiveName: directiveName,
                moduleName: settings.ANGULAR_MODULE_NAME
            }
        );
    }

    _makeFactory(name, destinationPath = '.') {
        const serviceName = _.lowerFirst(name) + 'Service';
        const factoryName = _.lowerFirst(name) + 'Factory';

        this.fs.copyTpl(
            this.templatePath('factory.js.ejs'),
            this.destinationPath(`${destinationPath}/${serviceName}.js`),
            {
                moduleName: settings.ANGULAR_MODULE_NAME,
                factoryName: factoryName
            }
        );
    }

    _makeFactorySpec(name, destinationPath = '.') {
        const factoryName = _.lowerFirst(name) + 'Service';
        const specName = factoryName + 'Spec';

        this.fs.copyTpl(
            this.templatePath('factory.spec.js.ejs'),
            this.destinationPath(`${destinationPath}/${specName}.js`),
            {
                moduleName: settings.ANGULAR_MODULE_NAME,
                factoryName: factoryName
            }
        );
    }

    _makeHtml(name, destinationPath = '.') {
        const stateNameKebabCased = _.kebabCase(name);

        this.fs.copyTpl(
            this.templatePath('template.html.ejs'),
            this.destinationPath(`${destinationPath}/${stateNameKebabCased}.html`),
            {
                className: stateNameKebabCased
            }
        );
    }

    _makeLess(name, destinationPath = '.') {
        const kebabCasedName = _.kebabCase(name);

        this.fs.copyTpl(
            this.templatePath('style.less.ejs'),
            this.destinationPath(`${destinationPath}/${kebabCasedName}.less`),
            {
                className: kebabCasedName
            }
        );
    }
};