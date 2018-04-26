const path = require('path')
const projectRoot = process.cwd()
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  styles: { source: 'node_modules/alpheios-components/dist/styles/*', target: 'dist/styles' },
  webpack: {
    common: {
      resolve: {
        mainFields: ['moduleExternal', 'module', 'main']
      }
    },
    tasks: [
      {
        mode: 'production',
        context: path.join(projectRoot, 'src/'),
        entry: './embedded.js',
        externals: [],
        output: {
          path: path.join(projectRoot, 'dist/'),
          filename: 'alpheios-embedded.min.js',
          libraryTarget: 'window',
          library: 'Alpheios'
        },
        resolve: {
          alias: {
            'alpheios-data-models': path.join(projectRoot, 'node_modules/alpheios-data-models/dist/alpheios-data-models.min.js')
          }
        },
        optimization: {
          minimizer: [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
              sourceMap: true // set to true if you want JS source maps
            })
          ]
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
    ],
    devTasks: [
      {
        mode: 'development',
        context: path.join(projectRoot, 'src/'),
        entry: './embedded.js',
        externals: [],
        output: {
          path: path.join(projectRoot, 'dist/'),
          filename: 'alpheios-embedded.js',
          libraryTarget: 'window',
          library: 'Alpheios'
        },
        devtool: 'source-map',
        resolve: {
          alias: {
            'alpheios-data-models': path.join(projectRoot, 'node_modules/alpheios-data-models/dist/alpheios-data-models.js')
          }
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
