import pkg from './package.json'
import generateBuildInfo from './node_modules/alpheios-node-build/dist/support/build-info.mjs'
import { execFileSync, execSync } from 'child_process'
import branch from 'git-branch'

const buildDT = Date.now()
const buildInfo = generateBuildInfo(buildDT)
console.log(`Starting a ${buildInfo.name} commit`)

const baseVersion = pkg.version.split('-')[0]
const version = `${baseVersion}-${buildInfo.name}`
console.log(`Setting a package version to ${version}`)
let output
try {
  if (buildInfo.branch !== 'master') {
    console.info(`Installing alpheios-core`)
    output = execSync(`npm install https://github.com/alpheios-project/alpheios-core#${buildInfo.branch}`)
  }
} catch (error) {
  console.error('Components install failed:', error)
  process.exit(1)
}
try {
  const output = execSync(`npm version ${version} --no-git-tag-version --force`, { encoding: 'utf8' })
} catch (e) {
  console.error('Cannot execute npm version:', e)
  process.exit(1)
}

console.log('Rebuilding an embedded library. This may take a while')
try {
  output = execSync(`node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs -m all -M development -p app -c config.mjs -t ${buildDT} && node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs -m all -M production -p app -c config.mjs -t ${buildDT}`)
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
  output = execFileSync('git', ['commit', '-m', `Build ${buildInfo.name}`], { encoding: 'utf8' })
} catch (error) {
  console.error('Commit process failed:', error)
  process.exit(4)
}

console.log(`Tagging with ${buildInfo.name}`)
try {
  output = execSync(`git tag ${buildInfo.name}`, { encoding: 'utf8' })
} catch (error) {
  console.error('Tagging failed:', error)
  process.exit(5)
}
console.log(`Commit has been completed`)
