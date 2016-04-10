var fs = require('fs');
var fileExists = require('file-exists');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
    this.cacheable && this.cacheable();
    var options = loaderUtils.parseQuery(this.query);

    if (this.resourcePath.indexOf(options.path) > -1) {
        var newPath = this.resourcePath.replace(options.path, options.replacePath);
        if (fileExists(newPath)) {
            // Introduce file to webpack in order to make them watchable
            this.dependency(newPath);
            return fs.readFileSync(newPath);
        }
    }

    return source;
};

module.exports.raw = true;
