// Add this file in ./src

const w = window;

const activate = () => {
  if (w && w.navigator && w.navigator.userAgent !== 'ReactSnap') {
    if (!w.alpheiosInstance) {
      w.alpheiosInstance = new w.Alpheios.Embedded({
        clientId: process.env.REACT_APP_ALPHEIOS_KEY,
        enabledSelector: '[lang=grc], [lang=lat]',
      });
    }

    w.alpheiosInstance.activate();
  }
};

export {
  activate,
};