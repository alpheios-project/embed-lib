import pkg from './package.json'
import generateBuildNumber from './node_modules/alpheios-node-build/dist/support/build-number.mjs'
import { execFileSync, execSync } from 'child_process'

const build = generateBuildNumber()
console.log(`Starting a ${build} commit`)

const version = `${pkg.version}-${build}`
console.log(`Setting a package version to ${version}`)
let output
try {
  const output = execSync(`npm version ${version} --no-git-tag-version --force`, { encoding: 'utf8' })
} catch (e) {
  console.error('Cannot execute npm version:', e)
  process.exit(1)
}

console.log('Rebuilding an embedded library. This may take a while')
try {
  output = execSync(`node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs -m all -M development -p app -c config.mjs -b ${build} && node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs -m all -M production -p app -c config.mjs -b ${build}`)
} catch (error) {
  console.error('Build process failed:', error)
  process.exit(2)
}
console.log('Rebuilding of an embedded library has been completed')

console.info('Committing distributables')
try {
  output = execFileSync('git', ['add', 'package*.json', 'dist'], { encoding: 'utf8' })
} catch (error) {
  console.error('Commit process failed:', error)
  process.exit(3)
}
try {
  output = execFileSync('git', ['commit', '-m', `Build ${build}`], { encoding: 'utf8' })
} catch (error) {
  console.error('Commit process failed:', error)
  process.exit(4)
}

console.log(`Tagging with ${build}`)
try {
  output = execSync(`git tag ${build}`, { encoding: 'utf8' })
} catch (error) {
  console.error('Tagging failed:', error)
  process.exit(5)
}
console.log(`Commit has been completed`)
