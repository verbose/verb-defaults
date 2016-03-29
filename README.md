# verb-defaults [![NPM version](https://img.shields.io/npm/v/verb-defaults.svg?style=flat)](https://www.npmjs.com/package/verb-defaults) [![NPM downloads](https://img.shields.io/npm/dm/verb-defaults.svg?style=flat)](https://npmjs.org/package/verb-defaults) [![Build Status](https://img.shields.io/travis/verbose/verb-defaults.svg?style=flat)](https://travis-ci.org/verbose/verb-defaults)

> Plugin for setting basic defaults in verb projects.

You might also be interested in [generate](https://github.com/generate/generate).

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install verb-defaults --save
```

## Usage

This plugin can be used in a `verbfile.js` or a globally installed verb generator.

```js
var defaults = require('verb-defaults');

// register the plugin
app.use(defaults());
```

## Related projects

You might also be interested in these projects:

* [assemble](https://www.npmjs.com/package/assemble): Assemble is a powerful, extendable and easy to use static site generator for node.js. Used… [more](https://www.npmjs.com/package/assemble) | [homepage](https://github.com/assemble/assemble)
* [generate](https://www.npmjs.com/package/generate): Fast, composable, highly extendable project generator with a user-friendly and expressive API. | [homepage](https://github.com/generate/generate)
* [verb](https://www.npmjs.com/package/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used… [more](https://www.npmjs.com/package/verb) | [homepage](https://github.com/verbose/verb)
* [verb-collections](https://www.npmjs.com/package/verb-collections): Verb plugin that adds includes, layouts, badges and docs template collections. Can be used with… [more](https://www.npmjs.com/package/verb-collections) | [homepage](https://github.com/verbose/verb-collections)
* [verb-repo-data](https://www.npmjs.com/package/verb-repo-data): Verb plugin that repository and package.json data to the context for rendering templates. | [homepage](https://github.com/jonschlinkert/verb-repo-data)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/verb-defaults/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/verbose/verb-defaults/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v, on March 29, 2016._