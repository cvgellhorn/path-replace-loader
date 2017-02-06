var fs = require('fs');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
    this.cacheable && this.cacheable();

    var callback = this.async();
    var query = loaderUtils.parseQuery(this.query);

    if (this.resourcePath.indexOf(query.path) > -1) {
        var self = this;
        var newPath = this.resourcePath.replace(query.path, query.replacePath);

        fs.readFile(newPath, function(err, data) {
            if (err) {
                // Return original source if file doesn't exist
                if (err.code === 'ENOENT') return callback(null, source);

                // Otherwise throw error
                return callback(err);
            }

            // Introduce file to webpack in order to make them watchable
            self.addDependency(newPath);

            callback(null, data);
        });
    } else {
        callback(null, source);
    }
};

module.exports.raw = true;
