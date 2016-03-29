'use strict';

module.exports = function plugin(app) {
  if (!app.isApp || app.isRegistered('verb-defaults')) return;

  // Commonly needed middleware
  app.use(require('common-middleware')());

  // Default template engine
  app.engine('*', require('engine-base'), app.option('engineOpts'));
  return plugin;
};

