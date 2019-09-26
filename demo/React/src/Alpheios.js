// Add this file in ./src

const w = window;

const activate = () => {
  if (!w.alpheiosInstance) {
    // the minified version of alpheios-embedded doesn't handle dynamic imports in a way
    // that is consistent with the default react lazy loader and code splitting setup
    // so this example uses the unminified file
    import ('../node_modules/alpheios-embedded/dist/alpheios-embedded.js').then(embedLib => {
      w.AlpheiosEmbed.importDependencies({
        mode: 'cdn'
        }).then(Embedded => {
          w.alpheiosInstance = new Embedded({
            clientId: 'YOUR-ALPHEIOS-CLIENT-ID',
            enabledSelector: '[lang=grc], [lang=lat]'
          })
  	      w.alpheiosInstance.activate();
        }).catch(e => {
          console.error(`Import of Embedded Library dependencies failed: ${e}`)
      }).catch(e => {
        console.error(`Import of Embedded Library failed: ${e}`)
      })
    })
  }
};

export {
  activate,
};
