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
    plugins: [
      // Paths are relative to the output directory, i.e. `dist`
      new copyPlugin([
        {
          from: '../node_modules/alpheios-components/dist/',
          to: 'lib',
          ignore: ['style/**']
        },
          {
            from: '../node_modules/alpheios-components/dist/style',
            to: 'style',
          }
      ],
      {
        logLevel: 'warn'
      }),
    ],
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
