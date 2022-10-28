const config = require('./webpack.config');

module.exports = {
    ...config,
    devtool: undefined,
    mode: "production"
}
