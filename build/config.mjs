import path from 'path'
const projectRoot = process.cwd()

const webpack = {
  common: {
    entry: './embedded.js',
    externals: { },
    resolve: {
      alias: {
        'alpheios-data-models': path.join(projectRoot, 'node_modules/alpheios-data-models/dist/alpheios-data-models.js'),
        'alpheios-lexicon-client': path.join(projectRoot, 'node_modules/alpheios-lexicon-client/dist/alpheios-lexicon-client.js')
      }
    }
  },

  production: {
    output: {
      filename: 'alpheios-embedded.min.js',
      libraryTarget: 'window',
      library: 'Alpheios'
    }
  },
  development: {
    output: {
      filename: 'alpheios-embedded.js',
      libraryTarget: 'window',
      library: 'Alpheios'
    }
  }
}

const sass = {
  tasks: [
    { source: `src/style/style.scss`,
      target: `dist/style/style.css`,
      style: 'compressed',
      sourceMap: false
    },
    { source: 'src/skins/paideia/style.scss',
      target: 'dist/skins/paideia/style.css',
      style: 'compressed',
      sourceMap: true
    }
  ]
}

export { webpack, sass }
