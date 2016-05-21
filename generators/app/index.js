'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the kickass ' + chalk.red('generator-amp') + ' generator!'
    ));

    // // var prompts = [{
    // //   type: 'confirm',
    // //   name: 'someAnswer',
    // //   message: 'Would you like to enable this option?',
    // //   default: true
    // // }];

    // return this.prompt(prompts).then(function (props) {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    // }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
