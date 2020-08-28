# Alpheios Embedded Library Build Instructions

## Prerequisites:

  * Node 14.1.0 or higher, npm 6.14.6 or higher

## Developer Build

```
npm install && npm update
npm run build
npm run dev
```

The last step runs a local web server on port 8888. Load the sample.html file
at the root of the directory. Changes made to the code will be dynamically rebuilt.


## QA Build

1. merge the `master` branch to the `qa` branch and push to GitHub
2. GitHub Actions will execute the release.yml workflow to inject the build number,
install the `qa` branch of the alpheios-components library, build the distribution
files, tag a pre-release in GitHub and publish the alpheios-embedded package to
npm tagged as `@qa`


## Production Build and Version

1. merge the `qa` branch to the `production` branch (but don't push it)
2. Edit version in the package.json.
3. Commit and push the change to GitHub.
4. GitHub Actions will execute the release.yml workflow to inject the build number,
install the `production` branch of the alpheios-components library, build the distribution
files, tag a pre-release in GitHub and publish the alpheios-embedded package to
npm tagged as `@rc`
5. When ready to release the code, manually tag the npm package as `@latest` using
`npm --dist-tag` and remove the "Pre-release" flag from the Release in GitHub.
6. Merge the version and any other code changes from `production` back to `master`
