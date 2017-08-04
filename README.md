Generator example built with [yeoman](http://yeoman.io).

## Requirements
 - NodeJS 6.x+

## Installation
```
# install yeoman globally
$ npm install --global yo --save-dev

# install generator dependencies
$ cd generator-demo
$ npm install

# make this generator as global module so that `yo` can find our generator.
$ npm link
```

## Generators
```
yo demo:controller <name>
yo demo:directive <name>
yo demo:factory <name>
yo demo:state <name>
```

## Usage

Each generator has help
```
yo demo:controller --help
```

Generate new controller
```
cd your_project_root_directory
yo demo:controller dashboard
```

## Templates
All templates reside inside `templates/` directory.
EJS is used as templating language (see http://ejs.co), therefore all templates have the `*.ejs` file extension.

## How to create a new generator
Create new folder with the generator name and place your code inside `index.js` file.
Depending on your needs, your generator should sub class the yeoman Generator or Recipe class (see `Recipe.js`).

`Recipe.js` provides methods for creating common angular components such as controllers, services etc,
you can think of them as basic building blocks for your generators.

Combine those methods to create more complex components, take for example the `state` generator which creates an html template, controller and style.

NOTE: yeoman runs each method in the generator class unless it's prefixed with underscore, thats why every method in`Recipe.js` is private, its only meant to be invoked from a sub class.
