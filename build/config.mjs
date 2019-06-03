import path from 'path'
const projectRoot = process.cwd()

const webpack = {
  common: {
    entry: './embedded.js',
    // target: 'web',
    /*optimization: {
      splitChunks: {
        chunks: 'all'
        /!*maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `js/npm/${packageName.replace('@', '')}`;
            },
          }
        },*!/
      }
    }*/
  },

  production: {
    output: {
      filename: 'alpheios-embedded.min.js',
      libraryTarget: 'window',
      library: 'Alpheios'
    },
    resolve: {
      alias: {
        'alpheios-data-models': path.join(projectRoot, 'node_modules/alpheios-data-models/dist/alpheios-data-models.min.js'),
        'alpheios-experience': path.join(projectRoot, 'node_modules/alpheios-experience/dist/alpheios-experience.min.js'),
        'alpheios-client-adapters': path.join(projectRoot, 'node_modules/alpheios-client-adapters/dist/alpheios-client-adapters.min.js'),
        'alpheios-wordlist': path.join(projectRoot, 'node_modules/alpheios-wordlist/dist/alpheios-wordlist.min.js'),
        'alpheios-res-client': path.join(projectRoot, 'node_modules/alpheios-res-client/dist/alpheios-res-client.min.js'),
        'alpheios-components': path.join(projectRoot, 'node_modules/alpheios-components/dist/alpheios-components.min.js'),
        'alpheios-inflection-tables': path.join(projectRoot, 'node_modules/alpheios-inflection-tables/dist/alpheios-inflection-tables.min.js')
      }
    }
  },
  development: {
    output: {
      // publicPath are where output chuncks are located, relative to the web page
      // Shall be set to match configuration of production environment
      publicPath: '../dist/',
      filename: 'alpheios-embedded.js',
      // chunkFilename: '[name].js',
      libraryTarget: 'window',
      library: 'Alpheios',
//      libraryTarget: 'window',
//      library: 'Alpheios'
    },
    resolve: {
      alias: {
        'alpheios-data-models': path.join(projectRoot, 'node_modules/alpheios-data-models/dist/alpheios-data-models.js'),
        'alpheios-experience': path.join(projectRoot, 'node_modules/alpheios-experience/dist/alpheios-experience.js'),
        'alpheios-client-adapters': path.join(projectRoot, 'node_modules/alpheios-client-adapters/dist/alpheios-client-adapters.js'),
        'alpheios-wordlist': path.join(projectRoot, 'node_modules/alpheios-wordlist/dist/alpheios-wordlist.js'),
        'alpheios-res-client': path.join(projectRoot, 'node_modules/alpheios-res-client/dist/alpheios-res-client.js'),
        'alpheios-components': path.join(projectRoot, 'node_modules/alpheios-components/dist/alpheios-components.js'),
        'alpheios-inflection-tables': path.join(projectRoot, 'node_modules/alpheios-inflection-tables/dist/alpheios-inflection-tables.js')
      }
    }
  }
}

const sass = {
  tasks: [
    { source: `src/style/style.scss`,
      target: `dist/style/style-embedded.css`,
      style: 'compressed',
      sourceMap: true
    }
  ]
}

export { webpack, sass }
