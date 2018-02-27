const path = require('path')

module.exports = {
  pathToProjectRoot: '../..',
  styles: { source: 'node_modules/alpheios-components/dist/styles/*', target: 'dist/styles' },
  webpack: {
    common: {
      resolve: {
        alias: {
          // Below will force all imported modules with unresolved dependencies to use a single instance of that dependency
          'alpheios-data-models': path.resolve(__dirname, '../../node_modules/alpheios-data-models/dist/alpheios-data-models.js')
        },
        mainFields: ['moduleExternal', 'module', 'main']
      },
      devtool: 'source-map'
    },
    tasks: [
      {
        context: path.resolve(__dirname, '../../src'),
        entry: './alpheios-embed.js',
        output: {
          path: path.resolve(__dirname, '../../dist'),
          filename: 'alpheios-embed.js',
          libraryTarget: 'window',
          library: 'Alpheios'
        },
        module: {
          rules: [
            {
              test: /\.csv$/,
              use: 'raw-loader'
            },
            {
              test: /\.json$/,
              use: 'raw-loader'
            },
            {
              test: /\.(jpg|png)$/,
              use: [{
                loader: 'url-loader',
                options: {
                  limit: 25000
                }
              }]
            },
            {
              test: /\.svg$/,
              loader: 'vue-svg-loader',
              options: {
                // optional [svgo](https://github.com/svg/svgo) options
                svgo: {
                  plugins: [
                    {removeDoctype: true},
                    {removeComments: true},
                    {removeDimensions: true},
                    {removeUselessStrokeAndFill: false}
                  ]
                }
              }
            },
            {
              test: /\.(htmlf)$/,
              use: {
                loader: 'html-loader'
              }
            },
            {
              test: /\.scss$/,
              use: [{
                loader: 'style-loader'
              }, {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              }, {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }]
            },
            {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                loaders: {
                  scss: 'vue-style-loader!css-loader!sass-loader' // <style lang="scss">
                }
              }
            },
            {
              test: /\.js$/,
              include: path.resolve(__dirname, '../src/content'),
              use: [{
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['es2015', {modules: true}]
                  ]
                }
              }]
            }
          ]
        }
      }
    ]
  }
}
