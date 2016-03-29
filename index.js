'use strict';

var path = require('path');
var middleware = require('common-middleware');

module.exports = function plugin(app) {
  if (!isValidInstance(app)) return;

  // Commonly needed middleware
  app.use(middleware());

  // Default template engine
  app.engine('*', require('engine-base'), app.option('engineOpts'));

  // Date helper
  app.helper('date', require('helper-date'));
  return plugin;
};

/**
 * Validate instance
 */

function isValidInstance(app) {
  if (!(app.isApp || app.isGenerator || app.isVerb)) {
    return false;
  }
  if (app.isRegistered('verb-defaults')) {
    return false;
  }
  return true;
}
