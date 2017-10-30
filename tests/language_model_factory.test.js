"use strict";
import LanguageModelFactory from '../src/language_model_factory.js';
import LatinLanguageModel from '../src/latin_language_model.js';

describe('LanguageModelFactory object', () => {
    "use strict";

    beforeAll(() => {
    });

    test('Should return a Latin model', () => {
      let model = LanguageModelFactory.getLanguageForCode('lat');
      expect(model instanceof LatinLanguageModel).toBeTruthy();
    });
});
