const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

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
          "@angular/core": { requiredVersion: 'auto' }, 
          "@angular/common": { requiredVersion: 'auto' }, 
          "@angular/common/http": { requiredVersion: 'auto' }, 
          "@angular/router": { requiredVersion: 'auto' },
          bootstrap: { requiredVersion: 'auto' }
        }
    })
  ],
};
