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

        var prompts = [{
            type: 'checkbox',
            name: 'modules',
            message: 'Which AMP componennt would you like to use?',
            choices: [{
              name: 'amp-accordion',
              value: 'ampAccordion'
          }, {
              name: 'amp-analytics',
              value: 'ampAnalytics'
          }, {
              name: 'amp-anim',
              value: 'ampAnim'
          }, {
              name: 'amp-audio',
              value: 'ampAudio'
          }, {
              name: 'amp-brid-player',
              value: 'ampBridPlayer'
          }, {
              name: 'amp-brightcove',
              value: 'ampBrightcove'
          }, {
              name: 'amp-carousel',
              value: 'ampCarousel'
          }, {
              name: 'amp-dailymotion',
              value: 'ampDailyMotion'
          }, {
              name: 'amp-dynamic-css-classes',
              value: 'ampDynamicCssClasses'
          }, {
              name: 'amp-facebook',
              value: 'ampFacebook'
          }, {
              name: 'amp-fit-text',
              value: 'ampFittext'
          }, {
              name: 'amp-font',
              value: 'ampFont'
          }, {
              name: 'amp-fx-flying-carpet',
              value: 'ampFxFlyingCarpet'
          }, {
              name: 'amp-iframe',
              value: 'ampIframe'
          }, {
              name: 'amp-image-lightbox',
              value: 'ampImageLightbox'
          }, {
              name: 'amp-instagram',
              value: 'ampInstagram'
          }, {
              name: 'amp-install-serviceworker',
              value: 'ampInstallServiceworker'
          }, {
              name: 'amp-jwplayer',
              value: 'ampJwplayer'
          }, {
              name: 'amp-kaltura-player',
              value: 'ampKalturaPlayer'
          }, {
              name: 'amp-lightbox',
              value: 'ampLightbox'
          }, {
              name: 'amp-list',
              value: 'ampList'
          }, {
              name: 'amp-mustache',
              value: 'ampMustache'
          }, {
              name: 'amp-pinterest',
              value: 'ampPinterest'
          }, {
              name: 'amp-reach-player',
              value: 'ampReachPlayer'
          }, {
              name: 'amp-sidebar',
              value: 'ampSidebar'
          }, {
              name: 'amp-social-share',
              value: 'ampSocialShare'
          }, {
              name: 'amp-soundcloud',
              value: 'ampSoundCloud'
          }, {
              name: 'amp-springboard-player',
              value: 'ampSpringboardPlayer'
          }, {
              name: 'amp-twitter',
              value: 'ampTwitter'
          }, {
              name: 'amp-user-notification',
              value: 'ampUserNotification'
          }, {
              name: 'amp-vimeo',
              value: 'ampVimeo'
          }, {
              name: 'amp-vine',
              value: 'ampVine'
          }, {
              name: 'amp-youtube',
              value: 'ampYoutube'
          }]
        }];
        return this.prompt(prompts).then(function (props) {
          // To access props later use this.props.someAnswer;
            this.props = props;
        }.bind(this));
    },

    writing: function () {
        console.log('in writing', this.props.features);
        this.fs.copy(
          this.templatePath('index.html'),
          this.destinationPath('index.html'),
          { features:this.props.features }
        );
    },

    install: function () {
        this.installDependencies();
    }
});
