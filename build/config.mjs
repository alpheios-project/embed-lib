import path from 'path'
import copyPlugin from 'copy-webpack-plugin'
const projectRoot = process.cwd()

const webpack = {
  common: {
    entry: './embedded.js',
    output: {
      libraryTarget: 'window',
      library: 'AlpheiosEmbed'
    },
    resolve: {
      alias: {
        'alpheios-components': path.join(projectRoot, 'node_modules/alpheios-core/packages/components/dist/alpheios-components.js')
      }
    },
    plugins: [
      // Paths are relative to the output directory, i.e. `dist`
      new copyPlugin({
        patterns: [
          {
            from: '../node_modules/alpheios-core/packages/components/dist/',
            to: 'lib',
            globOptions: {
              ignore: [
                'style/**'
              ]
            }
          },
          {
            from: '../node_modules/alpheios-core/packages/data-models/dist/',
            to: 'lib'
          },
          {
            from: '../node_modules/alpheios-core/packages/components/dist/style',
            to: 'style',
          }
        ]
        })
    ]
  },

  production: {
    output: {
      filename: 'alpheios-embedded.min.js'
    }
  },
  development: {
    output: {
      filename: 'alpheios-embedded.js'
    }
  }
}

export { webpack }
