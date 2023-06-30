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
          "@angular/core": { singleton: true }, 
          "@angular/common": { singleton: true }, 
          "@angular/common/http": { singleton: true }, 
          "@angular/router": { singleton: true },
          bootstrap: { singleton: true },
          "bootstrap-icons": { singleton: true }
        }
    })
  ],
};
