'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the kickass ' + chalk.red('generator-amp') + ' generator!'));
    var prompts = [{
      type: 'checkbox',
      name: 'modules',
      message: 'Which AMP componennt would you like to use?',
      choices: [
        {
          name: 'amp-accordion',
          value: 'amp-accordion'
        },
        {
          name: 'amp-analytics',
          value: 'amp-analytics'
        },
        {
          name: 'amp-anim',
          value: 'amp-anim'
        },
        {
          name: 'amp-audio',
          value: 'amp-audio'
        },
        {
          name: 'amp-brid-player',
          value: 'amp-brid-player'
        },
        {
          name: 'amp-brightcove',
          value: 'amp-brightcove'
        },
        {
          name: 'amp-carousel',
          value: 'amp-carousel'
        },
        {
          name: 'amp-dailymotion',
          value: 'amp-dailymotion'
        },
        {
          name: 'amp-dynamic-css-classes',
          value: 'amp-dynamic-css-classes'
        },
        {
          name: 'amp-facebook',
          value: 'amp-facebook'
        },
        {
          name: 'amp-fit-text',
          value: 'amp-fit-text'
        },
        {
          name: 'amp-font',
          value: 'amp-font'
        },
        {
          name: 'amp-fx-flying-carpet',
          value: 'amp-fx-flying-carpet'
        },
        {
          name: 'amp-iframe',
          value: 'amp-iframe'
        },
        {
          name: 'amp-image-lightbox',
          value: 'amp-image-lightbox'
        },
        {
          name: 'amp-instagram',
          value: 'amp-instagram'
        },
        {
          name: 'amp-install-serviceworker',
          value: 'amp-install-serviceworker'
        },
        {
          name: 'amp-jwplayer',
          value: 'amp-jwplayer'
        },
        {
          name: 'amp-kaltura-player',
          value: 'amp-kaltura-player'
        },
        {
          name: 'amp-lightbox',
          value: 'amp-lightbox'
        },
        {
          name: 'amp-list',
          value: 'amp-list'
        },
        {
          name: 'amp-mustache',
          value: 'amp-mustache'
        },
        {
          name: 'amp-pinterest',
          value: 'amp-pinterest'
        },
        {
          name: 'amp-reach-player',
          value: 'amp-reach-player'
        },
        {
          name: 'amp-sidebar',
          value: 'amp-sidebar'
        },
        {
          name: 'amp-social-share',
          value: 'amp-social-share'
        },
        {
          name: 'amp-soundcloud',
          value: 'amp-soundcloud'
        },
        {
          name: 'amp-springboard-player',
          value: 'amp-springboard-player'
        },
        {
          name: 'amp-twitter',
          value: 'amp-twitter'
        },
        {
          name: 'amp-user-notification',
          value: 'amp-user-notification'
        },
        {
          name: 'amp-vimeo',
          value: 'amp-vimeo'
        },
        {
          name: 'amp-vine',
          value: 'amp-vine'
        },
        {
          name: 'amp-youtube',
          value: 'amp-youtube'
        }
      ]
    }];
    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },
  writing: function () {
    this.fs.copyTpl(this.templatePath('index.html'), this.destinationPath('index.html'), {modules: this.props.modules});
  },
  install: function () {
    this.installDependencies();
  }
});
