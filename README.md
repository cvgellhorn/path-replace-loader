# path-replace-loader for webpack

Path replace loader for [webpack](https://webpack.js.org/). Replace a given base path with another path for dynamic module loading. Great for large applications with locally overridable modules.

## Installation

`$ npm install path-replace-loader`

## Usage

[Read more about using loaders](https://webpack.js.org/configuration/module/#module-rules)

#### Configuration

- <b>path:</b> Absolute original path to replace, e.g. __dirname/app/core
- <b>replacePath:</b> Absolute replacement path, e.g. __dirname/app/local

#### webpack 2

``` js
module.exports = {
  module: {
    rules: [
      {
          test: /\.js$/,
          loader: 'path-replace-loader',
          exclude: /(node_modules)/,
          options: {
              path: 'ORIGINAL_PATH',
              replacePath: 'REPLACE_PATH'
          }
      }
    ]
  }
};
```

#### webpack 1

``` js
module.exports = {
  module: {
    loaders: [
      {
          test: /\.js$/,
          loader: 'path-replace-loader',
          exclude: /(node_modules)/,
          query: {
              path: 'ORIGINAL_PATH',
              replacePath: 'REPLACE_PATH'
          }
      }
    ]
  }
};
```

#### Example

Loader tries to load from local directory if file exists app/<b>local</b>/modules/auth

``` js
import authModule from 'app/core/modules/auth';
```

Or with webpack 1

``` js
var authModule = require('app/core/modules/auth');
```

#### Babel + webpack 2

Make sure to include this in your .babelrc, if you want to use Babel with webpack 2
``` js
{
    "presets": [
        ["es2015", { "modules": false }]
    ]
}
```


## Release History

- 1.0.0 - Add webpack 2 support
- 0.2.2 - Improve example
- 0.2.1 - Update README
- 0.2.0 - Use dependency to introduce file to webpack in order to make them watchable
- 0.1.0 - Initial release

### [MIT License](http://www.opensource.org/licenses/mit-license.php)
