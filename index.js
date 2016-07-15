'use strict';

var isValid = require('is-valid-app');

module.exports = function plugin(app) {
  if (!isValid(app, 'verb-defaults')) return;

  // Commonly needed middleware
  app.use(require('common-middleware')());

  // Default template engine
  app.engine('*', require('engine-base'), app.option('engineOpts'));
  return plugin;
};

