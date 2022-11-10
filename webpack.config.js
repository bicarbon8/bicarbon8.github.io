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
          "@angular/core": { singleton: true, eager: true, requiredVersion: '^13.0.0', version: deps["@angular/core"] }, 
          "@angular/common": { singleton: true, eager: true, requiredVersion: '^13.0.0', version: deps["@angular/common"] }, 
          "@angular/common/http": { singleton: true, eager: true, requiredVersion: '^13.0.0', version: deps["@angular/common/http"] }, 
          "@angular/router": { singleton: true, eager: true, requiredVersion: '^13.0.0', version: deps["@angular/router"] },
          bootstrap: { singleton: true, eager: true, requiredVersion: '^5.0.0', version: deps.bootstrap },
          "bootstrap-icons": { singleton: true, eager: true, requiredVersion: '^1.0.0', version: deps["bootstrap-icons"] }
        }
    })
  ],
};
