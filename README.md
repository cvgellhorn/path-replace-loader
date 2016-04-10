# path-replace-loader for webpack

Path replace loader for [webpack](http://webpack.github.io/). Replace a given base path with another path for dynamic module loading. Great for large applications with locally overridable modules.

## Installation

`npm install path-replace-loader`

## Usage

[Read more about using loaders](http://webpack.github.io/docs/using-loaders.html)

#### Configuration

- <b>path:</b> Absolute original path to replace, e.g __dirname/app/core
- <b>replacePath:</b> Absolute replacement path, e.g __dirname/app/local

#### webpack config example

``` js
module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loader: 'path-replace?path=ORIGINAL_PATH&replacePath=REPLACE_PATH' },
    ]
  }
};
```

#### Example

``` js
var authModule = require('app/core/modules/auth');
// Loader tries to load from local directory instead app/local/modules/auth
```

## Release History

- 0.2.0 - Use dependency to introduce file to webpack in order to make them watchable
- 0.1.0 - Initial release

## [MIT License](http://www.opensource.org/licenses/mit-license.php)
