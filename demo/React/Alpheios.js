// Add this file in ./src

const w = window;

const activate = () => {
  if (!w.alpheiosInstance) {
    w.alpheiosInstance = new w.Alpheios.Embedded({
      clientId: 'YOUR-ALPHEIOS-CLIENT-ID',
      enabledSelector: '[lang=grc], [lang=lat]',
    });
  }

  w.alpheiosInstance.activate();
};

export {
  activate,
};
