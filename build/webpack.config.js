const path = require('path');
const projectRoot = process.cwd()
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
  return {
    devtool: 'cheap-module-source-map',
    entry: './src/embedded.js',
    output: {
      filename: 'alpheios-embedded.js',
      path: path.resolve(projectRoot, 'dist'),
      libraryTarget: 'window',
      library: 'AlpheiosEmbed'
    },
    resolve: {
      alias: {
        'alpheios-components$': path.join(projectRoot, 'node_modules/alpheios-core/packages/components/dist/alpheios-components.min.js')
      }
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/alpheios-core/packages/components/dist/',
            to: 'lib',
            globOptions: {
              ignore: [
                'style/**'
              ]
            }
          },
          {
            from: 'node_modules/alpheios-core/packages/components/dist/style',
            to: 'style',
          },
          {
            from: 'src/auth0',
            to: 'auth0',
          }
        ]
      }),
    ]
  }
};
