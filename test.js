'use strict';

require('mocha');
var assert = require('assert');
var defaults = require('./');
var verb = require('verb');
var app;

describe('verb-defaults', function() {
  beforeEach(function() {
    app = verb();
  });

  describe('plugin', function() {
    it('should only register the plugin once', function(cb) {
      var count = 0;
      app.on('plugin', function(name) {
        if (name === 'verb-defaults') {
          count++;
        }
      });
      app.use(defaults);
      app.use(defaults);
      app.use(defaults);
      assert.equal(count, 1);
      cb();
    });
  });

  describe('defaults', function() {
    it('should add defaults', function() {
      app.use(defaults);
      assert(app.engines.hasOwnProperty('.*'));
    });
  });

  describe('generator', function() {
    it('should extend a generator', function(cb) {
      app.use(defaults);

      app.generator('foo', function(foo) {
        assert(foo.engines.hasOwnProperty('.*'));
        cb();
      });
    });

    it('should extend from a generator to a sub-generator', function(cb) {
      app.generator('foo', function(foo) {
        foo.use(defaults);
        assert(foo.engines.hasOwnProperty('.*'));

        foo.generator('bar', function(bar) {
          assert(bar.engines.hasOwnProperty('.*'));
          cb();
        });
      });
    });

    it('should extend from a sub-generator', function(cb) {
      app.generator('foo', function(foo) {
        foo.generator('bar', function(bar) {
          bar.use(defaults);
          assert(bar.engines.hasOwnProperty('.*'));
          cb();
        });
      });
    });

    it('should extend to a nested sub-generator', function(cb) {
      app.use(defaults);

      app.generator('foo', function(foo) {
        foo.engine('aaa', function() {});
        foo.use(function fn() {
          this.engine('bbb', function() {});
          return fn;
        });

        foo.generator('bar', function(bar) {
          bar.generator('baz', function(baz) {
            assert(baz.engines.hasOwnProperty('.*'));
            assert(!baz.engines.hasOwnProperty('.aaa'));
            assert(baz.engines.hasOwnProperty('.bbb'));
            cb();
          });
        });
      });
    });
  });
});
