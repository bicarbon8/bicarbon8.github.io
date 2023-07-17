const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;

module.exports = {
  output: {
    publicPath: "auto"
  },
  performance: {
    hints: false,
    maxEntrypointSize: 5512000,
    maxAssetSize: 5512000
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'bicarbon8GithubIo',
      shared: {
        "@angular/core": { requiredVersion: '^13.0.0' },
        "@angular/common": { requiredVersion: '^13.0.0' },
        "@angular/common/http": { requiredVersion: '^13.0.0' },
        "@angular/router": { requiredVersion: '^13.0.0' },
        bootstrap: { requiredVersion: '^5.0.0' },
        "bootstrap-icons": { requiredVersion: '^1.0.0' }
      }
    })
  ],
};
