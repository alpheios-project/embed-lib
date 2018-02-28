const webpack = require('./webpack')
const config = require('./config')
const styles = require('./styles')

const webpackTasks = config.webpack.tasks.map(task => Object.assign(task, config.webpack.common))

let taskName
for (let [index, value] of process.argv.entries()) {
  if (index === 2) { taskName = value }
}

if (!taskName || taskName === 'all') {
  // Run all build tasks in a sequence
  styles.run(config.styles)
  webpack.run(webpackTasks)
} else if (taskName === 'styles') {
  styles.run(config.styles)
} else if (taskName === 'webpack') {
  webpack.run(webpackTasks)
}
