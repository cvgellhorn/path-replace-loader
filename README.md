# path-replace-loader for webpack

Path replace loader for [webpack](https://webpack.js.org/). Replace a given base path with another path for dynamic module loading. Great for large applications with locally overridable modules.

## Installation

`$ npm install path-replace-loader`

## Usage

[Read more about using loaders](https://webpack.js.org/configuration/module/#module-rules)

#### Configuration

- <b>path:</b> Absolute original path to replace, e.g. __dirname/app/core
- <b>replacePath:</b> Absolute replacement path, e.g. __dirname/app/local

#### webpack config

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

#### Example

Loader tries to load from local directory if file exists app/<b>local</b>/modules/auth

``` js
const authModule = require('app/core/modules/auth');
```

#### Babel + webpack

Make sure to include this in your .babelrc, if you want to use Babel with webpack
``` js
{
    "presets": [
        ["es2015", { "modules": false }]
    ]
}
```


## Release History

- 2.0.0 - Bump packages and add webpack 3 support
- 1.0.0 - Add webpack 2 support
- 0.2.2 - Improve example
- 0.2.1 - Update README
- 0.2.0 - Use dependency to introduce file to webpack in order to make them watchable
- 0.1.0 - Initial release

### [MIT License](http://www.opensource.org/licenses/mit-license.php)
