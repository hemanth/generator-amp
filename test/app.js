'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
describe('generator-amp:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      modules: [
        'amp-accordion',
        'amp-vine'
      ]
    }).toPromise();
  });
  it('creates files', function () {
    assert.file(['index.html']);
  });
});
