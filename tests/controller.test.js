const t = require('../dist/alpheios-wordsvc.js');

describe('WordSvc object', () => {
    "use strict";

    let svc = {};

    beforeAll(() => {
        // Create a test environment
        let anchor = document.createElement("div");
        anchor.setAttribute("id","myanchor");
        anchor.setAttribute("data-selector",".alpheios-enabled");
        anchor.setAttribute("data-trigger",".click");
        document.querySelector("body").appendChild(anchor);
        svc = new t(["#myanchor"],document);
    });

    test('Should be initialized properly', () => {
        expect(svc.anchor).toEqual(['#myanchor']);
        expect(svc.doc).toEqual(document);
    });
});
