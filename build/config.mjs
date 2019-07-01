import path from 'path'
const projectRoot = process.cwd()

const webpack = {
  common: {
    entry: './embedded.js',
    output: {
      libraryTarget: 'window',
      library: 'AlpheiosEmbed'
    }
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
