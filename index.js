const fs = require('fs');
const loaderUtils = require('loader-utils');

module.exports = function(source) {
    this.cacheable && this.cacheable();

    const callback = this.async();
    const options = loaderUtils.getOptions(this);

    if (this.resourcePath.indexOf(options.path) > -1) {
        const newPath = this.resourcePath.replace(options.path, options.replacePath);

        fs.readFile(newPath, (err, data) => {
            if (err) {
                // Return original source if file doesn't exist
                if (err.code === 'ENOENT') return callback(null, source);

                // Otherwise throw error
                return callback(err);
            }

            // Introduce file to webpack in order to make them watchable
            this.addDependency(newPath);

            callback(null, data);
        });
    } else {
        callback(null, source);
    }
};

module.exports.raw = true;
