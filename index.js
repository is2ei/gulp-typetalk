const gutil = require("gulp-util"),
    https = require("https");

module.exports = function typetalk (opts) {
    if (!opts.token) {
        throw new gutil.PluginError("gulp-typetalk", "token is missing!");
    }
    if (!opts.topicId) {
        throw new gutil.PluginError("gulp-typetalk", "topic id is required!");
    }
    if (!opts.message) {
        throw new gutil.PluginError("gulp-typetalk", "message is missing!");
    }

    const content = JSON.stringify({
            "message": opts.message
        }),

        options = {
            "headers": {
                "Content-Length": content.length,
                "Content-Type": "application/json",
                "X-Typetalk-Token": opts.token
            },
            "hostname": "typetalk.com",
            "method": "POST",
            "path": `/api/v1/topics/${opts.topicId}`,
            "port": 443
        },

        request = https.request(options, () => {
            // Do nothing.
        });

    request.write(content);
    request.end();
};
