window["Alpheios"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./embedded.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../components/dist/alpheios-components.js":
/*!***********************************************************************!*\
  !*** C:/uds/projects/alpheios/components/dist/alpheios-components.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../components/dist/style/style.min.css":
/*!********************************************************************!*\
  !*** C:/uds/projects/alpheios/components/dist/style/style.min.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../node_modules/alpheios-data-models/dist/alpheios-data-models.js":
/*!*************************************************************************!*\
  !*** ../node_modules/alpheios-data-models/dist/alpheios-data-models.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./driver.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/uuid/lib/bytesToUuid.js":
/*!***********************************************!*\
  !*** ../node_modules/uuid/lib/bytesToUuid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../node_modules/uuid/lib/rng-browser.js":
/*!***********************************************!*\
  !*** ../node_modules/uuid/lib/rng-browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../node_modules/uuid/v4.js":
/*!**********************************!*\
  !*** ../node_modules/uuid/v4.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./arabic_language_model.js":
/*!**********************************!*\
  !*** ./arabic_language_model.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArabicLanguageModel; });
/* harmony import */ var _language_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language_model.js */ "./language_model.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./constants.js");
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature.js */ "./feature.js");




let typeFeatures = new Map()
let typeFeaturesInitialized = false

/**
 * @class  LatinLanguageModel is the lass for Latin specific behavior
 */
class ArabicLanguageModel extends _language_model_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get languageID () { return _constants_js__WEBPACK_IMPORTED_MODULE_1__["LANG_ARABIC"] }
  static get languageCode () { return _constants_js__WEBPACK_IMPORTED_MODULE_1__["STR_LANG_CODE_ARA"] }
  static get languageCodes () { return [_constants_js__WEBPACK_IMPORTED_MODULE_1__["STR_LANG_CODE_ARA"], _constants_js__WEBPACK_IMPORTED_MODULE_1__["STR_LANG_CODE_AR"]] }
  static get contextForward () { return 0 }
  static get contextBackward () { return 0 }
  static get direction () { return _constants_js__WEBPACK_IMPORTED_MODULE_1__["LANG_DIR_RTL"] }
  static get baseUnit () { return _constants_js__WEBPACK_IMPORTED_MODULE_1__["LANG_UNIT_WORD"] }

  static get typeFeatures () {
    if (!typeFeaturesInitialized) { this.initTypeFeatures() }
    return typeFeatures
  }

  static initTypeFeatures () {
    for (const featureName of this.featureNames) {
      typeFeatures.set(featureName, this.getFeature(featureName))
    }
    typeFeaturesInitialized = true
  }

  /**
   * Check to see if this language tool can produce an inflection table display
   * for the current node
   */
  static canInflect (node) {
    return false
  }

  /**
   * @override LanguageModel#alternateWordEncodings
   */
  static alternateWordEncodings (word, preceding = null, following = null, encoding = null) {
    // tanwin (& tatweel) - drop FATHATAN, DAMMATAN, KASRATAN, TATWEEL
    let tanwin = word.replace(/[\u{064B}\u{064C}\u{064D}\u{0640}]/ug, '')
    // hamzas - replace ALEF WITH MADDA ABOVE, ALEF WITH HAMZA ABOVE/BELOW with ALEF
    let hamza = tanwin.replace(/[\u{0622}\u{0623}\u{0625}]/ug, '\u{0627}')
    // harakat - drop FATHA, DAMMA, KASRA, SUPERSCRIPT ALEF, ALEF WASLA
    let harakat = hamza.replace(/[\u{064E}\u{064F}\u{0650}\u{0670}\u{0671}]/ug, '')
    // shadda
    let shadda = harakat.replace(/\u{0651}/ug, '')
    // sukun
    let sukun = shadda.replace(/\u{0652}/ug, '')
    // alef
    let alef = sukun.replace(/\u{0627}/ug, '')
    let alternates = new Map([
      ['tanwin', tanwin],
      ['hamza', hamza],
      ['harakat', harakat],
      ['shadda', shadda],
      ['sukun', sukun],
      ['alef', alef]
    ])
    if (encoding !== null && alternates.has(encoding)) {
      return [alternates.get(encoding)]
    } else {
      return Array.from(alternates.values())
    }
  }

  /**
   * Get a list of valid puncutation for this language
   * @returns {String} a string containing valid puncutation symbols
   */
  static getPunctuation () {
    return ".,;:!?'\"(){}\\[\\]<>/\\\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u201C\u201D\u0387\u00B7\n\r"
  }

  /**
   * Aggregate inflections for display according to language model characteristics
   */
  static aggregateInflectionsForDisplay (inflections) {
    // TODO at some point we might want to be able to check the provider in here
    // because this really only applies to the specifics of the Aramorph parser
    let aggregated = []
    let aggregates = { [_constants_js__WEBPACK_IMPORTED_MODULE_1__["POFS_NOUN"]]: [], [_constants_js__WEBPACK_IMPORTED_MODULE_1__["POFS_ADJECTIVE"]]: [], [_constants_js__WEBPACK_IMPORTED_MODULE_1__["POFS_NOUN_PROPER"]]: [] }
    for (let infl of inflections) {
      if (infl[_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.morph] && infl[_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.morph].value.match(/ADJ[uaiNK]/)) {
        aggregates[_constants_js__WEBPACK_IMPORTED_MODULE_1__["POFS_ADJECTIVE"]].push(infl)
      } else if (infl[_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.morph] && infl[_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.morph].value.match(/NOUN[uaiNK]/)) {
        aggregates[_constants_js__WEBPACK_IMPORTED_MODULE_1__["POFS_NOUN"]].push(infl)
      } else if (infl[_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.morph] && infl[_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.morph].value.match(/NOUN_PROP[uaiNK]/)) {
        aggregates[_constants_js__WEBPACK_IMPORTED_MODULE_1__["POFS_NOUN_PROPER"]].push(infl)
      } else {
        // we are also going to keep the examples out of the display for now
        infl.example = null
        aggregated.push(infl)
      }
    }
    for (let type of Object.keys(aggregates)) {
      let base = aggregated.filter((i) => i[_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.part].value === type)
      if (base.length !== 1) {
        // if we don't have the base form then we don't really know what to do here
        // so just put the inflection back in the ones available for display
        aggregated.push(...aggregates[type])
      }
      // we may decide we want to keep the extra suffix and morph information
      // from the alternate inflections but for now we just will drop it from
      // the inflections that are displayed
    }
    return aggregated
  }
}


/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: LANG_UNIT_WORD, LANG_UNIT_CHAR, LANG_DIR_LTR, LANG_DIR_RTL, LANG_UNDEFINED, LANG_LATIN, LANG_GREEK, LANG_ARABIC, LANG_PERSIAN, LANG_GEEZ, STR_LANG_CODE_UNDEFINED, STR_LANG_CODE_LAT, STR_LANG_CODE_LA, STR_LANG_CODE_GRC, STR_LANG_CODE_ARA, STR_LANG_CODE_AR, STR_LANG_CODE_FAS, STR_LANG_CODE_PER, STR_LANG_CODE_FA_IR, STR_LANG_CODE_FA, STR_LANG_CODE_GEZ, POFS_ADJECTIVE, POFS_ADVERB, POFS_ADVERBIAL, POFS_ARTICLE, POFS_CONJUNCTION, POFS_EXCLAMATION, POFS_INTERJECTION, POFS_NOUN, POFS_NOUN_PROPER, POFS_NUMERAL, POFS_PARTICLE, POFS_PREFIX, POFS_PREPOSITION, POFS_PRONOUN, POFS_SUFFIX, POFS_GERUNDIVE, POFS_SUPINE, POFS_VERB, POFS_VERB_PARTICIPLE, GEND_MASCULINE, GEND_FEMININE, GEND_NEUTER, GEND_COMMON, GEND_ANIMATE, GEND_INANIMATE, GEND_PERSONAL_MASCULINE, GEND_ANIMATE_MASCULINE, GEND_INANIMATE_MASCULINE, COMP_POSITIVE, COMP_COMPARITIVE, COMP_SUPERLATIVE, CASE_ABESSIVE, CASE_ABLATIVE, CASE_ABSOLUTIVE, CASE_ACCUSATIVE, CASE_ADDIRECTIVE, CASE_ADELATIVE, CASE_ADESSIVE, CASE_ADVERBIAL, CASE_ALLATIVE, CASE_ANTESSIVE, CASE_APUDESSIVE, CASE_AVERSIVE, CASE_BENEFACTIVE, CASE_CARITIVE, CASE_CAUSAL, CASE_CAUSAL_FINAL, CASE_COMITATIVE, CASE_DATIVE, CASE_DELATIVE, CASE_DIRECT, CASE_DISTRIBUTIVE, CASE_DISTRIBUTIVE_TEMPORAL, CASE_ELATIVE, CASE_ERGATIVE, CASE_ESSIVE, CASE_ESSIVE_FORMAL, CASE_ESSIVE_MODAL, CASE_EQUATIVE, CASE_EVITATIVE, CASE_EXESSIVE, CASE_FINAL, CASE_FORMAL, CASE_GENITIVE, CASE_ILLATIVE, CASE_INELATIVE, CASE_INESSIVE, CASE_INSTRUCTIVE, CASE_INSTRUMENTAL, CASE_INSTRUMENTAL_COMITATIVE, CASE_INTRANSITIVE, CASE_LATIVE, CASE_LOCATIVE, CASE_MODAL, CASE_MULTIPLICATIVE, CASE_NOMINATIVE, CASE_PARTITIVE, CASE_PEGATIVE, CASE_PERLATIVE, CASE_POSSESSIVE, CASE_POSTELATIVE, CASE_POSTDIRECTIVE, CASE_POSTESSIVE, CASE_POSTPOSITIONAL, CASE_PREPOSITIONAL, CASE_PRIVATIVE, CASE_PROLATIVE, CASE_PROSECUTIVE, CASE_PROXIMATIVE, CASE_SEPARATIVE, CASE_SOCIATIVE, CASE_SUBDIRECTIVE, CASE_SUBESSIVE, CASE_SUBELATIVE, CASE_SUBLATIVE, CASE_SUPERDIRECTIVE, CASE_SUPERESSIVE, CASE_SUPERLATIVE, CASE_SUPPRESSIVE, CASE_TEMPORAL, CASE_TERMINATIVE, CASE_TRANSLATIVE, CASE_VIALIS, CASE_VOCATIVE, MOOD_ADMIRATIVE, MOOD_COHORTATIVE, MOOD_CONDITIONAL, MOOD_DECLARATIVE, MOOD_DUBITATIVE, MOOD_ENERGETIC, MOOD_EVENTIVE, MOOD_GENERIC, MOOD_GERUNDIVE, MOOD_HYPOTHETICAL, MOOD_IMPERATIVE, MOOD_INDICATIVE, MOOD_INFERENTIAL, MOOD_INFINITIVE, MOOD_INTERROGATIVE, MOOD_JUSSIVE, MOOD_NEGATIVE, MOOD_OPTATIVE, MOOD_PARTICIPLE, MOOD_PRESUMPTIVE, MOOD_RENARRATIVE, MOOD_SUBJUNCTIVE, MOOD_SUPINE, NUM_SINGULAR, NUM_PLURAL, NUM_DUAL, NUM_TRIAL, NUM_PAUCAL, NUM_SINGULATIVE, NUM_COLLECTIVE, NUM_DISTRIBUTIVE_PLURAL, NRL_CARDINAL, NRL_ORDINAL, NRL_DISTRIBUTIVE, NURL_NUMERAL_ADVERB, ORD_1ST, ORD_2ND, ORD_3RD, ORD_4TH, ORD_5TH, ORD_6TH, ORD_7TH, ORD_8TH, ORD_9TH, TENSE_AORIST, TENSE_FUTURE, TENSE_FUTURE_PERFECT, TENSE_IMPERFECT, TENSE_PAST_ABSOLUTE, TENSE_PERFECT, TENSE_PLUPERFECT, TENSE_PRESENT, VKIND_TO_BE, VKIND_COMPOUNDS_OF_TO_BE, VKIND_TAKING_ABLATIVE, VKIND_TAKING_DATIVE, VKIND_TAKING_GENITIVE, VKIND_TRANSITIVE, VKIND_INTRANSITIVE, VKIND_IMPERSONAL, VKIND_DEPONENT, VKIND_SEMIDEPONENT, VKIND_PERFECT_DEFINITE, VOICE_ACTIVE, VOICE_PASSIVE, VOICE_MEDIOPASSIVE, VOICE_IMPERSONAL_PASSIVE, VOICE_MIDDLE, VOICE_ANTIPASSIVE, VOICE_REFLEXIVE, VOICE_RECIPROCAL, VOICE_CAUSATIVE, VOICE_ADJUTATIVE, VOICE_APPLICATIVE, VOICE_CIRCUMSTANTIAL, VOICE_DEPONENT, TYPE_IRREGULAR, TYPE_REGULAR, CLASS_PERSONAL, CLASS_REFLEXIVE, CLASS_POSSESSIVE, CLASS_DEMONSTRATIVE, CLASS_RELATIVE, CLASS_INTERROGATIVE, CLASS_GENERAL_RELATIVE, CLASS_INDEFINITE, CLASS_INTENSIVE, CLASS_RECIPROCAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_UNIT_WORD", function() { return LANG_UNIT_WORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_UNIT_CHAR", function() { return LANG_UNIT_CHAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_DIR_LTR", function() { return LANG_DIR_LTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_DIR_RTL", function() { return LANG_DIR_RTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_UNDEFINED", function() { return LANG_UNDEFINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_LATIN", function() { return LANG_LATIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_GREEK", function() { return LANG_GREEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_ARABIC", function() { return LANG_ARABIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_PERSIAN", function() { return LANG_PERSIAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_GEEZ", function() { return LANG_GEEZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_LANG_CODE_UNDEFINED", function() { return STR_LANG_CODE_UNDEFINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_LANG_CODE_LAT", function() { return STR_LANG_CODE_LAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_LANG_CODE_LA", function() { return STR_LANG_CODE_LA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_LANG_CODE_GRC", function() { return STR_LANG_CODE_GRC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_LANG_CODE_ARA", function() { return STR_LANG_CODE_ARA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_LANG_CODE_AR", function() { return STR_LANG_CODE_AR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_LANG_CODE_FAS", function() { return STR_LANG_CODE_FAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_LANG_CODE_PER", function() { return STR_LANG_CODE_PER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_LANG_CODE_FA_IR", function() { return STR_LANG_CODE_FA_IR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_LANG_CODE_FA", function() { return STR_LANG_CODE_FA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_LANG_CODE_GEZ", function() { return STR_LANG_CODE_GEZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_ADJECTIVE", function() { return POFS_ADJECTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_ADVERB", function() { return POFS_ADVERB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_ADVERBIAL", function() { return POFS_ADVERBIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_ARTICLE", function() { return POFS_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_CONJUNCTION", function() { return POFS_CONJUNCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_EXCLAMATION", function() { return POFS_EXCLAMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_INTERJECTION", function() { return POFS_INTERJECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_NOUN", function() { return POFS_NOUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_NOUN_PROPER", function() { return POFS_NOUN_PROPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_NUMERAL", function() { return POFS_NUMERAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_PARTICLE", function() { return POFS_PARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_PREFIX", function() { return POFS_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_PREPOSITION", function() { return POFS_PREPOSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_PRONOUN", function() { return POFS_PRONOUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_SUFFIX", function() { return POFS_SUFFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_GERUNDIVE", function() { return POFS_GERUNDIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_SUPINE", function() { return POFS_SUPINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_VERB", function() { return POFS_VERB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POFS_VERB_PARTICIPLE", function() { return POFS_VERB_PARTICIPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEND_MASCULINE", function() { return GEND_MASCULINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEND_FEMININE", function() { return GEND_FEMININE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEND_NEUTER", function() { return GEND_NEUTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEND_COMMON", function() { return GEND_COMMON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEND_ANIMATE", function() { return GEND_ANIMATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEND_INANIMATE", function() { return GEND_INANIMATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEND_PERSONAL_MASCULINE", function() { return GEND_PERSONAL_MASCULINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEND_ANIMATE_MASCULINE", function() { return GEND_ANIMATE_MASCULINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEND_INANIMATE_MASCULINE", function() { return GEND_INANIMATE_MASCULINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMP_POSITIVE", function() { return COMP_POSITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMP_COMPARITIVE", function() { return COMP_COMPARITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMP_SUPERLATIVE", function() { return COMP_SUPERLATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ABESSIVE", function() { return CASE_ABESSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ABLATIVE", function() { return CASE_ABLATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ABSOLUTIVE", function() { return CASE_ABSOLUTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ACCUSATIVE", function() { return CASE_ACCUSATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ADDIRECTIVE", function() { return CASE_ADDIRECTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ADELATIVE", function() { return CASE_ADELATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ADESSIVE", function() { return CASE_ADESSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ADVERBIAL", function() { return CASE_ADVERBIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ALLATIVE", function() { return CASE_ALLATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ANTESSIVE", function() { return CASE_ANTESSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_APUDESSIVE", function() { return CASE_APUDESSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_AVERSIVE", function() { return CASE_AVERSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_BENEFACTIVE", function() { return CASE_BENEFACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_CARITIVE", function() { return CASE_CARITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_CAUSAL", function() { return CASE_CAUSAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_CAUSAL_FINAL", function() { return CASE_CAUSAL_FINAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_COMITATIVE", function() { return CASE_COMITATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_DATIVE", function() { return CASE_DATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_DELATIVE", function() { return CASE_DELATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_DIRECT", function() { return CASE_DIRECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_DISTRIBUTIVE", function() { return CASE_DISTRIBUTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_DISTRIBUTIVE_TEMPORAL", function() { return CASE_DISTRIBUTIVE_TEMPORAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ELATIVE", function() { return CASE_ELATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ERGATIVE", function() { return CASE_ERGATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ESSIVE", function() { return CASE_ESSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ESSIVE_FORMAL", function() { return CASE_ESSIVE_FORMAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ESSIVE_MODAL", function() { return CASE_ESSIVE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_EQUATIVE", function() { return CASE_EQUATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_EVITATIVE", function() { return CASE_EVITATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_EXESSIVE", function() { return CASE_EXESSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_FINAL", function() { return CASE_FINAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_FORMAL", function() { return CASE_FORMAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_GENITIVE", function() { return CASE_GENITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_ILLATIVE", function() { return CASE_ILLATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_INELATIVE", function() { return CASE_INELATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_INESSIVE", function() { return CASE_INESSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_INSTRUCTIVE", function() { return CASE_INSTRUCTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_INSTRUMENTAL", function() { return CASE_INSTRUMENTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_INSTRUMENTAL_COMITATIVE", function() { return CASE_INSTRUMENTAL_COMITATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_INTRANSITIVE", function() { return CASE_INTRANSITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_LATIVE", function() { return CASE_LATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_LOCATIVE", function() { return CASE_LOCATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_MODAL", function() { return CASE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_MULTIPLICATIVE", function() { return CASE_MULTIPLICATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_NOMINATIVE", function() { return CASE_NOMINATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_PARTITIVE", function() { return CASE_PARTITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_PEGATIVE", function() { return CASE_PEGATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_PERLATIVE", function() { return CASE_PERLATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_POSSESSIVE", function() { return CASE_POSSESSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_POSTELATIVE", function() { return CASE_POSTELATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_POSTDIRECTIVE", function() { return CASE_POSTDIRECTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_POSTESSIVE", function() { return CASE_POSTESSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_POSTPOSITIONAL", function() { return CASE_POSTPOSITIONAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_PREPOSITIONAL", function() { return CASE_PREPOSITIONAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_PRIVATIVE", function() { return CASE_PRIVATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_PROLATIVE", function() { return CASE_PROLATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_PROSECUTIVE", function() { return CASE_PROSECUTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_PROXIMATIVE", function() { return CASE_PROXIMATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_SEPARATIVE", function() { return CASE_SEPARATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_SOCIATIVE", function() { return CASE_SOCIATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_SUBDIRECTIVE", function() { return CASE_SUBDIRECTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_SUBESSIVE", function() { return CASE_SUBESSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_SUBELATIVE", function() { return CASE_SUBELATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_SUBLATIVE", function() { return CASE_SUBLATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_SUPERDIRECTIVE", function() { return CASE_SUPERDIRECTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_SUPERESSIVE", function() { return CASE_SUPERESSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_SUPERLATIVE", function() { return CASE_SUPERLATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_SUPPRESSIVE", function() { return CASE_SUPPRESSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_TEMPORAL", function() { return CASE_TEMPORAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_TERMINATIVE", function() { return CASE_TERMINATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_TRANSLATIVE", function() { return CASE_TRANSLATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_VIALIS", function() { return CASE_VIALIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASE_VOCATIVE", function() { return CASE_VOCATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_ADMIRATIVE", function() { return MOOD_ADMIRATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_COHORTATIVE", function() { return MOOD_COHORTATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_CONDITIONAL", function() { return MOOD_CONDITIONAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_DECLARATIVE", function() { return MOOD_DECLARATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_DUBITATIVE", function() { return MOOD_DUBITATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_ENERGETIC", function() { return MOOD_ENERGETIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_EVENTIVE", function() { return MOOD_EVENTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_GENERIC", function() { return MOOD_GENERIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_GERUNDIVE", function() { return MOOD_GERUNDIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_HYPOTHETICAL", function() { return MOOD_HYPOTHETICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_IMPERATIVE", function() { return MOOD_IMPERATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_INDICATIVE", function() { return MOOD_INDICATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_INFERENTIAL", function() { return MOOD_INFERENTIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_INFINITIVE", function() { return MOOD_INFINITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_INTERROGATIVE", function() { return MOOD_INTERROGATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_JUSSIVE", function() { return MOOD_JUSSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_NEGATIVE", function() { return MOOD_NEGATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_OPTATIVE", function() { return MOOD_OPTATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_PARTICIPLE", function() { return MOOD_PARTICIPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_PRESUMPTIVE", function() { return MOOD_PRESUMPTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_RENARRATIVE", function() { return MOOD_RENARRATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_SUBJUNCTIVE", function() { return MOOD_SUBJUNCTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOOD_SUPINE", function() { return MOOD_SUPINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_SINGULAR", function() { return NUM_SINGULAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_PLURAL", function() { return NUM_PLURAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_DUAL", function() { return NUM_DUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_TRIAL", function() { return NUM_TRIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_PAUCAL", function() { return NUM_PAUCAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_SINGULATIVE", function() { return NUM_SINGULATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_COLLECTIVE", function() { return NUM_COLLECTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_DISTRIBUTIVE_PLURAL", function() { return NUM_DISTRIBUTIVE_PLURAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NRL_CARDINAL", function() { return NRL_CARDINAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NRL_ORDINAL", function() { return NRL_ORDINAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NRL_DISTRIBUTIVE", function() { return NRL_DISTRIBUTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NURL_NUMERAL_ADVERB", function() { return NURL_NUMERAL_ADVERB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORD_1ST", function() { return ORD_1ST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORD_2ND", function() { return ORD_2ND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORD_3RD", function() { return ORD_3RD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORD_4TH", function() { return ORD_4TH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORD_5TH", function() { return ORD_5TH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORD_6TH", function() { return ORD_6TH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORD_7TH", function() { return ORD_7TH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORD_8TH", function() { return ORD_8TH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORD_9TH", function() { return ORD_9TH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENSE_AORIST", function() { return TENSE_AORIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENSE_FUTURE", function() { return TENSE_FUTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENSE_FUTURE_PERFECT", function() { return TENSE_FUTURE_PERFECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENSE_IMPERFECT", function() { return TENSE_IMPERFECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENSE_PAST_ABSOLUTE", function() { return TENSE_PAST_ABSOLUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENSE_PERFECT", function() { return TENSE_PERFECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENSE_PLUPERFECT", function() { return TENSE_PLUPERFECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENSE_PRESENT", function() { return TENSE_PRESENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VKIND_TO_BE", function() { return VKIND_TO_BE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VKIND_COMPOUNDS_OF_TO_BE", function() { return VKIND_COMPOUNDS_OF_TO_BE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VKIND_TAKING_ABLATIVE", function() { return VKIND_TAKING_ABLATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VKIND_TAKING_DATIVE", function() { return VKIND_TAKING_DATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VKIND_TAKING_GENITIVE", function() { return VKIND_TAKING_GENITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VKIND_TRANSITIVE", function() { return VKIND_TRANSITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VKIND_INTRANSITIVE", function() { return VKIND_INTRANSITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VKIND_IMPERSONAL", function() { return VKIND_IMPERSONAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VKIND_DEPONENT", function() { return VKIND_DEPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VKIND_SEMIDEPONENT", function() { return VKIND_SEMIDEPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VKIND_PERFECT_DEFINITE", function() { return VKIND_PERFECT_DEFINITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOICE_ACTIVE", function() { return VOICE_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOICE_PASSIVE", function() { return VOICE_PASSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOICE_MEDIOPASSIVE", function() { return VOICE_MEDIOPASSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOICE_IMPERSONAL_PASSIVE", function() { return VOICE_IMPERSONAL_PASSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOICE_MIDDLE", function() { return VOICE_MIDDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOICE_ANTIPASSIVE", function() { return VOICE_ANTIPASSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOICE_REFLEXIVE", function() { return VOICE_REFLEXIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOICE_RECIPROCAL", function() { return VOICE_RECIPROCAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOICE_CAUSATIVE", function() { return VOICE_CAUSATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOICE_ADJUTATIVE", function() { return VOICE_ADJUTATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOICE_APPLICATIVE", function() { return VOICE_APPLICATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOICE_CIRCUMSTANTIAL", function() { return VOICE_CIRCUMSTANTIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOICE_DEPONENT", function() { return VOICE_DEPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_IRREGULAR", function() { return TYPE_IRREGULAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_REGULAR", function() { return TYPE_REGULAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_PERSONAL", function() { return CLASS_PERSONAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_REFLEXIVE", function() { return CLASS_REFLEXIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_POSSESSIVE", function() { return CLASS_POSSESSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_DEMONSTRATIVE", function() { return CLASS_DEMONSTRATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_RELATIVE", function() { return CLASS_RELATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_INTERROGATIVE", function() { return CLASS_INTERROGATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_GENERAL_RELATIVE", function() { return CLASS_GENERAL_RELATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_INDEFINITE", function() { return CLASS_INDEFINITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_INTENSIVE", function() { return CLASS_INTENSIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_RECIPROCAL", function() { return CLASS_RECIPROCAL; });
/* eslint-disable no-unused-vars */
const LANG_UNIT_WORD = Symbol('word')
const LANG_UNIT_CHAR = Symbol('char')
const LANG_DIR_LTR = Symbol('ltr')
const LANG_DIR_RTL = Symbol('rtl')
const LANG_UNDEFINED = Symbol('undefined')
const LANG_LATIN = Symbol('latin')
const LANG_GREEK = Symbol('greek')
const LANG_ARABIC = Symbol('arabic')
const LANG_PERSIAN = Symbol('persian')
const LANG_GEEZ = Symbol('ge\'ez')
const STR_LANG_CODE_UNDEFINED = 'undefined'
const STR_LANG_CODE_LAT = 'lat'
const STR_LANG_CODE_LA = 'la'
const STR_LANG_CODE_GRC = 'grc'
const STR_LANG_CODE_ARA = 'ara'
const STR_LANG_CODE_AR = 'ar'
const STR_LANG_CODE_FAS = 'fas'
const STR_LANG_CODE_PER = 'per'
const STR_LANG_CODE_FA_IR = 'fa-IR'
const STR_LANG_CODE_FA = 'fa'
const STR_LANG_CODE_GEZ = 'gez'
// parts of speech
const POFS_ADJECTIVE = 'adjective'
const POFS_ADVERB = 'adverb'
const POFS_ADVERBIAL = 'adverbial'
const POFS_ARTICLE = 'article'
const POFS_CONJUNCTION = 'conjunction'
const POFS_EXCLAMATION = 'exclamation'
const POFS_INTERJECTION = 'interjection'
const POFS_NOUN = 'noun'
const POFS_NOUN_PROPER = 'proper noun'
const POFS_NUMERAL = 'numeral'
const POFS_PARTICLE = 'particle'
const POFS_PREFIX = 'prefix'
const POFS_PREPOSITION = 'preposition'
const POFS_PRONOUN = 'pronoun'
const POFS_SUFFIX = 'suffix'
const POFS_GERUNDIVE = 'gerundive'
const POFS_SUPINE = 'supine'
const POFS_VERB = 'verb'
const POFS_VERB_PARTICIPLE = 'verb participle'
// gender
const GEND_MASCULINE = 'masculine'
const GEND_FEMININE = 'feminine'
const GEND_NEUTER = 'neuter'
const GEND_COMMON = 'common'
const GEND_ANIMATE = 'animate'
const GEND_INANIMATE = 'inanimate'
// Polish gender types
const GEND_PERSONAL_MASCULINE = 'personal masculine'
const GEND_ANIMATE_MASCULINE = 'animate masculine'
const GEND_INANIMATE_MASCULINE = 'inanimate masculine'
// comparative
const COMP_POSITIVE = 'positive'
const COMP_COMPARITIVE = 'comparative'
const COMP_SUPERLATIVE = 'superlative'
// case
const CASE_ABESSIVE = 'abessive'
const CASE_ABLATIVE = 'ablative'
const CASE_ABSOLUTIVE = 'absolutive'
const CASE_ACCUSATIVE = 'accusative'
const CASE_ADDIRECTIVE = 'addirective'
const CASE_ADELATIVE = 'adelative'
const CASE_ADESSIVE = 'adessive'
const CASE_ADVERBIAL = 'adverbial'
const CASE_ALLATIVE = 'allative'
const CASE_ANTESSIVE = 'antessive'
const CASE_APUDESSIVE = 'apudessive'
const CASE_AVERSIVE = 'aversive'
const CASE_BENEFACTIVE = 'benefactive'
const CASE_CARITIVE = 'caritive'
const CASE_CAUSAL = 'causal'
const CASE_CAUSAL_FINAL = 'causal-final'
const CASE_COMITATIVE = 'comitative'
const CASE_DATIVE = 'dative'
const CASE_DELATIVE = 'delative'
const CASE_DIRECT = 'direct'
const CASE_DISTRIBUTIVE = 'distributive'
const CASE_DISTRIBUTIVE_TEMPORAL = 'distributive-temporal'
const CASE_ELATIVE = 'elative'
const CASE_ERGATIVE = 'ergative'
const CASE_ESSIVE = 'essive'
const CASE_ESSIVE_FORMAL = 'essive-formal'
const CASE_ESSIVE_MODAL = 'essive-modal'
const CASE_EQUATIVE = 'equative'
const CASE_EVITATIVE = 'evitative'
const CASE_EXESSIVE = 'exessive'
const CASE_FINAL = 'final'
const CASE_FORMAL = 'formal'
const CASE_GENITIVE = 'genitive'
const CASE_ILLATIVE = 'illative'
const CASE_INELATIVE = 'inelative'
const CASE_INESSIVE = 'inessive'
const CASE_INSTRUCTIVE = 'instructive'
const CASE_INSTRUMENTAL = 'instrumental'
const CASE_INSTRUMENTAL_COMITATIVE = 'instrumental-comitative'
const CASE_INTRANSITIVE = 'intransitive'
const CASE_LATIVE = 'lative'
const CASE_LOCATIVE = 'locative'
const CASE_MODAL = 'modal'
const CASE_MULTIPLICATIVE = 'multiplicative'
const CASE_NOMINATIVE = 'nominative'
const CASE_PARTITIVE = 'partitive'
const CASE_PEGATIVE = 'pegative'
const CASE_PERLATIVE = 'perlative'
const CASE_POSSESSIVE = 'possessive'
const CASE_POSTELATIVE = 'postelative'
const CASE_POSTDIRECTIVE = 'postdirective'
const CASE_POSTESSIVE = 'postessive'
const CASE_POSTPOSITIONAL = 'postpositional'
const CASE_PREPOSITIONAL = 'prepositional'
const CASE_PRIVATIVE = 'privative'
const CASE_PROLATIVE = 'prolative'
const CASE_PROSECUTIVE = 'prosecutive'
const CASE_PROXIMATIVE = 'proximative'
const CASE_SEPARATIVE = 'separative'
const CASE_SOCIATIVE = 'sociative'
const CASE_SUBDIRECTIVE = 'subdirective'
const CASE_SUBESSIVE = 'subessive'
const CASE_SUBELATIVE = 'subelative'
const CASE_SUBLATIVE = 'sublative'
const CASE_SUPERDIRECTIVE = 'superdirective'
const CASE_SUPERESSIVE = 'superessive'
const CASE_SUPERLATIVE = 'superlative'
const CASE_SUPPRESSIVE = 'suppressive'
const CASE_TEMPORAL = 'temporal'
const CASE_TERMINATIVE = 'terminative'
const CASE_TRANSLATIVE = 'translative'
const CASE_VIALIS = 'vialis'
const CASE_VOCATIVE = 'vocative'
const MOOD_ADMIRATIVE = 'admirative'
const MOOD_COHORTATIVE = 'cohortative'
const MOOD_CONDITIONAL = 'conditional'
const MOOD_DECLARATIVE = 'declarative'
const MOOD_DUBITATIVE = 'dubitative'
const MOOD_ENERGETIC = 'energetic'
const MOOD_EVENTIVE = 'eventive'
const MOOD_GENERIC = 'generic'
const MOOD_GERUNDIVE = 'gerundive'
const MOOD_HYPOTHETICAL = 'hypothetical'
const MOOD_IMPERATIVE = 'imperative'
const MOOD_INDICATIVE = 'indicative'
const MOOD_INFERENTIAL = 'inferential'
const MOOD_INFINITIVE = 'infinitive'
const MOOD_INTERROGATIVE = 'interrogative'
const MOOD_JUSSIVE = 'jussive'
const MOOD_NEGATIVE = 'negative'
const MOOD_OPTATIVE = 'optative'
const MOOD_PARTICIPLE = 'participle'
const MOOD_PRESUMPTIVE = 'presumptive'
const MOOD_RENARRATIVE = 'renarrative'
const MOOD_SUBJUNCTIVE = 'subjunctive'
const MOOD_SUPINE = 'supine'
const NUM_SINGULAR = 'singular'
const NUM_PLURAL = 'plural'
const NUM_DUAL = 'dual'
const NUM_TRIAL = 'trial'
const NUM_PAUCAL = 'paucal'
const NUM_SINGULATIVE = 'singulative'
const NUM_COLLECTIVE = 'collective'
const NUM_DISTRIBUTIVE_PLURAL = 'distributive plural'
const NRL_CARDINAL = 'cardinal'
const NRL_ORDINAL = 'ordinal'
const NRL_DISTRIBUTIVE = 'distributive'
const NURL_NUMERAL_ADVERB = 'numeral adverb'
const ORD_1ST = '1st'
const ORD_2ND = '2nd'
const ORD_3RD = '3rd'
const ORD_4TH = '4th'
const ORD_5TH = '5th'
const ORD_6TH = '6th'
const ORD_7TH = '7th'
const ORD_8TH = '8th'
const ORD_9TH = '9th'
const TENSE_AORIST = 'aorist'
const TENSE_FUTURE = 'future'
const TENSE_FUTURE_PERFECT = 'future perfect'
const TENSE_IMPERFECT = 'imperfect'
const TENSE_PAST_ABSOLUTE = 'past absolute'
const TENSE_PERFECT = 'perfect'
const TENSE_PLUPERFECT = 'pluperfect'
const TENSE_PRESENT = 'present'
const VKIND_TO_BE = 'to be'
const VKIND_COMPOUNDS_OF_TO_BE = 'compounds of to be'
const VKIND_TAKING_ABLATIVE = 'taking ablative'
const VKIND_TAKING_DATIVE = 'taking dative'
const VKIND_TAKING_GENITIVE = 'taking genitive'
const VKIND_TRANSITIVE = 'transitive'
const VKIND_INTRANSITIVE = 'intransitive'
const VKIND_IMPERSONAL = 'impersonal'
const VKIND_DEPONENT = 'deponent'
const VKIND_SEMIDEPONENT = 'semideponent'
const VKIND_PERFECT_DEFINITE = 'perfect definite'
const VOICE_ACTIVE = 'active'
const VOICE_PASSIVE = 'passive'
const VOICE_MEDIOPASSIVE = 'mediopassive'
const VOICE_IMPERSONAL_PASSIVE = 'impersonal passive'
const VOICE_MIDDLE = 'middle'
const VOICE_ANTIPASSIVE = 'antipassive'
const VOICE_REFLEXIVE = 'reflexive'
const VOICE_RECIPROCAL = 'reciprocal'
const VOICE_CAUSATIVE = 'causative'
const VOICE_ADJUTATIVE = 'adjutative'
const VOICE_APPLICATIVE = 'applicative'
const VOICE_CIRCUMSTANTIAL = 'circumstantial'
const VOICE_DEPONENT = 'deponent'
const TYPE_IRREGULAR = 'irregular'
const TYPE_REGULAR = 'regular'
// Classes
const CLASS_PERSONAL = 'personal'
const CLASS_REFLEXIVE = 'reflexive'
const CLASS_POSSESSIVE = 'possessive'
const CLASS_DEMONSTRATIVE = 'demonstrative'
const CLASS_RELATIVE = 'relative'
const CLASS_INTERROGATIVE = 'interrogative'
const CLASS_GENERAL_RELATIVE = 'general relative'
const CLASS_INDEFINITE = 'indefinite'
const CLASS_INTENSIVE = 'intensive'
const CLASS_RECIPROCAL = 'reciprocal'
/* eslit-enable no-unused-vars */


/***/ }),

/***/ "./definition-set.js":
/*!***************************!*\
  !*** ./definition-set.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefinitionSet; });
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definition */ "./definition.js");
/* harmony import */ var _language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language_model_factory.js */ "./language_model_factory.js");



class DefinitionSet {
  constructor (lemmaWord, languageID) {
    this.lemmaWord = lemmaWord
    this.languageID = languageID

    this.shortDefs = []
    this.fullDefs = []
  }

  /**
   * A function that is used to instantiate a DefinitionSet object from a JSON object.
   * @param {Object} jsonObject - A JSON object representing DefinitionSet data.
   * @return {DefinitionSet} A DefinitionSet object populated with data from JSON object.
   */
  static readObject (jsonObject) {
    if (!jsonObject.languageID && jsonObject.languageCode) {
      jsonObject.languageID = _language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLanguageIdFromCode(jsonObject.languageCode)
    }
    let definitionSet = new DefinitionSet(jsonObject.lemmaWord, jsonObject.languageID)

    for (let shortDef of jsonObject.shortDefs) {
      definitionSet.shortDefs.push(_definition__WEBPACK_IMPORTED_MODULE_0__["default"].readObject(shortDef))
    }
    for (let fullDef of jsonObject.fullDefs) {
      definitionSet.fullDefs.push(_definition__WEBPACK_IMPORTED_MODULE_0__["default"].readObject(fullDef))
    }

    return definitionSet
  }

  /**
   * Check to see if the DefinitionSet is empty
   * @return {boolean} true if empty false if there is at least one definition
   */
  isEmpty () {
    return this.shortDefs.length === 0 && this.fullDefs.length === 0
  }

  /**
   * Appends one or more definitions to a list of short definitions.
   * @param {Definition | Definition[]} definitions - One or more definition objects to add.
   * @return {Definition[]} A list of short definitions this object has.
   */
  appendShortDefs (definitions) {
    // TODO: check for duplicates?
    if (definitions) {
      if (!Array.isArray(definitions)) { definitions = [definitions] }
      this.shortDefs = this.shortDefs.concat(definitions)
    }
    return this.shortDefs
  }

  /**
   * clear accumulated short definitions
   */
  clearShortDefs () {
    this.shortDefs = []
  }

  /**
   * Appends one or more definitions to a list of full definitions.
   * @param {Definition | Definition[]} definitions - One or more definition objects to add.
   * @return {Definition[]} A list of full definitions this object has.
   */
  appendFullDefs (definitions) {
    // TODO: check for duplicates?
    if (definitions) {
      if (!Array.isArray(definitions)) { definitions = [definitions] }
      this.fullDefs = this.fullDefs.concat(definitions)
    }
    return this.fullDefs
  }

  /**
   * clear accumulated full definitions
   */
  clearFullDefs () {
    this.fullDefs = []
  }

  convertToJSONObject () {
    let languageCode = _language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLanguageCodeFromId(this.languageID)
    return {
      lemmaWord: this.lemmaWord,
      languageCode: languageCode,
      shortDefs: this.shortDefs.map(def => def.convertToJSONObject()),
      fullDefs: this.fullDefs.map(def => def.convertToJSONObject())
    }
  }
}


/***/ }),

/***/ "./definition.js":
/*!***********************!*\
  !*** ./definition.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Definition {
  constructor (text, language, format, lemmaText) {
    this.text = text
    this.language = language
    this.format = format
    this.lemmaText = lemmaText
  }

  static readObject (jsonObject) {
    return new Definition(jsonObject.text, jsonObject.language, jsonObject.format, jsonObject.lemmaText)
  }

  convertToJSONObject () {
    return {
      text: this.text,
      language: this.language,
      format: this.format,
      lemmaText: this.lemmaText
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Definition);


/***/ }),

/***/ "./driver.js":
/*!*******************!*\
  !*** ./driver.js ***!
  \*******************/
/*! exports provided: Constants, Definition, DefinitionSet, Feature, GrmFeature, FeatureType, FeatureList, FeatureImporter, Inflection, LanguageModelFactory, Homonym, Lexeme, Lemma, LatinLanguageModel, GreekLanguageModel, ArabicLanguageModel, PersianLanguageModel, GeezLanguageModel, ResourceProvider, Translation, PsEvent, PsEventData, TextQuoteSelector, WordUsageExample, Author, TextWork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./constants.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return _constants_js__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _definition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition.js */ "./definition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Definition", function() { return _definition_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _definition_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definition-set */ "./definition-set.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefinitionSet", function() { return _definition_set__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature.js */ "./feature.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _grm_feature_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grm-feature.js */ "./grm-feature.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GrmFeature", function() { return _grm_feature_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _feature_type_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feature_type.js */ "./feature_type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureType", function() { return _feature_type_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _feature_list_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feature_list.js */ "./feature_list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureList", function() { return _feature_list_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _feature_importer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feature_importer.js */ "./feature_importer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureImporter", function() { return _feature_importer_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _language_model_factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./language_model_factory.js */ "./language_model_factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LanguageModelFactory", function() { return _language_model_factory_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _homonym_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homonym.js */ "./homonym.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Homonym", function() { return _homonym_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _lexeme_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lexeme.js */ "./lexeme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lexeme", function() { return _lexeme_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _lemma_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lemma.js */ "./lemma.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lemma", function() { return _lemma_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _inflection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inflection.js */ "./inflection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Inflection", function() { return _inflection_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _latin_language_model_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./latin_language_model.js */ "./latin_language_model.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LatinLanguageModel", function() { return _latin_language_model_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _greek_language_model_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./greek_language_model.js */ "./greek_language_model.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GreekLanguageModel", function() { return _greek_language_model_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _arabic_language_model_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./arabic_language_model.js */ "./arabic_language_model.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArabicLanguageModel", function() { return _arabic_language_model_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _persian_language_model_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./persian_language_model.js */ "./persian_language_model.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersianLanguageModel", function() { return _persian_language_model_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _geez_language_model_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./geez_language_model.js */ "./geez_language_model.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeezLanguageModel", function() { return _geez_language_model_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _resource_provider_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resource_provider.js */ "./resource_provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceProvider", function() { return _resource_provider_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _ps_events_ps_event_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ps-events/ps-event.js */ "./ps-events/ps-event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsEvent", function() { return _ps_events_ps_event_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _ps_events_ps_event_data_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ps-events/ps-event-data.js */ "./ps-events/ps-event-data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsEventData", function() { return _ps_events_ps_event_data_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _translation_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./translation.js */ "./translation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Translation", function() { return _translation_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _w3c_text_quote_selector_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./w3c/text-quote-selector.js */ "./w3c/text-quote-selector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextQuoteSelector", function() { return _w3c_text_quote_selector_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _texts_word_usage_example_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./texts/word-usage-example.js */ "./texts/word-usage-example.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordUsageExample", function() { return _texts_word_usage_example_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _texts_author_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./texts/author.js */ "./texts/author.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return _texts_author_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _texts_text_work_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./texts/text-work.js */ "./texts/text-work.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextWork", function() { return _texts_text_work_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

































/***/ }),

/***/ "./feature.js":
/*!********************!*\
  !*** ./feature.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feature; });
/* harmony import */ var _language_model_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language_model_factory.js */ "./language_model_factory.js");
/* harmony import */ var _feature_importer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature_importer.js */ "./feature_importer.js");



/**
 * A grammatical feature object, that can replace both Feature and FeatureType objects.
 */
class Feature {
  /**
   *
   * @param {string} type - A type of the feature, allowed values are specified in 'type' getter.
   * @param {string | string[] | string[][]} data - Single or multiple values, in different combinations.
   *
   * If a single value with no sort order is provided, data format will be:
   *  value
   *  This value will be assigned a default sort order.
   *
   * If a single value with sort order is provided, data format will be:
   *  [[value, sortOrder]]
   *
   * If multiple values without sort order are provided, data format will be:
   *  [value1, value2, value3, ...]
   * Items will be assigned a sort order according to their order in an array, starting from one.
   *
   * If multiple values with sort order are provided, data format will be:
   *  [[value1, sortOrder1], [value2, sortOrder2], [value3, sortOrder3], ...]
   * If a sort order is omitted anywhere, it will be set to a default sort order.
   *
   * Each value of a feature has its `sortOrder` property. This value is used to soft values of a feature
   * between themselves. Feature object has a `sortOrder` property of its own, too. It is used
   * to compare two Feature objects between themselves.
   *
   * @param {symbol} languageID - A language ID of a feature
   * @param {number} sortOrder - A sort order of a feature when multiple features are compared.
   * @param allowedValues - If feature has a restricted set of allowed values, here will be a list of those
   * values. An order of those values can define a sort order.
   */
  constructor (type, data, languageID, sortOrder = 1, allowedValues = []) {
    if (!Feature.isAllowedType(type)) {
      throw new Error('Features of "' + type + '" type are not supported.')
    }
    if (!data) {
      throw new Error('Feature should have a non-empty value(s).')
    }
    if (!languageID) {
      throw new Error('No language ID is provided')
    }

    this.type = type
    this.languageID = languageID
    this.sortOrder = sortOrder
    this.allowedValues = allowedValues

    // `_data` is an array
    this._data = Feature.dataValuesFromInput(data)
    this.sort()
  }

  static dataValuesFromInput (data) {
    let normalized
    if (!Array.isArray(data)) {
      // Single value with no sort order
      normalized = [[data, this.defaultSortOrder]]
    } else if (!Array.isArray(data[0])) {
      // Multiple values without any sort order, default sort order will be used
      // we reverse because sortOrder is numeric descending (i.e. 2 is before 1)
      normalized = data.map((v, i) => [v, data.length - i])
    } else {
      // Value has all the data, including a sort order
      normalized = data
    }
    return normalized.map(d => { return { value: d[0], sortOrder: Number.parseInt(d[1]) } })
  }

  /**
   *
   * @param featureData
   */
  static newFromFtr (featureData) {

  }

  static get types () {
    return {
      /**
       * @deprecated : Use `fullForm` where appropriate instead
       */
      word: 'word',
      fullForm: 'full form',
      hdwd: 'headword',
      part: 'part of speech', // Part of speech
      number: 'number',
      'case': 'case',
      grmCase: 'case', // A synonym of `case`
      declension: 'declension',
      gender: 'gender',
      type: 'type',
      'class': 'class',
      grmClass: 'class', // A synonym of `class`
      conjugation: 'conjugation',
      comparison: 'comparison',
      tense: 'tense',
      voice: 'voice',
      mood: 'mood',
      person: 'person',
      frequency: 'frequency', // How frequent this word is
      meaning: 'meaning', // Meaning of a word
      source: 'source', // Source of word definition
      footnote: 'footnote', // A footnote for a word's ending
      dialect: 'dialect', // a dialect identifier
      note: 'note', // a general note
      pronunciation: 'pronunciation',
      age: 'age',
      area: 'area',
      geo: 'geo', // geographical data
      kind: 'kind', // verb kind information
      derivtype: 'derivtype',
      stemtype: 'stemtype',
      morph: 'morph', // general morphological information
      var: 'var' // variance?
    }
  }

  static isAllowedType (value) {
    return Object.values(this.types).includes(`${value}`)
  }

  static get defaultSortOrder () {
    return 1
  }

  static get joinSeparator () {
    return ' '
  }

  static get defaultImporterName () {
    return 'default'
  }

  /**
   * Test to see if this feature allows unrestricted values.
   * @returns {boolean} true if unrestricted false if not.
   */
  get allowsUnrestrictedValues () {
    /*
    If `allowedValues` array is empty then there are no value restrictions
     */
    return this.allowedValues.length === 0
  }

  /**
   * Defines a sort order of feature values. Values are sorted according to their sort order
   * (a number starting from one). If several values have the same sort order, they will be
   * sorted alphabetically according to their values.
   * Sort order is deterministic.
   */
  sort () {
    this._data.sort((a, b) => a.sortOrder !== b.sortOrder ? b.sortOrder - a.sortOrder : a.value.localeCompare(b.value))
  }

  /**
   * Compares a feature's values to another feature's values for sorting
   * @param {Feature} otherFeature the feature to compare this feature's values to
   * @return {integer} < 1 if this feature should be sorted first, 0 if they are equal and -1 if this feature should be sorted second
   */
  compareTo (otherFeature) {
    // the data values are sorted upon construction and insertion so we only should need to look at the first values
    // feature sortOrders are descending (i.e. 5 sorts higher than 1)
    if (otherFeature) {
      return otherFeature._data[0].sortOrder - this._data[0].sortOrder
    } else {
      // if the other feature isn't defined, this one sorts first
      return -1
    }
  }

  get items () {
    return this._data
  }

  /**
   * Returns a single value string. If feature has a single value, this value will be returned.
   * If it has multiple values, those values will be concatenated with a default separator and
   * returned in a single string. Values composing this string are sorted according
   * to each value's sort order.
   * @return {string} A single value string.
   */
  get value () {
    return this.values.join(this.constructor.joinSeparator)
  }

  /**
   * Returns an array of string values of a feature, sorted according to each item's sort order.
   * If a feature contains a single feature, an array with one value will be returned.
   * @return {string[]} An array of string values.
   */
  get values () {
    return this._data.map(v => v.value)
  }

  /**
   * Retrieves a value object by name. Can be used to update a value object directly.
   * @param {string} featureVale - A feature value of an object to retrieve.
   */
  getValue (featureVale) {
    return this._data.find(v => v.value === featureVale)
  }

  /**
   * Returns a number of feature values.
   * @retrun {number] A quantity of feature values
   */
  get valQty () {
    return this._data.length
  }

  get isEmpty () {
    return this.valQty === 0
  }

  get isSingle () {
    return this.valQty === 1
  }

  get isMultiple () {
    return this.valQty > 1
  }

  /**
   * A string representation of a feature.
   * @return {string}
   */
  toString () {
    return this.value
  }

  /**
   * Examines the feature for a specific value.
   * @param {string} value
   * @returns {boolean} true if the value is included in the feature's values.
   */
  hasValue (value) {
    return this.values.includes(value)
  }

  /**
   * Checks if this feature has all value from an array.
   * @param {string[]} values - An array of values to check for.
   * @returns {boolean} true if the value is included in the feature's values.
   */
  hasValues (values) {
    let hasValues = true
    for (let value of values) {
      hasValues = hasValues && this.hasValue(value)
    }
    return hasValues
  }

  /**
   * Checks if this feature has some value from an array.
   * @param {string[]} values - An array of values to check for.
   * @returns {boolean} true if the value is included in the feature's values.
   */
  hasSomeValues (values) {
    let hasValues = false
    for (let value of values) {
      hasValues = hasValues || this.hasValue(value)
    }
    return hasValues
  }

  get valuesUnrestricted () {
    return this.allowedValues.length === 0
  }

  /**
   * Two features are considered fully equal if they are of the same type, have the same language,
   * and the same set of feature values in the same order.
   * @param {Feature} feature - A GrmFtr object this feature should be compared with.
   * @return {boolean} True if features are equal, false otherwise.
   */
  isEqual (feature) {
    return feature &&
      this.type === feature.type &&
      _language_model_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"].compareLanguages(this.languageID, feature.languageID) &&
      this.value === feature.value
  }

  /**
   * Adds a single new value to the existing feature object.
   * This function is chainable.
   * @param {string} value - A feature value.
   * @param {number} sortOrder - A sort order.
   * @return {Feature} - Self reference for chaining.
   */
  addValue (value, sortOrder = this.constructor.defaultSortOrder) {
    if (!this.hasValue(value)) {
      this._data.push({
        value: value,
        sortOrder: sortOrder
      })
      this.sort() // Resort an array to place an inserted value to the proper place
    } else {
      console.warn(`Value "${value}" already exists. If you want to change it, use "getValue" to access it directly.`)
    }
    return this
  }

  /**
   * Adds multiple new values to the existing feature object.
   * This function is chainable.
   * @param {string | string[] | string[][]} data - Single or multiple values, in different combinations.
   * @return {Feature} - Self reference for chaining.
   */
  addValues (data) {
    let normalizedData = this.constructor.dataValuesFromInput(data)
    let values = normalizedData.map(v => v.value)
    if (!this.hasSomeValues(values)) {
      this._data = this._data.concat(normalizedData)
      this.sort() // Resort an array to place an inserted value to the proper place
    } else {
      console.warn(`One or several values from "${values}" already exist. If you want to change it, use "getValue" to access a value directly.`)
    }
    return this
  }

  /**
   * Removes a single value from the existing feature object.
   * @param value
   */
  removeValue (value) {
    // TODO: Do we need it?
    console.warn(`This feature is not implemented yet`)
  }

  /**
   * Creates a new single value Feature object of the same type and same language,
   * but with a different feature value.
   * This can be used when one feature defines a type and it is necessary
   * to create other items of the same type.
   * @param {string} value - A value of a feature.
   * @param {number} sortOrder.
   * @return {Feature} A new Ftr object.
   */
  createFeature (value, sortOrder = this.constructor.defaultSortOrder) {
    // TODO: Add a check of if the value exists in a source Feature object
    return new Feature(this.type, [[value, sortOrder]], this.languageID, this.sortOrder, this.allowedValues)
  }

  /**
   * Creates a multiple value Feature object of the same type and same language,
   * but with a different feature values.
   * @param {string | string[] | string[][]} data - Single or multiple values, in different combinations,
   * formatted according to rules described in a Ftr constructor.
   * @return {Feature} A new Ftr object.
   */
  createFeatures (data) {
    return new Feature(this.type, data, this.languageID, this.sortOrder, this.allowedValues)
  }

  /**
   * Creates an array of Feature objects where each Feature object is matching one feature value
   * form the values of this object.
   * Useful when the current objects is a type feature and it is necessary to create an array
   * of Feature objects for the type from it.
   * @return {Feature[]} - An array of Feature objects. Each object represents one feature value
   * from the current object.
   */
  get ownFeatures () {
    return this.values.map(v => new Feature(this.type, v, this.languageID, 1, this.allowedValues))
  }

  /**
   * Create a copy of the feature object.
   */
  getCopy () {
    let values = this._data.map(item => [item.value, item.sortOrder])
    return new Feature(this.type, values, this.languageID, this.sortOrder, this.allowedValues.slice())
  }

  /**
   * Adds an importer to the internal list.
   * @param {string} name - A name of an importer.
   * @param {FeatureImporter} importer - A `FeatureImporter` object.
   */
  addImporter (importer = new _feature_importer_js__WEBPACK_IMPORTED_MODULE_1__["default"](), name = this.constructor.defaultImporterName) {
    if (!this.importers) {
      this.importers = new Map()
    }
    this.importers.set(name, importer)
    return importer
  }

  getImporter (name = this.constructor.defaultImporterName) {
    if (!this.importers || !this.importers.has(name)) {
      throw new Error(`Importer "${name}" does not exist`)
    }
    return this.importers.get(name)
  }

  /**
   * Adds feature values from the imported values.
   * @param {string | string[]} foreignData - A single value or an array of values from a third-party source.
   * @param {string} name - A name of an importer.
   * @return {Feature} - A new Ftr object.
   */
  addFromImporter (foreignData, name = this.constructor.defaultImporterName) {
    if (!this.importers || !this.importers.has(name)) {
      throw new Error(`Importer "${name}" does not exist`)
    }
    const importer = this.importers.get(name)
    foreignData = this.constructor.dataValuesFromInput(foreignData)
    this._data.push(...foreignData.map(fv => { return { value: importer.get(fv.value), sortOrder: fv.sortOrder } }))
    this.sort()
    return this
  }

  /**
   * Creates a new feature of the same type and with the same language from the imported values.
   * @param {string | string[]} foreignData - A single value or an array of values from a third-party source.
   * @param {string} name - A name of an importer.
   * @return {Feature} - A new Ftr object.
   */
  createFromImporter (foreignData, name = this.constructor.defaultImporterName) {
    if (!this.importers || !this.importers.has(name)) {
      throw new Error(`Importer "${name}" does not exist`)
    }
    const importer = this.importers.get(name)
    if (!Array.isArray(foreignData)) {
      foreignData = [foreignData]
    }
    let values = foreignData.map(fv => importer.get(fv))
    /*
    Some values may be mapped into multiple values. For them an importer will return an array of values instead of a single value.
    The values will be a multidimensional array that will require flattening.
     */
    values = values.reduce((acc, cv) => acc.concat(cv), [])
    return new Feature(this.type, values, this.languageID, this.sortOrder, this.allowedValues)
  }

  convertToJSONObject () {
    let data = this._data.map(dataItem => [dataItem.value, dataItem.sortOrder])
    return {
      type: this.type,
      languageCode: _language_model_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLanguageCodeFromId(this.languageID),
      sortOrder: this.sortOrder,
      allowedValues: this.allowedValues,
      data: data
    }
  }

  static readObject (jsonObject) {
    let languageID = _language_model_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLanguageIdFromCode(jsonObject.languageCode)
    return new Feature(jsonObject.type, jsonObject.data, languageID, jsonObject.sortOrder, jsonObject.allowedValues)
  }
}


/***/ }),

/***/ "./feature_importer.js":
/*!*****************************!*\
  !*** ./feature_importer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class FeatureImporter {
  /**
   * @param defaults
   * @param {boolean} returnUnknown - If true, and a source value is not found in the importer,
   * a source value will be returned without any change (a passthrough). If false, an Error
   * will be thrown for unknown source values.
   * @return {FeatureImporter}
   */
  constructor (defaults = [], returnUnknown = false) {
    this.hash = {}
    for (let value of defaults) {
      this.map(value, value)
    }
    this.returnUnknown = returnUnknown
    return this
  }

  /**
   * Sets mapping between external imported value and one or more library standard values. If an importedValue
   * is already in a hash table, old libraryValue will be overwritten with the new one.
   * @param {string} importedValue - External value
   * @param {Object | Object[] | string | string[]} libraryValue - Library standard value
   */
  map (importedValue, libraryValue) {
    if (!importedValue) {
      throw new Error('Imported value should not be empty.')
    }

    if (!libraryValue) {
      throw new Error('Library value should not be empty.')
    }

    this.hash[importedValue] = libraryValue
    return this
  }

  /**
   * Checks if value is in a map.
   * @param {string} importedValue - A value to test.
   * @returns {boolean} - Tru if value is in a map, false otherwise.
   */
  has (importedValue) {
    return this.hash.hasOwnProperty(importedValue)
  }

  /**
   * Returns one or more library standard values that match an external value
   * @param {string} sourceValue - External value
   * @returns {Object | string} One or more of library standard values
   */
  get (sourceValue) {
    if (this.has(sourceValue)) {
      return this.hash[sourceValue]
    } else if (this.returnUnknown) {
      return sourceValue
    } else {
      throw new Error('A value "' + sourceValue + '" is not found in the importer.')
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (FeatureImporter);


/***/ }),

/***/ "./feature_list.js":
/*!*************************!*\
  !*** ./feature_list.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A list of grammatical features that characterizes a language unit. Has some additional service methods,
 * compared with standard storage objects.
 */
class FeatureList {
  /**
   * Initializes a feature list.
   * @param {Feature[]} features - Features that build the list (optional, can be set later).
   */
  constructor (features = []) {
    this._features = []
    this._types = {}
    this.add(features)
  }

  add (features) {
    if (!features || !Array.isArray(features)) {
      throw new Error('Features must be defined and must come in an array.')
    }

    for (let feature of features) {
      this._features.push(feature)
      this._types[feature.type] = feature
    }
  }

  /**
   * Returns an array of grouping features.
   * @returns {FeatureType[]} - An array of grouping features.
   */
  get items () {
    return this._features
  }

  forEach (callback) {
    this._features.forEach(callback)
  }

  /**
   * Returns a feature of a particular type. If such feature does not exist in a list, returns undefined.
   * @param {string} type - Feature type as defined in `types` object.
   * @return {FeatureType | undefined} A feature if a particular type if contains it. Undefined otherwise.
   */
  ofType (type) {
    if (this.hasType(type)) {
      return this._types[type]
    }
  }

  /**
   * Checks whether a feature list has a feature of a specific type.
   * @param {string} type - Feature type as defined in `types` object.
   * @return {boolean} Whether a feature list has a feature of a particular type.
   */
  hasType (type) {
    return this._types.hasOwnProperty(type)
  }
}
/* harmony default export */ __webpack_exports__["default"] = (FeatureList);


/***/ }),

/***/ "./feature_type.js":
/*!*************************!*\
  !*** ./feature_type.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature.js */ "./feature.js");
/* harmony import */ var _feature_importer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature_importer.js */ "./feature_importer.js");
/* harmony import */ var _language_model_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language_model_factory */ "./language_model_factory.js");




/**
 * @deprecated Use Feature instead
 * Definition class for a (grammatical) feature. Stores type information and (optionally) all possible values of the feature.
 * It serves as a feature generator. If list of possible values is provided, it can generate a Feature object
 * each time a property that corresponds to a feature value is accessed. If no list of possible values provided,
 * a Feature object can be generated with get(value) method.
 *
 * An order of values determines a default sort and grouping order. If two values should have the same order,
 * they should be grouped within an array: value1, [value2, value3], value4. Here 'value2' and 'value3' have
 * the same priority for sorting and grouping.
 */
class FeatureType {
  // TODO: value checking
  /**
   * Creates and initializes a Feature Type object.
   * @param {string} type - A type of the feature, allowed values are specified in 'types' object.
   * @param {string[] | string[][]} values - A list of allowed values for this feature type.
   * If an empty array is provided, there will be no
   * allowed values as well as no ordering (can be used for items that do not need or have a simple order,
   * such as footnotes).
   * @param {String | Symbol} language - A language of a feature type.
   */
  constructor (type, values, language) {
    if (!values || !Array.isArray(values)) {
      throw new Error('Values should be an array (or an empty array) of values.')
    }
    if (!language) {
      throw new Error('FeatureType constructor requires a language')
    }

    this.type = type
    this.languageID = undefined
    this.languageCode = undefined
    ;({ languageID: this.languageID, languageCode: this.languageCode } = _language_model_factory__WEBPACK_IMPORTED_MODULE_2__["default"].getLanguageAttrs(language))

    /*
     This is a sort order index for a grammatical feature values. It is determined by the order of values in
     a 'values' array.
     */
    this._orderIndex = []
    this._orderLookup = {}

    for (const [index, value] of values.entries()) {
      this._orderIndex.push(value)
      if (Array.isArray(value)) {
        for (let element of value) {
          this[element] = new _feature_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.type, element, this.languageID)
          this._orderLookup[element] = index
        }
      } else {
        this[value] = new _feature_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.type, value, this.languageID)
        this._orderLookup[value] = index
      }
    }
  }

  /**
   * This is a compatibility function for legacy code.
   * @return {String} A language code.
   */
  get language () {
    console.warn(`Please use a "languageID" instead of a "language"`)
    return this.languageCode
  }

  /**
   * test to see if this FeatureType allows unrestricted values
   * @returns {boolean} true if unrestricted false if not
   */
  hasUnrestrictedValue () {
    return this.orderedValues.length === 1 && this.orderedValues[0] === FeatureType.UNRESTRICTED_VALUE
  }

  /**
   * Return a Feature with an arbitrary value. This value would not be necessarily present among FeatureType values.
   * This can be especially useful for features that do not set: a list of predefined values, such as footnotes.
   * @param value
   * @param {int} sortOrder
   * @returns {Feature}
   */
  get (value, sortOrder = 1) {
    if (value) {
      return new _feature_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.type, [[value, sortOrder]], this.languageID)
    } else {
      throw new Error('A non-empty value should be provided.')
    }
  }

  /**
   *
   * @param {string[][]} data - An array of value arrays as: [[value1, sortOrder1], [value2, sortOrder2]]
   * @return {Feature}
   */
  getValues (data) {
    return new _feature_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.type, data, this.languageID)
  }

  getFromImporter (importerName, value) {
    let mapped
    try {
      mapped = this.importer[importerName].get(value)
    } catch (e) {
      // quietly catch not found and replace with default
      mapped = this.get(value)
    }
    return mapped
  }

  /**
   * Creates and returns a new importer with a specific name. If an importer with this name already exists,
   * an existing Importer object will be returned.
   * @param {string} name - A name of an importer object
   * @returns {Importer} A new or existing Importer object that matches a name provided
   */
  addImporter (name) {
    if (!name) {
      throw new Error('Importer should have a non-empty name.')
    }
    this.importer = this.importer || {}
    this.importer[name] = this.importer[name] || new _feature_importer_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    return this.importer[name]
  }

  /**
   * Return copies of all feature values as Feature objects in a sorted array, according to feature type's sort order.
   * For a similar function that returns strings instead of Feature objects see orderedValues().
   * @returns {Feature[] | Feature[][]} Array of feature values sorted according to orderIndex.
   * If particular feature contains multiple feature values (i.e. `masculine` and `feminine` values combined),
   * an array of Feature objects will be returned instead of a single Feature object, as for single feature values.
   */
  get orderedFeatures () {
    return this.orderedValues.map((value) => new _feature_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.type, value, this.languageID))
  }

  /**
   * Return all feature values as strings in a sorted array, according to feature type's sort order.
   * This is a main method that specifies a sort order of the feature type. orderedFeatures() relies
   * on this method in providing a sorted array of feature values. If you want to create
   * a custom sort order for a particular feature type that will depend on some options that are not type-related,
   * create a wrapper around this function providing it with options arguments so it will be able to decide
   * in what order those features will be based on those arguments.
   * For a similar function that returns Feature objects instead of strings see orderedValues().
   * @returns {string[]} Array of feature values sorted according to orderIndex.
   * If particular feature contains multiple feature values (i.e. `masculine` and `feminine` values combined),
   * an array of strings will be returned instead of a single strings, as for single feature values.
   */
  get orderedValues () {
    return this._orderIndex
  }

  /**
   * Returns a lookup table for type values as:
   *  {value1: order1, value2: order2}, where order is a sort order of an item. If two items have the same sort order,
   *  their order value will be the same.
   * @returns {object}
   */
  get orderLookup () {
    return this._orderLookup
  }

  /**
   * Sets an order of grammatical feature values for a grammatical feature. Used mostly for sorting, filtering,
   * and displaying.
   *
   * @param {Feature[] | Feature[][]} values - a list of grammatical features that specify their order for
   * sorting and filtering. Some features can be grouped as [[genders.masculine, genders.feminine], LibLatin.genders.neuter].
   * It means that genders.masculine and genders.feminine belong to the same group. They will have the same index
   * and will be stored inside an _orderIndex as an array. genders.masculine and genders.feminine will be grouped together
   * during filtering and will be in the same bin during sorting.
   *
   */
  set order (values) {
    if (!values || (Array.isArray(values) && values.length === 0)) {
      throw new Error('A non-empty list of values should be provided.')
    }

    // If a single value is provided, convert it into an array
    if (!Array.isArray(values)) {
      values = [values]
    }

    for (let value of values) {
      if (Array.isArray(value)) {
        for (let element of value) {
          if (!this.hasOwnProperty(element.value)) {
            throw new Error('Trying to order an element with "' + element.value + '" value that is not stored in a "' + this.type + '" type.')
          }

          if (element.type !== this.type) {
            throw new Error('Trying to order an element with type "' + element.type + '" that is different from "' + this.type + '".')
          }

          if (!_language_model_factory__WEBPACK_IMPORTED_MODULE_2__["default"].compareLanguages(element.languageID, this.languageID)) {
            throw new Error(`Trying to order an element with language "${element.languageID.toString()}" that is different from "${this.languageID.toString()}"`)
          }
        }
      } else {
        if (!this.hasOwnProperty(value.value)) {
          throw new Error('Trying to order an element with "' + value.value + '" value that is not stored in a "' + this.type + '" type.')
        }

        if (value.type !== this.type) {
          throw new Error('Trying to order an element with type "' + value.type + '" that is different from "' + this.type + '".')
        }

        if (!_language_model_factory__WEBPACK_IMPORTED_MODULE_2__["default"].compareLanguages(value.languageID, this.languageID)) {
          throw new Error(`Trying to order an element with language "${value.languageID.toString()}" that is different from "${this.languageID.toString()}"`)
        }
      }
    }

    // Erase whatever sort order was set previously
    this._orderLookup = {}
    this._orderIndex = []

    // Define a new sort order
    for (const [index, element] of values.entries()) {
      if (Array.isArray(element)) {
        // If it is an array, all values should have the same order
        let elements = []
        for (const subElement of element) {
          this._orderLookup[subElement.value] = index
          elements.push(subElement.value)
        }
        this._orderIndex[index] = elements
      } else {
        // If is a single value
        this._orderLookup[element.value] = index
        this._orderIndex[index] = element.value
      }
    }
  }
}
FeatureType.UNRESTRICTED_VALUE = Symbol('unrestricted')
/* harmony default export */ __webpack_exports__["default"] = (FeatureType);


/***/ }),

/***/ "./geez_language_model.js":
/*!********************************!*\
  !*** ./geez_language_model.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeezLanguageModel; });
/* harmony import */ var _language_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language_model.js */ "./language_model.js");
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature.js */ "./feature.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./constants.js");




let typeFeatures = new Map()
let typeFeaturesInitialized = false

/**
 * @class  GezLanguageModel is the lass for Ge'ez specific behavior
 */
class GeezLanguageModel extends _language_model_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get languageID () { return _constants_js__WEBPACK_IMPORTED_MODULE_2__["LANG_GEEZ"] }

  static get languageCode () { return _constants_js__WEBPACK_IMPORTED_MODULE_2__["STR_LANG_CODE_GEZ"] }

  static get languageCodes () { return [_constants_js__WEBPACK_IMPORTED_MODULE_2__["STR_LANG_CODE_GEZ"]] }

  static get contextForward () { return 0 }

  static get contextBackward () { return 0 }

  static get direction () { return _constants_js__WEBPACK_IMPORTED_MODULE_2__["LANG_DIR_LTR"] }

  static get baseUnit () { return _constants_js__WEBPACK_IMPORTED_MODULE_2__["LANG_UNIT_WORD"] }
  static get featureValues () {
    return new Map([
      ..._language_model_js__WEBPACK_IMPORTED_MODULE_0__["default"].featureValues,
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.grmCase,
        [
          // TODO Valid Values for case for gez
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.number,
        [
          // TODO Valid Values for number for gez
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.gender,
        [
          // TODO Valid Values for gender for gez
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.mood,
        [
          // TODO Valid Values for mood for gez
        ]
      ]
    ])
  }

  static get typeFeatures () {
    if (!typeFeaturesInitialized) { this.initTypeFeatures() }
    return typeFeatures
  }

  static initTypeFeatures () {
    for (const featureName of this.featureNames) {
      typeFeatures.set(featureName, this.getFeature(featureName))
    }
    typeFeaturesInitialized = true
  }

  /**
   * Check to see if this language tool can produce an inflection table display
   * for the current node
   */
  static canInflect (node) {
    return false
  }

  /**
   * Returns alternate encodings for a word
   * @param {string} word the word
   * @param {string} preceding optional preceding word
   * @param {string} following optional following word
   * @param {string} encoding optional encoding name to filter the response to
   * @returns {Array} an array of alternate encodings
   */
  static alternateWordEncodings (word, preceding = null, following = null, encoding = null) {
    // Not implemented yet
    return []
  }

  /**
   * Get a list of valid puncutation for this language
   * @returns {String} a string containing valid puncutation symbols
   */
  static getPunctuation () {
    return "፡፨።፣፤፥፦፧፠,;:!?'\"(){}\\[\\]<>/\\\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u201C\u201D\u0387\u00B7\n\r"
  }
}


/***/ }),

/***/ "./greek_language_model.js":
/*!*********************************!*\
  !*** ./greek_language_model.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GreekLanguageModel; });
/* harmony import */ var _language_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language_model.js */ "./language_model.js");
/* harmony import */ var _language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language_model_factory.js */ "./language_model_factory.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./constants.js");
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature.js */ "./feature.js");





let typeFeatures = new Map()
let typeFeaturesInitialized = false
/**
 * @class  LatinLanguageModel is the lass for Latin specific behavior
 */
class GreekLanguageModel extends _language_model_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get languageID () { return _constants_js__WEBPACK_IMPORTED_MODULE_2__["LANG_GREEK"] }
  static get languageCode () { return _constants_js__WEBPACK_IMPORTED_MODULE_2__["STR_LANG_CODE_GRC"] }
  static get languageCodes () { return [_constants_js__WEBPACK_IMPORTED_MODULE_2__["STR_LANG_CODE_GRC"]] }
  static get contextForward () { return 0 }
  static get contextBackward () { return 0 }
  static get direction () { return _constants_js__WEBPACK_IMPORTED_MODULE_2__["LANG_DIR_LTR"] }
  static get baseUnit () { return _constants_js__WEBPACK_IMPORTED_MODULE_2__["LANG_UNIT_WORD"] }

  static get featureValues () {
    /*
    This could be a static variable, but then it will create a circular reference:
    Feature -> LanguageModelFactory -> LanguageModel -> Feature
     */
    return new Map([
      ..._language_model_js__WEBPACK_IMPORTED_MODULE_0__["default"].featureValues,
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.grmClass,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_DEMONSTRATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_GENERAL_RELATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_INDEFINITE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_INTENSIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_INTERROGATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_PERSONAL"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_POSSESSIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_RECIPROCAL"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_REFLEXIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_RELATIVE"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.number,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["NUM_SINGULAR"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["NUM_PLURAL"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["NUM_DUAL"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.grmCase,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CASE_NOMINATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CASE_GENITIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CASE_DATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CASE_ACCUSATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CASE_VOCATIVE"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.declension,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["ORD_1ST"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["ORD_2ND"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["ORD_3RD"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.tense,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["TENSE_PRESENT"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["TENSE_IMPERFECT"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["TENSE_FUTURE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["TENSE_PERFECT"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["TENSE_PLUPERFECT"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["TENSE_FUTURE_PERFECT"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["TENSE_AORIST"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.voice,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["VOICE_PASSIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["VOICE_ACTIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["VOICE_MEDIOPASSIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["VOICE_MIDDLE"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.mood,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["MOOD_INDICATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["MOOD_SUBJUNCTIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["MOOD_OPTATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["MOOD_IMPERATIVE"]
        ]
      ],
      [
        // TODO full list of greek dialects
        _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.dialect,
        [
          'attic',
          'epic',
          'doric'
        ]
      ]
    ])
  }

  static get typeFeatures () {
    if (!typeFeaturesInitialized) { this.initTypeFeatures() }
    return typeFeatures
  }

  static initTypeFeatures () {
    for (const featureName of this.featureNames) {
      typeFeatures.set(featureName, this.getFeature(featureName))
    }
    typeFeaturesInitialized = true
  }

  /**
   * Check to see if this language tool can produce an inflection table display
   * for the current node
   */
  static canInflect (node) {
    return true
  }

  /**
   * @override LanguageModel#grammarFeatures
   */
  static grammarFeatures () {
    // TODO this ideally might be grammar specific
    return [_feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.part, _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.grmCase, _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.mood, _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.declension, _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.tense, _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.voice]
  }

  /**
   * Return a normalized version of a word which can be used to compare the word for equality
   * @param {string} word the source word
   * @returns {string} the normalized form of the word (default version just returns the same word,
   *          override in language-specific subclass)
   * @type string
   */
  static normalizeWord (word) {
    // we normalize greek to NFC - Normalization Form Canonical Composition
    if (word) {
      return word.normalize('NFC')
    } else {
      return word
    }
  }

  /**
   * @override LanguageModel#alternateWordEncodings
   */
  static alternateWordEncodings (word, preceding = null, following = null, encoding = null) {
    // the original alpheios code used the following normalizations
    // 1. When looking up a lemma
    //    stripped vowel length
    //    stripped caps
    //    then if failed, tried again with out these
    // 2. when adding to a word list
    //    precombined unicode (vowel length/diacritics preserved)
    // 2. When looking up a verb in the verb paradigm tables
    //    it set e_normalize to false, otherwise it was true...
    if (!word) {
      return []
    }
    // make sure it's normalized to NFC and in lower case
    let normalized = GreekLanguageModel.normalizeWord(word).toLocaleLowerCase()
    let strippedVowelLength = normalized.replace(
      /[\u{1FB0}\u{1FB1}]/ug, '\u{03B1}').replace(
      /[\u{1FB8}\u{1FB9}]/ug, '\u{0391}').replace(
      /[\u{1FD0}\u{1FD1}]/ug, '\u{03B9}').replace(
      /[\u{1FD8}\u{1FD9}]/ug, '\u{0399}').replace(
      /[\u{1FE0}\u{1FE1}]/ug, '\u{03C5}').replace(
      /[\u{1FE8}\u{1FE9}]/ug, '\u{03A5}').replace(
      /[\u{00AF}\u{0304}\u{0306}]/ug, '')
    let strippedDiaeresis = normalized.replace(
      /\u{0390}/ug, '\u{03AF}').replace(
      /\u{03AA}/ug, '\u{0399}').replace(
      /\u{03AB}/ug, '\u{03A5}').replace(
      /\u{03B0}/ug, '\u{03CD}').replace(
      /\u{03CA}/ug, '\u{03B9}').replace(
      /\u{03CB}/ug, '\u{03C5}').replace(
      /\u{1FD2}/ug, '\u{1F76}').replace(
      /\u{1FD3}/ug, '\u{1F77}').replace(
      /\u{1FD7}/ug, '\u{1FD6}').replace(
      /\u{1FE2}/ug, '\u{1F7A}').replace(
      /\u{1FE3}/ug, '\u{1F7B}').replace(
      /\u{1FE7}/ug, '\u{1FE6}').replace(
      /\u{1FC1}/ug, '\u{1FC0}').replace(
      /\u{1FED}/ug, '\u{1FEF}').replace(
      /\u{1FEE}/ug, '\u{1FFD}').replace(
      /[\u{00A8}\u{0308}]/ug, '')
    // to strip diacritics, rather than list all possible combined vowels with
    // diacritis, decompose, remove the combining accents, and then recompose
    let strippedDiacritics = normalized.normalize('NFD').replace(
      /[\u{300}\u{0301}\u{0304}\u{0306},\u{342}]/ug, '').normalize('NFC')
    if (encoding === 'strippedDiaeresis') {
      return [strippedDiaeresis]
    } else if (encoding === 'strippedDiacritics') {
      return [strippedDiacritics]
    } else {
      return [strippedVowelLength]
    }
  }

  /**
   * Get a list of valid puncutation for this language
   * @returns {String} a string containing valid puncutation symbols
   */
  static getPunctuation () {
    return '.,;:!?"(){}\\[\\]<>/\\\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u201C\u201D\u0387\u00B7\n\r'
  }

  /**
   * Sets inflection grammar properties based on its characteristics
   * @param {Inflection} inflection - An inflection object
   * @return {Object} Inflection properties
   */
  static getInflectionConstraints (inflection) {
    let constraints = {
      fullFormBased: false,
      suffixBased: false,
      pronounClassRequired: false
    }
    let formBasedList = [_constants_js__WEBPACK_IMPORTED_MODULE_2__["POFS_PRONOUN"], _constants_js__WEBPACK_IMPORTED_MODULE_2__["POFS_NUMERAL"], _constants_js__WEBPACK_IMPORTED_MODULE_2__["POFS_ARTICLE"]]
    if (inflection.hasOwnProperty(_feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.part)) {
      if (formBasedList.includes(inflection[_feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.part].value)) {
        constraints.fullFormBased = true
      } else {
        constraints.suffixBased = true
      }
    } else {
      console.warn(`Unable to set grammar: part of speech data is missing or is incorrect`, inflection[_feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.part])
    }

    constraints.pronounClassRequired =
      _language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"].compareLanguages(GreekLanguageModel.languageID, inflection.languageID) &&
      inflection.hasOwnProperty(_feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.part) &&
      inflection[_feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.part].value === _constants_js__WEBPACK_IMPORTED_MODULE_2__["POFS_PRONOUN"]

    return constraints
  }

  /**
   * Determines a class of a given word (pronoun) by finding a matching word entry(ies)
   * in a pronoun source info (`forms`) and getting a single or multiple classes of those entries.
   * Some morphological analyzers provide class information that is unreliable or do not
   * provide class information at all. However, class information is essential in
   * deciding in what table should pronouns be grouped. For this, we have to
   * determine pronoun classes using this method.
   * @param {Form[]} forms - An array of known forms of pronouns.
   * @param {string} word - A word we need to find a matching class for.
   * @param {boolean} normalize - Whether normalized forms of words shall be used for comparison.
   * @return {Feature} Matching classes found within a Feature objects. If no matching classes found,
   * returns undefined.
   */
  static getPronounClasses (forms, word, normalize = true) {
    let matchingValues = new Set() // Will eliminate duplicated values
    let matchingForms = forms.filter(
      form => {
        let match = false
        if (form.value) {
          match = GreekLanguageModel.compareWords(form.value, word, normalize)
        }
        return match
      }
    )
    for (const matchingForm of matchingForms) {
      if (matchingForm.features.hasOwnProperty(_feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.grmClass)) {
        for (const value of matchingForm.features[_feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.grmClass].values) {
          matchingValues.add(value)
        }
      }
    }
    if (matchingValues.size > 0) {
      return new _feature_js__WEBPACK_IMPORTED_MODULE_3__["default"](_feature_js__WEBPACK_IMPORTED_MODULE_3__["default"].types.grmClass, Array.from(matchingValues), GreekLanguageModel.languageID)
    }
  }

  /**
   * @override LanguageModel#compareWords
   */
  static compareWords (wordA, wordB, normalize = true) {
    let matched = false
    if (normalize) {
      let altWordA = GreekLanguageModel.alternateWordEncodings(wordA, null, null, 'strippedDiacritics')
      let altWordB = GreekLanguageModel.alternateWordEncodings(wordB, null, null, 'strippedDiacritics')
      for (let i = 0; i < altWordA.length; i++) {
        matched = altWordA[i] === altWordB[i]
        if (matched) {
          break
        }
      }
      if (!matched) {
        matched = GreekLanguageModel.normalizeWord(wordA) === GreekLanguageModel.normalizeWord(wordB)
      }
    } else {
      matched = wordA === wordB
    }
    return matched
  }
}


/***/ }),

/***/ "./grm-feature.js":
/*!************************!*\
  !*** ./grm-feature.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _language_model_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language_model_factory.js */ "./language_model_factory.js");
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature.js */ "./feature.js");



/**
 * Wrapper class for a (grammatical, usually) feature, such as part of speech or declension. Keeps both value and type information.
 */
class GrmFeature {
  /**
   * @deprecated Use Feature instead
   * Initializes a Feature object
   * @param {string | string[]} value - A single feature value or, if this feature could have multiple
   * values, an array of values.
   * Multiple values do not allow to use a sort order. Because of this, it's better to use
   * array of multiple Feature objects with single value each instead of a single Feature object
   * with multiple values.
   * Multiple values are left for backward compatibility only. Please do not use them as they
   * will be removed in the future.
   * @param {string} type - A type of the feature, allowed values are specified in 'types' object.
   * @param {string | symbol} language - A language of a feature, allowed values are specified in 'languages' object.
   * @param {int} sortOrder - an integer used for sorting
   */
  constructor (value, type, language, sortOrder = 1) {
    if (!GrmFeature.types.isAllowed(type)) {
      throw new Error('Features of "' + type + '" type are not supported.')
    }
    if (!value) {
      throw new Error('Feature should have a non-empty value.')
    }
    if (!type) {
      throw new Error('Feature should have a non-empty type.')
    }
    if (!language) {
      throw new Error('Feature constructor requires a language')
    }
    this.value = value
    this.type = type
    this.languageID = undefined
    this.languageCode = undefined
    ;({ languageID: this.languageID, languageCode: this.languageCode } = _language_model_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLanguageAttrs(language))
    this.sortOrder = sortOrder
  }

  /**
   * This is a compatibility function for legacy code.
   * @return {String} A language code.
   */
  get language () {
    console.warn(`Please use a "languageID" instead of a "language"`)
    return this.languageCode
  }

  isEqual (feature) {
    if (Array.isArray(feature.value)) {
      // `feature` is a single object with multiple `value` properties. This feature will be sunset
      // as it does not allow to use sort order on Feature objects.
      if (!Array.isArray(this.value) || this.value.length !== feature.value.length) {
        return false
      }
      let equal = this.type === feature.type && _language_model_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"].compareLanguages(this.languageID, feature.languageID)
      equal = equal && this.value.every(function (element, index) {
        return element === feature.value[index]
      })
      return equal
    } else {
      return _language_model_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"].compareLanguages(this.languageID, feature.languageID) && this.type === feature.type && this.value === feature.value
    }
  }

  isSubsetof (features) {
    if (!Array.isArray(features)) {
      features = [features] // If `features` is a single value, convert it to an array (a more general case)
    }
    // `feature` is an array of feature objects with (possibly) each having a single feature value.
    let languageID = features[0].languageID // Assume all Feature objects have the same language ID
    let type = features[0].type // Assume all Feature objects have the same type
    let values = features.map(f => f.value)
    if (_language_model_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"].compareLanguages(this.languageID, languageID) && this.type === type && values.includes(this.value)) {
      return true
    }
    return false
  }

  /**
   * examine the feature for a specific value
   * @param {string} value
   * @returns {boolean} true if the value is included in the feature's values
   */
  hasValue (value) {
    if (Array.isArray(this.value)) {
      return this.value.includes(value)
    } else {
      return this.value === value
    }
  }

  /**
   * string representation of a feature
   * @return {string}
   */
  toString () {
    if (Array.isArray(this.value)) {
      return this.value.join(',')
    } else {
      return this.value
    }
  }

  static toFeature (sourceFeature) {
    if (Array.isArray(sourceFeature)) {
      if (!(sourceFeature[0] instanceof _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"])) {
        const type = sourceFeature[0].type
        const languageID = sourceFeature[0].languageID
        const values = sourceFeature.map(v => v.value)
        return new _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"](type, values, languageID)
      }
    } else {
      if (!(sourceFeature instanceof _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"])) {
        return new _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"](sourceFeature.type, sourceFeature.value, sourceFeature.languageID)
      }
    }
    return sourceFeature
  }
}
// Should have no spaces in values in order to be used in HTML templates
GrmFeature.types = {
  word: 'word',
  part: 'part of speech', // Part of speech
  number: 'number',
  'case': 'case',
  grmCase: 'case', // A synonym of `case`
  declension: 'declension',
  gender: 'gender',
  type: 'type',
  'class': 'class',
  grmClass: 'class', // A synonym of `class`
  conjugation: 'conjugation',
  comparison: 'comparison',
  tense: 'tense',
  voice: 'voice',
  mood: 'mood',
  person: 'person',
  frequency: 'frequency', // How frequent this word is
  meaning: 'meaning', // Meaning of a word
  source: 'source', // Source of word definition
  footnote: 'footnote', // A footnote for a word's ending
  dialect: 'dialect', // a dialect identifier
  note: 'note', // a general note
  pronunciation: 'pronunciation',
  age: 'age',
  area: 'area',
  geo: 'geo', // geographical data
  kind: 'kind', // verb kind information
  derivtype: 'derivtype',
  stemtype: 'stemtype',
  morph: 'morph', // general morphological information
  var: 'var', // variance?
  isAllowed (value) {
    let v = `${value}`
    return Object.values(this).includes(v)
  }
}
/* harmony default export */ __webpack_exports__["default"] = (GrmFeature);


/***/ }),

/***/ "./homonym.js":
/*!********************!*\
  !*** ./homonym.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _language_model_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language_model_factory */ "./language_model_factory.js");
/* harmony import */ var _lexeme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lexeme.js */ "./lexeme.js");
/* harmony import */ var _lemma_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lemma.js */ "./lemma.js");




class Homonym {
  /**
   * Initializes a Homonym object.
   * @param {Lexeme[]} lexemes - An array of Lexeme objects.
   * @param {string} form - the form which produces the homonyms
   */
  constructor (lexemes, form) {
    if (!lexemes || (Array.isArray(lexemes) && lexemes.length === 0)) {
      throw new Error('Lexemes data should not be empty.')
    }

    if (!Array.isArray(lexemes)) {
      throw new Error('Lexeme data should be provided in an array.')
    }

    for (let lexeme of lexemes) {
      if (!(lexeme instanceof _lexeme_js__WEBPACK_IMPORTED_MODULE_1__["default"])) {
        throw new Error('All lexeme data should be of Lexeme object type.')
      }
    }

    this.lexemes = lexemes
    this.targetWord = form
  }

  /**
   * Creates a simple form of inflection with one lexeme and zero or more inflections
   * attached to it. The lexeme will have lemma whose `word` will be set to
   * a homonym's target word.
   * @param {string} word - A word that will populate homonym's `targetWord` prop and lemma `word` one.
   * @param {symbol} languageID - A language identificator as defined in Constants.LANG_XXX.
   * @param {Inflection[]} inflections - Zero or more inflection objects that will be attached to the lexeme
   * @return {Homonym} A newly created homonym object.
   */
  static createSimpleForm (word, languageID, inflections = []) {
    let lemma = new _lemma_js__WEBPACK_IMPORTED_MODULE_2__["default"](word, languageID)
    let lexeme = new _lexeme_js__WEBPACK_IMPORTED_MODULE_1__["default"](lemma, inflections)
    return new Homonym([lexeme], word)
  }

  static readObject (jsonObject) {
    let lexemes = []
    if (jsonObject.lexemes) {
      for (let lexeme of jsonObject.lexemes) {
        lexemes.push(_lexeme_js__WEBPACK_IMPORTED_MODULE_1__["default"].readObject(lexeme))
      }
    }
    let homonym = new Homonym(lexemes, jsonObject.form)
    return homonym
  }

  convertToJSONObject (addMeaning = false) {
    let resultHomonym = { lexemes: [], form: this.targetWord }
    for (let lexeme of this.lexemes) {
      resultHomonym.lexemes.push(lexeme.convertToJSONObject(addMeaning))
    }
    return resultHomonym
  }

  /**
   * Returns a language code of a homonym (ISO 639-3).
   * Homonym does not have a language property, only lemmas and inflections do. We assume that all lemmas
   * and inflections within the same homonym will have the same language, and we can determine a language
   * by using language property of the first lemma. We chan change this logic in the future if we'll need to.
   * @returns {string} A language code, as defined in the `languages` object.
   */
  get language () {
    console.warn(`Please use languageID instead`)
    return _language_model_factory__WEBPACK_IMPORTED_MODULE_0__["default"].getLanguageCodeFromId(this.languageID)
  }

  /**
   * Returns a language ID of a homonym.
   * Homonym does not have a languageID property, only lemmas and inflections do. We assume that all lemmas
   * and inflections within the same homonym will have the same language, and we can determine a language
   * by using languageID property of the first lemma. We chan change this logic in the future if we'll need to.
   * @returns {Symbol} A language ID, as defined in the `LANG_` constants.
   */
  get languageID () {
    if (this.lexemes && this.lexemes[0] && this.lexemes[0].lemma && this.lexemes[0].lemma.languageID) {
      return this.lexemes[0].lemma.languageID
    } else {
      throw new Error('Homonym has not been initialized properly. Unable to obtain language ID information.')
    }
  }

  /**
   * Returns a list of all inflections within all lexemes of a homonym
   * @return {Inflection[]} An array of inflections
   */
  get inflections () {
    let inflections = []
    for (const lexeme of this.lexemes) {
      inflections = inflections.concat(lexeme.inflections)
    }
    return inflections
  }

  isDisambiguated () {
    return this.lexemes.filter(l => l.disambiguated).length > 0
  }

  /**
   * Disambiguate homymyn objects with another
   * @param {Homonym} base the homonym to use to disambiguate
   * @param {Homonym[]} disambiguators the homonyms to use to disambiguate
   */
  static disambiguate (base, disambiguators) {
    if (disambiguators.length === 0) {
      // nothing left to disamibugate with
      return base
    }
    let disambiguator = disambiguators.shift()
    let lexemes = []
    let missedLexemes = []
    // iterate through the lexemes in the disambiguator and try
    // to disambiguate the existing lexemes with each
    for (let otherLexeme of disambiguator.lexemes) {
      let lexemeMatched = false
      for (let lexeme of base.lexemes) {
        let newLex = _lexeme_js__WEBPACK_IMPORTED_MODULE_1__["default"].disambiguate(lexeme, otherLexeme)
        lexemes.push(newLex)
        if (newLex.disambiguated) {
          lexemeMatched = true
        }
      }
      // if we couldn't find a matching lexeme, add the disambigutor's lexemes
      // to the list of lexemes for the new Homonym
      if (!lexemeMatched) {
        otherLexeme.disambiguated = true
        missedLexemes.push(otherLexeme)
      }
    }
    // create a new homonym with the disamibugated lexemes
    let newHom = new Homonym([...lexemes, ...missedLexemes], base.targetWord)
    return Homonym.disambiguate(newHom, disambiguators)
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Homonym);


/***/ }),

/***/ "./inflection.js":
/*!***********************!*\
  !*** ./inflection.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature.js */ "./feature.js");
/* harmony import */ var _language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language_model_factory.js */ "./language_model_factory.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./constants.js");



/*
 Hierarchical structure of return value of a morphological analyzer:

 Homonym (a group of words that are written the same way, https://en.wikipedia.org/wiki/Homonym)
    Lexeme 1 (a unit of lexical meaning, https://en.wikipedia.org/wiki/Lexeme)
        Have a lemma and one or more inflections
        Lemma (also called a headword, a canonical form of a group of words https://en.wikipedia.org/wiki/Lemma_(morphology) )
        Inflection 1
            Stem
            Suffix (also called ending)
        Inflection 2
            Stem
            Suffix
    Lexeme 2
        Lemma
        Inflection 1
            Stem
            Suffix
 */

/**
 * Represents an inflection of a word
 */
class Inflection {
  /**
     * Initializes an Inflection object.
     * @param {string} stem - A stem of a word.
     * @param {string | symbol} language - A word's language.
     * @param {string} suffix - a suffix of a word
     * @param {prefix} prefix - a prefix of a word
     * @param {example} example - example
     */
  constructor (stem = null, language, suffix = null, prefix = null, example = null) {
    if (!stem && !suffix) {
      throw new Error('At least stem or suffix must be defined')
    }
    if (!language) {
      throw new Error('Language should not be empty.')
    }

    if (!_language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"].supportsLanguage(language)) {
      throw new Error(`language ${language} not supported.`)
    }

    this.stem = stem
    this.languageID = undefined
    this.languageCode = undefined
    ;({ languageID: this.languageID, languageCode: this.languageCode } = _language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLanguageAttrs(language))
    this.model = _language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLanguageModel(this.languageID)
    this.features = new Set() // Stores names of features of this inflection, feature objects themselves are stored as props

    // TODO: Separate constraints to a class of its own to share definition with language model and provide `clone()` method?
    // A grammar constraints object
    this.constraints = {
      fullFormBased: false, // True this inflection stores and requires to use a full form of a word
      suffixBased: false, // True if only suffix is enough to identify this inflection
      irregular: false, // Whether this word is an irregular one
      obligatoryMatches: [], // {string[]} Names of features that should be matched in order to include a form or suffix to an inflection table
      optionalMatches: [], // {string[]} Names of features that will be recorded but are not important for inclusion of a form or suffix to an inflection table
      morphologyMatches: [] // {string[]} These features should match for a morphology match
    }

    // Suffix may not be present in every word. If missing, it will be set to null.
    this.suffix = suffix

    // Prefix may not be present in every word. If missing, it will be set to null.
    this.prefix = prefix

    // Example may not be provided
    this.example = example

    // A lemma this inflection belongs to. Is set by `Lexeme.addInflection()`
    // TODO: make sure inflections are not set directly or this data will not be set
    this.lemma = null
  }

  clone () {
    let clone = new Inflection(this.stem, this.languageID, this.suffix, this.prefix, this.example)
    // Features are not modified right now so we can share them
    clone.addFeatures(Array.from(this.features).map(f => this[f]))
    clone.constraints = {
      fullFormBased: this.constraints.fullFormBased,
      suffixBased: this.constraints.suffixBased,
      irregular: this.constraints.irregular,
      obligatoryMatches: this.constraints.obligatoryMatches ? Array.from(this.constraints.obligatoryMatches) : [],
      optionalMatches: this.constraints.obligatoryMatches ? Array.from(this.constraints.obligatoryMatches) : [],
      morphologyMatches: this.constraints.morphologyMatches ? Array.from(this.constraints.morphologyMatches) : []
    }
    // A clone will share the same lexeme with an original item
    clone.lemma = this.lemma
    return clone
  }

  /**
   * Returns a full form of a word using ' - ' as a divider for suffix-based inflections.
   * @return {string} A word form.
   */
  get form () {
    const divider = this.stem ? ' - ' : ''
    return this.getForm(divider)
  }

  /**
   * Returns a full form of a word using user specified divider for suffix-based inflections.
   * @param {string} divider - A divider to use between stem and suffix.
   * @return {string} A word form.
   */
  getForm (divider = '') {
    let form, prefix, suffix

    let stem = this.stem ? this.stem : ''

    if (this.model.direction === _constants_js__WEBPACK_IMPORTED_MODULE_2__["LANG_DIR_RTL"]) {
      prefix = this.prefix ? divider + this.prefix : ''
      suffix = this.suffix ? this.suffix + divider : ''

      form = suffix + stem + prefix
    } else {
      prefix = this.prefix ? this.prefix + divider : ''
      suffix = this.suffix ? divider + this.suffix : ''

      form = prefix + stem + suffix
    }

    return form
  }

  /**
   * This is a compatibility function for legacy code.
   * @return {String} A language code.
   */
  get language () {
    console.warn(`Please use a "languageID" instead of a "language"`)
    return this.languageCode
  }

  /**
   * Sets grammar properties based on inflection info
   */
  setConstraints () {
    if (this.model.hasOwnProperty('getInflectionConstraints')) {
      let constraintData = this.model.getInflectionConstraints(this)
      this.constraints = Object.assign(this.constraints, constraintData)
    }
  }

  /**
   * Compares if two words are the same. Options allows to specify
   * comparison algorithms for cases when word info is not fully correct.
   * @param {string} word - A word or suffix to compare with inflection.
   * @param {string} className - A type of word: 'Suffix' or "Form'.
   * @param {comparison} options - These settings define comparison algorithm:
   *        'normalize' - normalize word and inflection before comparison.
   *        'fuzzySuffix' - if suffix contained in a 'word' does not match our suffix data,
   *                        try to find a match by checking if inflection full form
   *                        ends with this suffix.
   * @return {boolean} True for match, false otherwise.
   */
  smartWordCompare (word, className, options = {}) {
    // Default values
    if (!options.hasOwnProperty(`normalize`)) { options.normalize = true }
    if (!options.hasOwnProperty(`fuzzySuffix`)) { options.fuzzySuffix = false }

    let value
    if (!this.constraints.irregular) {
      value = this.constraints.suffixBased ? this.suffix : this.form
    } else {
      if (className === 'Suffix') {
        value = this.suffix
      } else {
        value = this[_feature_js__WEBPACK_IMPORTED_MODULE_0__["default"].types.fullForm] ? this[_feature_js__WEBPACK_IMPORTED_MODULE_0__["default"].types.fullForm].value : this.form
      }
    }

    let matchResult = this.modelCompareWords(word, value, options.normalize)

    if (!matchResult && className === 'Suffix' && options.fuzzySuffix) {
      let form = this.getForm()
      if (form && word && form.length >= word.length) {
        let altSuffix = form.substring(form.length - word.length)
        matchResult = this.modelCompareWords(word, altSuffix, options.normalize)
      }
    }

    return matchResult
  }

  compareWithWord (word, normalize = true) {
    const value = this.constraints.suffixBased ? this.suffix : this.form
    return this.modelCompareWords(word, value, normalize)
  }

  /**
   * Compare to words (or partial words) delegating to the language model
   * rules for normalization
   * @param {String} wordA the first word
   * @param {String} wordB the second word
   * @param {Boolean} normalize whether or not to apply normalization
   */
  modelCompareWords (wordA, wordB, normalize = true) {
    const model = _language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLanguageModel(this.languageID)
    return model.compareWords(wordA, wordB, normalize)
  }

  /**
   * Check to see if the supplied inflection can disambiguate this one
   * @param {Inflection} infl Inflection object to be used for disambiguation
   */
  disambiguatedBy (infl) {
    let matched = true
    // an inflection can only be disambiguated by its features
    if (this.features.length === 0 || infl.features.length === 0) {
      matched = false
    }
    // the supplied inflection can be less specific but not more
    if (infl.features.length > this.features.length) {
      matched = false
    }
    for (let feature of infl.features) {
      if (!this[feature] || !this[feature].isEqual(infl[feature])) {
        matched = false
        break
      }
    }
    return matched
  }

  /**
   * @deprecated Use `addFeature` instead
   * Sets a grammatical feature in an inflection. Some features can have multiple values, In this case
   * an array of Feature objects will be provided.
   * Values are taken from features and stored in a 'feature.type' property as an array of values.
   * @param {Feature | Feature[]} data
   */
  set feature (data) {
    console.warn(`Please use "addFeature" instead.`)
    if (!data) {
      throw new Error('Inflection feature data cannot be empty.')
    }
    if (!Array.isArray(data)) {
      data = [data]
    }

    let type = data[0].type
    this[type] = []
    for (let element of data) {
      if (!(element instanceof _feature_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
        throw new Error('Inflection feature data must be a Feature object.')
      }

      if (!_language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"].compareLanguages(element.languageID, this.languageID)) {
        throw new Error(`Language "${element.languageID.toString()}" of a feature does not match
          a language "${this.languageID.toString()}" of an Inflection object.`)
      }

      this[type].push(element)
      this.features.add(type)
    }
  }

  /**
   * Sets a grammatical feature of an inflection. Feature is stored in a `feature.type` property.
   * @param {Feature} feature - A feature object with one or multiple values.
   */
  addFeature (feature) {
    if (!feature) {
      throw new Error('feature data cannot be empty.')
    }

    if (!(feature instanceof _feature_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
      throw new Error('feature data must be a Feature object.')
    }

    if (!_language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"].compareLanguages(feature.languageID, this.languageID)) {
      throw new Error('Language "' + feature.languageID.toString() + '" of a feature does not match a language "' +
        this.languageID.toString() + '" of a Lemma object.')
    }

    this[feature.type] = feature
    this.features.add(feature.type)
  }

  /**
   * Sets multiple grammatical features of an inflection.
   * @param {Feature[]} features - Features to be added.
   */
  addFeatures (features) {
    if (!Array.isArray(features)) {
      throw new Error(`Features must be in an array`)
    }

    for (let feature of features) {
      this.addFeature(feature)
    }
  }

  /**
   * Checks whether an inflection has a feature with `featureName` name and `featureValue` value
   * @param {string} featureName - A name of a feature
   * @param {string} featureValue - A value of a feature
   * @return {boolean} True if an inflection contains a feature, false otherwise
   */
  hasFeatureValue (featureName, featureValue) {
    if (this.hasOwnProperty(featureName)) {
      return this[featureName].values.includes(featureValue)
    }
    return false
  }

  toString () {
    let string = `Inflection stem: ${this.stem}, prefix: ${this.prefix}, suffix: ${this.suffix}, langID: ${this.languageID.toString()}\n  features:  `
    for (const feature of this.features.values()) {
      string += `${feature}: ${this[feature].value}, `
    }
    string += `\n  constraints:  `
    for (const [key, value] of Object.entries(this.constraints)) {
      if (Array.isArray(value)) {
        string += `${key}: [${value}], `
      } else {
        string += `${key}: ${value}, `
      }
    }
    string += `\n  example: ${this.example}`
    return string
  }

  static readObject (jsonObject, lemma) {
    let inflection =
      new Inflection(
        jsonObject.stem, jsonObject.languageCode, jsonObject.suffix, jsonObject.prefix, jsonObject.example)
    inflection.languageID = _language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLanguageIdFromCode(inflection.languageCode)

    if (jsonObject.features && jsonObject.features.length > 0) {
      jsonObject.features.forEach(featureSource => {
        inflection.addFeature(_feature_js__WEBPACK_IMPORTED_MODULE_0__["default"].readObject(featureSource))
      })
    }
    if (lemma) {
      inflection.lemma = lemma
    }
    return inflection
  }

  convertToJSONObject () {
    let resultFeatures = []
    for (let key of this.features.keys()) {
      resultFeatures.push(this[key].convertToJSONObject())
    }
    let languageCode = _language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLanguageCodeFromId(this.languageID)
    return {
      stem: this.stem,
      languageCode: languageCode,
      suffix: this.suffix,
      prefix: this.prefix,
      example: this.example,
      features: resultFeatures
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Inflection);


/***/ }),

/***/ "./inflection_group.js":
/*!*****************************!*\
  !*** ./inflection_group.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class InflectionGroup {
  /**
   * A group of inflections or groups of inflections
   *
   * @param {InflectionGroupingKey} groupingKey features of the inflections in the group
   * @param {Inflection[]|InflectionGroup[]} inflections array of Inflections or InflectionGroups in this group
   */
  constructor (groupingKey, inflections = [], sortKey = null) {
    this.groupingKey = groupingKey
    this.inflections = inflections
  }

  /**
   * Add an Inflection or InflectionGroup to the group
   * @param {Inflection|InflectionGroup} inflection
   */
  append (inflection) {
    this.inflections.push(inflection)
  }
}
/* harmony default export */ __webpack_exports__["default"] = (InflectionGroup);


/***/ }),

/***/ "./inflection_grouping_key.js":
/*!************************************!*\
  !*** ./inflection_grouping_key.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature.js */ "./feature.js");


class InflectionGroupingKey {
  /**
   * @constructor
   * @param {Inflection} infl inflection with features which are used as a grouping key
   * @param {string[]} features array of feature names which are used as the key
   * @param {Object} extras extra property name and value pairs used in the key
   */
  constructor (infl, features, extras = {}) {
    for (let feature of features) {
      this[feature] = infl[feature]
    }
    Object.assign(this, extras)
  }

  /**
   * checks if a feature with a specific value
   * is included in the grouping key
   * @returns {boolean} true if found, false if not
   */
  hasFeatureValue (feature, value) {
    if (this.hasOwnProperty(feature)) {
      return this[feature].values.includes(value)
    }
    return false
  }

  /**
   * Return this key as a string
   * @returns {string} string representation of the key
   */
  toString () {
    let values = []
    for (let prop of Object.getOwnPropertyNames(this).sort()) {
      // A prop can be either a Feature object, or a one of the extras of a string type
      let value = (this[prop] instanceof _feature_js__WEBPACK_IMPORTED_MODULE_0__["default"]) ? this[prop].values.sort().join(',') : this[prop]
      values.push(value)
    }
    return values.join(' ')
  }
}

/* harmony default export */ __webpack_exports__["default"] = (InflectionGroupingKey);


/***/ }),

/***/ "./language_model.js":
/*!***************************!*\
  !*** ./language_model.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./constants.js");
/* harmony import */ var _language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language_model_factory.js */ "./language_model_factory.js");
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature.js */ "./feature.js");
/* harmony import */ var _feature_type_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature_type.js */ "./feature_type.js");
/* harmony import */ var _inflection_grouping_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inflection_grouping_key.js */ "./inflection_grouping_key.js");
/* harmony import */ var _inflection_group_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inflection_group.js */ "./inflection_group.js");







/**
 * @class  LanguageModel is the base class for language-specific behavior
 */
class LanguageModel {
  constructor () {
    // This is just to avoid JavaScript Standard error on `context_backward` getter name. Don't need a constructor otherwise
    // TODO: `contextBackward` shall be used instead of `context_backward` wherever it is used
    this.context_backward = LanguageModel.contextBackward
  }

  static get contextForward () { return 0 }
  static get contextBackward () { return 0 }
  static get direction () { return _constants_js__WEBPACK_IMPORTED_MODULE_0__["LANG_DIR_LTR"] }
  static get baseUnit () { return _constants_js__WEBPACK_IMPORTED_MODULE_0__["LANG_UNIT_WORD"] }

  /**
   * @deprecated
   */
  get contextForward () {
    console.warn(`Please use static "contextForward" instead`)
    return this.constructor.contextForward
  }

  /**
   * @deprecated
   */
  get contextBackward () {
    console.warn(`Please use static "contextBackward" instead`)
    return this.constructor.contextBackward
  }

  /**
   * @deprecated
   */
  get direction () {
    console.warn(`Please use static "direction" instead`)
    return this.constructor.direction
  }

  /**
   * @deprecated
   */
  get baseUnit () {
    console.warn(`Please use static "baseUnit" instead`)
    return this.constructor.baseUnit
  }

  /**
   * @deprecated
   */
  get features () {
    console.warn(`Please use individual "getFeatureType" or static "features" instead`)
    return this.constructor.features
  }

  /**
   * Returns a list of names of feature types that are defined in a language model.
   * @return {string[]} Names of features that are defined in a model.
   */
  static get featureNames () {
    return this.featureValues.keys()
  }

  /**
   * Returns a feature a `featureType` name that is defined for a language. It does not create a new Feature
   * object instance. It returns the one defined in a language model. To get a new instance of a Feature
   * object, use `getFeature` instead.
   * If no feature of `featureType` is defined in a language model, throws an error.
   * @param {string} featureType - A feature type name.
   * @return {Feature} A feature object of requested type.
   */
  static typeFeature (featureType) {
    if (this.typeFeatures.has(featureType)) {
      return this.typeFeatures.get(featureType)
    } else {
      throw new Error(`Type feature "${featureType}" is not defined within "${this}"`)
    }
  }

  /**
   * Returns a map with Feature objects of all features defined in a language. Use this method to get all
   * Feature objects defined in a language model.
   * @return {Map} Feature objects for all features defined within a language in a Map object. The key is
   * a feature type (a string), and the value is a Feature object.
   */
  static get typeFeatures () {
    console.warn(`This getter must be defined in a descendant class`)
  }

  static get features () {
    let features = {}
    for (const featureName of this.featureNames) {
      features[featureName] = this.getFeature(featureName)
    }
    return features
  }

  static get languageID () {
    return _constants_js__WEBPACK_IMPORTED_MODULE_0__["LANG_UNDEFINED"]
  }

  static get languageCode () {
    return _constants_js__WEBPACK_IMPORTED_MODULE_0__["STR_LANG_CODE_UNDEFINED"]
  }

  /**
   * Returns an array of language codes that represents the language.
   * @return {String[]} An array of language codes that matches the language.
   */
  static get languageCodes () {
    return []
  }

  static get codes () {
    console.warn(`Use static "languageCodes" instead`)
    return this.languageCodes
  }

  /**
   * @deprecated
   * @return {String[]}
   */
  get codes () {
    console.warn(`Please use a static version of "codes" instead`)
    return this.constructor.languageCodes
  }

  /**
   * @deprecated
   * @return {string}
   */
  toCode () {
    console.warn(`Please use a static "languageCode" instead`)
    return this.constructor.languageCode
  }

  /**
   * @deprecated
   * @return {string}
   */
  static toCode () {
    console.warn(`Please use a static "languageCode" instead`)
    return this.languageCode
  }

  /**
   * Return a list of feature values that are allowed for each feature type
   * @return {Map<string, string[]>}
   */
  static get featureValues () {
    /*
    This could be a static variable, but then it will create a circular reference:
    Feature -> LanguageModelFactory -> LanguageModel -> Feature
     */
    return new Map([
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.part,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_ADVERB"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_ADVERBIAL"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_ADJECTIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_ARTICLE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_CONJUNCTION"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_EXCLAMATION"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_INTERJECTION"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_NOUN"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_NUMERAL"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_PARTICLE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_PREFIX"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_PREPOSITION"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_PRONOUN"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_SUFFIX"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_SUPINE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_VERB"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_VERB_PARTICIPLE"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.gender,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["GEND_MASCULINE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["GEND_FEMININE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["GEND_NEUTER"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.type,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["TYPE_REGULAR"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["TYPE_IRREGULAR"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.person,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["ORD_1ST"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["ORD_2ND"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["ORD_3RD"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.number,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["NUM_SINGULAR"],
          _constants_js__WEBPACK_IMPORTED_MODULE_0__["NUM_PLURAL"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.age,
        []
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.area,
        []
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.source,
        []
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.frequency,
        []
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.geo,
        []
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.pronunciation,
        []
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.kind,
        []
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.comparison,
        []
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.morph,
        []
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.stemtype,
        []
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.derivtype,
        []
      ]
    ])
  }

  /**
   * @deprecated
   * @return {symbol} Returns a language ID
   */
  static get sourceLanguage () {
    console.warn(`Please use languageID directly`)
    return this.languageID
  }

  /**
   * @deprecated
   * @return {symbol} Returns a language ID
   */
  get sourceLanguage () {
    console.warn(`Please use languageID directly`)
    return this.constructor.languageID
  }

  /**
   * @deprecated
   * @param name
   * @return {FeatureType}
   */
  static getFeatureType (name) {
    console.warn('Please use getFeature instead')
    let featureValues = this.featureValues
    if (featureValues.has(name)) {
      return new _feature_type_js__WEBPACK_IMPORTED_MODULE_3__["default"](name, featureValues.get(name), this.languageID)
    } else {
      throw new Error(`Feature "${name}" is not defined`)
    }
  }

  /**
   * Returns a new instance of a feature with `featureType`. It uses a feature defined in a language model
   * as a master.
   * @param {string} featureType - A name of a feature type.
   * @return {Feature} - A newly created Feature object.
   */
  static getFeature (featureType) {
    let featureValues = this.featureValues // To cache the values
    if (featureValues.has(featureType)) {
      let allowedValues = featureValues.get(featureType)
      return new _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"](featureType, allowedValues, this.languageID, 1, allowedValues)
    } else {
      throw new Error(`Feature "${featureType}" is not defined`)
    }
  }

  _initializeFeatures () {
    let features = {}
    for (const featureName of this.constructor.featureValues.keys()) {
      features[featureName] = this.constructor.getFeature(featureName)
    }
    return features
  }

  /**
   * @deprecated
   */
  grammarFeatures () {
    console.warn(`Please use a static version of "grammarFeatures" instead`)
    return this.constructor.grammarFeatures()
  }

  /**
   * Identify the morphological features which should be linked to a grammar.
   * @returns {String[]} Array of Feature types
   */
  static grammarFeatures () {
    return []
  }

  /**
   * Check to see if this language tool can produce an inflection table display
   * for the current node
   */
  static canInflect (node) {
    return false
  }

  /**
   * Check to see if the supplied language code is supported by this tool
   * @param {string} code the language code
   * @returns true if supported false if not
   * @type Boolean
   */
  static supportsLanguage (code) {
    return this.languageCodes.includes[code]
  }

  /**
   * Return a normalized version of a word which can be used to compare the word for equality
   * @param {string} word the source word
   * @returns the normalized form of the word (default version just returns the same word,
   *          override in language-specific subclass)
   * @type String
   */
  static normalizeWord (word) {
    return word
  }

  /**
   * Returns alternate encodings for a word
   * @param {string} word the word
   * @param {string} preceding optional preceding word
   * @param {string} following optional following word
   * @param {string} encoding optional encoding name to filter the response to
   * @returns {Array} an array of alternate encodings
   */
  static alternateWordEncodings (word, preceding = null, following = null, encoding = null) {
    return []
  }

  /**
   * Compare two words with language specific logic
   * @param {String} wordA
   * @param {String} wordB
   * @param {Boolean} normalize - whether or not to apply normalization algorithms
   */
  static compareWords (wordA, wordB, normalize = true) {
    if (normalize) {
      return this.normalizeWord(wordA) === this.normalizeWord(wordB)
    } else {
      return wordA === wordB
    }
  }

  alternateWordEncodings (word, preceding, following, encoding) {
    console.warn(`Please use static "alternateWordEncodings" instead`)
    return this.constructor.alternateWordEncodings(word, preceding, following, encoding)
  }

  /**
   * Get a list of valid puncutation for this language
   * @returns {String} a string containing valid puncutation symbols
   */
  static getPunctuation () {
    return '.,;:!?\'"(){}\\[\\]<>/\\\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u201C\u201D\u0387\u00B7\n\r'
  }

  /**
   * @deprecated
   * @return {String}
   */
  getPunctuation () {
    console.warn(`Please use a static version of "getPunctuation"`)
    return this.constructor.getPunctuation()
  }

  toString () {
    return String(this.constructor.languageCode)
  }

  isEqual (model) {
    return _language_model_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"].compareLanguages(this.languageID, model.languageID)
  }

  /*
  There are two types of language identificators: language IDs and language code. Language ID is a symbol constant
  defined in constants.js, such as LANG_LATIN or LANG_GREEK. Language code is a string containing (usually)
  a three-letter language codes such as 'lat' or 'la' for latin. There can be multiple language codes that identify
  the same language, but there is only one unique language ID for each language.
   */

  /**
   * Checks whether a language has a particular language code in its list of codes
   * @param {String} languageCode - A language code to check
   * @return {boolean} Whether this language code exists in a language code list
   */
  static hasCode (languageCode) {
    if (this.isLanguageCode(languageCode)) {
      return this.languageCodes.includes(languageCode)
    } else {
      throw new Error(`Format of a "${languageCode}" is incorrect`)
    }
  }

  /**
   * Tests wither a provided language identificator is a language ID.
   * @param {Symbol | string} language - A language identificator, either a Symbol or a string language code.
   * @return {boolean} True if language identificator provided is a language ID.
   */
  static isLanguageID (language) {
    return (typeof language === 'symbol')
  }

  /**
   * Tests wither a provided language identificator is a language code.
   * @param {Symbol | string} language - A language identificator, either a Symbol or a string language code.
   * @return {boolean} - True if language identificator provided is a language code.
   */
  static isLanguageCode (language) {
    return !LanguageModel.isLanguageID(language)
  }

  /**
   * @deprecated
   * @param node
   */
  canInflect (node) {
    console.warn(`Please use a static version of "canInflect" instead`)
    return this.constructor.canInflect(node)
  }

  /**
   * Groups a set of inflections according to a language-specific display paradigm
   * The default groups according to the following logic:
   *   1. groups of groups with unique stem, prefix, suffix, part of speech, declension, dialect and comparison
   *     2. groups of those groups with unique
   *          number, if it's an inflection with a grammatical case
   *          tense, if it's an inflection with tense but no case (i.e. a verb)
   *          verbs without tense or case
   *          adverbs
   *          everything else
   *       3. groups of those groups with unique voice and tense
   *         4. groups of inflections with unique gender, person, mood, and sort
   */
  static groupInflectionsForDisplay (inflections) {
    let grouped = new Map()
    let aggregated = this.aggregateInflectionsForDisplay(inflections)

    // group inflections by part of speech
    for (let infl of aggregated) {
      let groupingKey = new _inflection_grouping_key_js__WEBPACK_IMPORTED_MODULE_4__["default"](infl,
        [_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.part, _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.declension, _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.dialect, _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.comparison],
        {
          prefix: infl.prefix,
          suffix: infl.suffix,
          stem: infl.stem
        }
      )
      let groupingKeyStr = groupingKey.toString()
      if (grouped.has(groupingKeyStr)) {
        grouped.get(groupingKeyStr).append(infl)
      } else {
        grouped.set(groupingKeyStr, new _inflection_group_js__WEBPACK_IMPORTED_MODULE_5__["default"](groupingKey, [infl]))
      }
    }

    // iterate through each group key to group the inflections in that group
    for (let kv of grouped) {
      let inflgrp = new Map()
      for (let infl of kv[1].inflections) {
        let keyprop
        let isCaseInflectionSet = false
        if (infl[_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.grmCase]) {
          // grouping on number if case is defined
          keyprop = _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.number
          isCaseInflectionSet = true
        } else if (infl[_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.tense]) {
          // grouping on tense if tense is defined but not case
          keyprop = _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.tense
        } else if (infl[_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.part] === _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_VERB"]) {
          // grouping on no case or tense but a verb
          keyprop = _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.part
        } else if (infl[_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.part] === _constants_js__WEBPACK_IMPORTED_MODULE_0__["POFS_ADVERB"]) {
          keyprop = _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.part
          // grouping on adverbs without case or tense
        } else {
          keyprop = 'misc'
          // grouping on adverbs without case or tense
          // everything else
        }
        let groupingKey = new _inflection_grouping_key_js__WEBPACK_IMPORTED_MODULE_4__["default"](infl, [keyprop], { isCaseInflectionSet: isCaseInflectionSet })
        let groupingKeyStr = groupingKey.toString()
        if (inflgrp.has(groupingKeyStr)) {
          inflgrp.get(groupingKeyStr).append(infl)
        } else {
          inflgrp.set(groupingKeyStr, new _inflection_group_js__WEBPACK_IMPORTED_MODULE_5__["default"](groupingKey, [infl]))
        }
      }
      // inflgrp is now a map of groups of inflections grouped by
      //  inflections with number
      //  inflections without number but with tense
      //  inflections of verbs without tense
      //  inflections of adverbs
      //  everything else
      // iterate through each inflection group key to group the inflections in that group by tense and voice
      for (let kv of inflgrp) {
        let nextGroup = new Map()
        let sortOrder = new Map()
        for (let infl of kv[1].inflections) {
          let sortkey = infl[_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.grmCase] ? Math.max(infl[_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.grmCase].items.map(f => f.sortOrder)) : 1
          let groupingKey = new _inflection_grouping_key_js__WEBPACK_IMPORTED_MODULE_4__["default"](infl, [_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.tense, _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.voice])
          let groupingKeyStr = groupingKey.toString()
          if (nextGroup.has(groupingKeyStr)) {
            nextGroup.get(groupingKeyStr).append(infl)
          } else {
            nextGroup.set(groupingKeyStr, new _inflection_group_js__WEBPACK_IMPORTED_MODULE_5__["default"](groupingKey, [infl], sortkey))
            sortOrder.set(groupingKeyStr, sortkey)
          }
        }
        kv[1].inflections = []
        let sortedKeys = Array.from(nextGroup.keys()).sort(
          (a, b) => {
            let orderA = sortOrder.get(a)
            let orderB = sortOrder.get(b)
            return orderA > orderB ? -1 : orderB > orderA ? 1 : 0
          }
        )
        for (let groupkey of sortedKeys) {
          kv[1].inflections.push(nextGroup.get(groupkey))
        }
      }

      // inflgrp is now a Map of groups of groups of inflections

      for (let kv of inflgrp) {
        let groups = kv[1]
        for (let group of groups.inflections) {
          let nextGroup = new Map()
          for (let infl of group.inflections) {
            // set key is case comp gend pers mood sort
            let groupingKey = new _inflection_grouping_key_js__WEBPACK_IMPORTED_MODULE_4__["default"](infl,
              [_feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.grmCase, _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.comparison, _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.gender, _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.number, _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.person,
                _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.tense, _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.mood, _feature_js__WEBPACK_IMPORTED_MODULE_2__["default"].types.voice])
            let groupingKeyStr = groupingKey.toString()
            if (nextGroup.has(groupingKeyStr)) {
              nextGroup.get(groupingKeyStr).append(infl)
            } else {
              nextGroup.set(groupingKeyStr, new _inflection_group_js__WEBPACK_IMPORTED_MODULE_5__["default"](groupingKey, [infl]))
            }
          }
          group.inflections = Array.from(nextGroup.values()) // now a group of inflection groups
        }
      }
      kv[1].inflections = Array.from(inflgrp.values())
    }
    return Array.from(grouped.values())
  }

  /**
   * Aggregate inflections for display according to language model characteristics
   * @param {Inflection[]} inflections an array of inflections
   * @return Inflection[] the aggregated inflections
   */
  static aggregateInflectionsForDisplay (inflections) {
    // default is just to do nothing
    return inflections
  }

  /**
   * @deprecated
   * @param inflections
   * @return {*}
   */
  groupInflectionsForDisplay (inflections) {
    console.warn(`Please use a static version of "groupInflectionsForDisplay" instead`)
    return this.constructor.groupInflectionsForDisplay(inflections)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (LanguageModel);


/***/ }),

/***/ "./language_model_factory.js":
/*!***********************************!*\
  !*** ./language_model_factory.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _language_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language_model.js */ "./language_model.js");
/* harmony import */ var _latin_language_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./latin_language_model.js */ "./latin_language_model.js");
/* harmony import */ var _greek_language_model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./greek_language_model.js */ "./greek_language_model.js");
/* harmony import */ var _arabic_language_model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arabic_language_model.js */ "./arabic_language_model.js");
/* harmony import */ var _persian_language_model_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persian_language_model.js */ "./persian_language_model.js");
/* harmony import */ var _geez_language_model_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geez_language_model.js */ "./geez_language_model.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants.js */ "./constants.js");








const MODELS = new Map([
  [ _constants_js__WEBPACK_IMPORTED_MODULE_6__["STR_LANG_CODE_LA"], _latin_language_model_js__WEBPACK_IMPORTED_MODULE_1__["default"] ],
  [ _constants_js__WEBPACK_IMPORTED_MODULE_6__["STR_LANG_CODE_LAT"], _latin_language_model_js__WEBPACK_IMPORTED_MODULE_1__["default"] ],
  [ _constants_js__WEBPACK_IMPORTED_MODULE_6__["STR_LANG_CODE_GRC"], _greek_language_model_js__WEBPACK_IMPORTED_MODULE_2__["default"] ],
  [ _constants_js__WEBPACK_IMPORTED_MODULE_6__["STR_LANG_CODE_ARA"], _arabic_language_model_js__WEBPACK_IMPORTED_MODULE_3__["default"] ],
  [ _constants_js__WEBPACK_IMPORTED_MODULE_6__["STR_LANG_CODE_AR"], _arabic_language_model_js__WEBPACK_IMPORTED_MODULE_3__["default"] ],
  [ _constants_js__WEBPACK_IMPORTED_MODULE_6__["STR_LANG_CODE_PER"], _persian_language_model_js__WEBPACK_IMPORTED_MODULE_4__["default"] ],
  [ _constants_js__WEBPACK_IMPORTED_MODULE_6__["STR_LANG_CODE_GEZ"], _geez_language_model_js__WEBPACK_IMPORTED_MODULE_5__["default"] ]
])

class LanguageModelFactory {
  /**
   * Checks whether a language is supported
   * @param {string | symbol} language - Language as a language ID (symbol) or a language code (string)
   * @return {boolean} True if language is supported, false otherwise
   */
  static supportsLanguage (language) {
    language = (typeof language === 'symbol') ? LanguageModelFactory.getLanguageCodeFromId(language) : language
    return MODELS.has(language)
  }

  /**
   * Returns a constructor of language model for a specific language ID.
   * @param {symbol} languageID - A language ID of a desired language model.
   * @return {LanguageModel} A language model for a given language ID.
   */
  static getLanguageModel (languageID) {
    let languageCode = LanguageModelFactory.getLanguageCodeFromId(languageID)
    if (MODELS.has(languageCode)) {
      return MODELS.get(languageCode)
    } else {
      // A default value
      return _language_model_js__WEBPACK_IMPORTED_MODULE_0__["default"]
    }
  }

  static getLanguageForCode (code = null) {
    let Model = MODELS.get(code)
    if (Model) {
      return new Model()
    }
    // for now return a default Model
    // TODO may want to throw an error
    return new _language_model_js__WEBPACK_IMPORTED_MODULE_0__["default"]()
  }

  /**
   * Converts an ISO 639-3 language code to a language ID
   * @param {string} languageCode - An ISO 639-3 language code
   * @return {symbol | undefined} A language ID or undefined if language ID is not found
   */
  static getLanguageIdFromCode (languageCode) {
    for (const languageModel of MODELS.values()) {
      if (languageModel.hasCode(languageCode)) {
        return languageModel.languageID
      }
    }
    // Noting found, return a Symbol with an undefined value (to keep return value type the same)
    return _constants_js__WEBPACK_IMPORTED_MODULE_6__["LANG_UNDEFINED"]
  }

  /**
   * Converts a language ID to an default ISO 639-3 language code for that language
   * @param {symbol} languageID - A language ID
   * @return {string | undefined} An ISO 639-3 language code or undefined if language code is not found
   */
  static getLanguageCodeFromId (languageID) {
    for (const languageModel of MODELS.values()) {
      /*
      console.info('***************getLanguageCodeFromId step1-1', languageModel.languageID)
      console.info('***************getLanguageCodeFromId step1-2', languageModel.languageID.toString())

      console.info('***************getLanguageCodeFromId step2-1', languageID)
      console.info('***************getLanguageCodeFromId step2-2', languageID.toString())
    */
      if (languageModel.languageID.toString() === languageID.toString()) {
        return languageModel.languageCode
      }
    }
    // Noting found, return a string with an undefined value (to keep return value type the same)
    return _constants_js__WEBPACK_IMPORTED_MODULE_6__["STR_LANG_CODE_UNDEFINED"]
  }

  /**
   * Takes either a language ID or a language code and returns an object with both an ID and a code.
   * @param {string | symbol} language - Either a language ID (a Symbol) or a language code (a String).
   * @return {object} An object with the following properties:
   *    {symbol} languageID
   *    {string} languageCode
   */
  static getLanguageAttrs (language) {
    if (typeof language === 'symbol') {
      // `language` is a language ID
      return {
        languageID: language,
        languageCode: LanguageModelFactory.getLanguageCodeFromId(language)
      }
    } else {
      // `language` is a language code
      return {
        languageID: LanguageModelFactory.getLanguageIdFromCode(language),
        languageCode: language
      }
    }
  }

  /**
   * Compares two languages in either a language ID or a language code format. For this, does conversion of
   * language IDs to language code. Because fo this, it will work even for language IDs defined in
   * different modules
   * @param {string | symbol} languageA - Either a language ID (a symbol) or a language code (a string).
   * @param {string | symbol} languageB - Either a language ID (a symbol) or a language code (a string).
   * @return {boolean} True if languages are the same, false otherwise.
   */
  static compareLanguages (languageA, languageB) {
    languageA = (typeof languageA === 'symbol') ? LanguageModelFactory.getLanguageCodeFromId(languageA) : languageA
    languageB = (typeof languageB === 'symbol') ? LanguageModelFactory.getLanguageCodeFromId(languageB) : languageB
    return languageA === languageB
  }
}
/* harmony default export */ __webpack_exports__["default"] = (LanguageModelFactory);


/***/ }),

/***/ "./latin_language_model.js":
/*!*********************************!*\
  !*** ./latin_language_model.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LatinLanguageModel; });
/* harmony import */ var _language_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language_model.js */ "./language_model.js");
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature.js */ "./feature.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./constants.js");




let typeFeatures = new Map()
let typeFeaturesInitialized = false

/**
 * @class  LatinLanguageModel is the lass for Latin specific behavior
 */
class LatinLanguageModel extends _language_model_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get languageID () { return _constants_js__WEBPACK_IMPORTED_MODULE_2__["LANG_LATIN"] }
  static get languageCode () { return _constants_js__WEBPACK_IMPORTED_MODULE_2__["STR_LANG_CODE_LAT"] }
  static get languageCodes () { return [_constants_js__WEBPACK_IMPORTED_MODULE_2__["STR_LANG_CODE_LA"], _constants_js__WEBPACK_IMPORTED_MODULE_2__["STR_LANG_CODE_LAT"]] }
  static get contextForward () { return 0 }
  static get contextBackward () { return 0 }
  static get direction () { return _constants_js__WEBPACK_IMPORTED_MODULE_2__["LANG_DIR_LTR"] }
  static get baseUnit () { return _constants_js__WEBPACK_IMPORTED_MODULE_2__["LANG_UNIT_WORD"] }

  static get featureValues () {
    /*
    This could be a static variable, but then it will create a circular reference:
    Feature -> LanguageModelFactory -> LanguageModel -> Feature
     */
    return new Map([
      ..._language_model_js__WEBPACK_IMPORTED_MODULE_0__["default"].featureValues,
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.grmClass,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_PERSONAL"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_REFLEXIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_POSSESSIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_DEMONSTRATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_RELATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CLASS_INTERROGATIVE"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.number,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["NUM_SINGULAR"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["NUM_PLURAL"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.grmCase,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CASE_NOMINATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CASE_GENITIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CASE_DATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CASE_ACCUSATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CASE_ABLATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CASE_LOCATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["CASE_VOCATIVE"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.declension,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["ORD_1ST"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["ORD_2ND"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["ORD_3RD"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["ORD_4TH"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["ORD_5TH"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.tense,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["TENSE_PRESENT"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["TENSE_IMPERFECT"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["TENSE_FUTURE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["TENSE_PERFECT"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["TENSE_PLUPERFECT"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["TENSE_FUTURE_PERFECT"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.voice,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["VOICE_ACTIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["VOICE_PASSIVE"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.mood,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["MOOD_INDICATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["MOOD_SUBJUNCTIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["MOOD_IMPERATIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["MOOD_PARTICIPLE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["MOOD_SUPINE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["MOOD_GERUNDIVE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["MOOD_PARTICIPLE"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["MOOD_INFINITIVE"]
        ]
      ],
      [
        _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.conjugation,
        [
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["ORD_1ST"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["ORD_2ND"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["ORD_3RD"],
          _constants_js__WEBPACK_IMPORTED_MODULE_2__["ORD_4TH"]
        ]
      ]
    ])
  }

  static get typeFeatures () {
    if (!typeFeaturesInitialized) {
      this.initTypeFeatures()
    }
    return typeFeatures
  }

  static initTypeFeatures () {
    for (const featureName of this.featureNames) {
      typeFeatures.set(featureName, this.getFeature(featureName))
    }
    typeFeaturesInitialized = true
  }

  /**
   * @override LanguageModel#grammarFeatures
   */
  static grammarFeatures () {
    // TODO this ideally might be grammar specific
    return [_feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.part, _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.grmCase, _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.mood, _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.declension, _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.tense, _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.conjugation]
  }

  /**
   * Check to see if this language tool can produce an inflection table display
   * for the current node
   */
  static canInflect (node) {
    return true
  }

  /**
   * Return a normalized version of a word which can be used to compare the word for equality
   * @param {String} word the source word
   * @returns the normalized form of the word (Latin replaces accents and special chars)
   * @type String
   */
  static normalizeWord (word) {
    if (word) {
      word = word.replace(/[\u00c0\u00c1\u00c2\u00c3\u00c4\u0100\u0102]/g, 'A')
      word = word.replace(/[\u00c8\u00c9\u00ca\u00cb\u0112\u0114]/g, 'E')
      word = word.replace(/[\u00cc\u00cd\u00ce\u00cf\u012a\u012c]/g, 'I')
      word = word.replace(/[\u00d2\u00d3\u00d4\u00df\u00d6\u014c\u014e]/g, 'O')
      word = word.replace(/[\u00d9\u00da\u00db\u00dc\u016a\u016c]/g, 'U')
      word = word.replace(/[\u00c6\u01e2]/g, 'AE')
      word = word.replace(/[\u0152]/g, 'OE')
      word = word.replace(/[\u00e0\u00e1\u00e2\u00e3\u00e4\u0101\u0103]/g, 'a')
      word = word.replace(/[\u00e8\u00e9\u00ea\u00eb\u0113\u0115]/g, 'e')
      word = word.replace(/[\u00ec\u00ed\u00ee\u00ef\u012b\u012d\u0129]/g, 'i')
      word = word.replace(/[\u00f2\u00f3\u00f4\u00f5\u00f6\u014d\u014f]/g, 'o')
      word = word.replace(/[\u00f9\u00fa\u00fb\u00fc\u016b\u016d]/g, 'u')
      word = word.replace(/[\u00e6\u01e3]/g, 'ae')
      word = word.replace(/[\u0153]/g, 'oe')
    }
    return word
  }

  /**
   * Returns alternate encodings for a word
   * @param {string} word the word
   * @param {string} preceding optional preceding word
   * @param {string} following optional following word
   * @param {string} encoding optional encoding name to filter the response to
   * @returns {Array} an array of alternate encodings
   */
  static alternateWordEncodings (word, preceding = null, following = null, encoding = null) {
    // Not implemented yet
    return []
  }

  /**
   * Get a list of valid puncutation for this language
   * @returns {String} a string containing valid puncutation symbols
   */
  static getPunctuation () {
    return ".,;:!?'\"(){}\\[\\]<>/\\\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u201C\u201D\u0387\u00B7\n\r"
  }

  /**
   * Sets inflection grammar properties based on its characteristics
   * @param {Inflection} inflection - An inflection object
   * @return {Object} Inflection properties
   */
  static getInflectionConstraints (inflection) {
    let grammar = {
      fullFormBased: false,
      suffixBased: false,
      pronounClassRequired: false
    }
    if (inflection.hasOwnProperty(_feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.part)) {
      if ([_constants_js__WEBPACK_IMPORTED_MODULE_2__["POFS_VERB"], _constants_js__WEBPACK_IMPORTED_MODULE_2__["POFS_VERB_PARTICIPLE"], _constants_js__WEBPACK_IMPORTED_MODULE_2__["POFS_SUPINE"], _constants_js__WEBPACK_IMPORTED_MODULE_2__["POFS_GERUNDIVE"]].includes(inflection[_feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.part].value)) {
        grammar.fullFormBased = true
        grammar.suffixBased = true
      } else if (inflection[_feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.part].value === _constants_js__WEBPACK_IMPORTED_MODULE_2__["POFS_PRONOUN"]) {
        grammar.fullFormBased = true
      } else {
        grammar.suffixBased = true
      }
    } else {
      console.warn(`Unable to set grammar: part of speech data is missing or is incorrect`, inflection[_feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.part])
    }

    return grammar
  }
}


/***/ }),

/***/ "./lemma.js":
/*!******************!*\
  !*** ./lemma.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _language_model_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language_model_factory.js */ "./language_model_factory.js");
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature.js */ "./feature.js");
/* harmony import */ var _translation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translation.js */ "./translation.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/v4 */ "../node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Lemma, a canonical form of a word.
 */
class Lemma {
  /**
   * Initializes a Lemma object.
   * @param {string} word - A word.
   * @param {symbol | string} languageID - A language ID (symbol, please use this) or a language code of a word.
   * @param {string[]} principalParts - the principalParts of a lemma.
   * @param {Object} features - the grammatical features of a lemma.

   * @param {Translation} transaltions - translations from python service
   */
  constructor (word, languageID, principalParts = [], features = {}) {
    if (!word) {
      throw new Error('Word should not be empty.')
    }

    if (!languageID) {
      throw new Error('Language should not be empty.')
    }

    // Compatibility code for something providing languageCode instead of languageID
    this.languageID = undefined
    this.languageCode = undefined
    ;({ languageID: this.languageID, languageCode: this.languageCode } = _language_model_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLanguageAttrs(languageID))

    this.word = word
    this.principalParts = principalParts
    this.features = {}

    this.ID = uuid_v4__WEBPACK_IMPORTED_MODULE_3___default()()
  }

  get language () {
    console.warn(`Please use "languageID" instead of "language"`)
    return this.languageCode
  }

  static readObject (jsonObject) {
    let language = jsonObject.language ? jsonObject.language : jsonObject.languageCode
    let resLemma = new Lemma(jsonObject.word, language, jsonObject.principalParts, jsonObject.pronunciation)

    if (jsonObject.features && jsonObject.features.length > 0) {
      jsonObject.features.forEach(featureSource => {
        resLemma.addFeature(_feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].readObject(featureSource))
      })
    }

    if (jsonObject.translation) {
      resLemma.translation = _translation_js__WEBPACK_IMPORTED_MODULE_2__["default"].readObject(jsonObject.translation, resLemma)
    }
    return resLemma
  }

  convertToJSONObject () {
    let resultFeatures = []
    for (let feature of Object.values(this.features)) {
      resultFeatures.push(feature.convertToJSONObject())
    }
    let resultLemma = {
      word: this.word,
      language: this.languageCode,
      principalParts: this.principalParts,
      features: resultFeatures
    }

    if (this.translation) {
      resultLemma.translation = this.translation.convertToJSONObject()
    }
    return resultLemma
  }

  /**
   * @deprecated Please use `addFeature` instead.
   * Sets a grammatical feature for a lemma. Some features can have multiple values, In this case
   * an array of Feature objects will be provided.
   * Values are taken from features and stored in a 'feature.type' property as an array of values.
   * @param {Feature | Feature[]} data
   */
  set feature (data) {
    console.warn(`Please use "addFeature" instead`)
    if (!data) {
      throw new Error('feature data cannot be empty.')
    }
    if (!Array.isArray(data)) {
      data = [data]
    }

    let type = data[0].type
    this.features[type] = []
    for (let element of data) {
      if (!(element instanceof _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"])) {
        throw new Error('feature data must be a Feature object.')
      }

      if (!_language_model_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"].compareLanguages(element.languageID, this.languageID)) {
        throw new Error('Language "' + element.languageID.toString() + '" of a feature does not match a language "' +
                this.languageID.toString() + '" of a Lemma object.')
      }

      this.features[type].push(element)
    }
  }

  /**
   * Sets a grammatical feature of a lemma. Feature is stored in a `feature.type` property.
   * @param {Feature} feature - A feature object with one or multiple values.
   */
  addFeature (feature) {
    if (!feature) {
      throw new Error('feature data cannot be empty.')
    }

    if (!(feature instanceof _feature_js__WEBPACK_IMPORTED_MODULE_1__["default"])) {
      throw new Error('feature data must be a Feature object.')
    }

    if (!_language_model_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"].compareLanguages(feature.languageID, this.languageID)) {
      throw new Error('Language "' + feature.languageID.toString() + '" of a feature does not match a language "' +
        this.languageID.toString() + '" of a Lemma object.')
    }

    this.features[feature.type] = feature
  }

  /**
   * Sets multiple grammatical features of a lemma.
   * @param {Feature[]} features - Features to be added.
   */
  addFeatures (features) {
    if (!Array.isArray(features)) {
      throw new Error(`Features must be in an array`)
    }

    for (let feature of features) {
      this.addFeature(feature)
    }
  }

  /**
   * Sets a translation from python service.
   * @param {Translation} translation - A translation object
   */
  addTranslation (translation) {
    if (!translation) {
      throw new Error('translation data cannot be empty.')
    }

    if (translation.constructor.name !== 'Translation') {
      throw new Error('translation data must be a Translation object.')
    }

    this.translation = translation
  }

  /**
   * Test to see if two lemmas are full homonyms
   * @param {Lemma} lemma the lemma to compare
   * @return {Boolean} true or false
   */
  isFullHomonym (lemma) {
    // returns true if the word and part of speech match
    return this.word === lemma.word &&
      this.features[_feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.part] &&
      lemma.features[_feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.part] &&
      this.features[_feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.part].isEqual(lemma.features[_feature_js__WEBPACK_IMPORTED_MODULE_1__["default"].types.part])
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Lemma);


/***/ }),

/***/ "./lexeme.js":
/*!*******************!*\
  !*** ./lexeme.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lemma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lemma.js */ "./lemma.js");
/* harmony import */ var _inflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inflection.js */ "./inflection.js");
/* harmony import */ var _definition_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definition-set */ "./definition-set.js");
/* harmony import */ var _language_model_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language_model_factory */ "./language_model_factory.js");





/**
 * A basic unit of lexical meaning. Contains a primary Lemma object, one or more Inflection objects
 * and a DefinitionSet
 */
class Lexeme {
  /**
   * Initializes a Lexeme object.
   * @param {Lemma} lemma - A lemma object.
   * @param {Inflection[]} inflections - An array of inflections.
   * @param {DefinitionSet} meaning - A set of definitions.
   */
  constructor (lemma, inflections, meaning = null) {
    if (!lemma) {
      throw new Error('Lemma should not be empty.')
    }

    if (!(lemma instanceof _lemma_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
      throw new Error('Lemma should be of Lemma object type.')
    }

    if (!inflections) {
      throw new Error('Inflections data should not be empty.')
    }

    if (!Array.isArray(inflections)) {
      throw new Error('Inflection data should be provided in an array.')
    }

    for (let inflection of inflections) {
      if (!(inflection instanceof _inflection_js__WEBPACK_IMPORTED_MODULE_1__["default"])) {
        throw new Error('All inflection data should be of Inflection object type.')
      }
    }

    if (meaning !== null && !(meaning instanceof _definition_set__WEBPACK_IMPORTED_MODULE_2__["default"])) {
      throw new Error('Meaning should be of DefinitionSet object type.')
    }

    this.lemma = lemma
    this.altLemmas = []
    this.inflections = []
    inflections.forEach(i => { this.addInflection(i) })
    this.meaning = meaning || new _definition_set__WEBPACK_IMPORTED_MODULE_2__["default"](this.lemma.word, this.lemma.languageID)
    this.disambiguated = false
  }

  /**
   * add an inflection to the lexeme
   * @param {Inflection} inflection
   */
  addInflection (inflection) {
    inflection.lemma = this.lemma
    inflection.lexeme = this
    this.inflections.push(inflection)
  }

  /**
   * add an alternative lemma to the lexeme
   * @param {Lemma} lemma
   */
  addAltLemma (lemma) {
    this.altLemmas.push(lemma)
  }

  /**
   * test to see if a lexeme is populated with meaningful data
   * Returns true if any of these are true:
   *   its lemma has morphological features defined
   *   it has one ore more definitions supplied in the meaning
   *   it has one ore more inflections
   * @return {boolean}
   */
  isPopulated () {
    return Object.entries(this.lemma.features).length > 0 ||
      !this.meaning.isEmpty() ||
      this.inflections.length > 0
  }

  /**
   * disambiguate with another supplied Lexeme
   * @param {Lexeme} lexeme the lexeme to be disambiguated
   * @param {Lexeme} disambiguator the lexeme to use to disambiguate
   * @return {Lexeme} a new lexeme, if disamibugation was successful disambiguated flag will be set on it
   */
  static disambiguate (lexeme, disambiguator) {
    let newLexeme = new Lexeme(lexeme.lemma, lexeme.inflections, lexeme.meaning)
    if (lexeme.lemma.isFullHomonym(disambiguator.lemma) && disambiguator.inflections.length > 0) {
      newLexeme.disambiguated = true
      let keepInflections = []
      // iterate through this lexemes inflections and keep only thoes that are disambiguatedBy by the supplied lexeme's inflection
      // we want to keep the original inflections rather than just replacing them
      // because the original inflections may have more information
      for (let inflection of newLexeme.inflections) {
        for (let disambiguatorInflection of disambiguator.inflections) {
          if (inflection.disambiguatedBy(disambiguatorInflection)) {
            keepInflections.push(inflection)
          }
        }
      }
      newLexeme.inflections = keepInflections
      // if we couldn't match any existing inflections, then add the disambiguated one
      if (newLexeme.inflections.length === 0) {
        for (let infl of disambiguator.inflections) {
          newLexeme.addInflection(infl)
        }
      }
    }
    return newLexeme
  }

  getGroupedInflections () {
    let lm = _language_model_factory__WEBPACK_IMPORTED_MODULE_3__["default"].getLanguageModel(this.lemma.languageID)
    return lm.groupInflectionsForDisplay(this.inflections)
  }

  static readObject (jsonObject) {
    let lemma = _lemma_js__WEBPACK_IMPORTED_MODULE_0__["default"].readObject(jsonObject.lemma)
    let inflections = []
    for (let inflection of jsonObject.inflections) {
      inflections.push(_inflection_js__WEBPACK_IMPORTED_MODULE_1__["default"].readObject(inflection))
    }

    let lexeme = new Lexeme(lemma, inflections)
    if (jsonObject.meaning) {
      lexeme.meaning = _definition_set__WEBPACK_IMPORTED_MODULE_2__["default"].readObject(jsonObject.meaning)
    }
    return lexeme
  }

  convertToJSONObject (addMeaning = false) {
    let resInflections = []
    this.inflections.forEach(inflection => { resInflections.push(inflection.convertToJSONObject()) })

    let resLexeme = {
      lemma: this.lemma.convertToJSONObject(),
      inflections: resInflections
    }

    if (addMeaning) {
      let resMeaning = this.meaning.convertToJSONObject()
      resLexeme.meaning = resMeaning
    }

    return resLexeme
  }

  /**
   * Get a sort function for an array of lexemes which applies a primary and secondary
   * sort logic using the sort order specified for each feature. Sorts in descending order -
   * higher sort order means it should come first
   * @param {string} primary feature name to use as primary sort key
   * @param {string} secondary feature name to use as secondary sort key
   * @returns {Function} function which can be passed to Array.sort
   */
  static getSortByTwoLemmaFeatures (primary, secondary) {
    return (a, b) => {
      if ((a.lemma.features[primary] && b.lemma.features[primary]) ||
          (!a.lemma.features[primary] && !b.lemma.features[[primary]])) {
        let primarySort
        if (a.lemma.features[primary] && b.lemma.features[primary]) {
          // if both lemmas have the primary sort key, then sort
          primarySort = a.lemma.features[primary].compareTo(b.lemma.features[primary])
        } else {
          // if neither lemma has the primary sort key, then the primary sort is equal
          primarySort = 0
        }
        if (primarySort !== 0) {
          return primarySort
        } else if (a.lemma.features[secondary] && b.lemma.features[secondary]) {
          return a.lemma.features[secondary].compareTo(b.lemma.features[secondary])
        } else if (a.lemma.features[secondary] && !b.lemma.features[secondary]) {
          return -1
        } else if (!a.lemma.features[secondary] && b.lemma.features[secondary]) {
          return 1
        } else {
          // neither have the secondary sort key so they are equal
          return 0
        }
      } else if (a.lemma.features[primary] && !b.lemma.features[primary]) {
        return -1
      } else if (!a.lemma.features[primary] && b.lemma.features[primary]) {
        return 1
      } else {
        return 0
      }
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Lexeme);


/***/ }),

/***/ "./persian_language_model.js":
/*!***********************************!*\
  !*** ./persian_language_model.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersianLanguageModel; });
/* harmony import */ var _language_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language_model.js */ "./language_model.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./constants.js");



let typeFeatures = new Map()
let typeFeaturesInitialized = false

/**
 * @class  PersianLanguageModel is the lass for Persian specific behavior
 */
class PersianLanguageModel extends _language_model_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get languageID () { return _constants_js__WEBPACK_IMPORTED_MODULE_1__["LANG_PERSIAN"] }

  static get languageCode () { return _constants_js__WEBPACK_IMPORTED_MODULE_1__["STR_LANG_CODE_PER"] }

  static get languageCodes () { return [_constants_js__WEBPACK_IMPORTED_MODULE_1__["STR_LANG_CODE_PER"], _constants_js__WEBPACK_IMPORTED_MODULE_1__["STR_LANG_CODE_FAS"], _constants_js__WEBPACK_IMPORTED_MODULE_1__["STR_LANG_CODE_FA"], _constants_js__WEBPACK_IMPORTED_MODULE_1__["STR_LANG_CODE_FA_IR"]] }

  static get contextForward () { return 0 }

  static get contextBackward () { return 0 }

  static get direction () { return _constants_js__WEBPACK_IMPORTED_MODULE_1__["LANG_DIR_RTL"] }

  static get baseUnit () { return _constants_js__WEBPACK_IMPORTED_MODULE_1__["LANG_UNIT_WORD"] }

  static get typeFeatures () {
    if (!typeFeaturesInitialized) { this.initTypeFeatures() }
    return typeFeatures
  }

  static initTypeFeatures () {
    for (const featureName of this.featureNames) {
      typeFeatures.set(featureName, this.getFeature(featureName))
    }
    typeFeaturesInitialized = true
  }

  /**
   * Check to see if this language tool can produce an inflection table display
   * for the current node
   */
  static canInflect (node) {
    return false
  }

  /**
   * Returns alternate encodings for a word
   * @param {string} word the word
   * @param {string} preceding optional preceding word
   * @param {string} following optional following word
   * @param {string} encoding optional encoding name to filter the response to
   * @returns {Array} an array of alternate encodings
   */
  static alternateWordEncodings (word, preceding = null, following = null, encoding = null) {
    // Not implemented yet
    return []
  }

  /**
   * Get a list of valid puncutation for this language
   * @returns {String} a string containing valid puncutation symbols
   */
  static getPunctuation () {
    return ".,;:!?'\"(){}\\[\\]<>/\\\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u201C\u201D\u0387\u00B7\n\r"
  }
}


/***/ }),

/***/ "./ps-events/ps-event-data.js":
/*!************************************!*\
  !*** ./ps-events/ps-event-data.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PsEventData; });
/**
 * A public information about published event that is returned to subscriber.
 * It can be used by subscribers that are listening for more than one event
 * to distinguish between different event types.
 * We could pass an PsEvent object to subscribers instead of PsEventData
 * but it's better not to expose some details of PsEvent implementation to the outside.
 * This will help to avoid creating dependencies on PsEvent internals within subscribers functions.
 * Thus an PsEventData object can be considered as a publicly exposed part of PsEvent data.
 * If needed, PsEventData can present PsEvent data to subscriber differently,
 * not in the way PsEvent stores it. This makes sense as subscriber might be interested in
 * a different angle of PsEvent information. PsEventData may add properties or methods
 * that do not needed within an PsEvent, but might be useful to subscribers.
 */
class PsEventData {
  /**
   * @param {PsEvent} event - An event that is being published.
   * @param {string} [caller=''] - The name of the function from where an event was published.
   */
  constructor (event, caller = '') {
    this.name = event.name
    this.publisher = event.publisher
    this.caller = caller
  }

  /**
   * Returns a description of an event data in a printable form. Example:
   *     LexicalQuery.finalize -> [Lexical Query Complete]
   * If caller function is not specified during a `pub()` call, description will be:
   *     LexicalQuery -> [Lexical Query Complete]
   * @return {string} - An event data description.
   */
  get description () {
    return this.caller ? `${this.publisher}.${this.caller} -> [${this.name}]` : `${this.publisher} -> [${this.name}]`
  }
}


/***/ }),

/***/ "./ps-events/ps-event.js":
/*!*******************************!*\
  !*** ./ps-events/ps-event.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PsEvent; });
/* harmony import */ var _src_ps_events_ps_event_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/ps-events/ps-event-data.js */ "./ps-events/ps-event-data.js");


/**
 * An event in pub/sub (publish–subscribe) design pattern
 */
class PsEvent {
  /**
   * @param {string} name - A name of the event.
   * @param {Function} publisher - A constructor function of a publisher.
   *        PsEvent uses its `name` property to set its publisher name field.
   */
  constructor (name, publisher) {
    /**
     * A name of the event.
     * @type {string}
     */
    this.name = name

    /**
     * A name of the publisher.
     * @type {string}
     */
    this.publisher = publisher.name

    /**
     * A subscribers that listens to the published event.
     * @type {Function[]} - A subscriber function
     */
    this._subscribers = []
  }

  /**
   * This function is called when an event is published.
   * @callback EventSubscriber
   * @param {Object} data - An event-specific data associated with the event.
   * @param {PsEventData} eventData - A data about the event being published.
   *        PsEvent data allows generic subscribers (i.e. functions that are subscribed to
   *        more than one event) to distinguish between an event being published.
   */

  /**
   * Return a list of subscribers for the current event.
   * @return {EventSubscriber[]} An array of event subscriber functions.
   */
  get subscribers () {
    return this._subscribers
  }

  /**
   * Subscribes a function to the published event.
   * When event is published, a @type {Event~subscriber} function is called.
   * @param {EventSubscriber} subscriber - A subscriber function.
   */
  sub (subscriber) {
    this._subscribers.push(subscriber)
  }

  /**
   * Publishes an event with data related to it. All subscribers will receive an
   * event notification along with event data.
   * @param {Object} [data={}] - An event-specific data associated with the event.
   * @param {string} [caller=''] - The name of the function that called `pub`.
   */
  pub (data = {}, caller = '') {
    this._subscribers.forEach(l => l(data, new _src_ps_events_ps_event_data_js__WEBPACK_IMPORTED_MODULE_0__["default"](this, caller)))
  }
}


/***/ }),

/***/ "./resource_provider.js":
/*!******************************!*\
  !*** ./resource_provider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * An abstraction of an Alpheios resource provider
 */
class ResourceProvider {
  /**
   * @constructor
   * @param {string} uri - a unique resource identifier for this provider
   * @param {string} rights - rights text
   * @param {Map} rightsTranslations - optional map of translated rights text - keys should be language of text, values the text
   */
  constructor (uri = '', rights = '', rightsTranslations = new Map([['default', rights]])) {
    this.uri = uri
    this.rights = rightsTranslations
    if (!this.rights.has('default')) {
      this.rights.set('default', rights)
    }
  }

  /**
   * @return a string representation of the resource provider, in the default language
   */
  toString () {
    return this.rights.get('default')
  }

  /**
   * Produce a string representation of the resource provider, in the requested locale if available
   * @param {string} languageCode
   * @return a string representation of the resource provider, in the requested locale if available
   */
  toLocaleString (languageCode) {
    return this.rights.get(languageCode) || this.rights.get('default')
  }

  static getProxy (provider = null, target = {}) {
    return new Proxy(target, {
      get: function (target, name) {
        return name === 'provider' ? provider : target[name]
      }
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ResourceProvider);


/***/ }),

/***/ "./texts/author.js":
/*!*************************!*\
  !*** ./texts/author.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Author {
  /**
  * Constructor, extracts ID from urn
  * @param {String} urn - string identificator in special format, for example 'urn:cts:latinLit:phi0959'
  * @param {Object} titles - has the following format { languageCode: title }
  * @param {Object} abbreviations - has the following format { languageCode: abbreviation }
  * @returns {Author}
  */
  constructor (urn, titles, abbreviations) {
    this.urn = urn
    this.titles = titles
    this.abbreviations = abbreviations
  }

  /**
  * This property is used to define title for panel
  * @returns {String}
  */
  static get defaultLang () {
    return 'eng'
  }

  /**
  * Method returns title in the lang from arguments, otherwise in default language or (if not exists) it returns first available title
  * @param {String} lang - language for getting title
  * @returns {String}
  */
  title (lang) {
    if (this.titles[lang]) {
      return this.titles[lang]
    } else if (this.titles[Author.defaultLang]) {
      return this.titles[Author.defaultLang]
    } else if (Object.values(this.titles).length > 0) {
      return Object.values(this.titles)[0]
    }
    return null
  }

  /**
  * Method returns abbreviation in the lang from arguments, otherwise in default language or (if not exists) it returns first available abbreviation
  * @param {String} lang - language for getting abbreviation
  * @returns {String}
  */
  abbreviation (lang) {
    if (this.abbreviations[lang]) {
      return this.abbreviations[lang]
    } else if (this.abbreviations[Author.defaultLang]) {
      return this.abbreviations[Author.defaultLang]
    } else if (Object.values(this.abbreviations).length > 0) {
      return Object.values(this.abbreviations)[0]
    }
    return null
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Author);


/***/ }),

/***/ "./texts/text-work.js":
/*!****************************!*\
  !*** ./texts/text-work.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class TextWork {
  /**
  * Constructor, extracts ID from urn
  * @param {Author} author - author of the textWork
  * @param {String} urn - string identificator in special format, for example 'urn:cts:latinLit:phi0959'
  * @param {Object} titles - has the following format { languageCode: title }
  * @param {Object} abbreviations - has the following format { languageCode: abbreviation }
  * @returns {TextWork}
  */
  constructor (author, urn, titles, abbreviations) {
    this.urn = urn
    this.titles = titles
    this.author = author
    this.abbreviations = abbreviations
  }

  /**
  * This property is used to define title for panel
  * @returns {String}
  */
  static get defaultLang () {
    return 'eng'
  }

  /**
  * This property is used to define prefix fr extract ID
  * @returns {String}
  */
  static get defaultIDPrefix () {
    return 'phi'
  }

  /**
  * Method returns title in the lang from arguments, otherwise in default language or (if not exists) it returns first available title
  * @param {String} lang - language for getting title
  * @returns {String}
  */
  title (lang) {
    if (this.titles[lang]) {
      return this.titles[lang]
    } else if (this.titles[TextWork.defaultLang]) {
      return this.titles[TextWork.defaultLang]
    } else if (Object.values(this.titles).length > 0) {
      return Object.values(this.titles)[0]
    }
    return null
  }

  /**
  * Method returns abbreviation in the lang from arguments, otherwise in default language or (if not exists) it returns first available abbreviation
  * @param {String} lang - language for getting abbreviation
  * @returns {String}
  */
  abbreviation (lang) {
    if (this.abbreviations[lang]) {
      return this.abbreviations[lang]
    } else if (this.abbreviations[TextWork.defaultLang]) {
      return this.abbreviations[TextWork.defaultLang]
    } else if (Object.values(this.abbreviations).length > 0) {
      return Object.values(this.abbreviations)[0]
    }
    return null
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TextWork);


/***/ }),

/***/ "./texts/word-usage-example.js":
/*!*************************************!*\
  !*** ./texts/word-usage-example.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WordUsageExample; });
/* harmony import */ var _w3c_text_quote_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../w3c/text-quote-selector.js */ "./w3c/text-quote-selector.js");


class WordUsageExample extends _w3c_text_quote_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor (language, targetWord, prefix, suffix, source, cit) {
    super(language, targetWord)
    this.prefix = prefix
    this.suffix = suffix
    this.source = source
    this.cit = cit
  }
  createContext () {
    return null // not implemented in the current child-class
  }

  /**
  * Creates a full text of example prefix + word + suffix
  * @returns {String}
  */
  get htmlExample () {
    return `${this.prefix}<span class="alpheios_word_usage_list_item__text_targetword">${this.normalizedText}</span>${this.suffix}`
  }

  /**
  * Creates a full description - author + textWork + cit number
  * @param {String} lang - language for getting text
  * @returns {String}
  */
  fullCit (lang) {
    let res = ''
    if (this.author) {
      res = this.author.title(lang)
      if (this.textWork) {
        res = res + ' ' + this.textWork.title(lang)
      } else {
        if (this.cit && this.cit.split('.') && this.cit.split('.').length >= 2) {
          res = res + ' ' + this.cit.split('.')[1] + '.'
        }
      }

      if (this.cit && this.cit.split('.') && this.cit.split('.').length >= 3) {
        res = res + ' ' + this.cit.split('.')[2]
      }
    } else {
      res = this.cit
    }
    return res
  }
}


/***/ }),

/***/ "./translation.js":
/*!************************!*\
  !*** ./translation.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resource_provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource_provider.js */ "./resource_provider.js");

/**
 * stores a scope of lemma translations from python service
 * Contains a primary Lemma object
 */
class Translation {
  /**
   * Initializes a Translation object.
   * @param {Lemma} lemma - A lemma object.
   * @param [] meanings - A set of definitions.

   */
  constructor (lemma, languageCode, translations = []) {
    if (!lemma) {
      throw new Error('Lemma should not be empty.')
    }
    this.lemmaWord = lemma.word
    this.languageCode = languageCode
    this.glosses = translations
  }

  static readTranslationFromJSONList (lemma, languageCode, translationsList, provider) {
    if (!translationsList || !Array.isArray(translationsList)) {
      throw new Error('Recieved not proper translation list', translationsList)
    }
    let curTranslations = translationsList.find(function (element) { return element.in === lemma.word })
    let translation = new Translation(lemma, languageCode, curTranslations.translations)
    if (provider) {
      return _resource_provider_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProxy(provider, translation)
    } else {
      return translation
    }
  }

  static loadTranslations (lemma, languageCode, translationsList, provider) {
    lemma.addTranslation(this.readTranslationFromJSONList(lemma, languageCode, translationsList, provider))
  }

  convertToJSONObject () {
    return {
      languageCode: this.languageCode,
      translations: this.glosses
    }
  }

  static readObject (jsonObject, lemma) {
    return new Translation(lemma, jsonObject.languageCode, jsonObject.translations)
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Translation);


/***/ }),

/***/ "./w3c/text-quote-selector.js":
/*!************************************!*\
  !*** ./w3c/text-quote-selector.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextQuoteSelector; });
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "../node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Implements a W3C Text Quote Selector (https://www.w3.org/TR/annotation-model/#h-text-quote-selector)
 */


class TextQuoteSelector {
  constructor (languageCode, normalizedText) {
    this.languageCode = languageCode
    this.normalizedText = normalizedText
    this.contextForward = 6
    this.contextBackward = 6
    this.ID = uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()()
  }

  get contextHTML () {
    let templateWord = `<span class="alpheios_worditem_incontext_add">${this.text}</span>`
    let checkPrefix = this.prefix.replace(this.text, templateWord)
    let checkSuffix = this.suffix.replace(this.text, templateWord)

    let fullText = `${checkPrefix}<span class="alpheios_worditem_incontext">${this.text}</span>${checkSuffix}`
    return fullText
  }

  createContext (selection, textSelector) {
    this.prefix = selection.anchorNode.data.substr(0, textSelector.start)
    this.suffix = selection.anchorNode.data.substr(textSelector.end)
    this.text = textSelector.text
    this.source = window.location.href
    this.languageCode = textSelector.languageCode
  }

  static readObject (jsonObject) {
    let tq = new TextQuoteSelector(jsonObject.languageCode, jsonObject.target.selector.exact)
    tq.prefix = jsonObject.target.selector.prefix
    tq.suffix = jsonObject.target.selector.suffix
    tq.text = jsonObject.targetWord
    tq.source = jsonObject.target.source
    return tq
  }
}


/***/ })

/******/ });
});


/***/ }),

/***/ "../node_modules/interactjs/dist/interact.js":
/*!***************************************************!*\
  !*** ../node_modules/interactjs/dist/interact.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/**
 * interact.js v1.3.4
 *
 * Copyright (c) 2012-2018 Taye Adeyemi <dev@taye.me>
 * Released under the MIT License.
 * https://raw.github.com/taye/interact.js/master/LICENSE
 */
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/*
 * In a (windowless) server environment this file exports a factory function
 * that takes the window to use.
 *
 *     var interact = require('interact.js')(windowObject);
 *
 * See https://github.com/taye/interact.js/issues/187
 */
if (typeof window === 'undefined') {
  module.exports = function (window) {
    require('./src/utils/window').init(window);

    return require('./src/index');
  };
} else {
  module.exports = require('./src/index');
}

},{"./src/index":19,"./src/utils/window":52}],2:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var extend = require('./utils/extend.js');

function fireUntilImmediateStopped(event, listeners) {
  for (var _i = 0; _i < listeners.length; _i++) {
    var _ref;

    _ref = listeners[_i];
    var listener = _ref;

    if (event.immediatePropagationStopped) {
      break;
    }

    listener(event);
  }
}

var Eventable = function () {
  function Eventable(options) {
    _classCallCheck(this, Eventable);

    this.options = extend({}, options || {});
  }

  Eventable.prototype.fire = function fire(event) {
    var listeners = void 0;
    var onEvent = 'on' + event.type;
    var global = this.global;

    // Interactable#on() listeners
    if (listeners = this[event.type]) {
      fireUntilImmediateStopped(event, listeners);
    }

    // interactable.onevent listener
    if (this[onEvent]) {
      this[onEvent](event);
    }

    // interact.on() listeners
    if (!event.propagationStopped && global && (listeners = global[event.type])) {
      fireUntilImmediateStopped(event, listeners);
    }
  };

  Eventable.prototype.on = function on(eventType, listener) {
    // if this type of event was never bound
    if (this[eventType]) {
      this[eventType].push(listener);
    } else {
      this[eventType] = [listener];
    }
  };

  Eventable.prototype.off = function off(eventType, listener) {
    // if it is an action event type
    var eventList = this[eventType];
    var index = eventList ? eventList.indexOf(listener) : -1;

    if (index !== -1) {
      eventList.splice(index, 1);
    }

    if (eventList && eventList.length === 0 || !listener) {
      this[eventType] = undefined;
    }
  };

  return Eventable;
}();

module.exports = Eventable;

},{"./utils/extend.js":41}],3:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var extend = require('./utils/extend');
var getOriginXY = require('./utils/getOriginXY');
var defaults = require('./defaultOptions');
var signals = require('./utils/Signals').new();

var InteractEvent = function () {
  /** */
  function InteractEvent(interaction, event, action, phase, element, related) {
    var preEnd = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

    _classCallCheck(this, InteractEvent);

    var target = interaction.target;
    var deltaSource = (target && target.options || defaults).deltaSource;
    var origin = getOriginXY(target, element, action);
    var starting = phase === 'start';
    var ending = phase === 'end';
    var coords = starting ? interaction.startCoords : interaction.curCoords;
    var prevEvent = interaction.prevEvent;

    element = element || interaction.element;

    var page = extend({}, coords.page);
    var client = extend({}, coords.client);

    page.x -= origin.x;
    page.y -= origin.y;

    client.x -= origin.x;
    client.y -= origin.y;

    this.ctrlKey = event.ctrlKey;
    this.altKey = event.altKey;
    this.shiftKey = event.shiftKey;
    this.metaKey = event.metaKey;
    this.button = event.button;
    this.buttons = event.buttons;
    this.target = element;
    this.currentTarget = element;
    this.relatedTarget = related || null;
    this.preEnd = preEnd;
    this.type = action + (phase || '');
    this.interaction = interaction;
    this.interactable = target;

    this.t0 = starting ? interaction.downTimes[interaction.downTimes.length - 1] : prevEvent.t0;

    var signalArg = {
      interaction: interaction,
      event: event,
      action: action,
      phase: phase,
      element: element,
      related: related,
      page: page,
      client: client,
      coords: coords,
      starting: starting,
      ending: ending,
      deltaSource: deltaSource,
      iEvent: this
    };

    signals.fire('set-xy', signalArg);

    if (ending) {
      // use previous coords when ending
      this.pageX = prevEvent.pageX;
      this.pageY = prevEvent.pageY;
      this.clientX = prevEvent.clientX;
      this.clientY = prevEvent.clientY;
    } else {
      this.pageX = page.x;
      this.pageY = page.y;
      this.clientX = client.x;
      this.clientY = client.y;
    }

    this.x0 = interaction.startCoords.page.x - origin.x;
    this.y0 = interaction.startCoords.page.y - origin.y;
    this.clientX0 = interaction.startCoords.client.x - origin.x;
    this.clientY0 = interaction.startCoords.client.y - origin.y;

    signals.fire('set-delta', signalArg);

    this.timeStamp = coords.timeStamp;
    this.dt = interaction.pointerDelta.timeStamp;
    this.duration = this.timeStamp - this.t0;

    // speed and velocity in pixels per second
    this.speed = interaction.pointerDelta[deltaSource].speed;
    this.velocityX = interaction.pointerDelta[deltaSource].vx;
    this.velocityY = interaction.pointerDelta[deltaSource].vy;

    this.swipe = ending || phase === 'inertiastart' ? this.getSwipe() : null;

    signals.fire('new', signalArg);
  }

  InteractEvent.prototype.getSwipe = function getSwipe() {
    var interaction = this.interaction;

    if (interaction.prevEvent.speed < 600 || this.timeStamp - interaction.prevEvent.timeStamp > 150) {
      return null;
    }

    var angle = 180 * Math.atan2(interaction.prevEvent.velocityY, interaction.prevEvent.velocityX) / Math.PI;
    var overlap = 22.5;

    if (angle < 0) {
      angle += 360;
    }

    var left = 135 - overlap <= angle && angle < 225 + overlap;
    var up = 225 - overlap <= angle && angle < 315 + overlap;

    var right = !left && (315 - overlap <= angle || angle < 45 + overlap);
    var down = !up && 45 - overlap <= angle && angle < 135 + overlap;

    return {
      up: up,
      down: down,
      left: left,
      right: right,
      angle: angle,
      speed: interaction.prevEvent.speed,
      velocity: {
        x: interaction.prevEvent.velocityX,
        y: interaction.prevEvent.velocityY
      }
    };
  };

  InteractEvent.prototype.preventDefault = function preventDefault() {};

  /** */


  InteractEvent.prototype.stopImmediatePropagation = function stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = true;
  };

  /** */


  InteractEvent.prototype.stopPropagation = function stopPropagation() {
    this.propagationStopped = true;
  };

  return InteractEvent;
}();

signals.on('set-delta', function (_ref) {
  var iEvent = _ref.iEvent,
      interaction = _ref.interaction,
      starting = _ref.starting,
      deltaSource = _ref.deltaSource;

  var prevEvent = starting ? iEvent : interaction.prevEvent;

  if (deltaSource === 'client') {
    iEvent.dx = iEvent.clientX - prevEvent.clientX;
    iEvent.dy = iEvent.clientY - prevEvent.clientY;
  } else {
    iEvent.dx = iEvent.pageX - prevEvent.pageX;
    iEvent.dy = iEvent.pageY - prevEvent.pageY;
  }
});

InteractEvent.signals = signals;

module.exports = InteractEvent;

},{"./defaultOptions":18,"./utils/Signals":34,"./utils/extend":41,"./utils/getOriginXY":42}],4:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clone = require('./utils/clone');
var is = require('./utils/is');
var events = require('./utils/events');
var extend = require('./utils/extend');
var actions = require('./actions/base');
var scope = require('./scope');
var Eventable = require('./Eventable');
var defaults = require('./defaultOptions');
var signals = require('./utils/Signals').new();

var _require = require('./utils/domUtils'),
    getElementRect = _require.getElementRect,
    nodeContains = _require.nodeContains,
    trySelector = _require.trySelector,
    matchesSelector = _require.matchesSelector;

var _require2 = require('./utils/window'),
    getWindow = _require2.getWindow;

var _require3 = require('./utils/arr'),
    contains = _require3.contains;

var _require4 = require('./utils/browser'),
    wheelEvent = _require4.wheelEvent;

// all set interactables


scope.interactables = [];

var Interactable = function () {
  /** */
  function Interactable(target, options) {
    _classCallCheck(this, Interactable);

    options = options || {};

    this.target = target;
    this.events = new Eventable();
    this._context = options.context || scope.document;
    this._win = getWindow(trySelector(target) ? this._context : target);
    this._doc = this._win.document;

    signals.fire('new', {
      target: target,
      options: options,
      interactable: this,
      win: this._win
    });

    scope.addDocument(this._doc, this._win);

    scope.interactables.push(this);

    this.set(options);
  }

  Interactable.prototype.setOnEvents = function setOnEvents(action, phases) {
    var onAction = 'on' + action;

    if (is.function(phases.onstart)) {
      this.events[onAction + 'start'] = phases.onstart;
    }
    if (is.function(phases.onmove)) {
      this.events[onAction + 'move'] = phases.onmove;
    }
    if (is.function(phases.onend)) {
      this.events[onAction + 'end'] = phases.onend;
    }
    if (is.function(phases.oninertiastart)) {
      this.events[onAction + 'inertiastart'] = phases.oninertiastart;
    }

    return this;
  };

  Interactable.prototype.setPerAction = function setPerAction(action, options) {
    // for all the default per-action options
    for (var option in options) {
      // if this option exists for this action
      if (option in defaults[action]) {
        // if the option in the options arg is an object value
        if (is.object(options[option])) {
          // duplicate the object and merge
          this.options[action][option] = clone(this.options[action][option] || {});
          extend(this.options[action][option], options[option]);

          if (is.object(defaults.perAction[option]) && 'enabled' in defaults.perAction[option]) {
            this.options[action][option].enabled = options[option].enabled === false ? false : true;
          }
        } else if (is.bool(options[option]) && is.object(defaults.perAction[option])) {
          this.options[action][option].enabled = options[option];
        } else if (options[option] !== undefined) {
          // or if it's not undefined, do a plain assignment
          this.options[action][option] = options[option];
        }
      }
    }
  };

  /**
   * The default function to get an Interactables bounding rect. Can be
   * overridden using {@link Interactable.rectChecker}.
   *
   * @param {Element} [element] The element to measure.
   * @return {object} The object's bounding rectangle.
   */


  Interactable.prototype.getRect = function getRect(element) {
    element = element || this.target;

    if (is.string(this.target) && !is.element(element)) {
      element = this._context.querySelector(this.target);
    }

    return getElementRect(element);
  };

  /**
   * Returns or sets the function used to calculate the interactable's
   * element's rectangle
   *
   * @param {function} [checker] A function which returns this Interactable's
   * bounding rectangle. See {@link Interactable.getRect}
   * @return {function | object} The checker function or this Interactable
   */


  Interactable.prototype.rectChecker = function rectChecker(checker) {
    if (is.function(checker)) {
      this.getRect = checker;

      return this;
    }

    if (checker === null) {
      delete this.options.getRect;

      return this;
    }

    return this.getRect;
  };

  Interactable.prototype._backCompatOption = function _backCompatOption(optionName, newValue) {
    if (trySelector(newValue) || is.object(newValue)) {
      this.options[optionName] = newValue;

      for (var _i = 0; _i < actions.names.length; _i++) {
        var _ref;

        _ref = actions.names[_i];
        var action = _ref;

        this.options[action][optionName] = newValue;
      }

      return this;
    }

    return this.options[optionName];
  };

  /**
   * Gets or sets the origin of the Interactable's element.  The x and y
   * of the origin will be subtracted from action event coordinates.
   *
   * @param {Element | object | string} [origin] An HTML or SVG Element whose
   * rect will be used, an object eg. { x: 0, y: 0 } or string 'parent', 'self'
   * or any CSS selector
   *
   * @return {object} The current origin or this Interactable
   */


  Interactable.prototype.origin = function origin(newValue) {
    return this._backCompatOption('origin', newValue);
  };

  /**
   * Returns or sets the mouse coordinate types used to calculate the
   * movement of the pointer.
   *
   * @param {string} [newValue] Use 'client' if you will be scrolling while
   * interacting; Use 'page' if you want autoScroll to work
   * @return {string | object} The current deltaSource or this Interactable
   */


  Interactable.prototype.deltaSource = function deltaSource(newValue) {
    if (newValue === 'page' || newValue === 'client') {
      this.options.deltaSource = newValue;

      return this;
    }

    return this.options.deltaSource;
  };

  /**
   * Gets the selector context Node of the Interactable. The default is
   * `window.document`.
   *
   * @return {Node} The context Node of this Interactable
   */


  Interactable.prototype.context = function context() {
    return this._context;
  };

  Interactable.prototype.inContext = function inContext(element) {
    return this._context === element.ownerDocument || nodeContains(this._context, element);
  };

  /**
   * Calls listeners for the given InteractEvent type bound globally
   * and directly to this Interactable
   *
   * @param {InteractEvent} iEvent The InteractEvent object to be fired on this
   * Interactable
   * @return {Interactable} this Interactable
   */


  Interactable.prototype.fire = function fire(iEvent) {
    this.events.fire(iEvent);

    return this;
  };

  Interactable.prototype._onOffMultiple = function _onOffMultiple(method, eventType, listener, options) {
    if (is.string(eventType) && eventType.search(' ') !== -1) {
      eventType = eventType.trim().split(/ +/);
    }

    if (is.array(eventType)) {
      for (var _i2 = 0; _i2 < eventType.length; _i2++) {
        var _ref2;

        _ref2 = eventType[_i2];
        var type = _ref2;

        this[method](type, listener, options);
      }

      return true;
    }

    if (is.object(eventType)) {
      for (var prop in eventType) {
        this[method](prop, eventType[prop], listener);
      }

      return true;
    }
  };

  /**
   * Binds a listener for an InteractEvent, pointerEvent or DOM event.
   *
   * @param {string | array | object} eventType  The types of events to listen
   * for
   * @param {function} listener   The function event (s)
   * @param {object | boolean} [options]    options object or useCapture flag
   * for addEventListener
   * @return {object} This Interactable
   */


  Interactable.prototype.on = function on(eventType, listener, options) {
    if (this._onOffMultiple('on', eventType, listener, options)) {
      return this;
    }

    if (eventType === 'wheel') {
      eventType = wheelEvent;
    }

    if (contains(Interactable.eventTypes, eventType)) {
      this.events.on(eventType, listener);
    }
    // delegated event for selector
    else if (is.string(this.target)) {
        events.addDelegate(this.target, this._context, eventType, listener, options);
      } else {
        events.add(this.target, eventType, listener, options);
      }

    return this;
  };

  /**
   * Removes an InteractEvent, pointerEvent or DOM event listener
   *
   * @param {string | array | object} eventType The types of events that were
   * listened for
   * @param {function} listener The listener function to be removed
   * @param {object | boolean} [options] options object or useCapture flag for
   * removeEventListener
   * @return {object} This Interactable
   */


  Interactable.prototype.off = function off(eventType, listener, options) {
    if (this._onOffMultiple('off', eventType, listener, options)) {
      return this;
    }

    if (eventType === 'wheel') {
      eventType = wheelEvent;
    }

    // if it is an action event type
    if (contains(Interactable.eventTypes, eventType)) {
      this.events.off(eventType, listener);
    }
    // delegated event
    else if (is.string(this.target)) {
        events.removeDelegate(this.target, this._context, eventType, listener, options);
      }
      // remove listener from this Interatable's element
      else {
          events.remove(this.target, eventType, listener, options);
        }

    return this;
  };

  /**
   * Reset the options of this Interactable
   *
   * @param {object} options The new settings to apply
   * @return {object} This Interactable
   */


  Interactable.prototype.set = function set(options) {
    if (!is.object(options)) {
      options = {};
    }

    this.options = clone(defaults.base);

    var perActions = clone(defaults.perAction);

    for (var actionName in actions.methodDict) {
      var methodName = actions.methodDict[actionName];

      this.options[actionName] = clone(defaults[actionName]);

      this.setPerAction(actionName, perActions);

      this[methodName](options[actionName]);
    }

    for (var _i3 = 0; _i3 < Interactable.settingsMethods.length; _i3++) {
      var _ref3;

      _ref3 = Interactable.settingsMethods[_i3];
      var setting = _ref3;

      this.options[setting] = defaults.base[setting];

      if (setting in options) {
        this[setting](options[setting]);
      }
    }

    signals.fire('set', {
      options: options,
      interactable: this
    });

    return this;
  };

  /**
   * Remove this interactable from the list of interactables and remove it's
   * action capabilities and event listeners
   *
   * @return {interact}
   */


  Interactable.prototype.unset = function unset() {
    events.remove(this.target, 'all');

    if (is.string(this.target)) {
      // remove delegated events
      for (var type in events.delegatedEvents) {
        var delegated = events.delegatedEvents[type];

        if (delegated.selectors[0] === this.target && delegated.contexts[0] === this._context) {

          delegated.selectors.splice(0, 1);
          delegated.contexts.splice(0, 1);
          delegated.listeners.splice(0, 1);

          // remove the arrays if they are empty
          if (!delegated.selectors.length) {
            delegated[type] = null;
          }
        }

        events.remove(this._context, type, events.delegateListener);
        events.remove(this._context, type, events.delegateUseCapture, true);
      }
    } else {
      events.remove(this, 'all');
    }

    signals.fire('unset', { interactable: this });

    scope.interactables.splice(scope.interactables.indexOf(this), 1);

    // Stop related interactions when an Interactable is unset
    for (var _i4 = 0; _i4 < (scope.interactions || []).length; _i4++) {
      var _ref4;

      _ref4 = (scope.interactions || [])[_i4];
      var interaction = _ref4;

      if (interaction.target === this && interaction.interacting() && !interaction._ending) {
        interaction.stop();
      }
    }

    return scope.interact;
  };

  return Interactable;
}();

scope.interactables.indexOfElement = function indexOfElement(target, context) {
  context = context || scope.document;

  for (var i = 0; i < this.length; i++) {
    var interactable = this[i];

    if (interactable.target === target && interactable._context === context) {
      return i;
    }
  }
  return -1;
};

scope.interactables.get = function interactableGet(element, options, dontCheckInContext) {
  var ret = this[this.indexOfElement(element, options && options.context)];

  return ret && (is.string(element) || dontCheckInContext || ret.inContext(element)) ? ret : null;
};

scope.interactables.forEachMatch = function (element, callback) {
  for (var _i5 = 0; _i5 < this.length; _i5++) {
    var _ref5;

    _ref5 = this[_i5];
    var interactable = _ref5;

    var ret = void 0;

    if ((is.string(interactable.target)
    // target is a selector and the element matches
    ? is.element(element) && matchesSelector(element, interactable.target) :
    // target is the element
    element === interactable.target) &&
    // the element is in context
    interactable.inContext(element)) {
      ret = callback(interactable);
    }

    if (ret !== undefined) {
      return ret;
    }
  }
};

// all interact.js eventTypes
Interactable.eventTypes = scope.eventTypes = [];

Interactable.signals = signals;

Interactable.settingsMethods = ['deltaSource', 'origin', 'preventDefault', 'rectChecker'];

module.exports = Interactable;

},{"./Eventable":2,"./actions/base":6,"./defaultOptions":18,"./scope":33,"./utils/Signals":34,"./utils/arr":35,"./utils/browser":36,"./utils/clone":37,"./utils/domUtils":39,"./utils/events":40,"./utils/extend":41,"./utils/is":46,"./utils/window":52}],5:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var scope = require('./scope');
var utils = require('./utils');
var events = require('./utils/events');
var browser = require('./utils/browser');
var domObjects = require('./utils/domObjects');
var finder = require('./utils/interactionFinder');
var signals = require('./utils/Signals').new();

var listeners = {};
var methodNames = ['pointerDown', 'pointerMove', 'pointerUp', 'updatePointer', 'removePointer'];

// for ignoring browser's simulated mouse events
var prevTouchTime = 0;

// all active and idle interactions
scope.interactions = [];

var Interaction = function () {
  /** */
  function Interaction(_ref) {
    var pointerType = _ref.pointerType;

    _classCallCheck(this, Interaction);

    this.target = null; // current interactable being interacted with
    this.element = null; // the target element of the interactable

    this.prepared = { // action that's ready to be fired on next move event
      name: null,
      axis: null,
      edges: null
    };

    // keep track of added pointers
    this.pointers = [];
    this.pointerIds = [];
    this.downTargets = [];
    this.downTimes = [];

    // Previous native pointer move event coordinates
    this.prevCoords = {
      page: { x: 0, y: 0 },
      client: { x: 0, y: 0 },
      timeStamp: 0
    };
    // current native pointer move event coordinates
    this.curCoords = {
      page: { x: 0, y: 0 },
      client: { x: 0, y: 0 },
      timeStamp: 0
    };

    // Starting InteractEvent pointer coordinates
    this.startCoords = {
      page: { x: 0, y: 0 },
      client: { x: 0, y: 0 },
      timeStamp: 0
    };

    // Change in coordinates and time of the pointer
    this.pointerDelta = {
      page: { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
      client: { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
      timeStamp: 0
    };

    this.downEvent = null; // pointerdown/mousedown/touchstart event
    this.downPointer = {};

    this._eventTarget = null;
    this._curEventTarget = null;

    this.prevEvent = null; // previous action event

    this.pointerIsDown = false;
    this.pointerWasMoved = false;
    this._interacting = false;
    this._ending = false;

    this.pointerType = pointerType;

    signals.fire('new', this);

    scope.interactions.push(this);
  }

  Interaction.prototype.pointerDown = function pointerDown(pointer, event, eventTarget) {
    var pointerIndex = this.updatePointer(pointer, event, true);

    signals.fire('down', {
      pointer: pointer,
      event: event,
      eventTarget: eventTarget,
      pointerIndex: pointerIndex,
      interaction: this
    });
  };

  /**
   * ```js
   * interact(target)
   *   .draggable({
   *     // disable the default drag start by down->move
   *     manualStart: true
   *   })
   *   // start dragging after the user holds the pointer down
   *   .on('hold', function (event) {
   *     var interaction = event.interaction;
   *
   *     if (!interaction.interacting()) {
   *       interaction.start({ name: 'drag' },
   *                         event.interactable,
   *                         event.currentTarget);
   *     }
   * });
   * ```
   *
   * Start an action with the given Interactable and Element as tartgets. The
   * action must be enabled for the target Interactable and an appropriate
   * number of pointers must be held down - 1 for drag/resize, 2 for gesture.
   *
   * Use it with `interactable.<action>able({ manualStart: false })` to always
   * [start actions manually](https://github.com/taye/interact.js/issues/114)
   *
   * @param {object} action   The action to be performed - drag, resize, etc.
   * @param {Interactable} target  The Interactable to target
   * @param {Element} element The DOM Element to target
   * @return {object} interact
   */


  Interaction.prototype.start = function start(action, target, element) {
    if (this.interacting() || !this.pointerIsDown || this.pointerIds.length < (action.name === 'gesture' ? 2 : 1)) {
      return;
    }

    // if this interaction had been removed after stopping
    // add it back
    if (scope.interactions.indexOf(this) === -1) {
      scope.interactions.push(this);
    }

    utils.copyAction(this.prepared, action);
    this.target = target;
    this.element = element;

    signals.fire('action-start', {
      interaction: this,
      event: this.downEvent
    });
  };

  Interaction.prototype.pointerMove = function pointerMove(pointer, event, eventTarget) {
    if (!this.simulation) {
      this.updatePointer(pointer);
      utils.setCoords(this.curCoords, this.pointers);
    }

    var duplicateMove = this.curCoords.page.x === this.prevCoords.page.x && this.curCoords.page.y === this.prevCoords.page.y && this.curCoords.client.x === this.prevCoords.client.x && this.curCoords.client.y === this.prevCoords.client.y;

    var dx = void 0;
    var dy = void 0;

    // register movement greater than pointerMoveTolerance
    if (this.pointerIsDown && !this.pointerWasMoved) {
      dx = this.curCoords.client.x - this.startCoords.client.x;
      dy = this.curCoords.client.y - this.startCoords.client.y;

      this.pointerWasMoved = utils.hypot(dx, dy) > Interaction.pointerMoveTolerance;
    }

    var signalArg = {
      pointer: pointer,
      pointerIndex: this.getPointerIndex(pointer),
      event: event,
      eventTarget: eventTarget,
      dx: dx,
      dy: dy,
      duplicate: duplicateMove,
      interaction: this,
      interactingBeforeMove: this.interacting()
    };

    if (!duplicateMove) {
      // set pointer coordinate, time changes and speeds
      utils.setCoordDeltas(this.pointerDelta, this.prevCoords, this.curCoords);
    }

    signals.fire('move', signalArg);

    if (!duplicateMove) {
      // if interacting, fire an 'action-move' signal etc
      if (this.interacting()) {
        this.doMove(signalArg);
      }

      if (this.pointerWasMoved) {
        utils.copyCoords(this.prevCoords, this.curCoords);
      }
    }
  };

  /**
   * ```js
   * interact(target)
   *   .draggable(true)
   *   .on('dragmove', function (event) {
   *     if (someCondition) {
   *       // change the snap settings
   *       event.interactable.draggable({ snap: { targets: [] }});
   *       // fire another move event with re-calculated snap
   *       event.interaction.doMove();
   *     }
   *   });
   * ```
   *
   * Force a move of the current action at the same coordinates. Useful if
   * snap/restrict has been changed and you want a movement with the new
   * settings.
   */


  Interaction.prototype.doMove = function doMove(signalArg) {
    signalArg = utils.extend({
      pointer: this.pointers[0],
      event: this.prevEvent,
      eventTarget: this._eventTarget,
      interaction: this
    }, signalArg || {});

    signals.fire('before-action-move', signalArg);

    if (!this._dontFireMove) {
      signals.fire('action-move', signalArg);
    }

    this._dontFireMove = false;
  };

  // End interact move events and stop auto-scroll unless simulation is running


  Interaction.prototype.pointerUp = function pointerUp(pointer, event, eventTarget, curEventTarget) {
    var pointerIndex = this.getPointerIndex(pointer);

    signals.fire(/cancel$/i.test(event.type) ? 'cancel' : 'up', {
      pointer: pointer,
      pointerIndex: pointerIndex,
      event: event,
      eventTarget: eventTarget,
      curEventTarget: curEventTarget,
      interaction: this
    });

    if (!this.simulation) {
      this.end(event);
    }

    this.pointerIsDown = false;
    this.removePointer(pointer, event);
  };

  /**
   * ```js
   * interact(target)
   *   .draggable(true)
   *   .on('move', function (event) {
   *     if (event.pageX > 1000) {
   *       // end the current action
   *       event.interaction.end();
   *       // stop all further listeners from being called
   *       event.stopImmediatePropagation();
   *     }
   *   });
   * ```
   *
   * Stop the current action and fire an end event. Inertial movement does
   * not happen.
   *
   * @param {PointerEvent} [event]
   */


  Interaction.prototype.end = function end(event) {
    this._ending = true;

    event = event || this.prevEvent;

    if (this.interacting()) {
      signals.fire('action-end', {
        event: event,
        interaction: this
      });
    }

    this.stop();
    this._ending = false;
  };

  Interaction.prototype.currentAction = function currentAction() {
    return this._interacting ? this.prepared.name : null;
  };

  Interaction.prototype.interacting = function interacting() {
    return this._interacting;
  };

  /** */


  Interaction.prototype.stop = function stop() {
    signals.fire('stop', { interaction: this });

    if (this._interacting) {
      signals.fire('stop-active', { interaction: this });
      signals.fire('stop-' + this.prepared.name, { interaction: this });
    }

    this.target = this.element = null;

    this._interacting = false;
    this.prepared.name = this.prevEvent = null;
  };

  Interaction.prototype.getPointerIndex = function getPointerIndex(pointer) {
    // mouse and pen interactions may have only one pointer
    if (this.pointerType === 'mouse' || this.pointerType === 'pen') {
      return 0;
    }

    return this.pointerIds.indexOf(utils.getPointerId(pointer));
  };

  Interaction.prototype.updatePointer = function updatePointer(pointer, event) {
    var down = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : event && /(down|start)$/i.test(event.type);

    var id = utils.getPointerId(pointer);
    var index = this.getPointerIndex(pointer);

    if (index === -1) {
      index = this.pointerIds.length;
      this.pointerIds[index] = id;
    }

    if (down) {
      signals.fire('update-pointer-down', {
        pointer: pointer,
        event: event,
        down: down,
        pointerId: id,
        pointerIndex: index,
        interaction: this
      });
    }

    this.pointers[index] = pointer;

    return index;
  };

  Interaction.prototype.removePointer = function removePointer(pointer, event) {
    var index = this.getPointerIndex(pointer);

    if (index === -1) {
      return;
    }

    signals.fire('remove-pointer', {
      pointer: pointer,
      event: event,
      pointerIndex: index,
      interaction: this
    });

    this.pointers.splice(index, 1);
    this.pointerIds.splice(index, 1);
    this.downTargets.splice(index, 1);
    this.downTimes.splice(index, 1);
  };

  Interaction.prototype._updateEventTargets = function _updateEventTargets(target, currentTarget) {
    this._eventTarget = target;
    this._curEventTarget = currentTarget;
  };

  return Interaction;
}();

for (var _i = 0; _i < methodNames.length; _i++) {
  var method = methodNames[_i];
  listeners[method] = doOnInteractions(method);
}

function doOnInteractions(method) {
  return function (event) {
    var pointerType = utils.getPointerType(event);

    var _utils$getEventTarget = utils.getEventTargets(event),
        eventTarget = _utils$getEventTarget[0],
        curEventTarget = _utils$getEventTarget[1];

    var matches = []; // [ [pointer, interaction], ...]

    if (browser.supportsTouch && /touch/.test(event.type)) {
      prevTouchTime = new Date().getTime();

      for (var _i2 = 0; _i2 < event.changedTouches.length; _i2++) {
        var _ref2;

        _ref2 = event.changedTouches[_i2];
        var changedTouch = _ref2;

        var pointer = changedTouch;
        var interaction = finder.search(pointer, event.type, eventTarget);

        matches.push([pointer, interaction || new Interaction({ pointerType: pointerType })]);
      }
    } else {
      var invalidPointer = false;

      if (!browser.supportsPointerEvent && /mouse/.test(event.type)) {
        // ignore mouse events while touch interactions are active
        for (var i = 0; i < scope.interactions.length && !invalidPointer; i++) {
          invalidPointer = scope.interactions[i].pointerType !== 'mouse' && scope.interactions[i].pointerIsDown;
        }

        // try to ignore mouse events that are simulated by the browser
        // after a touch event
        invalidPointer = invalidPointer || new Date().getTime() - prevTouchTime < 500
        // on iOS and Firefox Mobile, MouseEvent.timeStamp is zero if simulated
        || event.timeStamp === 0;
      }

      if (!invalidPointer) {
        var _interaction = finder.search(event, event.type, eventTarget);

        if (!_interaction) {
          _interaction = new Interaction({ pointerType: pointerType });
        }

        matches.push([event, _interaction]);
      }
    }

    for (var _i3 = 0; _i3 < matches.length; _i3++) {
      var _ref3 = matches[_i3];
      var _pointer = _ref3[0];
      var _interaction2 = _ref3[1];

      _interaction2._updateEventTargets(eventTarget, curEventTarget);
      _interaction2[method](_pointer, event, eventTarget, curEventTarget);
    }
  };
}

function endAll(event) {
  for (var _i4 = 0; _i4 < scope.interactions.length; _i4++) {
    var _ref4;

    _ref4 = scope.interactions[_i4];
    var interaction = _ref4;

    interaction.end(event);
    signals.fire('endall', { event: event, interaction: interaction });
  }
}

var docEvents = {/* 'eventType': listenerFunc */};
var pEventTypes = browser.pEventTypes;

if (domObjects.PointerEvent) {
  docEvents[pEventTypes.down] = listeners.pointerDown;
  docEvents[pEventTypes.move] = listeners.pointerMove;
  docEvents[pEventTypes.up] = listeners.pointerUp;
  docEvents[pEventTypes.cancel] = listeners.pointerUp;
} else {
  docEvents.mousedown = listeners.pointerDown;
  docEvents.mousemove = listeners.pointerMove;
  docEvents.mouseup = listeners.pointerUp;

  docEvents.touchstart = listeners.pointerDown;
  docEvents.touchmove = listeners.pointerMove;
  docEvents.touchend = listeners.pointerUp;
  docEvents.touchcancel = listeners.pointerUp;
}

docEvents.blur = endAll;

function onDocSignal(_ref5, signalName) {
  var doc = _ref5.doc;

  var eventMethod = signalName.indexOf('add') === 0 ? events.add : events.remove;

  // delegate event listener
  for (var eventType in scope.delegatedEvents) {
    eventMethod(doc, eventType, events.delegateListener);
    eventMethod(doc, eventType, events.delegateUseCapture, true);
  }

  for (var _eventType in docEvents) {
    eventMethod(doc, _eventType, docEvents[_eventType], browser.isIOS ? { passive: false } : undefined);
  }
}

signals.on('update-pointer-down', function (_ref6) {
  var interaction = _ref6.interaction,
      pointer = _ref6.pointer,
      pointerId = _ref6.pointerId,
      pointerIndex = _ref6.pointerIndex,
      event = _ref6.event,
      eventTarget = _ref6.eventTarget,
      down = _ref6.down;

  interaction.pointerIds[pointerIndex] = pointerId;
  interaction.pointers[pointerIndex] = pointer;

  if (down) {
    interaction.pointerIsDown = true;
  }

  if (!interaction.interacting()) {
    utils.setCoords(interaction.startCoords, interaction.pointers);

    utils.copyCoords(interaction.curCoords, interaction.startCoords);
    utils.copyCoords(interaction.prevCoords, interaction.startCoords);

    interaction.downEvent = event;
    interaction.downTimes[pointerIndex] = interaction.curCoords.timeStamp;
    interaction.downTargets[pointerIndex] = eventTarget || event && utils.getEventTargets(event)[0];
    interaction.pointerWasMoved = false;

    utils.pointerExtend(interaction.downPointer, pointer);
  }
});

scope.signals.on('add-document', onDocSignal);
scope.signals.on('remove-document', onDocSignal);

Interaction.pointerMoveTolerance = 1;
Interaction.doOnInteractions = doOnInteractions;
Interaction.endAll = endAll;
Interaction.signals = signals;
Interaction.docEvents = docEvents;

scope.endAllInteractions = endAll;

module.exports = Interaction;

},{"./scope":33,"./utils":44,"./utils/Signals":34,"./utils/browser":36,"./utils/domObjects":38,"./utils/events":40,"./utils/interactionFinder":45}],6:[function(require,module,exports){
'use strict';

var Interaction = require('../Interaction');
var InteractEvent = require('../InteractEvent');

var actions = {
  firePrepared: firePrepared,
  names: [],
  methodDict: {}
};

Interaction.signals.on('action-start', function (_ref) {
  var interaction = _ref.interaction,
      event = _ref.event;

  interaction._interacting = true;
  firePrepared(interaction, event, 'start');
});

Interaction.signals.on('action-move', function (_ref2) {
  var interaction = _ref2.interaction,
      event = _ref2.event,
      preEnd = _ref2.preEnd;

  firePrepared(interaction, event, 'move', preEnd);

  // if the action was ended in a listener
  if (!interaction.interacting()) {
    return false;
  }
});

Interaction.signals.on('action-end', function (_ref3) {
  var interaction = _ref3.interaction,
      event = _ref3.event;

  firePrepared(interaction, event, 'end');
});

function firePrepared(interaction, event, phase, preEnd) {
  var actionName = interaction.prepared.name;

  var newEvent = new InteractEvent(interaction, event, actionName, phase, interaction.element, null, preEnd);

  interaction.target.fire(newEvent);
  interaction.prevEvent = newEvent;
}

module.exports = actions;

},{"../InteractEvent":3,"../Interaction":5}],7:[function(require,module,exports){
'use strict';

var actions = require('./base');
var utils = require('../utils');
var InteractEvent = require('../InteractEvent');
/** @lends Interactable */
var Interactable = require('../Interactable');
var Interaction = require('../Interaction');
var defaultOptions = require('../defaultOptions');

var drag = {
  defaults: {
    enabled: false,
    mouseButtons: null,

    origin: null,
    snap: null,
    restrict: null,
    inertia: null,
    autoScroll: null,

    startAxis: 'xy',
    lockAxis: 'xy'
  },

  checker: function checker(pointer, event, interactable) {
    var dragOptions = interactable.options.drag;

    return dragOptions.enabled ? { name: 'drag', axis: dragOptions.lockAxis === 'start' ? dragOptions.startAxis : dragOptions.lockAxis } : null;
  },

  getCursor: function getCursor() {
    return 'move';
  }
};

Interaction.signals.on('before-action-move', function (_ref) {
  var interaction = _ref.interaction;

  if (interaction.prepared.name !== 'drag') {
    return;
  }

  var axis = interaction.prepared.axis;

  if (axis === 'x') {
    interaction.curCoords.page.y = interaction.startCoords.page.y;
    interaction.curCoords.client.y = interaction.startCoords.client.y;

    interaction.pointerDelta.page.speed = Math.abs(interaction.pointerDelta.page.vx);
    interaction.pointerDelta.client.speed = Math.abs(interaction.pointerDelta.client.vx);
    interaction.pointerDelta.client.vy = 0;
    interaction.pointerDelta.page.vy = 0;
  } else if (axis === 'y') {
    interaction.curCoords.page.x = interaction.startCoords.page.x;
    interaction.curCoords.client.x = interaction.startCoords.client.x;

    interaction.pointerDelta.page.speed = Math.abs(interaction.pointerDelta.page.vy);
    interaction.pointerDelta.client.speed = Math.abs(interaction.pointerDelta.client.vy);
    interaction.pointerDelta.client.vx = 0;
    interaction.pointerDelta.page.vx = 0;
  }
});

// dragmove
InteractEvent.signals.on('new', function (_ref2) {
  var iEvent = _ref2.iEvent,
      interaction = _ref2.interaction;

  if (iEvent.type !== 'dragmove') {
    return;
  }

  var axis = interaction.prepared.axis;

  if (axis === 'x') {
    iEvent.pageY = interaction.startCoords.page.y;
    iEvent.clientY = interaction.startCoords.client.y;
    iEvent.dy = 0;
  } else if (axis === 'y') {
    iEvent.pageX = interaction.startCoords.page.x;
    iEvent.clientX = interaction.startCoords.client.x;
    iEvent.dx = 0;
  }
});

/**
 * ```js
 * interact(element).draggable({
 *     onstart: function (event) {},
 *     onmove : function (event) {},
 *     onend  : function (event) {},
 *
 *     // the axis in which the first movement must be
 *     // for the drag sequence to start
 *     // 'xy' by default - any direction
 *     startAxis: 'x' || 'y' || 'xy',
 *
 *     // 'xy' by default - don't restrict to one axis (move in any direction)
 *     // 'x' or 'y' to restrict movement to either axis
 *     // 'start' to restrict movement to the axis the drag started in
 *     lockAxis: 'x' || 'y' || 'xy' || 'start',
 *
 *     // max number of drags that can happen concurrently
 *     // with elements of this Interactable. Infinity by default
 *     max: Infinity,
 *
 *     // max number of drags that can target the same element+Interactable
 *     // 1 by default
 *     maxPerElement: 2
 * });
 *
 * var isDraggable = interact('element').draggable(); // true
 * ```
 *
 * Get or set whether drag actions can be performed on the target
 *
 * @param {boolean | object} [options] true/false or An object with event
 * listeners to be fired on drag events (object makes the Interactable
 * draggable)
 * @return {boolean | Interactable} boolean indicating if this can be the
 * target of drag events, or this Interctable
 */
Interactable.prototype.draggable = function (options) {
  if (utils.is.object(options)) {
    this.options.drag.enabled = options.enabled === false ? false : true;
    this.setPerAction('drag', options);
    this.setOnEvents('drag', options);

    if (/^(xy|x|y|start)$/.test(options.lockAxis)) {
      this.options.drag.lockAxis = options.lockAxis;
    }
    if (/^(xy|x|y)$/.test(options.startAxis)) {
      this.options.drag.startAxis = options.startAxis;
    }

    return this;
  }

  if (utils.is.bool(options)) {
    this.options.drag.enabled = options;

    if (!options) {
      this.ondragstart = this.ondragstart = this.ondragend = null;
    }

    return this;
  }

  return this.options.drag;
};

actions.drag = drag;
actions.names.push('drag');
utils.merge(Interactable.eventTypes, ['dragstart', 'dragmove', 'draginertiastart', 'draginertiaresume', 'dragend']);
actions.methodDict.drag = 'draggable';

defaultOptions.drag = drag.defaults;

module.exports = drag;

},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":18,"../utils":44,"./base":6}],8:[function(require,module,exports){
'use strict';

var actions = require('./base');
var utils = require('../utils');
var scope = require('../scope');
/** @lends module:interact */
var interact = require('../interact');
var InteractEvent = require('../InteractEvent');
/** @lends Interactable */
var Interactable = require('../Interactable');
var Interaction = require('../Interaction');
var defaultOptions = require('../defaultOptions');

var drop = {
  defaults: {
    enabled: false,
    accept: null,
    overlap: 'pointer'
  }
};

var dynamicDrop = false;

Interaction.signals.on('action-start', function (_ref) {
  var interaction = _ref.interaction,
      event = _ref.event;

  if (interaction.prepared.name !== 'drag') {
    return;
  }

  // reset active dropzones
  interaction.activeDrops.dropzones = [];
  interaction.activeDrops.elements = [];
  interaction.activeDrops.rects = [];

  interaction.dropEvents = null;

  if (!interaction.dynamicDrop) {
    setActiveDrops(interaction.activeDrops, interaction.element);
  }

  var dragEvent = interaction.prevEvent;
  var dropEvents = getDropEvents(interaction, event, dragEvent);

  if (dropEvents.activate) {
    fireActiveDrops(interaction.activeDrops, dropEvents.activate);
  }
});

InteractEvent.signals.on('new', function (_ref2) {
  var interaction = _ref2.interaction,
      iEvent = _ref2.iEvent,
      event = _ref2.event;

  if (iEvent.type !== 'dragmove' && iEvent.type !== 'dragend') {
    return;
  }

  var draggableElement = interaction.element;
  var dragEvent = iEvent;
  var dropResult = getDrop(dragEvent, event, draggableElement);

  interaction.dropTarget = dropResult.dropzone;
  interaction.dropElement = dropResult.element;

  interaction.dropEvents = getDropEvents(interaction, event, dragEvent);
});

Interaction.signals.on('action-move', function (_ref3) {
  var interaction = _ref3.interaction;

  if (interaction.prepared.name !== 'drag') {
    return;
  }

  fireDropEvents(interaction, interaction.dropEvents);
});

Interaction.signals.on('action-end', function (_ref4) {
  var interaction = _ref4.interaction;

  if (interaction.prepared.name === 'drag') {
    fireDropEvents(interaction, interaction.dropEvents);
  }
});

Interaction.signals.on('stop-drag', function (_ref5) {
  var interaction = _ref5.interaction;

  interaction.activeDrops = {
    dropzones: null,
    elements: null,
    rects: null
  };

  interaction.dropEvents = null;
});

function collectDrops(activeDrops, element) {
  var drops = [];
  var elements = [];

  // collect all dropzones and their elements which qualify for a drop
  for (var _i = 0; _i < scope.interactables.length; _i++) {
    var _ref6;

    _ref6 = scope.interactables[_i];
    var current = _ref6;

    if (!current.options.drop.enabled) {
      continue;
    }

    var accept = current.options.drop.accept;

    // test the draggable element against the dropzone's accept setting
    if (utils.is.element(accept) && accept !== element || utils.is.string(accept) && !utils.matchesSelector(element, accept)) {

      continue;
    }

    // query for new elements if necessary
    var dropElements = utils.is.string(current.target) ? current._context.querySelectorAll(current.target) : [current.target];

    for (var _i2 = 0; _i2 < dropElements.length; _i2++) {
      var _ref7;

      _ref7 = dropElements[_i2];
      var currentElement = _ref7;

      if (currentElement !== element) {
        drops.push(current);
        elements.push(currentElement);
      }
    }
  }

  return {
    elements: elements,
    dropzones: drops
  };
}

function fireActiveDrops(activeDrops, event) {
  var prevElement = void 0;

  // loop through all active dropzones and trigger event
  for (var i = 0; i < activeDrops.dropzones.length; i++) {
    var current = activeDrops.dropzones[i];
    var currentElement = activeDrops.elements[i];

    // prevent trigger of duplicate events on same element
    if (currentElement !== prevElement) {
      // set current element as event target
      event.target = currentElement;
      current.fire(event);
    }
    prevElement = currentElement;
  }
}

// Collect a new set of possible drops and save them in activeDrops.
// setActiveDrops should always be called when a drag has just started or a
// drag event happens while dynamicDrop is true
function setActiveDrops(activeDrops, dragElement) {
  // get dropzones and their elements that could receive the draggable
  var possibleDrops = collectDrops(activeDrops, dragElement);

  activeDrops.dropzones = possibleDrops.dropzones;
  activeDrops.elements = possibleDrops.elements;
  activeDrops.rects = [];

  for (var i = 0; i < activeDrops.dropzones.length; i++) {
    activeDrops.rects[i] = activeDrops.dropzones[i].getRect(activeDrops.elements[i]);
  }
}

function getDrop(dragEvent, event, dragElement) {
  var interaction = dragEvent.interaction;
  var validDrops = [];

  if (dynamicDrop) {
    setActiveDrops(interaction.activeDrops, dragElement);
  }

  // collect all dropzones and their elements which qualify for a drop
  for (var j = 0; j < interaction.activeDrops.dropzones.length; j++) {
    var current = interaction.activeDrops.dropzones[j];
    var currentElement = interaction.activeDrops.elements[j];
    var rect = interaction.activeDrops.rects[j];

    validDrops.push(current.dropCheck(dragEvent, event, interaction.target, dragElement, currentElement, rect) ? currentElement : null);
  }

  // get the most appropriate dropzone based on DOM depth and order
  var dropIndex = utils.indexOfDeepestElement(validDrops);

  return {
    dropzone: interaction.activeDrops.dropzones[dropIndex] || null,
    element: interaction.activeDrops.elements[dropIndex] || null
  };
}

function getDropEvents(interaction, pointerEvent, dragEvent) {
  var dropEvents = {
    enter: null,
    leave: null,
    activate: null,
    deactivate: null,
    move: null,
    drop: null
  };

  var tmpl = {
    dragEvent: dragEvent,
    interaction: interaction,
    target: interaction.dropElement,
    dropzone: interaction.dropTarget,
    relatedTarget: dragEvent.target,
    draggable: dragEvent.interactable,
    timeStamp: dragEvent.timeStamp
  };

  if (interaction.dropElement !== interaction.prevDropElement) {
    // if there was a prevDropTarget, create a dragleave event
    if (interaction.prevDropTarget) {
      dropEvents.leave = utils.extend({ type: 'dragleave' }, tmpl);

      dragEvent.dragLeave = dropEvents.leave.target = interaction.prevDropElement;
      dragEvent.prevDropzone = dropEvents.leave.dropzone = interaction.prevDropTarget;
    }
    // if the dropTarget is not null, create a dragenter event
    if (interaction.dropTarget) {
      dropEvents.enter = {
        dragEvent: dragEvent,
        interaction: interaction,
        target: interaction.dropElement,
        dropzone: interaction.dropTarget,
        relatedTarget: dragEvent.target,
        draggable: dragEvent.interactable,
        timeStamp: dragEvent.timeStamp,
        type: 'dragenter'
      };

      dragEvent.dragEnter = interaction.dropElement;
      dragEvent.dropzone = interaction.dropTarget;
    }
  }

  if (dragEvent.type === 'dragend' && interaction.dropTarget) {
    dropEvents.drop = utils.extend({ type: 'drop' }, tmpl);

    dragEvent.dropzone = interaction.dropTarget;
    dragEvent.relatedTarget = interaction.dropElement;
  }
  if (dragEvent.type === 'dragstart') {
    dropEvents.activate = utils.extend({ type: 'dropactivate' }, tmpl);

    dropEvents.activate.target = null;
    dropEvents.activate.dropzone = null;
  }
  if (dragEvent.type === 'dragend') {
    dropEvents.deactivate = utils.extend({ type: 'dropdeactivate' }, tmpl);

    dropEvents.deactivate.target = null;
    dropEvents.deactivate.dropzone = null;
  }
  if (dragEvent.type === 'dragmove' && interaction.dropTarget) {
    dropEvents.move = utils.extend({
      dragmove: dragEvent,
      type: 'dropmove'
    }, tmpl);

    dragEvent.dropzone = interaction.dropTarget;
  }

  return dropEvents;
}

function fireDropEvents(interaction, dropEvents) {
  var activeDrops = interaction.activeDrops,
      prevDropTarget = interaction.prevDropTarget,
      dropTarget = interaction.dropTarget,
      dropElement = interaction.dropElement;


  if (dropEvents.leave) {
    prevDropTarget.fire(dropEvents.leave);
  }
  if (dropEvents.move) {
    dropTarget.fire(dropEvents.move);
  }
  if (dropEvents.enter) {
    dropTarget.fire(dropEvents.enter);
  }
  if (dropEvents.drop) {
    dropTarget.fire(dropEvents.drop);
  }
  if (dropEvents.deactivate) {
    fireActiveDrops(activeDrops, dropEvents.deactivate);
  }

  interaction.prevDropTarget = dropTarget;
  interaction.prevDropElement = dropElement;
}

/**
 * ```js
 * interact(target)
 * .dropChecker(function(dragEvent,         // related dragmove or dragend event
 *                       event,             // TouchEvent/PointerEvent/MouseEvent
 *                       dropped,           // bool result of the default checker
 *                       dropzone,          // dropzone Interactable
 *                       dropElement,       // dropzone elemnt
 *                       draggable,         // draggable Interactable
 *                       draggableElement) {// draggable element
 *
 *   return dropped && event.target.hasAttribute('allow-drop');
 * }
 * ```
 *
 * ```js
 * interact('.drop').dropzone({
 *   accept: '.can-drop' || document.getElementById('single-drop'),
 *   overlap: 'pointer' || 'center' || zeroToOne
 * }
 * ```
 *
 * Returns or sets whether draggables can be dropped onto this target to
 * trigger drop events
 *
 * Dropzones can receive the following events:
 *  - `dropactivate` and `dropdeactivate` when an acceptable drag starts and ends
 *  - `dragenter` and `dragleave` when a draggable enters and leaves the dropzone
 *  - `dragmove` when a draggable that has entered the dropzone is moved
 *  - `drop` when a draggable is dropped into this dropzone
 *
 * Use the `accept` option to allow only elements that match the given CSS
 * selector or element. The value can be:
 *
 *  - **an Element** - only that element can be dropped into this dropzone.
 *  - **a string**, - the element being dragged must match it as a CSS selector.
 *  - **`null`** - accept options is cleared - it accepts any element.
 *
 * Use the `overlap` option to set how drops are checked for. The allowed
 * values are:
 *
 *   - `'pointer'`, the pointer must be over the dropzone (default)
 *   - `'center'`, the draggable element's center must be over the dropzone
 *   - a number from 0-1 which is the `(intersection area) / (draggable area)`.
 *   e.g. `0.5` for drop to happen when half of the area of the draggable is
 *   over the dropzone
 *
 * Use the `checker` option to specify a function to check if a dragged element
 * is over this Interactable.
 *
 * @param {boolean | object | null} [options] The new options to be set.
 * @return {boolean | Interactable} The current setting or this Interactable
 */
Interactable.prototype.dropzone = function (options) {
  if (utils.is.object(options)) {
    this.options.drop.enabled = options.enabled === false ? false : true;

    if (utils.is.function(options.ondrop)) {
      this.events.ondrop = options.ondrop;
    }
    if (utils.is.function(options.ondropactivate)) {
      this.events.ondropactivate = options.ondropactivate;
    }
    if (utils.is.function(options.ondropdeactivate)) {
      this.events.ondropdeactivate = options.ondropdeactivate;
    }
    if (utils.is.function(options.ondragenter)) {
      this.events.ondragenter = options.ondragenter;
    }
    if (utils.is.function(options.ondragleave)) {
      this.events.ondragleave = options.ondragleave;
    }
    if (utils.is.function(options.ondropmove)) {
      this.events.ondropmove = options.ondropmove;
    }

    if (/^(pointer|center)$/.test(options.overlap)) {
      this.options.drop.overlap = options.overlap;
    } else if (utils.is.number(options.overlap)) {
      this.options.drop.overlap = Math.max(Math.min(1, options.overlap), 0);
    }
    if ('accept' in options) {
      this.options.drop.accept = options.accept;
    }
    if ('checker' in options) {
      this.options.drop.checker = options.checker;
    }

    return this;
  }

  if (utils.is.bool(options)) {
    this.options.drop.enabled = options;

    if (!options) {
      this.ondragenter = this.ondragleave = this.ondrop = this.ondropactivate = this.ondropdeactivate = null;
    }

    return this;
  }

  return this.options.drop;
};

Interactable.prototype.dropCheck = function (dragEvent, event, draggable, draggableElement, dropElement, rect) {
  var dropped = false;

  // if the dropzone has no rect (eg. display: none)
  // call the custom dropChecker or just return false
  if (!(rect = rect || this.getRect(dropElement))) {
    return this.options.drop.checker ? this.options.drop.checker(dragEvent, event, dropped, this, dropElement, draggable, draggableElement) : false;
  }

  var dropOverlap = this.options.drop.overlap;

  if (dropOverlap === 'pointer') {
    var origin = utils.getOriginXY(draggable, draggableElement, 'drag');
    var page = utils.getPageXY(dragEvent);

    page.x += origin.x;
    page.y += origin.y;

    var horizontal = page.x > rect.left && page.x < rect.right;
    var vertical = page.y > rect.top && page.y < rect.bottom;

    dropped = horizontal && vertical;
  }

  var dragRect = draggable.getRect(draggableElement);

  if (dragRect && dropOverlap === 'center') {
    var cx = dragRect.left + dragRect.width / 2;
    var cy = dragRect.top + dragRect.height / 2;

    dropped = cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
  }

  if (dragRect && utils.is.number(dropOverlap)) {
    var overlapArea = Math.max(0, Math.min(rect.right, dragRect.right) - Math.max(rect.left, dragRect.left)) * Math.max(0, Math.min(rect.bottom, dragRect.bottom) - Math.max(rect.top, dragRect.top));

    var overlapRatio = overlapArea / (dragRect.width * dragRect.height);

    dropped = overlapRatio >= dropOverlap;
  }

  if (this.options.drop.checker) {
    dropped = this.options.drop.checker(dragEvent, event, dropped, this, dropElement, draggable, draggableElement);
  }

  return dropped;
};

Interactable.signals.on('unset', function (_ref8) {
  var interactable = _ref8.interactable;

  interactable.dropzone(false);
});

Interactable.settingsMethods.push('dropChecker');

Interaction.signals.on('new', function (interaction) {
  interaction.dropTarget = null; // the dropzone a drag target might be dropped into
  interaction.dropElement = null; // the element at the time of checking
  interaction.prevDropTarget = null; // the dropzone that was recently dragged away from
  interaction.prevDropElement = null; // the element at the time of checking
  interaction.dropEvents = null; // the dropEvents related to the current drag event

  interaction.activeDrops = {
    dropzones: [], // the dropzones that are mentioned below
    elements: [], // elements of dropzones that accept the target draggable
    rects: [] // the rects of the elements mentioned above
  };
});

Interaction.signals.on('stop', function (_ref9) {
  var interaction = _ref9.interaction;

  interaction.dropTarget = interaction.dropElement = interaction.prevDropTarget = interaction.prevDropElement = null;
});

/**
 * Returns or sets whether the dimensions of dropzone elements are calculated
 * on every dragmove or only on dragstart for the default dropChecker
 *
 * @param {boolean} [newValue] True to check on each move. False to check only
 * before start
 * @return {boolean | interact} The current setting or interact
 */
interact.dynamicDrop = function (newValue) {
  if (utils.is.bool(newValue)) {
    //if (dragging && dynamicDrop !== newValue && !newValue) {
    //calcRects(dropzones);
    //}

    dynamicDrop = newValue;

    return interact;
  }
  return dynamicDrop;
};

utils.merge(Interactable.eventTypes, ['dragenter', 'dragleave', 'dropactivate', 'dropdeactivate', 'dropmove', 'drop']);
actions.methodDict.drop = 'dropzone';

defaultOptions.drop = drop.defaults;

module.exports = drop;

},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":18,"../interact":21,"../scope":33,"../utils":44,"./base":6}],9:[function(require,module,exports){
'use strict';

var actions = require('./base');
var utils = require('../utils');
var InteractEvent = require('../InteractEvent');
var Interactable = require('../Interactable');
var Interaction = require('../Interaction');
var defaultOptions = require('../defaultOptions');

var gesture = {
  defaults: {
    enabled: false,
    origin: null,
    restrict: null
  },

  checker: function checker(pointer, event, interactable, element, interaction) {
    if (interaction.pointerIds.length >= 2) {
      return { name: 'gesture' };
    }

    return null;
  },

  getCursor: function getCursor() {
    return '';
  }
};

InteractEvent.signals.on('new', function (_ref) {
  var iEvent = _ref.iEvent,
      interaction = _ref.interaction;

  if (iEvent.type !== 'gesturestart') {
    return;
  }
  iEvent.ds = 0;

  interaction.gesture.startDistance = interaction.gesture.prevDistance = iEvent.distance;
  interaction.gesture.startAngle = interaction.gesture.prevAngle = iEvent.angle;
  interaction.gesture.scale = 1;
});

InteractEvent.signals.on('new', function (_ref2) {
  var iEvent = _ref2.iEvent,
      interaction = _ref2.interaction;

  if (iEvent.type !== 'gesturemove') {
    return;
  }

  iEvent.ds = iEvent.scale - interaction.gesture.scale;

  interaction.target.fire(iEvent);

  interaction.gesture.prevAngle = iEvent.angle;
  interaction.gesture.prevDistance = iEvent.distance;

  if (iEvent.scale !== Infinity && iEvent.scale !== null && iEvent.scale !== undefined && !isNaN(iEvent.scale)) {

    interaction.gesture.scale = iEvent.scale;
  }
});

/**
 * ```js
 * interact(element).gesturable({
 *     onstart: function (event) {},
 *     onmove : function (event) {},
 *     onend  : function (event) {},
 *
 *     // limit multiple gestures.
 *     // See the explanation in {@link Interactable.draggable} example
 *     max: Infinity,
 *     maxPerElement: 1,
 * });
 *
 * var isGestureable = interact(element).gesturable();
 * ```
 *
 * Gets or sets whether multitouch gestures can be performed on the target
 *
 * @param {boolean | object} [options] true/false or An object with event
 * listeners to be fired on gesture events (makes the Interactable gesturable)
 * @return {boolean | Interactable} A boolean indicating if this can be the
 * target of gesture events, or this Interactable
 */
Interactable.prototype.gesturable = function (options) {
  if (utils.is.object(options)) {
    this.options.gesture.enabled = options.enabled === false ? false : true;
    this.setPerAction('gesture', options);
    this.setOnEvents('gesture', options);

    return this;
  }

  if (utils.is.bool(options)) {
    this.options.gesture.enabled = options;

    if (!options) {
      this.ongesturestart = this.ongesturestart = this.ongestureend = null;
    }

    return this;
  }

  return this.options.gesture;
};

InteractEvent.signals.on('set-delta', function (_ref3) {
  var interaction = _ref3.interaction,
      iEvent = _ref3.iEvent,
      action = _ref3.action,
      event = _ref3.event,
      starting = _ref3.starting,
      ending = _ref3.ending,
      deltaSource = _ref3.deltaSource;

  if (action !== 'gesture') {
    return;
  }

  var pointers = interaction.pointers;

  iEvent.touches = [pointers[0], pointers[1]];

  if (starting) {
    iEvent.distance = utils.touchDistance(pointers, deltaSource);
    iEvent.box = utils.touchBBox(pointers);
    iEvent.scale = 1;
    iEvent.ds = 0;
    iEvent.angle = utils.touchAngle(pointers, undefined, deltaSource);
    iEvent.da = 0;
  } else if (ending || event instanceof InteractEvent) {
    iEvent.distance = interaction.prevEvent.distance;
    iEvent.box = interaction.prevEvent.box;
    iEvent.scale = interaction.prevEvent.scale;
    iEvent.ds = iEvent.scale - 1;
    iEvent.angle = interaction.prevEvent.angle;
    iEvent.da = iEvent.angle - interaction.gesture.startAngle;
  } else {
    iEvent.distance = utils.touchDistance(pointers, deltaSource);
    iEvent.box = utils.touchBBox(pointers);
    iEvent.scale = iEvent.distance / interaction.gesture.startDistance;
    iEvent.angle = utils.touchAngle(pointers, interaction.gesture.prevAngle, deltaSource);

    iEvent.ds = iEvent.scale - interaction.gesture.prevScale;
    iEvent.da = iEvent.angle - interaction.gesture.prevAngle;
  }
});

Interaction.signals.on('new', function (interaction) {
  interaction.gesture = {
    start: { x: 0, y: 0 },

    startDistance: 0, // distance between two touches of touchStart
    prevDistance: 0,
    distance: 0,

    scale: 1, // gesture.distance / gesture.startDistance

    startAngle: 0, // angle of line joining two touches
    prevAngle: 0 // angle of the previous gesture event
  };
});

actions.gesture = gesture;
actions.names.push('gesture');
utils.merge(Interactable.eventTypes, ['gesturestart', 'gesturemove', 'gestureend']);
actions.methodDict.gesture = 'gesturable';

defaultOptions.gesture = gesture.defaults;

module.exports = gesture;

},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":18,"../utils":44,"./base":6}],10:[function(require,module,exports){
'use strict';

var actions = require('./base');
var utils = require('../utils');
var browser = require('../utils/browser');
var InteractEvent = require('../InteractEvent');
/** @lends Interactable */
var Interactable = require('../Interactable');
var Interaction = require('../Interaction');
var defaultOptions = require('../defaultOptions');

// Less Precision with touch input
var defaultMargin = browser.supportsTouch || browser.supportsPointerEvent ? 20 : 10;

var resize = {
  defaults: {
    enabled: false,
    mouseButtons: null,

    origin: null,
    snap: null,
    restrict: null,
    inertia: null,
    autoScroll: null,

    square: false,
    preserveAspectRatio: false,
    axis: 'xy',

    // use default margin
    margin: NaN,

    // object with props left, right, top, bottom which are
    // true/false values to resize when the pointer is over that edge,
    // CSS selectors to match the handles for each direction
    // or the Elements for each handle
    edges: null,

    // a value of 'none' will limit the resize rect to a minimum of 0x0
    // 'negate' will alow the rect to have negative width/height
    // 'reposition' will keep the width/height positive by swapping
    // the top and bottom edges and/or swapping the left and right edges
    invert: 'none'
  },

  checker: function checker(pointer, event, interactable, element, interaction, rect) {
    if (!rect) {
      return null;
    }

    var page = utils.extend({}, interaction.curCoords.page);
    var options = interactable.options;

    if (options.resize.enabled) {
      var resizeOptions = options.resize;
      var resizeEdges = { left: false, right: false, top: false, bottom: false };

      // if using resize.edges
      if (utils.is.object(resizeOptions.edges)) {
        for (var edge in resizeEdges) {
          resizeEdges[edge] = checkResizeEdge(edge, resizeOptions.edges[edge], page, interaction._eventTarget, element, rect, resizeOptions.margin || defaultMargin);
        }

        resizeEdges.left = resizeEdges.left && !resizeEdges.right;
        resizeEdges.top = resizeEdges.top && !resizeEdges.bottom;

        if (resizeEdges.left || resizeEdges.right || resizeEdges.top || resizeEdges.bottom) {
          return {
            name: 'resize',
            edges: resizeEdges
          };
        }
      } else {
        var right = options.resize.axis !== 'y' && page.x > rect.right - defaultMargin;
        var bottom = options.resize.axis !== 'x' && page.y > rect.bottom - defaultMargin;

        if (right || bottom) {
          return {
            name: 'resize',
            axes: (right ? 'x' : '') + (bottom ? 'y' : '')
          };
        }
      }
    }

    return null;
  },

  cursors: browser.isIe9 ? {
    x: 'e-resize',
    y: 's-resize',
    xy: 'se-resize',

    top: 'n-resize',
    left: 'w-resize',
    bottom: 's-resize',
    right: 'e-resize',
    topleft: 'se-resize',
    bottomright: 'se-resize',
    topright: 'ne-resize',
    bottomleft: 'ne-resize'
  } : {
    x: 'ew-resize',
    y: 'ns-resize',
    xy: 'nwse-resize',

    top: 'ns-resize',
    left: 'ew-resize',
    bottom: 'ns-resize',
    right: 'ew-resize',
    topleft: 'nwse-resize',
    bottomright: 'nwse-resize',
    topright: 'nesw-resize',
    bottomleft: 'nesw-resize'
  },

  getCursor: function getCursor(action) {
    if (action.axis) {
      return resize.cursors[action.name + action.axis];
    } else if (action.edges) {
      var cursorKey = '';
      var edgeNames = ['top', 'bottom', 'left', 'right'];

      for (var i = 0; i < 4; i++) {
        if (action.edges[edgeNames[i]]) {
          cursorKey += edgeNames[i];
        }
      }

      return resize.cursors[cursorKey];
    }
  }
};

// resizestart
InteractEvent.signals.on('new', function (_ref) {
  var iEvent = _ref.iEvent,
      interaction = _ref.interaction;

  if (iEvent.type !== 'resizestart' || !interaction.prepared.edges) {
    return;
  }

  var startRect = interaction.target.getRect(interaction.element);
  var resizeOptions = interaction.target.options.resize;

  /*
   * When using the `resizable.square` or `resizable.preserveAspectRatio` options, resizing from one edge
   * will affect another. E.g. with `resizable.square`, resizing to make the right edge larger will make
   * the bottom edge larger by the same amount. We call these 'linked' edges. Any linked edges will depend
   * on the active edges and the edge being interacted with.
   */
  if (resizeOptions.square || resizeOptions.preserveAspectRatio) {
    var linkedEdges = utils.extend({}, interaction.prepared.edges);

    linkedEdges.top = linkedEdges.top || linkedEdges.left && !linkedEdges.bottom;
    linkedEdges.left = linkedEdges.left || linkedEdges.top && !linkedEdges.right;
    linkedEdges.bottom = linkedEdges.bottom || linkedEdges.right && !linkedEdges.top;
    linkedEdges.right = linkedEdges.right || linkedEdges.bottom && !linkedEdges.left;

    interaction.prepared._linkedEdges = linkedEdges;
  } else {
    interaction.prepared._linkedEdges = null;
  }

  // if using `resizable.preserveAspectRatio` option, record aspect ratio at the start of the resize
  if (resizeOptions.preserveAspectRatio) {
    interaction.resizeStartAspectRatio = startRect.width / startRect.height;
  }

  interaction.resizeRects = {
    start: startRect,
    current: utils.extend({}, startRect),
    inverted: utils.extend({}, startRect),
    previous: utils.extend({}, startRect),
    delta: {
      left: 0, right: 0, width: 0,
      top: 0, bottom: 0, height: 0
    }
  };

  iEvent.rect = interaction.resizeRects.inverted;
  iEvent.deltaRect = interaction.resizeRects.delta;
});

// resizemove
InteractEvent.signals.on('new', function (_ref2) {
  var iEvent = _ref2.iEvent,
      phase = _ref2.phase,
      interaction = _ref2.interaction;

  if (phase !== 'move' || !interaction.prepared.edges) {
    return;
  }

  var resizeOptions = interaction.target.options.resize;
  var invert = resizeOptions.invert;
  var invertible = invert === 'reposition' || invert === 'negate';

  var edges = interaction.prepared.edges;

  var start = interaction.resizeRects.start;
  var current = interaction.resizeRects.current;
  var inverted = interaction.resizeRects.inverted;
  var delta = interaction.resizeRects.delta;
  var previous = utils.extend(interaction.resizeRects.previous, inverted);
  var originalEdges = edges;

  var dx = iEvent.dx;
  var dy = iEvent.dy;

  if (resizeOptions.preserveAspectRatio || resizeOptions.square) {
    // `resize.preserveAspectRatio` takes precedence over `resize.square`
    var startAspectRatio = resizeOptions.preserveAspectRatio ? interaction.resizeStartAspectRatio : 1;

    edges = interaction.prepared._linkedEdges;

    if (originalEdges.left && originalEdges.bottom || originalEdges.right && originalEdges.top) {
      dy = -dx / startAspectRatio;
    } else if (originalEdges.left || originalEdges.right) {
      dy = dx / startAspectRatio;
    } else if (originalEdges.top || originalEdges.bottom) {
      dx = dy * startAspectRatio;
    }
  }

  // update the 'current' rect without modifications
  if (edges.top) {
    current.top += dy;
  }
  if (edges.bottom) {
    current.bottom += dy;
  }
  if (edges.left) {
    current.left += dx;
  }
  if (edges.right) {
    current.right += dx;
  }

  if (invertible) {
    // if invertible, copy the current rect
    utils.extend(inverted, current);

    if (invert === 'reposition') {
      // swap edge values if necessary to keep width/height positive
      var swap = void 0;

      if (inverted.top > inverted.bottom) {
        swap = inverted.top;

        inverted.top = inverted.bottom;
        inverted.bottom = swap;
      }
      if (inverted.left > inverted.right) {
        swap = inverted.left;

        inverted.left = inverted.right;
        inverted.right = swap;
      }
    }
  } else {
    // if not invertible, restrict to minimum of 0x0 rect
    inverted.top = Math.min(current.top, start.bottom);
    inverted.bottom = Math.max(current.bottom, start.top);
    inverted.left = Math.min(current.left, start.right);
    inverted.right = Math.max(current.right, start.left);
  }

  inverted.width = inverted.right - inverted.left;
  inverted.height = inverted.bottom - inverted.top;

  for (var edge in inverted) {
    delta[edge] = inverted[edge] - previous[edge];
  }

  iEvent.edges = interaction.prepared.edges;
  iEvent.rect = inverted;
  iEvent.deltaRect = delta;
});

/**
 * ```js
 * interact(element).resizable({
 *   onstart: function (event) {},
 *   onmove : function (event) {},
 *   onend  : function (event) {},
 *
 *   edges: {
 *     top   : true,       // Use pointer coords to check for resize.
 *     left  : false,      // Disable resizing from left edge.
 *     bottom: '.resize-s',// Resize if pointer target matches selector
 *     right : handleEl    // Resize if pointer target is the given Element
 *   },
 *
 *     // Width and height can be adjusted independently. When `true`, width and
 *     // height are adjusted at a 1:1 ratio.
 *     square: false,
 *
 *     // Width and height can be adjusted independently. When `true`, width and
 *     // height maintain the aspect ratio they had when resizing started.
 *     preserveAspectRatio: false,
 *
 *   // a value of 'none' will limit the resize rect to a minimum of 0x0
 *   // 'negate' will allow the rect to have negative width/height
 *   // 'reposition' will keep the width/height positive by swapping
 *   // the top and bottom edges and/or swapping the left and right edges
 *   invert: 'none' || 'negate' || 'reposition'
 *
 *   // limit multiple resizes.
 *   // See the explanation in the {@link Interactable.draggable} example
 *   max: Infinity,
 *   maxPerElement: 1,
 * });
 *
 * var isResizeable = interact(element).resizable();
 * ```
 *
 * Gets or sets whether resize actions can be performed on the target
 *
 * @param {boolean | object} [options] true/false or An object with event
 * listeners to be fired on resize events (object makes the Interactable
 * resizable)
 * @return {boolean | Interactable} A boolean indicating if this can be the
 * target of resize elements, or this Interactable
 */
Interactable.prototype.resizable = function (options) {
  if (utils.is.object(options)) {
    this.options.resize.enabled = options.enabled === false ? false : true;
    this.setPerAction('resize', options);
    this.setOnEvents('resize', options);

    if (/^x$|^y$|^xy$/.test(options.axis)) {
      this.options.resize.axis = options.axis;
    } else if (options.axis === null) {
      this.options.resize.axis = defaultOptions.resize.axis;
    }

    if (utils.is.bool(options.preserveAspectRatio)) {
      this.options.resize.preserveAspectRatio = options.preserveAspectRatio;
    } else if (utils.is.bool(options.square)) {
      this.options.resize.square = options.square;
    }

    return this;
  }
  if (utils.is.bool(options)) {
    this.options.resize.enabled = options;

    if (!options) {
      this.onresizestart = this.onresizestart = this.onresizeend = null;
    }

    return this;
  }
  return this.options.resize;
};

function checkResizeEdge(name, value, page, element, interactableElement, rect, margin) {
  // false, '', undefined, null
  if (!value) {
    return false;
  }

  // true value, use pointer coords and element rect
  if (value === true) {
    // if dimensions are negative, "switch" edges
    var width = utils.is.number(rect.width) ? rect.width : rect.right - rect.left;
    var height = utils.is.number(rect.height) ? rect.height : rect.bottom - rect.top;

    if (width < 0) {
      if (name === 'left') {
        name = 'right';
      } else if (name === 'right') {
        name = 'left';
      }
    }
    if (height < 0) {
      if (name === 'top') {
        name = 'bottom';
      } else if (name === 'bottom') {
        name = 'top';
      }
    }

    if (name === 'left') {
      return page.x < (width >= 0 ? rect.left : rect.right) + margin;
    }
    if (name === 'top') {
      return page.y < (height >= 0 ? rect.top : rect.bottom) + margin;
    }

    if (name === 'right') {
      return page.x > (width >= 0 ? rect.right : rect.left) - margin;
    }
    if (name === 'bottom') {
      return page.y > (height >= 0 ? rect.bottom : rect.top) - margin;
    }
  }

  // the remaining checks require an element
  if (!utils.is.element(element)) {
    return false;
  }

  return utils.is.element(value)
  // the value is an element to use as a resize handle
  ? value === element
  // otherwise check if element matches value as selector
  : utils.matchesUpTo(element, value, interactableElement);
}

Interaction.signals.on('new', function (interaction) {
  interaction.resizeAxes = 'xy';
});

InteractEvent.signals.on('set-delta', function (_ref3) {
  var interaction = _ref3.interaction,
      iEvent = _ref3.iEvent,
      action = _ref3.action;

  if (action !== 'resize' || !interaction.resizeAxes) {
    return;
  }

  var options = interaction.target.options;

  if (options.resize.square) {
    if (interaction.resizeAxes === 'y') {
      iEvent.dx = iEvent.dy;
    } else {
      iEvent.dy = iEvent.dx;
    }
    iEvent.axes = 'xy';
  } else {
    iEvent.axes = interaction.resizeAxes;

    if (interaction.resizeAxes === 'x') {
      iEvent.dy = 0;
    } else if (interaction.resizeAxes === 'y') {
      iEvent.dx = 0;
    }
  }
});

actions.resize = resize;
actions.names.push('resize');
utils.merge(Interactable.eventTypes, ['resizestart', 'resizemove', 'resizeinertiastart', 'resizeinertiaresume', 'resizeend']);
actions.methodDict.resize = 'resizable';

defaultOptions.resize = resize.defaults;

module.exports = resize;

},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":18,"../utils":44,"../utils/browser":36,"./base":6}],11:[function(require,module,exports){
'use strict';

var raf = require('./utils/raf');
var getWindow = require('./utils/window').getWindow;
var is = require('./utils/is');
var domUtils = require('./utils/domUtils');
var Interaction = require('./Interaction');
var defaultOptions = require('./defaultOptions');

var autoScroll = {
  defaults: {
    enabled: false,
    container: null, // the item that is scrolled (Window or HTMLElement)
    margin: 60,
    speed: 300 // the scroll speed in pixels per second
  },

  interaction: null,
  i: null, // the handle returned by window.setInterval
  x: 0, y: 0, // Direction each pulse is to scroll in

  isScrolling: false,
  prevTime: 0,

  start: function start(interaction) {
    autoScroll.isScrolling = true;
    raf.cancel(autoScroll.i);

    autoScroll.interaction = interaction;
    autoScroll.prevTime = new Date().getTime();
    autoScroll.i = raf.request(autoScroll.scroll);
  },

  stop: function stop() {
    autoScroll.isScrolling = false;
    raf.cancel(autoScroll.i);
  },

  // scroll the window by the values in scroll.x/y
  scroll: function scroll() {
    var options = autoScroll.interaction.target.options[autoScroll.interaction.prepared.name].autoScroll;
    var container = options.container || getWindow(autoScroll.interaction.element);
    var now = new Date().getTime();
    // change in time in seconds
    var dt = (now - autoScroll.prevTime) / 1000;
    // displacement
    var s = options.speed * dt;

    if (s >= 1) {
      if (is.window(container)) {
        container.scrollBy(autoScroll.x * s, autoScroll.y * s);
      } else if (container) {
        container.scrollLeft += autoScroll.x * s;
        container.scrollTop += autoScroll.y * s;
      }

      autoScroll.prevTime = now;
    }

    if (autoScroll.isScrolling) {
      raf.cancel(autoScroll.i);
      autoScroll.i = raf.request(autoScroll.scroll);
    }
  },
  check: function check(interactable, actionName) {
    var options = interactable.options;

    return options[actionName].autoScroll && options[actionName].autoScroll.enabled;
  },
  onInteractionMove: function onInteractionMove(_ref) {
    var interaction = _ref.interaction,
        pointer = _ref.pointer;

    if (!(interaction.interacting() && autoScroll.check(interaction.target, interaction.prepared.name))) {
      return;
    }

    if (interaction.simulation) {
      autoScroll.x = autoScroll.y = 0;
      return;
    }

    var top = void 0;
    var right = void 0;
    var bottom = void 0;
    var left = void 0;

    var options = interaction.target.options[interaction.prepared.name].autoScroll;
    var container = options.container || getWindow(interaction.element);

    if (is.window(container)) {
      left = pointer.clientX < autoScroll.margin;
      top = pointer.clientY < autoScroll.margin;
      right = pointer.clientX > container.innerWidth - autoScroll.margin;
      bottom = pointer.clientY > container.innerHeight - autoScroll.margin;
    } else {
      var rect = domUtils.getElementClientRect(container);

      left = pointer.clientX < rect.left + autoScroll.margin;
      top = pointer.clientY < rect.top + autoScroll.margin;
      right = pointer.clientX > rect.right - autoScroll.margin;
      bottom = pointer.clientY > rect.bottom - autoScroll.margin;
    }

    autoScroll.x = right ? 1 : left ? -1 : 0;
    autoScroll.y = bottom ? 1 : top ? -1 : 0;

    if (!autoScroll.isScrolling) {
      // set the autoScroll properties to those of the target
      autoScroll.margin = options.margin;
      autoScroll.speed = options.speed;

      autoScroll.start(interaction);
    }
  }
};

Interaction.signals.on('stop-active', function () {
  autoScroll.stop();
});

Interaction.signals.on('action-move', autoScroll.onInteractionMove);

defaultOptions.perAction.autoScroll = autoScroll.defaults;

module.exports = autoScroll;

},{"./Interaction":5,"./defaultOptions":18,"./utils/domUtils":39,"./utils/is":46,"./utils/raf":50,"./utils/window":52}],12:[function(require,module,exports){
'use strict';

/** @lends Interactable */
var Interactable = require('../Interactable');
var actions = require('../actions/base');
var is = require('../utils/is');
var domUtils = require('../utils/domUtils');

var _require = require('../utils'),
    warnOnce = _require.warnOnce;

Interactable.prototype.getAction = function (pointer, event, interaction, element) {
  var action = this.defaultActionChecker(pointer, event, interaction, element);

  if (this.options.actionChecker) {
    return this.options.actionChecker(pointer, event, action, this, element, interaction);
  }

  return action;
};

/**
 * ```js
 * interact(element, { ignoreFrom: document.getElementById('no-action') });
 * // or
 * interact(element).ignoreFrom('input, textarea, a');
 * ```
 * @deprecated
 * If the target of the `mousedown`, `pointerdown` or `touchstart` event or any
 * of it's parents match the given CSS selector or Element, no
 * drag/resize/gesture is started.
 *
 * Don't use this method. Instead set the `ignoreFrom` option for each action
 * or for `pointerEvents`
 *
 * @example
 * interact(targett)
 *   .draggable({
 *     ignoreFrom: 'input, textarea, a[href]'',
 *   })
 *   .pointerEvents({
 *     ignoreFrom: '[no-pointer]',
 *   });
 *
 * @param {string | Element | null} [newValue] a CSS selector string, an
 * Element or `null` to not ignore any elements
 * @return {string | Element | object} The current ignoreFrom value or this
 * Interactable
 */
Interactable.prototype.ignoreFrom = warnOnce(function (newValue) {
  return this._backCompatOption('ignoreFrom', newValue);
}, 'Interactable.ignoreForm() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue}).');

/**
 * ```js
 *
 * @deprecated
 * A drag/resize/gesture is started only If the target of the `mousedown`,
 * `pointerdown` or `touchstart` event or any of it's parents match the given
 * CSS selector or Element.
 *
 * Don't use this method. Instead set the `allowFrom` option for each action
 * or for `pointerEvents`
 *
 * @example
 * interact(targett)
 *   .resizable({
 *     allowFrom: '.resize-handle',
 *   .pointerEvents({
 *     allowFrom: '.handle',,
 *   });
 *
 * @param {string | Element | null} [newValue] a CSS selector string, an
 * Element or `null` to allow from any element
 * @return {string | Element | object} The current allowFrom value or this
 * Interactable
 */
Interactable.prototype.allowFrom = warnOnce(function (newValue) {
  return this._backCompatOption('allowFrom', newValue);
}, 'Interactable.allowForm() has been deprecated. Use Interactble.draggable({allowFrom: newValue}).');

Interactable.prototype.testIgnore = function (ignoreFrom, interactableElement, element) {
  if (!ignoreFrom || !is.element(element)) {
    return false;
  }

  if (is.string(ignoreFrom)) {
    return domUtils.matchesUpTo(element, ignoreFrom, interactableElement);
  } else if (is.element(ignoreFrom)) {
    return domUtils.nodeContains(ignoreFrom, element);
  }

  return false;
};

Interactable.prototype.testAllow = function (allowFrom, interactableElement, element) {
  if (!allowFrom) {
    return true;
  }

  if (!is.element(element)) {
    return false;
  }

  if (is.string(allowFrom)) {
    return domUtils.matchesUpTo(element, allowFrom, interactableElement);
  } else if (is.element(allowFrom)) {
    return domUtils.nodeContains(allowFrom, element);
  }

  return false;
};

Interactable.prototype.testIgnoreAllow = function (options, interactableElement, eventTarget) {
  return !this.testIgnore(options.ignoreFrom, interactableElement, eventTarget) && this.testAllow(options.allowFrom, interactableElement, eventTarget);
};

/**
 * ```js
 * interact('.resize-drag')
 *   .resizable(true)
 *   .draggable(true)
 *   .actionChecker(function (pointer, event, action, interactable, element, interaction) {
 *
 *   if (interact.matchesSelector(event.target, '.drag-handle') {
 *     // force drag with handle target
 *     action.name = drag;
 *   }
 *   else {
 *     // resize from the top and right edges
 *     action.name  = 'resize';
 *     action.edges = { top: true, right: true };
 *   }
 *
 *   return action;
 * });
 * ```
 *
 * Gets or sets the function used to check action to be performed on
 * pointerDown
 *
 * @param {function | null} [checker] A function which takes a pointer event,
 * defaultAction string, interactable, element and interaction as parameters
 * and returns an object with name property 'drag' 'resize' or 'gesture' and
 * optionally an `edges` object with boolean 'top', 'left', 'bottom' and right
 * props.
 * @return {Function | Interactable} The checker function or this Interactable
 */
Interactable.prototype.actionChecker = function (checker) {
  if (is.function(checker)) {
    this.options.actionChecker = checker;

    return this;
  }

  if (checker === null) {
    delete this.options.actionChecker;

    return this;
  }

  return this.options.actionChecker;
};

/**
 * Returns or sets whether the the cursor should be changed depending on the
 * action that would be performed if the mouse were pressed and dragged.
 *
 * @param {boolean} [newValue]
 * @return {boolean | Interactable} The current setting or this Interactable
 */
Interactable.prototype.styleCursor = function (newValue) {
  if (is.bool(newValue)) {
    this.options.styleCursor = newValue;

    return this;
  }

  if (newValue === null) {
    delete this.options.styleCursor;

    return this;
  }

  return this.options.styleCursor;
};

Interactable.prototype.defaultActionChecker = function (pointer, event, interaction, element) {
  var rect = this.getRect(element);
  var buttons = event.buttons || {
    0: 1,
    1: 4,
    3: 8,
    4: 16
  }[event.button];
  var action = null;

  for (var _i = 0; _i < actions.names.length; _i++) {
    var _ref;

    _ref = actions.names[_i];
    var actionName = _ref;

    // check mouseButton setting if the pointer is down
    if (interaction.pointerIsDown && /mouse|pointer/.test(interaction.pointerType) && (buttons & this.options[actionName].mouseButtons) === 0) {
      continue;
    }

    action = actions[actionName].checker(pointer, event, this, element, interaction, rect);

    if (action) {
      return action;
    }
  }
};

},{"../Interactable":4,"../actions/base":6,"../utils":44,"../utils/domUtils":39,"../utils/is":46}],13:[function(require,module,exports){
'use strict';

var interact = require('../interact');
var Interactable = require('../Interactable');
var Interaction = require('../Interaction');
var actions = require('../actions/base');
var defaultOptions = require('../defaultOptions');
var scope = require('../scope');
var utils = require('../utils');
var signals = require('../utils/Signals').new();

require('./InteractableMethods');

var autoStart = {
  signals: signals,
  withinInteractionLimit: withinInteractionLimit,
  // Allow this many interactions to happen simultaneously
  maxInteractions: Infinity,
  defaults: {
    perAction: {
      manualStart: false,
      max: Infinity,
      maxPerElement: 1,
      allowFrom: null,
      ignoreFrom: null,

      // only allow left button by default
      // see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons#Return_value
      mouseButtons: 1
    }
  },
  setActionDefaults: function setActionDefaults(action) {
    utils.extend(action.defaults, autoStart.defaults.perAction);
  },
  validateAction: validateAction
};

// set cursor style on mousedown
Interaction.signals.on('down', function (_ref) {
  var interaction = _ref.interaction,
      pointer = _ref.pointer,
      event = _ref.event,
      eventTarget = _ref.eventTarget;

  if (interaction.interacting()) {
    return;
  }

  var actionInfo = getActionInfo(interaction, pointer, event, eventTarget);
  prepare(interaction, actionInfo);
});

// set cursor style on mousemove
Interaction.signals.on('move', function (_ref2) {
  var interaction = _ref2.interaction,
      pointer = _ref2.pointer,
      event = _ref2.event,
      eventTarget = _ref2.eventTarget;

  if (interaction.pointerType !== 'mouse' || interaction.pointerIsDown || interaction.interacting()) {
    return;
  }

  var actionInfo = getActionInfo(interaction, pointer, event, eventTarget);
  prepare(interaction, actionInfo);
});

Interaction.signals.on('move', function (arg) {
  var interaction = arg.interaction,
      event = arg.event;


  if (!interaction.pointerIsDown || interaction.interacting() || !interaction.pointerWasMoved || !interaction.prepared.name) {
    return;
  }

  signals.fire('before-start', arg);

  var target = interaction.target;

  if (interaction.prepared.name && target) {
    // check manualStart and interaction limit
    if (target.options[interaction.prepared.name].manualStart || !withinInteractionLimit(target, interaction.element, interaction.prepared)) {
      interaction.stop(event);
    } else {
      interaction.start(interaction.prepared, target, interaction.element);
    }
  }
});

// Check if the current target supports the action.
// If so, return the validated action. Otherwise, return null
function validateAction(action, interactable, element, eventTarget) {
  if (utils.is.object(action) && interactable.testIgnoreAllow(interactable.options[action.name], element, eventTarget) && interactable.options[action.name].enabled && withinInteractionLimit(interactable, element, action)) {
    return action;
  }

  return null;
}

function validateSelector(interaction, pointer, event, matches, matchElements, eventTarget) {
  for (var i = 0, len = matches.length; i < len; i++) {
    var match = matches[i];
    var matchElement = matchElements[i];
    var action = validateAction(match.getAction(pointer, event, interaction, matchElement), match, matchElement, eventTarget);

    if (action) {
      return {
        action: action,
        target: match,
        element: matchElement
      };
    }
  }

  return {};
}

function getActionInfo(interaction, pointer, event, eventTarget) {
  var matches = [];
  var matchElements = [];

  var element = eventTarget;

  function pushMatches(interactable) {
    matches.push(interactable);
    matchElements.push(element);
  }

  while (utils.is.element(element)) {
    matches = [];
    matchElements = [];

    scope.interactables.forEachMatch(element, pushMatches);

    var actionInfo = validateSelector(interaction, pointer, event, matches, matchElements, eventTarget);

    if (actionInfo.action && !actionInfo.target.options[actionInfo.action.name].manualStart) {
      return actionInfo;
    }

    element = utils.parentNode(element);
  }

  return {};
}

function prepare(interaction, _ref3) {
  var action = _ref3.action,
      target = _ref3.target,
      element = _ref3.element;

  action = action || {};

  if (interaction.target && interaction.target.options.styleCursor) {
    interaction.target._doc.documentElement.style.cursor = '';
  }

  interaction.target = target;
  interaction.element = element;
  utils.copyAction(interaction.prepared, action);

  if (target && target.options.styleCursor) {
    var cursor = action ? actions[action.name].getCursor(action) : '';
    interaction.target._doc.documentElement.style.cursor = cursor;
  }

  signals.fire('prepared', { interaction: interaction });
}

Interaction.signals.on('stop', function (_ref4) {
  var interaction = _ref4.interaction;

  var target = interaction.target;

  if (target && target.options.styleCursor) {
    target._doc.documentElement.style.cursor = '';
  }
});

function withinInteractionLimit(interactable, element, action) {
  var options = interactable.options;
  var maxActions = options[action.name].max;
  var maxPerElement = options[action.name].maxPerElement;
  var activeInteractions = 0;
  var targetCount = 0;
  var targetElementCount = 0;

  // no actions if any of these values == 0
  if (!(maxActions && maxPerElement && autoStart.maxInteractions)) {
    return;
  }

  for (var _i = 0; _i < scope.interactions.length; _i++) {
    var _ref5;

    _ref5 = scope.interactions[_i];
    var interaction = _ref5;

    var otherAction = interaction.prepared.name;

    if (!interaction.interacting()) {
      continue;
    }

    activeInteractions++;

    if (activeInteractions >= autoStart.maxInteractions) {
      return false;
    }

    if (interaction.target !== interactable) {
      continue;
    }

    targetCount += otherAction === action.name | 0;

    if (targetCount >= maxActions) {
      return false;
    }

    if (interaction.element === element) {
      targetElementCount++;

      if (otherAction !== action.name || targetElementCount >= maxPerElement) {
        return false;
      }
    }
  }

  return autoStart.maxInteractions > 0;
}

/**
 * Returns or sets the maximum number of concurrent interactions allowed.  By
 * default only 1 interaction is allowed at a time (for backwards
 * compatibility). To allow multiple interactions on the same Interactables and
 * elements, you need to enable it in the draggable, resizable and gesturable
 * `'max'` and `'maxPerElement'` options.
 *
 * @alias module:interact.maxInteractions
 *
 * @param {number} [newValue] Any number. newValue <= 0 means no interactions.
 */
interact.maxInteractions = function (newValue) {
  if (utils.is.number(newValue)) {
    autoStart.maxInteractions = newValue;

    return interact;
  }

  return autoStart.maxInteractions;
};

Interactable.settingsMethods.push('styleCursor');
Interactable.settingsMethods.push('actionChecker');
Interactable.settingsMethods.push('ignoreFrom');
Interactable.settingsMethods.push('allowFrom');

defaultOptions.base.actionChecker = null;
defaultOptions.base.styleCursor = true;

utils.extend(defaultOptions.perAction, autoStart.defaults.perAction);

module.exports = autoStart;

},{"../Interactable":4,"../Interaction":5,"../actions/base":6,"../defaultOptions":18,"../interact":21,"../scope":33,"../utils":44,"../utils/Signals":34,"./InteractableMethods":12}],14:[function(require,module,exports){
'use strict';

var autoStart = require('./base');
var scope = require('../scope');
var is = require('../utils/is');

var _require = require('../utils/domUtils'),
    parentNode = _require.parentNode;

autoStart.setActionDefaults(require('../actions/drag'));

autoStart.signals.on('before-start', function (_ref) {
  var interaction = _ref.interaction,
      eventTarget = _ref.eventTarget,
      dx = _ref.dx,
      dy = _ref.dy;

  if (interaction.prepared.name !== 'drag') {
    return;
  }

  // check if a drag is in the correct axis
  var absX = Math.abs(dx);
  var absY = Math.abs(dy);
  var targetOptions = interaction.target.options.drag;
  var startAxis = targetOptions.startAxis;
  var currentAxis = absX > absY ? 'x' : absX < absY ? 'y' : 'xy';

  interaction.prepared.axis = targetOptions.lockAxis === 'start' ? currentAxis[0] // always lock to one axis even if currentAxis === 'xy'
  : targetOptions.lockAxis;

  // if the movement isn't in the startAxis of the interactable
  if (currentAxis !== 'xy' && startAxis !== 'xy' && startAxis !== currentAxis) {
    // cancel the prepared action
    interaction.prepared.name = null;

    // then try to get a drag from another ineractable
    var element = eventTarget;

    var getDraggable = function getDraggable(interactable) {
      if (interactable === interaction.target) {
        return;
      }

      var options = interaction.target.options.drag;

      if (!options.manualStart && interactable.testIgnoreAllow(options, element, eventTarget)) {

        var action = interactable.getAction(interaction.downPointer, interaction.downEvent, interaction, element);

        if (action && action.name === 'drag' && checkStartAxis(currentAxis, interactable) && autoStart.validateAction(action, interactable, element, eventTarget)) {

          return interactable;
        }
      }
    };

    // check all interactables
    while (is.element(element)) {
      var interactable = scope.interactables.forEachMatch(element, getDraggable);

      if (interactable) {
        interaction.prepared.name = 'drag';
        interaction.target = interactable;
        interaction.element = element;
        break;
      }

      element = parentNode(element);
    }
  }
});

function checkStartAxis(startAxis, interactable) {
  if (!interactable) {
    return false;
  }

  var thisAxis = interactable.options.drag.startAxis;

  return startAxis === 'xy' || thisAxis === 'xy' || thisAxis === startAxis;
}

},{"../actions/drag":7,"../scope":33,"../utils/domUtils":39,"../utils/is":46,"./base":13}],15:[function(require,module,exports){
'use strict';

require('./base').setActionDefaults(require('../actions/gesture'));

},{"../actions/gesture":9,"./base":13}],16:[function(require,module,exports){
'use strict';

var autoStart = require('./base');
var Interaction = require('../Interaction');

autoStart.defaults.perAction.hold = 0;
autoStart.defaults.perAction.delay = 0;

Interaction.signals.on('new', function (interaction) {
  interaction.autoStartHoldTimer = null;
});

autoStart.signals.on('prepared', function (_ref) {
  var interaction = _ref.interaction;

  var hold = getHoldDuration(interaction);

  if (hold > 0) {
    interaction.autoStartHoldTimer = setTimeout(function () {
      interaction.start(interaction.prepared, interaction.target, interaction.element);
    }, hold);
  }
});

Interaction.signals.on('move', function (_ref2) {
  var interaction = _ref2.interaction,
      duplicate = _ref2.duplicate;

  if (interaction.pointerWasMoved && !duplicate) {
    clearTimeout(interaction.autoStartHoldTimer);
  }
});

// prevent regular down->move autoStart
autoStart.signals.on('before-start', function (_ref3) {
  var interaction = _ref3.interaction;

  var hold = getHoldDuration(interaction);

  if (hold > 0) {
    interaction.prepared.name = null;
  }
});

function getHoldDuration(interaction) {
  var actionName = interaction.prepared && interaction.prepared.name;

  if (!actionName) {
    return null;
  }

  var options = interaction.target.options;

  return options[actionName].hold || options[actionName].delay;
}

module.exports = {
  getHoldDuration: getHoldDuration
};

},{"../Interaction":5,"./base":13}],17:[function(require,module,exports){
'use strict';

require('./base').setActionDefaults(require('../actions/resize'));

},{"../actions/resize":10,"./base":13}],18:[function(require,module,exports){
'use strict';

module.exports = {
  base: {
    accept: null,
    preventDefault: 'auto',
    deltaSource: 'page'
  },

  perAction: {
    origin: { x: 0, y: 0 },

    inertia: {
      enabled: false,
      resistance: 10, // the lambda in exponential decay
      minSpeed: 100, // target speed must be above this for inertia to start
      endSpeed: 10, // the speed at which inertia is slow enough to stop
      allowResume: true, // allow resuming an action in inertia phase
      smoothEndDuration: 300 // animate to snap/restrict endOnly if there's no inertia
    }
  }
};

},{}],19:[function(require,module,exports){
'use strict';

/* browser entry point */

// inertia
require('./inertia');

// modifiers
require('./modifiers/snap');
require('./modifiers/restrict');

// pointerEvents
require('./pointerEvents/base');
require('./pointerEvents/holdRepeat');
require('./pointerEvents/interactableTargets');

// autoStart hold
require('./autoStart/hold');

// actions
require('./actions/gesture');
require('./actions/resize');
require('./actions/drag');
require('./actions/drop');

// load these modifiers after resize is loaded
require('./modifiers/snapSize');
require('./modifiers/restrictEdges');
require('./modifiers/restrictSize');

// autoStart actions
require('./autoStart/gesture');
require('./autoStart/resize');
require('./autoStart/drag');

// Interactable preventDefault setting
require('./interactablePreventDefault.js');

// autoScroll
require('./autoScroll');

// export interact
module.exports = require('./interact');

},{"./actions/drag":7,"./actions/drop":8,"./actions/gesture":9,"./actions/resize":10,"./autoScroll":11,"./autoStart/drag":14,"./autoStart/gesture":15,"./autoStart/hold":16,"./autoStart/resize":17,"./inertia":20,"./interact":21,"./interactablePreventDefault.js":22,"./modifiers/restrict":24,"./modifiers/restrictEdges":25,"./modifiers/restrictSize":26,"./modifiers/snap":27,"./modifiers/snapSize":28,"./pointerEvents/base":30,"./pointerEvents/holdRepeat":31,"./pointerEvents/interactableTargets":32}],20:[function(require,module,exports){
'use strict';

var InteractEvent = require('./InteractEvent');
var Interaction = require('./Interaction');
var modifiers = require('./modifiers/base');
var utils = require('./utils');
var animationFrame = require('./utils/raf');

Interaction.signals.on('new', function (interaction) {
  interaction.inertiaStatus = {
    active: false,
    smoothEnd: false,
    allowResume: false,

    startEvent: null,
    upCoords: {},

    xe: 0, ye: 0,
    sx: 0, sy: 0,

    t0: 0,
    vx0: 0, vys: 0,
    duration: 0,

    lambda_v0: 0,
    one_ve_v0: 0,
    i: null
  };

  interaction.boundInertiaFrame = function () {
    return inertiaFrame.apply(interaction);
  };
  interaction.boundSmoothEndFrame = function () {
    return smoothEndFrame.apply(interaction);
  };
});

Interaction.signals.on('down', function (_ref) {
  var interaction = _ref.interaction,
      event = _ref.event,
      pointer = _ref.pointer,
      eventTarget = _ref.eventTarget;

  var status = interaction.inertiaStatus;

  // Check if the down event hits the current inertia target
  if (status.active) {
    var element = eventTarget;

    // climb up the DOM tree from the event target
    while (utils.is.element(element)) {

      // if interaction element is the current inertia target element
      if (element === interaction.element) {
        // stop inertia
        animationFrame.cancel(status.i);
        status.active = false;
        interaction.simulation = null;

        // update pointers to the down event's coordinates
        interaction.updatePointer(pointer);
        utils.setCoords(interaction.curCoords, interaction.pointers);

        // fire appropriate signals
        var signalArg = { interaction: interaction };
        Interaction.signals.fire('before-action-move', signalArg);
        Interaction.signals.fire('action-resume', signalArg);

        // fire a reume event
        var resumeEvent = new InteractEvent(interaction, event, interaction.prepared.name, 'inertiaresume', interaction.element);

        interaction.target.fire(resumeEvent);
        interaction.prevEvent = resumeEvent;
        modifiers.resetStatuses(interaction.modifierStatuses);

        utils.copyCoords(interaction.prevCoords, interaction.curCoords);
        break;
      }

      element = utils.parentNode(element);
    }
  }
});

Interaction.signals.on('up', function (_ref2) {
  var interaction = _ref2.interaction,
      event = _ref2.event;

  var status = interaction.inertiaStatus;

  if (!interaction.interacting() || status.active) {
    return;
  }

  var target = interaction.target;
  var options = target && target.options;
  var inertiaOptions = options && interaction.prepared.name && options[interaction.prepared.name].inertia;

  var now = new Date().getTime();
  var statuses = {};
  var page = utils.extend({}, interaction.curCoords.page);
  var pointerSpeed = interaction.pointerDelta.client.speed;

  var smoothEnd = false;
  var modifierResult = void 0;

  // check if inertia should be started
  var inertiaPossible = inertiaOptions && inertiaOptions.enabled && interaction.prepared.name !== 'gesture' && event !== status.startEvent;

  var inertia = inertiaPossible && now - interaction.curCoords.timeStamp < 50 && pointerSpeed > inertiaOptions.minSpeed && pointerSpeed > inertiaOptions.endSpeed;

  var modifierArg = {
    interaction: interaction,
    pageCoords: page,
    statuses: statuses,
    preEnd: true,
    requireEndOnly: true
  };

  // smoothEnd
  if (inertiaPossible && !inertia) {
    modifiers.resetStatuses(statuses);

    modifierResult = modifiers.setAll(modifierArg);

    if (modifierResult.shouldMove && modifierResult.locked) {
      smoothEnd = true;
    }
  }

  if (!(inertia || smoothEnd)) {
    return;
  }

  utils.copyCoords(status.upCoords, interaction.curCoords);

  interaction.pointers[0] = status.startEvent = new InteractEvent(interaction, event, interaction.prepared.name, 'inertiastart', interaction.element);

  status.t0 = now;

  status.active = true;
  status.allowResume = inertiaOptions.allowResume;
  interaction.simulation = status;

  target.fire(status.startEvent);

  if (inertia) {
    status.vx0 = interaction.pointerDelta.client.vx;
    status.vy0 = interaction.pointerDelta.client.vy;
    status.v0 = pointerSpeed;

    calcInertia(interaction, status);

    utils.extend(page, interaction.curCoords.page);

    page.x += status.xe;
    page.y += status.ye;

    modifiers.resetStatuses(statuses);

    modifierResult = modifiers.setAll(modifierArg);

    status.modifiedXe += modifierResult.dx;
    status.modifiedYe += modifierResult.dy;

    status.i = animationFrame.request(interaction.boundInertiaFrame);
  } else {
    status.smoothEnd = true;
    status.xe = modifierResult.dx;
    status.ye = modifierResult.dy;

    status.sx = status.sy = 0;

    status.i = animationFrame.request(interaction.boundSmoothEndFrame);
  }
});

Interaction.signals.on('stop-active', function (_ref3) {
  var interaction = _ref3.interaction;

  var status = interaction.inertiaStatus;

  if (status.active) {
    animationFrame.cancel(status.i);
    status.active = false;
    interaction.simulation = null;
  }
});

function calcInertia(interaction, status) {
  var inertiaOptions = interaction.target.options[interaction.prepared.name].inertia;
  var lambda = inertiaOptions.resistance;
  var inertiaDur = -Math.log(inertiaOptions.endSpeed / status.v0) / lambda;

  status.x0 = interaction.prevEvent.pageX;
  status.y0 = interaction.prevEvent.pageY;
  status.t0 = status.startEvent.timeStamp / 1000;
  status.sx = status.sy = 0;

  status.modifiedXe = status.xe = (status.vx0 - inertiaDur) / lambda;
  status.modifiedYe = status.ye = (status.vy0 - inertiaDur) / lambda;
  status.te = inertiaDur;

  status.lambda_v0 = lambda / status.v0;
  status.one_ve_v0 = 1 - inertiaOptions.endSpeed / status.v0;
}

function inertiaFrame() {
  updateInertiaCoords(this);
  utils.setCoordDeltas(this.pointerDelta, this.prevCoords, this.curCoords);

  var status = this.inertiaStatus;
  var options = this.target.options[this.prepared.name].inertia;
  var lambda = options.resistance;
  var t = new Date().getTime() / 1000 - status.t0;

  if (t < status.te) {

    var progress = 1 - (Math.exp(-lambda * t) - status.lambda_v0) / status.one_ve_v0;

    if (status.modifiedXe === status.xe && status.modifiedYe === status.ye) {
      status.sx = status.xe * progress;
      status.sy = status.ye * progress;
    } else {
      var quadPoint = utils.getQuadraticCurvePoint(0, 0, status.xe, status.ye, status.modifiedXe, status.modifiedYe, progress);

      status.sx = quadPoint.x;
      status.sy = quadPoint.y;
    }

    this.doMove();

    status.i = animationFrame.request(this.boundInertiaFrame);
  } else {
    status.sx = status.modifiedXe;
    status.sy = status.modifiedYe;

    this.doMove();
    this.end(status.startEvent);
    status.active = false;
    this.simulation = null;
  }

  utils.copyCoords(this.prevCoords, this.curCoords);
}

function smoothEndFrame() {
  updateInertiaCoords(this);

  var status = this.inertiaStatus;
  var t = new Date().getTime() - status.t0;
  var duration = this.target.options[this.prepared.name].inertia.smoothEndDuration;

  if (t < duration) {
    status.sx = utils.easeOutQuad(t, 0, status.xe, duration);
    status.sy = utils.easeOutQuad(t, 0, status.ye, duration);

    this.pointerMove(status.startEvent, status.startEvent);

    status.i = animationFrame.request(this.boundSmoothEndFrame);
  } else {
    status.sx = status.xe;
    status.sy = status.ye;

    this.pointerMove(status.startEvent, status.startEvent);
    this.end(status.startEvent);

    status.smoothEnd = status.active = false;
    this.simulation = null;
  }
}

function updateInertiaCoords(interaction) {
  var status = interaction.inertiaStatus;

  // return if inertia isn't running
  if (!status.active) {
    return;
  }

  var pageUp = status.upCoords.page;
  var clientUp = status.upCoords.client;

  utils.setCoords(interaction.curCoords, [{
    pageX: pageUp.x + status.sx,
    pageY: pageUp.y + status.sy,
    clientX: clientUp.x + status.sx,
    clientY: clientUp.y + status.sy
  }]);
}

},{"./InteractEvent":3,"./Interaction":5,"./modifiers/base":23,"./utils":44,"./utils/raf":50}],21:[function(require,module,exports){
'use strict';

/** @module interact */

var browser = require('./utils/browser');
var events = require('./utils/events');
var utils = require('./utils');
var scope = require('./scope');
var Interactable = require('./Interactable');
var Interaction = require('./Interaction');

var globalEvents = {};

/**
 * ```js
 * interact('#draggable').draggable(true);
 *
 * var rectables = interact('rect');
 * rectables
 *   .gesturable(true)
 *   .on('gesturemove', function (event) {
 *       // ...
 *   });
 * ```
 *
 * The methods of this variable can be used to set elements as interactables
 * and also to change various default settings.
 *
 * Calling it as a function and passing an element or a valid CSS selector
 * string returns an Interactable object which has various methods to configure
 * it.
 *
 * @global
 *
 * @param {Element | string} element The HTML or SVG Element to interact with
 * or CSS selector
 * @return {Interactable}
 */
function interact(element, options) {
  var interactable = scope.interactables.get(element, options);

  if (!interactable) {
    interactable = new Interactable(element, options);
    interactable.events.global = globalEvents;
  }

  return interactable;
}

/**
 * Check if an element or selector has been set with the {@link interact}
 * function
 *
 * @alias module:interact.isSet
 *
 * @param {Element} element The Element being searched for
 * @return {boolean} Indicates if the element or CSS selector was previously
 * passed to interact
*/
interact.isSet = function (element, options) {
  return scope.interactables.indexOfElement(element, options && options.context) !== -1;
};

/**
 * Add a global listener for an InteractEvent or adds a DOM event to `document`
 *
 * @alias module:interact.on
 *
 * @param {string | array | object} type The types of events to listen for
 * @param {function} listener The function event (s)
 * @param {object | boolean} [options] object or useCapture flag for
 * addEventListener
 * @return {object} interact
 */
interact.on = function (type, listener, options) {
  if (utils.is.string(type) && type.search(' ') !== -1) {
    type = type.trim().split(/ +/);
  }

  if (utils.is.array(type)) {
    for (var _i = 0; _i < type.length; _i++) {
      var _ref;

      _ref = type[_i];
      var eventType = _ref;

      interact.on(eventType, listener, options);
    }

    return interact;
  }

  if (utils.is.object(type)) {
    for (var prop in type) {
      interact.on(prop, type[prop], listener);
    }

    return interact;
  }

  // if it is an InteractEvent type, add listener to globalEvents
  if (utils.contains(Interactable.eventTypes, type)) {
    // if this type of event was never bound
    if (!globalEvents[type]) {
      globalEvents[type] = [listener];
    } else {
      globalEvents[type].push(listener);
    }
  }
  // If non InteractEvent type, addEventListener to document
  else {
      events.add(scope.document, type, listener, { options: options });
    }

  return interact;
};

/**
 * Removes a global InteractEvent listener or DOM event from `document`
 *
 * @alias module:interact.off
 *
 * @param {string | array | object} type The types of events that were listened
 * for
 * @param {function} listener The listener function to be removed
 * @param {object | boolean} options [options] object or useCapture flag for
 * removeEventListener
 * @return {object} interact
 */
interact.off = function (type, listener, options) {
  if (utils.is.string(type) && type.search(' ') !== -1) {
    type = type.trim().split(/ +/);
  }

  if (utils.is.array(type)) {
    for (var _i2 = 0; _i2 < type.length; _i2++) {
      var _ref2;

      _ref2 = type[_i2];
      var eventType = _ref2;

      interact.off(eventType, listener, options);
    }

    return interact;
  }

  if (utils.is.object(type)) {
    for (var prop in type) {
      interact.off(prop, type[prop], listener);
    }

    return interact;
  }

  if (!utils.contains(Interactable.eventTypes, type)) {
    events.remove(scope.document, type, listener, options);
  } else {
    var index = void 0;

    if (type in globalEvents && (index = globalEvents[type].indexOf(listener)) !== -1) {
      globalEvents[type].splice(index, 1);
    }
  }

  return interact;
};

/**
 * Returns an object which exposes internal data

 * @alias module:interact.debug
 *
 * @return {object} An object with properties that outline the current state
 * and expose internal functions and variables
 */
interact.debug = function () {
  return scope;
};

// expose the functions used to calculate multi-touch properties
interact.getPointerAverage = utils.pointerAverage;
interact.getTouchBBox = utils.touchBBox;
interact.getTouchDistance = utils.touchDistance;
interact.getTouchAngle = utils.touchAngle;

interact.getElementRect = utils.getElementRect;
interact.getElementClientRect = utils.getElementClientRect;
interact.matchesSelector = utils.matchesSelector;
interact.closest = utils.closest;

/**
 * @alias module:interact.supportsTouch
 *
 * @return {boolean} Whether or not the browser supports touch input
 */
interact.supportsTouch = function () {
  return browser.supportsTouch;
};

/**
 * @alias module:interact.supportsPointerEvent
 *
 * @return {boolean} Whether or not the browser supports PointerEvents
 */
interact.supportsPointerEvent = function () {
  return browser.supportsPointerEvent;
};

/**
 * Cancels all interactions (end events are not fired)
 *
 * @alias module:interact.stop
 *
 * @param {Event} event An event on which to call preventDefault()
 * @return {object} interact
 */
interact.stop = function (event) {
  for (var i = scope.interactions.length - 1; i >= 0; i--) {
    scope.interactions[i].stop(event);
  }

  return interact;
};

/**
 * Returns or sets the distance the pointer must be moved before an action
 * sequence occurs. This also affects tolerance for tap events.
 *
 * @alias module:interact.pointerMoveTolerance
 *
 * @param {number} [newValue] The movement from the start position must be greater than this value
 * @return {interact | number}
 */
interact.pointerMoveTolerance = function (newValue) {
  if (utils.is.number(newValue)) {
    Interaction.pointerMoveTolerance = newValue;

    return interact;
  }

  return Interaction.pointerMoveTolerance;
};

interact.addDocument = scope.addDocument;
interact.removeDocument = scope.removeDocument;

scope.interact = interact;

module.exports = interact;

},{"./Interactable":4,"./Interaction":5,"./scope":33,"./utils":44,"./utils/browser":36,"./utils/events":40}],22:[function(require,module,exports){
'use strict';

var Interactable = require('./Interactable');
var Interaction = require('./Interaction');
var scope = require('./scope');
var is = require('./utils/is');
var events = require('./utils/events');
var browser = require('./utils/browser');

var _require = require('./utils/domUtils'),
    nodeContains = _require.nodeContains,
    matchesSelector = _require.matchesSelector;

/**
 * Returns or sets whether to prevent the browser's default behaviour in
 * response to pointer events. Can be set to:
 *  - `'always'` to always prevent
 *  - `'never'` to never prevent
 *  - `'auto'` to let interact.js try to determine what would be best
 *
 * @param {string} [newValue] `true`, `false` or `'auto'`
 * @return {string | Interactable} The current setting or this Interactable
 */


Interactable.prototype.preventDefault = function (newValue) {
  if (/^(always|never|auto)$/.test(newValue)) {
    this.options.preventDefault = newValue;
    return this;
  }

  if (is.bool(newValue)) {
    this.options.preventDefault = newValue ? 'always' : 'never';
    return this;
  }

  return this.options.preventDefault;
};

Interactable.prototype.checkAndPreventDefault = function (event) {
  var setting = this.options.preventDefault;

  if (setting === 'never') {
    return;
  }

  if (setting === 'always') {
    event.preventDefault();
    return;
  }

  // setting === 'auto'

  // don't preventDefault of touch{start,move} events if the browser supports passive
  // events listeners. CSS touch-action and user-selecct should be used instead
  if (events.supportsPassive && /^touch(start|move)$/.test(event.type) && !browser.isIOS) {
    return;
  }

  // don't preventDefault of pointerdown events
  if (/^(mouse|pointer|touch)*(down|start)/i.test(event.type)) {
    return;
  }

  // don't preventDefault on editable elements
  if (is.element(event.target) && matchesSelector(event.target, 'input,select,textarea,[contenteditable=true],[contenteditable=true] *')) {
    return;
  }

  event.preventDefault();
};

function onInteractionEvent(_ref) {
  var interaction = _ref.interaction,
      event = _ref.event;

  if (interaction.target) {
    interaction.target.checkAndPreventDefault(event);
  }
}

var _arr = ['down', 'move', 'up', 'cancel'];
for (var _i = 0; _i < _arr.length; _i++) {
  var eventSignal = _arr[_i];
  Interaction.signals.on(eventSignal, onInteractionEvent);
}

// prevent native HTML5 drag on interact.js target elements
Interaction.docEvents.dragstart = function preventNativeDrag(event) {
  for (var _i2 = 0; _i2 < scope.interactions.length; _i2++) {
    var _ref2;

    _ref2 = scope.interactions[_i2];
    var interaction = _ref2;


    if (interaction.element && (interaction.element === event.target || nodeContains(interaction.element, event.target))) {

      interaction.target.checkAndPreventDefault(event);
      return;
    }
  }
};

},{"./Interactable":4,"./Interaction":5,"./scope":33,"./utils/browser":36,"./utils/domUtils":39,"./utils/events":40,"./utils/is":46}],23:[function(require,module,exports){
'use strict';

var InteractEvent = require('../InteractEvent');
var Interaction = require('../Interaction');
var extend = require('../utils/extend');

var modifiers = {
  names: [],

  setOffsets: function setOffsets(arg) {
    var interaction = arg.interaction,
        page = arg.pageCoords;
    var target = interaction.target,
        element = interaction.element,
        startOffset = interaction.startOffset;

    var rect = target.getRect(element);

    if (rect) {
      startOffset.left = page.x - rect.left;
      startOffset.top = page.y - rect.top;

      startOffset.right = rect.right - page.x;
      startOffset.bottom = rect.bottom - page.y;

      if (!('width' in rect)) {
        rect.width = rect.right - rect.left;
      }
      if (!('height' in rect)) {
        rect.height = rect.bottom - rect.top;
      }
    } else {
      startOffset.left = startOffset.top = startOffset.right = startOffset.bottom = 0;
    }

    arg.rect = rect;
    arg.interactable = target;
    arg.element = element;

    for (var _i = 0; _i < modifiers.names.length; _i++) {
      var _ref;

      _ref = modifiers.names[_i];
      var modifierName = _ref;

      arg.options = target.options[interaction.prepared.name][modifierName];

      if (!arg.options) {
        continue;
      }

      interaction.modifierOffsets[modifierName] = modifiers[modifierName].setOffset(arg);
    }
  },

  setAll: function setAll(arg) {
    var interaction = arg.interaction,
        statuses = arg.statuses,
        preEnd = arg.preEnd,
        requireEndOnly = arg.requireEndOnly;

    var result = {
      dx: 0,
      dy: 0,
      changed: false,
      locked: false,
      shouldMove: true
    };

    arg.modifiedCoords = extend({}, arg.pageCoords);

    for (var _i2 = 0; _i2 < modifiers.names.length; _i2++) {
      var _ref2;

      _ref2 = modifiers.names[_i2];
      var modifierName = _ref2;

      var modifier = modifiers[modifierName];
      var options = interaction.target.options[interaction.prepared.name][modifierName];

      if (!shouldDo(options, preEnd, requireEndOnly)) {
        continue;
      }

      arg.status = arg.status = statuses[modifierName];
      arg.options = options;
      arg.offset = arg.interaction.modifierOffsets[modifierName];

      modifier.set(arg);

      if (arg.status.locked) {
        arg.modifiedCoords.x += arg.status.dx;
        arg.modifiedCoords.y += arg.status.dy;

        result.dx += arg.status.dx;
        result.dy += arg.status.dy;

        result.locked = true;
      }
    }

    // a move should be fired if:
    //  - there are no modifiers enabled,
    //  - no modifiers are "locked" i.e. have changed the pointer's coordinates, or
    //  - the locked coords have changed since the last pointer move
    result.shouldMove = !arg.status || !result.locked || arg.status.changed;

    return result;
  },

  resetStatuses: function resetStatuses(statuses) {
    for (var _i3 = 0; _i3 < modifiers.names.length; _i3++) {
      var _ref3;

      _ref3 = modifiers.names[_i3];
      var modifierName = _ref3;

      var status = statuses[modifierName] || {};

      status.dx = status.dy = 0;
      status.modifiedX = status.modifiedY = NaN;
      status.locked = false;
      status.changed = true;

      statuses[modifierName] = status;
    }

    return statuses;
  },

  start: function start(_ref4, signalName) {
    var interaction = _ref4.interaction;

    var arg = {
      interaction: interaction,
      pageCoords: (signalName === 'action-resume' ? interaction.curCoords : interaction.startCoords).page,
      startOffset: interaction.startOffset,
      statuses: interaction.modifierStatuses,
      preEnd: false,
      requireEndOnly: false
    };

    modifiers.setOffsets(arg);
    modifiers.resetStatuses(arg.statuses);

    arg.pageCoords = extend({}, interaction.startCoords.page);
    interaction.modifierResult = modifiers.setAll(arg);
  },

  beforeMove: function beforeMove(_ref5) {
    var interaction = _ref5.interaction,
        preEnd = _ref5.preEnd,
        interactingBeforeMove = _ref5.interactingBeforeMove;

    var modifierResult = modifiers.setAll({
      interaction: interaction,
      preEnd: preEnd,
      pageCoords: interaction.curCoords.page,
      statuses: interaction.modifierStatuses,
      requireEndOnly: false
    });

    // don't fire an action move if a modifier would keep the event in the same
    // cordinates as before
    if (!modifierResult.shouldMove && interactingBeforeMove) {
      interaction._dontFireMove = true;
    }

    interaction.modifierResult = modifierResult;
  },

  end: function end(_ref6) {
    var interaction = _ref6.interaction,
        event = _ref6.event;

    for (var _i4 = 0; _i4 < modifiers.names.length; _i4++) {
      var _ref7;

      _ref7 = modifiers.names[_i4];
      var modifierName = _ref7;

      var options = interaction.target.options[interaction.prepared.name][modifierName];

      // if the endOnly option is true for any modifier
      if (shouldDo(options, true, true)) {
        // fire a move event at the modified coordinates
        interaction.doMove({ event: event, preEnd: true });
        break;
      }
    }
  },

  setXY: function setXY(arg) {
    var iEvent = arg.iEvent,
        interaction = arg.interaction;

    var modifierArg = extend({}, arg);

    for (var i = 0; i < modifiers.names.length; i++) {
      var modifierName = modifiers.names[i];
      modifierArg.options = interaction.target.options[interaction.prepared.name][modifierName];

      if (!modifierArg.options) {
        continue;
      }

      var modifier = modifiers[modifierName];

      modifierArg.status = interaction.modifierStatuses[modifierName];

      iEvent[modifierName] = modifier.modifyCoords(modifierArg);
    }
  }
};

Interaction.signals.on('new', function (interaction) {
  interaction.startOffset = { left: 0, right: 0, top: 0, bottom: 0 };
  interaction.modifierOffsets = {};
  interaction.modifierStatuses = modifiers.resetStatuses({});
  interaction.modifierResult = null;
});

Interaction.signals.on('action-start', modifiers.start);
Interaction.signals.on('action-resume', modifiers.start);
Interaction.signals.on('before-action-move', modifiers.beforeMove);
Interaction.signals.on('action-end', modifiers.end);

InteractEvent.signals.on('set-xy', modifiers.setXY);

function shouldDo(options, preEnd, requireEndOnly) {
  return options && options.enabled && (preEnd || !options.endOnly) && (!requireEndOnly || options.endOnly);
}

module.exports = modifiers;

},{"../InteractEvent":3,"../Interaction":5,"../utils/extend":41}],24:[function(require,module,exports){
'use strict';

var modifiers = require('./base');
var utils = require('../utils');
var defaultOptions = require('../defaultOptions');

var restrict = {
  defaults: {
    enabled: false,
    endOnly: false,
    restriction: null,
    elementRect: null
  },

  setOffset: function setOffset(_ref) {
    var rect = _ref.rect,
        startOffset = _ref.startOffset,
        options = _ref.options;

    var elementRect = options && options.elementRect;
    var offset = {};

    if (rect && elementRect) {
      offset.left = startOffset.left - rect.width * elementRect.left;
      offset.top = startOffset.top - rect.height * elementRect.top;

      offset.right = startOffset.right - rect.width * (1 - elementRect.right);
      offset.bottom = startOffset.bottom - rect.height * (1 - elementRect.bottom);
    } else {
      offset.left = offset.top = offset.right = offset.bottom = 0;
    }

    return offset;
  },

  set: function set(_ref2) {
    var modifiedCoords = _ref2.modifiedCoords,
        interaction = _ref2.interaction,
        status = _ref2.status,
        options = _ref2.options;

    if (!options) {
      return status;
    }

    var page = status.useStatusXY ? { x: status.x, y: status.y } : utils.extend({}, modifiedCoords);

    var restriction = getRestrictionRect(options.restriction, interaction, page);

    if (!restriction) {
      return status;
    }

    status.dx = 0;
    status.dy = 0;
    status.locked = false;

    var rect = restriction;
    var modifiedX = page.x;
    var modifiedY = page.y;

    var offset = interaction.modifierOffsets.restrict;

    // object is assumed to have
    // x, y, width, height or
    // left, top, right, bottom
    if ('x' in restriction && 'y' in restriction) {
      modifiedX = Math.max(Math.min(rect.x + rect.width - offset.right, page.x), rect.x + offset.left);
      modifiedY = Math.max(Math.min(rect.y + rect.height - offset.bottom, page.y), rect.y + offset.top);
    } else {
      modifiedX = Math.max(Math.min(rect.right - offset.right, page.x), rect.left + offset.left);
      modifiedY = Math.max(Math.min(rect.bottom - offset.bottom, page.y), rect.top + offset.top);
    }

    status.dx = modifiedX - page.x;
    status.dy = modifiedY - page.y;

    status.changed = status.modifiedX !== modifiedX || status.modifiedY !== modifiedY;
    status.locked = !!(status.dx || status.dy);

    status.modifiedX = modifiedX;
    status.modifiedY = modifiedY;
  },

  modifyCoords: function modifyCoords(_ref3) {
    var page = _ref3.page,
        client = _ref3.client,
        status = _ref3.status,
        phase = _ref3.phase,
        options = _ref3.options;

    var elementRect = options && options.elementRect;

    if (options && options.enabled && !(phase === 'start' && elementRect && status.locked)) {

      if (status.locked) {
        page.x += status.dx;
        page.y += status.dy;
        client.x += status.dx;
        client.y += status.dy;

        return {
          dx: status.dx,
          dy: status.dy
        };
      }
    }
  },

  getRestrictionRect: getRestrictionRect
};

function getRestrictionRect(value, interaction, page) {
  if (utils.is.function(value)) {
    return utils.resolveRectLike(value, interaction.target, interaction.element, [page.x, page.y, interaction]);
  } else {
    return utils.resolveRectLike(value, interaction.target, interaction.element);
  }
}

modifiers.restrict = restrict;
modifiers.names.push('restrict');

defaultOptions.perAction.restrict = restrict.defaults;

module.exports = restrict;

},{"../defaultOptions":18,"../utils":44,"./base":23}],25:[function(require,module,exports){
'use strict';

// This module adds the options.resize.restrictEdges setting which sets min and
// max for the top, left, bottom and right edges of the target being resized.
//
// interact(target).resize({
//   edges: { top: true, left: true },
//   restrictEdges: {
//     inner: { top: 200, left: 200, right: 400, bottom: 400 },
//     outer: { top:   0, left:   0, right: 600, bottom: 600 },
//   },
// });

var modifiers = require('./base');
var utils = require('../utils');
var rectUtils = require('../utils/rect');
var defaultOptions = require('../defaultOptions');
var resize = require('../actions/resize');

var _require = require('./restrict'),
    getRestrictionRect = _require.getRestrictionRect;

var noInner = { top: +Infinity, left: +Infinity, bottom: -Infinity, right: -Infinity };
var noOuter = { top: -Infinity, left: -Infinity, bottom: +Infinity, right: +Infinity };

var restrictEdges = {
  defaults: {
    enabled: false,
    endOnly: false,
    min: null,
    max: null,
    offset: null
  },

  setOffset: function setOffset(_ref) {
    var interaction = _ref.interaction,
        startOffset = _ref.startOffset,
        options = _ref.options;

    if (!options) {
      return utils.extend({}, startOffset);
    }

    var offset = getRestrictionRect(options.offset, interaction, interaction.startCoords.page);

    if (offset) {
      return {
        top: startOffset.top + offset.y,
        left: startOffset.left + offset.x,
        bottom: startOffset.bottom + offset.y,
        right: startOffset.right + offset.x
      };
    }

    return startOffset;
  },

  set: function set(_ref2) {
    var modifiedCoords = _ref2.modifiedCoords,
        interaction = _ref2.interaction,
        status = _ref2.status,
        offset = _ref2.offset,
        options = _ref2.options;

    var edges = interaction.prepared.linkedEdges || interaction.prepared.edges;

    if (!interaction.interacting() || !edges) {
      return;
    }

    var page = status.useStatusXY ? { x: status.x, y: status.y } : utils.extend({}, modifiedCoords);
    var inner = rectUtils.xywhToTlbr(getRestrictionRect(options.inner, interaction, page)) || noInner;
    var outer = rectUtils.xywhToTlbr(getRestrictionRect(options.outer, interaction, page)) || noOuter;

    var modifiedX = page.x;
    var modifiedY = page.y;

    status.dx = 0;
    status.dy = 0;
    status.locked = false;

    if (edges.top) {
      modifiedY = Math.min(Math.max(outer.top + offset.top, page.y), inner.top + offset.top);
    } else if (edges.bottom) {
      modifiedY = Math.max(Math.min(outer.bottom - offset.bottom, page.y), inner.bottom - offset.bottom);
    }
    if (edges.left) {
      modifiedX = Math.min(Math.max(outer.left + offset.left, page.x), inner.left + offset.left);
    } else if (edges.right) {
      modifiedX = Math.max(Math.min(outer.right - offset.right, page.x), inner.right - offset.right);
    }

    status.dx = modifiedX - page.x;
    status.dy = modifiedY - page.y;

    status.changed = status.modifiedX !== modifiedX || status.modifiedY !== modifiedY;
    status.locked = !!(status.dx || status.dy);

    status.modifiedX = modifiedX;
    status.modifiedY = modifiedY;
  },

  modifyCoords: function modifyCoords(_ref3) {
    var page = _ref3.page,
        client = _ref3.client,
        status = _ref3.status,
        phase = _ref3.phase,
        options = _ref3.options;

    if (options && options.enabled && !(phase === 'start' && status.locked)) {

      if (status.locked) {
        page.x += status.dx;
        page.y += status.dy;
        client.x += status.dx;
        client.y += status.dy;

        return {
          dx: status.dx,
          dy: status.dy
        };
      }
    }
  },

  noInner: noInner,
  noOuter: noOuter,
  getRestrictionRect: getRestrictionRect
};

modifiers.restrictEdges = restrictEdges;
modifiers.names.push('restrictEdges');

defaultOptions.perAction.restrictEdges = restrictEdges.defaults;
resize.defaults.restrictEdges = restrictEdges.defaults;

module.exports = restrictEdges;

},{"../actions/resize":10,"../defaultOptions":18,"../utils":44,"../utils/rect":51,"./base":23,"./restrict":24}],26:[function(require,module,exports){
'use strict';

// This module adds the options.resize.restrictSize setting which sets min and
// max width and height for the target being resized.
//
// interact(target).resize({
//   edges: { top: true, left: true },
//   restrictSize: {
//     min: { width: -600, height: -600 },
//     max: { width:  600, height:  600 },
//   },
// });

var modifiers = require('./base');
var restrictEdges = require('./restrictEdges');
var utils = require('../utils');
var rectUtils = require('../utils/rect');
var defaultOptions = require('../defaultOptions');
var resize = require('../actions/resize');

var noMin = { width: -Infinity, height: -Infinity };
var noMax = { width: +Infinity, height: +Infinity };

var restrictSize = {
  defaults: {
    enabled: false,
    endOnly: false,
    min: null,
    max: null
  },

  setOffset: function setOffset(_ref) {
    var interaction = _ref.interaction;

    return interaction.startOffset;
  },

  set: function set(arg) {
    var interaction = arg.interaction,
        options = arg.options;

    var edges = interaction.prepared.linkedEdges || interaction.prepared.edges;

    if (!interaction.interacting() || !edges) {
      return;
    }

    var rect = rectUtils.xywhToTlbr(interaction.resizeRects.inverted);

    var minSize = rectUtils.tlbrToXywh(restrictEdges.getRestrictionRect(options.min, interaction)) || noMin;
    var maxSize = rectUtils.tlbrToXywh(restrictEdges.getRestrictionRect(options.max, interaction)) || noMax;

    arg.options = {
      enabled: options.enabled,
      endOnly: options.endOnly,
      inner: utils.extend({}, restrictEdges.noInner),
      outer: utils.extend({}, restrictEdges.noOuter)
    };

    if (edges.top) {
      arg.options.inner.top = rect.bottom - minSize.height;
      arg.options.outer.top = rect.bottom - maxSize.height;
    } else if (edges.bottom) {
      arg.options.inner.bottom = rect.top + minSize.height;
      arg.options.outer.bottom = rect.top + maxSize.height;
    }
    if (edges.left) {
      arg.options.inner.left = rect.right - minSize.width;
      arg.options.outer.left = rect.right - maxSize.width;
    } else if (edges.right) {
      arg.options.inner.right = rect.left + minSize.width;
      arg.options.outer.right = rect.left + maxSize.width;
    }

    restrictEdges.set(arg);
  },

  modifyCoords: restrictEdges.modifyCoords
};

modifiers.restrictSize = restrictSize;
modifiers.names.push('restrictSize');

defaultOptions.perAction.restrictSize = restrictSize.defaults;
resize.defaults.restrictSize = restrictSize.defaults;

module.exports = restrictSize;

},{"../actions/resize":10,"../defaultOptions":18,"../utils":44,"../utils/rect":51,"./base":23,"./restrictEdges":25}],27:[function(require,module,exports){
'use strict';

var modifiers = require('./base');
var interact = require('../interact');
var utils = require('../utils');
var defaultOptions = require('../defaultOptions');

var snap = {
  defaults: {
    enabled: false,
    endOnly: false,
    range: Infinity,
    targets: null,
    offsets: null,

    relativePoints: null
  },

  setOffset: function setOffset(_ref) {
    var interaction = _ref.interaction,
        interactable = _ref.interactable,
        element = _ref.element,
        rect = _ref.rect,
        startOffset = _ref.startOffset,
        options = _ref.options;

    var offsets = [];
    var optionsOrigin = utils.rectToXY(utils.resolveRectLike(options.origin));
    var origin = optionsOrigin || utils.getOriginXY(interactable, element, interaction.prepared.name);
    options = options || interactable.options[interaction.prepared.name].snap || {};

    var snapOffset = void 0;

    if (options.offset === 'startCoords') {
      snapOffset = {
        x: interaction.startCoords.page.x - origin.x,
        y: interaction.startCoords.page.y - origin.y
      };
    } else {
      var offsetRect = utils.resolveRectLike(options.offset, interactable, element, [interaction]);

      snapOffset = utils.rectToXY(offsetRect) || { x: 0, y: 0 };
    }

    if (rect && options.relativePoints && options.relativePoints.length) {
      for (var _i = 0; _i < options.relativePoints.length; _i++) {
        var _ref3;

        _ref3 = options.relativePoints[_i];
        var _ref2 = _ref3;
        var relativeX = _ref2.x;
        var relativeY = _ref2.y;

        offsets.push({
          x: startOffset.left - rect.width * relativeX + snapOffset.x,
          y: startOffset.top - rect.height * relativeY + snapOffset.y
        });
      }
    } else {
      offsets.push(snapOffset);
    }

    return offsets;
  },

  set: function set(_ref4) {
    var interaction = _ref4.interaction,
        modifiedCoords = _ref4.modifiedCoords,
        status = _ref4.status,
        options = _ref4.options,
        offsets = _ref4.offset;

    var targets = [];
    var target = void 0;
    var page = void 0;
    var i = void 0;

    if (status.useStatusXY) {
      page = { x: status.x, y: status.y };
    } else {
      var origin = utils.getOriginXY(interaction.target, interaction.element, interaction.prepared.name);

      page = utils.extend({}, modifiedCoords);

      page.x -= origin.x;
      page.y -= origin.y;
    }

    status.realX = page.x;
    status.realY = page.y;

    var len = options.targets ? options.targets.length : 0;

    for (var _i2 = 0; _i2 < offsets.length; _i2++) {
      var _ref6;

      _ref6 = offsets[_i2];
      var _ref5 = _ref6;
      var offsetX = _ref5.x;
      var offsetY = _ref5.y;

      var relativeX = page.x - offsetX;
      var relativeY = page.y - offsetY;

      for (var _i3 = 0; _i3 < (options.targets || []).length; _i3++) {
        var _ref7;

        _ref7 = (options.targets || [])[_i3];
        var snapTarget = _ref7;

        if (utils.is.function(snapTarget)) {
          target = snapTarget(relativeX, relativeY, interaction);
        } else {
          target = snapTarget;
        }

        if (!target) {
          continue;
        }

        targets.push({
          x: utils.is.number(target.x) ? target.x + offsetX : relativeX,
          y: utils.is.number(target.y) ? target.y + offsetY : relativeY,

          range: utils.is.number(target.range) ? target.range : options.range
        });
      }
    }

    var closest = {
      target: null,
      inRange: false,
      distance: 0,
      range: 0,
      dx: 0,
      dy: 0
    };

    for (i = 0, len = targets.length; i < len; i++) {
      target = targets[i];

      var range = target.range;
      var dx = target.x - page.x;
      var dy = target.y - page.y;
      var distance = utils.hypot(dx, dy);
      var inRange = distance <= range;

      // Infinite targets count as being out of range
      // compared to non infinite ones that are in range
      if (range === Infinity && closest.inRange && closest.range !== Infinity) {
        inRange = false;
      }

      if (!closest.target || (inRange
      // is the closest target in range?
      ? closest.inRange && range !== Infinity
      // the pointer is relatively deeper in this target
      ? distance / range < closest.distance / closest.range
      // this target has Infinite range and the closest doesn't
      : range === Infinity && closest.range !== Infinity ||
      // OR this target is closer that the previous closest
      distance < closest.distance :
      // The other is not in range and the pointer is closer to this target
      !closest.inRange && distance < closest.distance)) {

        closest.target = target;
        closest.distance = distance;
        closest.range = range;
        closest.inRange = inRange;
        closest.dx = dx;
        closest.dy = dy;

        status.range = range;
      }
    }

    var snapChanged = void 0;

    if (closest.target) {
      snapChanged = status.modifiedX !== closest.target.x || status.modifiedY !== closest.target.y;

      status.modifiedX = closest.target.x;
      status.modifiedY = closest.target.y;
    } else {
      snapChanged = true;

      status.modifiedX = NaN;
      status.modifiedY = NaN;
    }

    status.dx = closest.dx;
    status.dy = closest.dy;

    status.changed = snapChanged || closest.inRange && !status.locked;
    status.locked = closest.inRange;
  },

  modifyCoords: function modifyCoords(_ref8) {
    var page = _ref8.page,
        client = _ref8.client,
        status = _ref8.status,
        phase = _ref8.phase,
        options = _ref8.options;

    var relativePoints = options && options.relativePoints;

    if (options && options.enabled && !(phase === 'start' && relativePoints && relativePoints.length)) {

      if (status.locked) {
        page.x += status.dx;
        page.y += status.dy;
        client.x += status.dx;
        client.y += status.dy;
      }

      return {
        range: status.range,
        locked: status.locked,
        x: status.modifiedX,
        y: status.modifiedY,
        realX: status.realX,
        realY: status.realY,
        dx: status.dx,
        dy: status.dy
      };
    }
  }
};

interact.createSnapGrid = function (grid) {
  return function (x, y) {
    var limits = grid.limits || {
      left: -Infinity,
      right: Infinity,
      top: -Infinity,
      bottom: Infinity
    };
    var offsetX = 0;
    var offsetY = 0;

    if (utils.is.object(grid.offset)) {
      offsetX = grid.offset.x;
      offsetY = grid.offset.y;
    }

    var gridx = Math.round((x - offsetX) / grid.x);
    var gridy = Math.round((y - offsetY) / grid.y);

    var newX = Math.max(limits.left, Math.min(limits.right, gridx * grid.x + offsetX));
    var newY = Math.max(limits.top, Math.min(limits.bottom, gridy * grid.y + offsetY));

    return {
      x: newX,
      y: newY,
      range: grid.range
    };
  };
};

modifiers.snap = snap;
modifiers.names.push('snap');

defaultOptions.perAction.snap = snap.defaults;

module.exports = snap;

},{"../defaultOptions":18,"../interact":21,"../utils":44,"./base":23}],28:[function(require,module,exports){
'use strict';

// This module allows snapping of the size of targets during resize
// interactions.

var modifiers = require('./base');
var snap = require('./snap');
var defaultOptions = require('../defaultOptions');
var resize = require('../actions/resize');
var utils = require('../utils/');

var snapSize = {
  defaults: {
    enabled: false,
    endOnly: false,
    range: Infinity,
    targets: null,
    offsets: null
  },

  setOffset: function setOffset(arg) {
    var interaction = arg.interaction,
        options = arg.options;

    var edges = interaction.prepared.edges;

    if (!edges) {
      return;
    }

    arg.options = {
      relativePoints: [{
        x: edges.left ? 0 : 1,
        y: edges.top ? 0 : 1
      }],
      origin: { x: 0, y: 0 },
      offset: 'self',
      range: options.range
    };

    var offsets = snap.setOffset(arg);
    arg.options = options;

    return offsets;
  },

  set: function set(arg) {
    var interaction = arg.interaction,
        options = arg.options,
        offset = arg.offset,
        modifiedCoords = arg.modifiedCoords;

    var page = utils.extend({}, modifiedCoords);
    var relativeX = page.x - offset[0].x;
    var relativeY = page.y - offset[0].y;

    arg.options = utils.extend({}, options);
    arg.options.targets = [];

    for (var _i = 0; _i < (options.targets || []).length; _i++) {
      var _ref;

      _ref = (options.targets || [])[_i];
      var snapTarget = _ref;

      var target = void 0;

      if (utils.is.function(snapTarget)) {
        target = snapTarget(relativeX, relativeY, interaction);
      } else {
        target = snapTarget;
      }

      if (!target) {
        continue;
      }

      if ('width' in target && 'height' in target) {
        target.x = target.width;
        target.y = target.height;
      }

      arg.options.targets.push(target);
    }

    snap.set(arg);
  },

  modifyCoords: function modifyCoords(arg) {
    var options = arg.options;


    arg.options = utils.extend({}, options);
    arg.options.enabled = options.enabled;
    arg.options.relativePoints = [null];

    snap.modifyCoords(arg);
  }
};

modifiers.snapSize = snapSize;
modifiers.names.push('snapSize');

defaultOptions.perAction.snapSize = snapSize.defaults;
resize.defaults.snapSize = snapSize.defaults;

module.exports = snapSize;

},{"../actions/resize":10,"../defaultOptions":18,"../utils/":44,"./base":23,"./snap":27}],29:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pointerUtils = require('../utils/pointerUtils');

module.exports = function () {
  /** */
  function PointerEvent(type, pointer, event, eventTarget, interaction) {
    _classCallCheck(this, PointerEvent);

    pointerUtils.pointerExtend(this, event);

    if (event !== pointer) {
      pointerUtils.pointerExtend(this, pointer);
    }

    this.interaction = interaction;

    this.timeStamp = new Date().getTime();
    this.originalEvent = event;
    this.type = type;
    this.pointerId = pointerUtils.getPointerId(pointer);
    this.pointerType = pointerUtils.getPointerType(pointer);
    this.target = eventTarget;
    this.currentTarget = null;

    if (type === 'tap') {
      var pointerIndex = interaction.getPointerIndex(pointer);
      this.dt = this.timeStamp - interaction.downTimes[pointerIndex];

      var interval = this.timeStamp - interaction.tapTime;

      this.double = !!(interaction.prevTap && interaction.prevTap.type !== 'doubletap' && interaction.prevTap.target === this.target && interval < 500);
    } else if (type === 'doubletap') {
      this.dt = pointer.timeStamp - interaction.tapTime;
    }
  }

  PointerEvent.prototype.subtractOrigin = function subtractOrigin(_ref) {
    var originX = _ref.x,
        originY = _ref.y;

    this.pageX -= originX;
    this.pageY -= originY;
    this.clientX -= originX;
    this.clientY -= originY;

    return this;
  };

  PointerEvent.prototype.addOrigin = function addOrigin(_ref2) {
    var originX = _ref2.x,
        originY = _ref2.y;

    this.pageX += originX;
    this.pageY += originY;
    this.clientX += originX;
    this.clientY += originY;

    return this;
  };

  /** */


  PointerEvent.prototype.preventDefault = function preventDefault() {
    this.originalEvent.preventDefault();
  };

  /** */


  PointerEvent.prototype.stopPropagation = function stopPropagation() {
    this.propagationStopped = true;
  };

  /** */


  PointerEvent.prototype.stopImmediatePropagation = function stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = true;
  };

  return PointerEvent;
}();

},{"../utils/pointerUtils":49}],30:[function(require,module,exports){
'use strict';

var PointerEvent = require('./PointerEvent');
var Interaction = require('../Interaction');
var utils = require('../utils');
var defaults = require('../defaultOptions');
var signals = require('../utils/Signals').new();

var simpleSignals = ['down', 'up', 'cancel'];
var simpleEvents = ['down', 'up', 'cancel'];

var pointerEvents = {
  PointerEvent: PointerEvent,
  fire: fire,
  collectEventTargets: collectEventTargets,
  signals: signals,
  defaults: {
    holdDuration: 600,
    ignoreFrom: null,
    allowFrom: null,
    origin: { x: 0, y: 0 }
  },
  types: ['down', 'move', 'up', 'cancel', 'tap', 'doubletap', 'hold']
};

function fire(arg) {
  var interaction = arg.interaction,
      pointer = arg.pointer,
      event = arg.event,
      eventTarget = arg.eventTarget,
      _arg$type = arg.type,
      type = _arg$type === undefined ? arg.pointerEvent.type : _arg$type,
      _arg$targets = arg.targets,
      targets = _arg$targets === undefined ? collectEventTargets(arg) : _arg$targets,
      _arg$pointerEvent = arg.pointerEvent,
      pointerEvent = _arg$pointerEvent === undefined ? new PointerEvent(type, pointer, event, eventTarget, interaction) : _arg$pointerEvent;


  var signalArg = {
    interaction: interaction,
    pointer: pointer,
    event: event,
    eventTarget: eventTarget,
    targets: targets,
    type: type,
    pointerEvent: pointerEvent
  };

  for (var i = 0; i < targets.length; i++) {
    var target = targets[i];

    for (var prop in target.props || {}) {
      pointerEvent[prop] = target.props[prop];
    }

    var origin = utils.getOriginXY(target.eventable, target.element);

    pointerEvent.subtractOrigin(origin);
    pointerEvent.eventable = target.eventable;
    pointerEvent.currentTarget = target.element;

    target.eventable.fire(pointerEvent);

    pointerEvent.addOrigin(origin);

    if (pointerEvent.immediatePropagationStopped || pointerEvent.propagationStopped && i + 1 < targets.length && targets[i + 1].element !== pointerEvent.currentTarget) {
      break;
    }
  }

  signals.fire('fired', signalArg);

  if (type === 'tap') {
    // if pointerEvent should make a double tap, create and fire a doubletap
    // PointerEvent and use that as the prevTap
    var prevTap = pointerEvent.double ? fire({
      interaction: interaction, pointer: pointer, event: event, eventTarget: eventTarget,
      type: 'doubletap'
    }) : pointerEvent;

    interaction.prevTap = prevTap;
    interaction.tapTime = prevTap.timeStamp;
  }

  return pointerEvent;
}

function collectEventTargets(_ref) {
  var interaction = _ref.interaction,
      pointer = _ref.pointer,
      event = _ref.event,
      eventTarget = _ref.eventTarget,
      type = _ref.type;

  var pointerIndex = interaction.getPointerIndex(pointer);

  // do not fire a tap event if the pointer was moved before being lifted
  if (type === 'tap' && (interaction.pointerWasMoved
  // or if the pointerup target is different to the pointerdown target
  || !(interaction.downTargets[pointerIndex] && interaction.downTargets[pointerIndex] === eventTarget))) {
    return [];
  }

  var path = utils.getPath(eventTarget);
  var signalArg = {
    interaction: interaction,
    pointer: pointer,
    event: event,
    eventTarget: eventTarget,
    type: type,
    path: path,
    targets: [],
    element: null
  };

  for (var _i = 0; _i < path.length; _i++) {
    var _ref2;

    _ref2 = path[_i];
    var element = _ref2;

    signalArg.element = element;

    signals.fire('collect-targets', signalArg);
  }

  if (type === 'hold') {
    signalArg.targets = signalArg.targets.filter(function (target) {
      return target.eventable.options.holdDuration === interaction.holdTimers[pointerIndex].duration;
    });
  }

  return signalArg.targets;
}

Interaction.signals.on('update-pointer-down', function (_ref3) {
  var interaction = _ref3.interaction,
      pointerIndex = _ref3.pointerIndex;

  interaction.holdTimers[pointerIndex] = { duration: Infinity, timeout: null };
});

Interaction.signals.on('remove-pointer', function (_ref4) {
  var interaction = _ref4.interaction,
      pointerIndex = _ref4.pointerIndex;

  interaction.holdTimers.splice(pointerIndex, 1);
});

Interaction.signals.on('move', function (_ref5) {
  var interaction = _ref5.interaction,
      pointer = _ref5.pointer,
      event = _ref5.event,
      eventTarget = _ref5.eventTarget,
      duplicateMove = _ref5.duplicateMove;

  var pointerIndex = interaction.getPointerIndex(pointer);

  if (!duplicateMove && (!interaction.pointerIsDown || interaction.pointerWasMoved)) {
    if (interaction.pointerIsDown) {
      clearTimeout(interaction.holdTimers[pointerIndex].timeout);
    }

    fire({
      interaction: interaction, pointer: pointer, event: event, eventTarget: eventTarget,
      type: 'move'
    });
  }
});

Interaction.signals.on('down', function (_ref6) {
  var interaction = _ref6.interaction,
      pointer = _ref6.pointer,
      event = _ref6.event,
      eventTarget = _ref6.eventTarget,
      pointerIndex = _ref6.pointerIndex;

  var timer = interaction.holdTimers[pointerIndex];
  var path = utils.getPath(eventTarget);
  var signalArg = {
    interaction: interaction,
    pointer: pointer,
    event: event,
    eventTarget: eventTarget,
    type: 'hold',
    targets: [],
    path: path,
    element: null
  };

  for (var _i2 = 0; _i2 < path.length; _i2++) {
    var _ref7;

    _ref7 = path[_i2];
    var element = _ref7;

    signalArg.element = element;

    signals.fire('collect-targets', signalArg);
  }

  if (!signalArg.targets.length) {
    return;
  }

  var minDuration = Infinity;

  for (var _i3 = 0; _i3 < signalArg.targets.length; _i3++) {
    var _ref8;

    _ref8 = signalArg.targets[_i3];
    var target = _ref8;

    var holdDuration = target.eventable.options.holdDuration;

    if (holdDuration < minDuration) {
      minDuration = holdDuration;
    }
  }

  timer.duration = minDuration;
  timer.timeout = setTimeout(function () {
    fire({
      interaction: interaction,
      eventTarget: eventTarget,
      pointer: pointer,
      event: event,
      type: 'hold'
    });
  }, minDuration);
});

Interaction.signals.on('up', function (_ref9) {
  var interaction = _ref9.interaction,
      pointer = _ref9.pointer,
      event = _ref9.event,
      eventTarget = _ref9.eventTarget;

  if (!interaction.pointerWasMoved) {
    fire({ interaction: interaction, eventTarget: eventTarget, pointer: pointer, event: event, type: 'tap' });
  }
});

var _arr = ['up', 'cancel'];
for (var _i4 = 0; _i4 < _arr.length; _i4++) {
  var signalName = _arr[_i4];
  Interaction.signals.on(signalName, function (_ref11) {
    var interaction = _ref11.interaction,
        pointerIndex = _ref11.pointerIndex;

    if (interaction.holdTimers[pointerIndex]) {
      clearTimeout(interaction.holdTimers[pointerIndex].timeout);
    }
  });
}

function createSignalListener(type) {
  return function (_ref10) {
    var interaction = _ref10.interaction,
        pointer = _ref10.pointer,
        event = _ref10.event,
        eventTarget = _ref10.eventTarget;

    fire({ interaction: interaction, eventTarget: eventTarget, pointer: pointer, event: event, type: type });
  };
}

for (var i = 0; i < simpleSignals.length; i++) {
  Interaction.signals.on(simpleSignals[i], createSignalListener(simpleEvents[i]));
}

Interaction.signals.on('new', function (interaction) {
  interaction.prevTap = null; // the most recent tap event on this interaction
  interaction.tapTime = 0; // time of the most recent tap event
  interaction.holdTimers = []; // [{ duration, timeout }]
});

defaults.pointerEvents = pointerEvents.defaults;
module.exports = pointerEvents;

},{"../Interaction":5,"../defaultOptions":18,"../utils":44,"../utils/Signals":34,"./PointerEvent":29}],31:[function(require,module,exports){
'use strict';

var pointerEvents = require('./base');
var Interaction = require('../Interaction');

pointerEvents.signals.on('new', onNew);
pointerEvents.signals.on('fired', onFired);

var _arr = ['move', 'up', 'cancel', 'endall'];
for (var _i = 0; _i < _arr.length; _i++) {
  var signal = _arr[_i];
  Interaction.signals.on(signal, endHoldRepeat);
}

function onNew(_ref) {
  var pointerEvent = _ref.pointerEvent;

  if (pointerEvent.type !== 'hold') {
    return;
  }

  pointerEvent.count = (pointerEvent.count || 0) + 1;
}

function onFired(_ref2) {
  var interaction = _ref2.interaction,
      pointerEvent = _ref2.pointerEvent,
      eventTarget = _ref2.eventTarget,
      targets = _ref2.targets;

  if (pointerEvent.type !== 'hold' || !targets.length) {
    return;
  }

  // get the repeat interval from the first eventable
  var interval = targets[0].eventable.options.holdRepeatInterval;

  // don't repeat if the interval is 0 or less
  if (interval <= 0) {
    return;
  }

  // set a timeout to fire the holdrepeat event
  interaction.holdIntervalHandle = setTimeout(function () {
    pointerEvents.fire({
      interaction: interaction,
      eventTarget: eventTarget,
      type: 'hold',
      pointer: pointerEvent,
      event: pointerEvent
    });
  }, interval);
}

function endHoldRepeat(_ref3) {
  var interaction = _ref3.interaction;

  // set the interaction's holdStopTime property
  // to stop further holdRepeat events
  if (interaction.holdIntervalHandle) {
    clearInterval(interaction.holdIntervalHandle);
    interaction.holdIntervalHandle = null;
  }
}

// don't repeat by default
pointerEvents.defaults.holdRepeatInterval = 0;
pointerEvents.types.push('holdrepeat');

module.exports = {
  onNew: onNew,
  onFired: onFired,
  endHoldRepeat: endHoldRepeat
};

},{"../Interaction":5,"./base":30}],32:[function(require,module,exports){
'use strict';

var pointerEvents = require('./base');
var Interactable = require('../Interactable');
var is = require('../utils/is');
var scope = require('../scope');
var extend = require('../utils/extend');

var _require = require('../utils/arr'),
    merge = _require.merge;

pointerEvents.signals.on('collect-targets', function (_ref) {
  var targets = _ref.targets,
      element = _ref.element,
      type = _ref.type,
      eventTarget = _ref.eventTarget;

  scope.interactables.forEachMatch(element, function (interactable) {
    var eventable = interactable.events;
    var options = eventable.options;

    if (eventable[type] && is.element(element) && interactable.testIgnoreAllow(options, element, eventTarget)) {

      targets.push({
        element: element,
        eventable: eventable,
        props: { interactable: interactable }
      });
    }
  });
});

Interactable.signals.on('new', function (_ref2) {
  var interactable = _ref2.interactable;

  interactable.events.getRect = function (element) {
    return interactable.getRect(element);
  };
});

Interactable.signals.on('set', function (_ref3) {
  var interactable = _ref3.interactable,
      options = _ref3.options;

  extend(interactable.events.options, pointerEvents.defaults);
  extend(interactable.events.options, options);
});

merge(Interactable.eventTypes, pointerEvents.types);

Interactable.prototype.pointerEvents = function (options) {
  extend(this.events.options, options);

  return this;
};

var __backCompatOption = Interactable.prototype._backCompatOption;

Interactable.prototype._backCompatOption = function (optionName, newValue) {
  var ret = __backCompatOption.call(this, optionName, newValue);

  if (ret === this) {
    this.events.options[optionName] = newValue;
  }

  return ret;
};

Interactable.settingsMethods.push('pointerEvents');

},{"../Interactable":4,"../scope":33,"../utils/arr":35,"../utils/extend":41,"../utils/is":46,"./base":30}],33:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var events = require('./utils/events');
var signals = require('./utils/Signals').new();

var _require = require('./utils/window'),
    getWindow = _require.getWindow;

var scope = {
  signals: signals,
  events: events,
  utils: utils,

  // main document
  document: require('./utils/domObjects').document,
  // all documents being listened to
  documents: [],

  addDocument: function addDocument(doc, win) {
    // do nothing if document is already known
    if (utils.contains(scope.documents, doc)) {
      return false;
    }

    win = win || getWindow(doc);

    scope.documents.push(doc);
    events.documents.push(doc);

    // don't add an unload event for the main document
    // so that the page may be cached in browser history
    if (doc !== scope.document) {
      events.add(win, 'unload', scope.onWindowUnload);
    }

    signals.fire('add-document', { doc: doc, win: win });
  },

  removeDocument: function removeDocument(doc, win) {
    var index = scope.documents.indexOf(doc);

    win = win || getWindow(doc);

    events.remove(win, 'unload', scope.onWindowUnload);

    scope.documents.splice(index, 1);
    events.documents.splice(index, 1);

    signals.fire('remove-document', { win: win, doc: doc });
  },

  onWindowUnload: function onWindowUnload() {
    scope.removeDocument(this.document, this);
  }
};

module.exports = scope;

},{"./utils":44,"./utils/Signals":34,"./utils/domObjects":38,"./utils/events":40,"./utils/window":52}],34:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Signals = function () {
  function Signals() {
    _classCallCheck(this, Signals);

    this.listeners = {
      // signalName: [listeners],
    };
  }

  Signals.prototype.on = function on(name, listener) {
    if (!this.listeners[name]) {
      this.listeners[name] = [listener];
      return;
    }

    this.listeners[name].push(listener);
  };

  Signals.prototype.off = function off(name, listener) {
    if (!this.listeners[name]) {
      return;
    }

    var index = this.listeners[name].indexOf(listener);

    if (index !== -1) {
      this.listeners[name].splice(index, 1);
    }
  };

  Signals.prototype.fire = function fire(name, arg) {
    var targetListeners = this.listeners[name];

    if (!targetListeners) {
      return;
    }

    for (var _i = 0; _i < targetListeners.length; _i++) {
      var _ref;

      _ref = targetListeners[_i];
      var listener = _ref;

      if (listener(arg, name) === false) {
        return;
      }
    }
  };

  return Signals;
}();

Signals.new = function () {
  return new Signals();
};

module.exports = Signals;

},{}],35:[function(require,module,exports){
"use strict";

function contains(array, target) {
  return array.indexOf(target) !== -1;
}

function merge(target, source) {
  for (var _i = 0; _i < source.length; _i++) {
    var _ref;

    _ref = source[_i];
    var item = _ref;

    target.push(item);
  }

  return target;
}

module.exports = {
  contains: contains,
  merge: merge
};

},{}],36:[function(require,module,exports){
'use strict';

var _require = require('./window'),
    window = _require.window;

var is = require('./is');
var domObjects = require('./domObjects');

var Element = domObjects.Element;
var navigator = window.navigator;

var browser = {
  // Does the browser support touch input?
  supportsTouch: !!('ontouchstart' in window || is.function(window.DocumentTouch) && domObjects.document instanceof window.DocumentTouch),

  // Does the browser support PointerEvents
  supportsPointerEvent: !!domObjects.PointerEvent,

  isIOS: /iP(hone|od|ad)/.test(navigator.platform),

  // scrolling doesn't change the result of getClientRects on iOS 7
  isIOS7: /iP(hone|od|ad)/.test(navigator.platform) && /OS 7[^\d]/.test(navigator.appVersion),

  isIe9: /MSIE 9/.test(navigator.userAgent),

  // prefix matchesSelector
  prefixedMatchesSelector: 'matches' in Element.prototype ? 'matches' : 'webkitMatchesSelector' in Element.prototype ? 'webkitMatchesSelector' : 'mozMatchesSelector' in Element.prototype ? 'mozMatchesSelector' : 'oMatchesSelector' in Element.prototype ? 'oMatchesSelector' : 'msMatchesSelector',

  pEventTypes: domObjects.PointerEvent ? domObjects.PointerEvent === window.MSPointerEvent ? {
    up: 'MSPointerUp',
    down: 'MSPointerDown',
    over: 'mouseover',
    out: 'mouseout',
    move: 'MSPointerMove',
    cancel: 'MSPointerCancel'
  } : {
    up: 'pointerup',
    down: 'pointerdown',
    over: 'pointerover',
    out: 'pointerout',
    move: 'pointermove',
    cancel: 'pointercancel'
  } : null,

  // because Webkit and Opera still use 'mousewheel' event type
  wheelEvent: 'onmousewheel' in domObjects.document ? 'mousewheel' : 'wheel'

};

// Opera Mobile must be handled differently
browser.isOperaMobile = navigator.appName === 'Opera' && browser.supportsTouch && navigator.userAgent.match('Presto');

module.exports = browser;

},{"./domObjects":38,"./is":46,"./window":52}],37:[function(require,module,exports){
'use strict';

var is = require('./is');

module.exports = function clone(source) {
  var dest = {};
  for (var prop in source) {
    if (is.plainObject(source[prop])) {
      dest[prop] = clone(source[prop]);
    } else {
      dest[prop] = source[prop];
    }
  }
  return dest;
};

},{"./is":46}],38:[function(require,module,exports){
'use strict';

var domObjects = {};
var win = require('./window').window;

function blank() {}

domObjects.document = win.document;
domObjects.DocumentFragment = win.DocumentFragment || blank;
domObjects.SVGElement = win.SVGElement || blank;
domObjects.SVGSVGElement = win.SVGSVGElement || blank;
domObjects.SVGElementInstance = win.SVGElementInstance || blank;
domObjects.Element = win.Element || blank;
domObjects.HTMLElement = win.HTMLElement || domObjects.Element;

domObjects.Event = win.Event;
domObjects.Touch = win.Touch || blank;
domObjects.PointerEvent = win.PointerEvent || win.MSPointerEvent;

module.exports = domObjects;

},{"./window":52}],39:[function(require,module,exports){
'use strict';

var win = require('./window');
var browser = require('./browser');
var is = require('./is');
var domObjects = require('./domObjects');

var domUtils = {
  nodeContains: function nodeContains(parent, child) {
    while (child) {
      if (child === parent) {
        return true;
      }

      child = child.parentNode;
    }

    return false;
  },

  closest: function closest(element, selector) {
    while (is.element(element)) {
      if (domUtils.matchesSelector(element, selector)) {
        return element;
      }

      element = domUtils.parentNode(element);
    }

    return null;
  },

  parentNode: function parentNode(node) {
    var parent = node.parentNode;

    if (is.docFrag(parent)) {
      // skip past #shado-root fragments
      while ((parent = parent.host) && is.docFrag(parent)) {
        continue;
      }

      return parent;
    }

    return parent;
  },

  matchesSelector: function matchesSelector(element, selector) {
    // remove /deep/ from selectors if shadowDOM polyfill is used
    if (win.window !== win.realWindow) {
      selector = selector.replace(/\/deep\//g, ' ');
    }

    return element[browser.prefixedMatchesSelector](selector);
  },

  // Test for the element that's "above" all other qualifiers
  indexOfDeepestElement: function indexOfDeepestElement(elements) {
    var deepestZoneParents = [];
    var dropzoneParents = [];
    var dropzone = void 0;
    var deepestZone = elements[0];
    var index = deepestZone ? 0 : -1;
    var parent = void 0;
    var child = void 0;
    var i = void 0;
    var n = void 0;

    for (i = 1; i < elements.length; i++) {
      dropzone = elements[i];

      // an element might belong to multiple selector dropzones
      if (!dropzone || dropzone === deepestZone) {
        continue;
      }

      if (!deepestZone) {
        deepestZone = dropzone;
        index = i;
        continue;
      }

      // check if the deepest or current are document.documentElement or document.rootElement
      // - if the current dropzone is, do nothing and continue
      if (dropzone.parentNode === dropzone.ownerDocument) {
        continue;
      }
      // - if deepest is, update with the current dropzone and continue to next
      else if (deepestZone.parentNode === dropzone.ownerDocument) {
          deepestZone = dropzone;
          index = i;
          continue;
        }

      if (!deepestZoneParents.length) {
        parent = deepestZone;
        while (parent.parentNode && parent.parentNode !== parent.ownerDocument) {
          deepestZoneParents.unshift(parent);
          parent = parent.parentNode;
        }
      }

      // if this element is an svg element and the current deepest is
      // an HTMLElement
      if (deepestZone instanceof domObjects.HTMLElement && dropzone instanceof domObjects.SVGElement && !(dropzone instanceof domObjects.SVGSVGElement)) {

        if (dropzone === deepestZone.parentNode) {
          continue;
        }

        parent = dropzone.ownerSVGElement;
      } else {
        parent = dropzone;
      }

      dropzoneParents = [];

      while (parent.parentNode !== parent.ownerDocument) {
        dropzoneParents.unshift(parent);
        parent = parent.parentNode;
      }

      n = 0;

      // get (position of last common ancestor) + 1
      while (dropzoneParents[n] && dropzoneParents[n] === deepestZoneParents[n]) {
        n++;
      }

      var parents = [dropzoneParents[n - 1], dropzoneParents[n], deepestZoneParents[n]];

      child = parents[0].lastChild;

      while (child) {
        if (child === parents[1]) {
          deepestZone = dropzone;
          index = i;
          deepestZoneParents = [];

          break;
        } else if (child === parents[2]) {
          break;
        }

        child = child.previousSibling;
      }
    }

    return index;
  },

  matchesUpTo: function matchesUpTo(element, selector, limit) {
    while (is.element(element)) {
      if (domUtils.matchesSelector(element, selector)) {
        return true;
      }

      element = domUtils.parentNode(element);

      if (element === limit) {
        return domUtils.matchesSelector(element, selector);
      }
    }

    return false;
  },

  getActualElement: function getActualElement(element) {
    return element instanceof domObjects.SVGElementInstance ? element.correspondingUseElement : element;
  },

  getScrollXY: function getScrollXY(relevantWindow) {
    relevantWindow = relevantWindow || win.window;
    return {
      x: relevantWindow.scrollX || relevantWindow.document.documentElement.scrollLeft,
      y: relevantWindow.scrollY || relevantWindow.document.documentElement.scrollTop
    };
  },

  getElementClientRect: function getElementClientRect(element) {
    var clientRect = element instanceof domObjects.SVGElement ? element.getBoundingClientRect() : element.getClientRects()[0];

    return clientRect && {
      left: clientRect.left,
      right: clientRect.right,
      top: clientRect.top,
      bottom: clientRect.bottom,
      width: clientRect.width || clientRect.right - clientRect.left,
      height: clientRect.height || clientRect.bottom - clientRect.top
    };
  },

  getElementRect: function getElementRect(element) {
    var clientRect = domUtils.getElementClientRect(element);

    if (!browser.isIOS7 && clientRect) {
      var scroll = domUtils.getScrollXY(win.getWindow(element));

      clientRect.left += scroll.x;
      clientRect.right += scroll.x;
      clientRect.top += scroll.y;
      clientRect.bottom += scroll.y;
    }

    return clientRect;
  },

  getPath: function getPath(element) {
    var path = [];

    while (element) {
      path.push(element);
      element = domUtils.parentNode(element);
    }

    return path;
  },

  trySelector: function trySelector(value) {
    if (!is.string(value)) {
      return false;
    }

    // an exception will be raised if it is invalid
    domObjects.document.querySelector(value);
    return true;
  }
};

module.exports = domUtils;

},{"./browser":36,"./domObjects":38,"./is":46,"./window":52}],40:[function(require,module,exports){
'use strict';

var is = require('./is');
var domUtils = require('./domUtils');
var pointerUtils = require('./pointerUtils');
var pExtend = require('./pointerExtend');

var _require = require('./window'),
    window = _require.window;

var _require2 = require('./arr'),
    contains = _require2.contains;

var elements = [];
var targets = [];

// {
//   type: {
//     selectors: ['selector', ...],
//     contexts : [document, ...],
//     listeners: [[listener, capture, passive], ...]
//   }
//  }
var delegatedEvents = {};
var documents = [];

var supportsOptions = function () {
  var supported = false;

  window.document.createElement('div').addEventListener('test', null, {
    get capture() {
      supported = true;
    }
  });

  return supported;
}();

function add(element, type, listener, optionalArg) {
  var options = getOptions(optionalArg);
  var elementIndex = elements.indexOf(element);
  var target = targets[elementIndex];

  if (!target) {
    target = {
      events: {},
      typeCount: 0
    };

    elementIndex = elements.push(element) - 1;
    targets.push(target);
  }

  if (!target.events[type]) {
    target.events[type] = [];
    target.typeCount++;
  }

  if (!contains(target.events[type], listener)) {
    element.addEventListener(type, listener, supportsOptions ? options : !!options.capture);
    target.events[type].push(listener);
  }
}

function remove(element, type, listener, optionalArg) {
  var options = getOptions(optionalArg);
  var elementIndex = elements.indexOf(element);
  var target = targets[elementIndex];

  if (!target || !target.events) {
    return;
  }

  if (type === 'all') {
    for (type in target.events) {
      if (target.events.hasOwnProperty(type)) {
        remove(element, type, 'all');
      }
    }
    return;
  }

  if (target.events[type]) {
    var len = target.events[type].length;

    if (listener === 'all') {
      for (var i = 0; i < len; i++) {
        remove(element, type, target.events[type][i], options);
      }
      return;
    } else {
      for (var _i = 0; _i < len; _i++) {
        if (target.events[type][_i] === listener) {
          element.removeEventListener('on' + type, listener, supportsOptions ? options : !!options.capture);
          target.events[type].splice(_i, 1);

          break;
        }
      }
    }

    if (target.events[type] && target.events[type].length === 0) {
      target.events[type] = null;
      target.typeCount--;
    }
  }

  if (!target.typeCount) {
    targets.splice(elementIndex, 1);
    elements.splice(elementIndex, 1);
  }
}

function addDelegate(selector, context, type, listener, optionalArg) {
  var options = getOptions(optionalArg);
  if (!delegatedEvents[type]) {
    delegatedEvents[type] = {
      selectors: [],
      contexts: [],
      listeners: []
    };

    // add delegate listener functions
    for (var _i2 = 0; _i2 < documents.length; _i2++) {
      var doc = documents[_i2];
      add(doc, type, delegateListener);
      add(doc, type, delegateUseCapture, true);
    }
  }

  var delegated = delegatedEvents[type];
  var index = void 0;

  for (index = delegated.selectors.length - 1; index >= 0; index--) {
    if (delegated.selectors[index] === selector && delegated.contexts[index] === context) {
      break;
    }
  }

  if (index === -1) {
    index = delegated.selectors.length;

    delegated.selectors.push(selector);
    delegated.contexts.push(context);
    delegated.listeners.push([]);
  }

  // keep listener and capture and passive flags
  delegated.listeners[index].push([listener, !!options.capture, options.passive]);
}

function removeDelegate(selector, context, type, listener, optionalArg) {
  var options = getOptions(optionalArg);
  var delegated = delegatedEvents[type];
  var matchFound = false;
  var index = void 0;

  if (!delegated) {
    return;
  }

  // count from last index of delegated to 0
  for (index = delegated.selectors.length - 1; index >= 0; index--) {
    // look for matching selector and context Node
    if (delegated.selectors[index] === selector && delegated.contexts[index] === context) {

      var listeners = delegated.listeners[index];

      // each item of the listeners array is an array: [function, capture, passive]
      for (var i = listeners.length - 1; i >= 0; i--) {
        var _listeners$i = listeners[i],
            fn = _listeners$i[0],
            capture = _listeners$i[1],
            passive = _listeners$i[2];

        // check if the listener functions and capture and passive flags match

        if (fn === listener && capture === !!options.capture && passive === options.passive) {
          // remove the listener from the array of listeners
          listeners.splice(i, 1);

          // if all listeners for this interactable have been removed
          // remove the interactable from the delegated arrays
          if (!listeners.length) {
            delegated.selectors.splice(index, 1);
            delegated.contexts.splice(index, 1);
            delegated.listeners.splice(index, 1);

            // remove delegate function from context
            remove(context, type, delegateListener);
            remove(context, type, delegateUseCapture, true);

            // remove the arrays if they are empty
            if (!delegated.selectors.length) {
              delegatedEvents[type] = null;
            }
          }

          // only remove one listener
          matchFound = true;
          break;
        }
      }

      if (matchFound) {
        break;
      }
    }
  }
}

// bound to the interactable context when a DOM event
// listener is added to a selector interactable
function delegateListener(event, optionalArg) {
  var options = getOptions(optionalArg);
  var fakeEvent = {};
  var delegated = delegatedEvents[event.type];

  var _pointerUtils$getEven = pointerUtils.getEventTargets(event),
      eventTarget = _pointerUtils$getEven[0];

  var element = eventTarget;

  // duplicate the event so that currentTarget can be changed
  pExtend(fakeEvent, event);

  fakeEvent.originalEvent = event;
  fakeEvent.preventDefault = preventOriginalDefault;

  // climb up document tree looking for selector matches
  while (is.element(element)) {
    for (var i = 0; i < delegated.selectors.length; i++) {
      var selector = delegated.selectors[i];
      var context = delegated.contexts[i];

      if (domUtils.matchesSelector(element, selector) && domUtils.nodeContains(context, eventTarget) && domUtils.nodeContains(context, element)) {

        var listeners = delegated.listeners[i];

        fakeEvent.currentTarget = element;

        for (var j = 0; j < listeners.length; j++) {
          var _listeners$j = listeners[j],
              fn = _listeners$j[0],
              capture = _listeners$j[1],
              passive = _listeners$j[2];


          if (capture === !!options.capture && passive === options.passive) {
            fn(fakeEvent);
          }
        }
      }
    }

    element = domUtils.parentNode(element);
  }
}

function delegateUseCapture(event) {
  return delegateListener.call(this, event, true);
}

function preventOriginalDefault() {
  this.originalEvent.preventDefault();
}

function getOptions(param) {
  return is.object(param) ? param : { capture: param };
}

module.exports = {
  add: add,
  remove: remove,

  addDelegate: addDelegate,
  removeDelegate: removeDelegate,

  delegateListener: delegateListener,
  delegateUseCapture: delegateUseCapture,
  delegatedEvents: delegatedEvents,
  documents: documents,

  supportsOptions: supportsOptions,

  _elements: elements,
  _targets: targets
};

},{"./arr":35,"./domUtils":39,"./is":46,"./pointerExtend":48,"./pointerUtils":49,"./window":52}],41:[function(require,module,exports){
"use strict";

module.exports = function extend(dest, source) {
  for (var prop in source) {
    dest[prop] = source[prop];
  }
  return dest;
};

},{}],42:[function(require,module,exports){
'use strict';

var _require = require('./rect'),
    resolveRectLike = _require.resolveRectLike,
    rectToXY = _require.rectToXY;

module.exports = function (target, element, action) {
  var actionOptions = target.options[action];
  var actionOrigin = actionOptions && actionOptions.origin;
  var origin = actionOrigin || target.options.origin;

  var originRect = resolveRectLike(origin, target, element, [target && element]);

  return rectToXY(originRect) || { x: 0, y: 0 };
};

},{"./rect":51}],43:[function(require,module,exports){
"use strict";

module.exports = function (x, y) {
  return Math.sqrt(x * x + y * y);
};

},{}],44:[function(require,module,exports){
'use strict';

var extend = require('./extend');
var win = require('./window');

var utils = {
  warnOnce: function warnOnce(method, message) {
    var warned = false;

    return function () {
      if (!warned) {
        win.window.console.warn(message);
        warned = true;
      }

      return method.apply(this, arguments);
    };
  },

  // http://stackoverflow.com/a/5634528/2280888
  _getQBezierValue: function _getQBezierValue(t, p1, p2, p3) {
    var iT = 1 - t;
    return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
  },

  getQuadraticCurvePoint: function getQuadraticCurvePoint(startX, startY, cpX, cpY, endX, endY, position) {
    return {
      x: utils._getQBezierValue(position, startX, cpX, endX),
      y: utils._getQBezierValue(position, startY, cpY, endY)
    };
  },

  // http://gizma.com/easing/
  easeOutQuad: function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  },

  copyAction: function copyAction(dest, src) {
    dest.name = src.name;
    dest.axis = src.axis;
    dest.edges = src.edges;

    return dest;
  },

  is: require('./is'),
  extend: extend,
  hypot: require('./hypot'),
  getOriginXY: require('./getOriginXY')
};

extend(utils, require('./arr'));
extend(utils, require('./domUtils'));
extend(utils, require('./pointerUtils'));
extend(utils, require('./rect'));

module.exports = utils;

},{"./arr":35,"./domUtils":39,"./extend":41,"./getOriginXY":42,"./hypot":43,"./is":46,"./pointerUtils":49,"./rect":51,"./window":52}],45:[function(require,module,exports){
'use strict';

var scope = require('../scope');
var utils = require('./index');

var finder = {
  methodOrder: ['simulationResume', 'mouseOrPen', 'hasPointer', 'idle'],

  search: function search(pointer, eventType, eventTarget) {
    var pointerType = utils.getPointerType(pointer);
    var pointerId = utils.getPointerId(pointer);
    var details = { pointer: pointer, pointerId: pointerId, pointerType: pointerType, eventType: eventType, eventTarget: eventTarget };

    for (var _i = 0; _i < finder.methodOrder.length; _i++) {
      var _ref;

      _ref = finder.methodOrder[_i];
      var method = _ref;

      var interaction = finder[method](details);

      if (interaction) {
        return interaction;
      }
    }
  },

  // try to resume simulation with a new pointer
  simulationResume: function simulationResume(_ref2) {
    var pointerType = _ref2.pointerType,
        eventType = _ref2.eventType,
        eventTarget = _ref2.eventTarget;

    if (!/down|start/i.test(eventType)) {
      return null;
    }

    for (var _i2 = 0; _i2 < scope.interactions.length; _i2++) {
      var _ref3;

      _ref3 = scope.interactions[_i2];
      var interaction = _ref3;

      var element = eventTarget;

      if (interaction.simulation && interaction.simulation.allowResume && interaction.pointerType === pointerType) {
        while (element) {
          // if the element is the interaction element
          if (element === interaction.element) {
            return interaction;
          }
          element = utils.parentNode(element);
        }
      }
    }

    return null;
  },

  // if it's a mouse or pen interaction
  mouseOrPen: function mouseOrPen(_ref4) {
    var pointerId = _ref4.pointerId,
        pointerType = _ref4.pointerType,
        eventType = _ref4.eventType;

    if (pointerType !== 'mouse' && pointerType !== 'pen') {
      return null;
    }

    var firstNonActive = void 0;

    for (var _i3 = 0; _i3 < scope.interactions.length; _i3++) {
      var _ref5;

      _ref5 = scope.interactions[_i3];
      var interaction = _ref5;

      if (interaction.pointerType === pointerType) {
        // if it's a down event, skip interactions with running simulations
        if (interaction.simulation && !utils.contains(interaction.pointerIds, pointerId)) {
          continue;
        }

        // if the interaction is active, return it immediately
        if (interaction.interacting()) {
          return interaction;
        }
        // otherwise save it and look for another active interaction
        else if (!firstNonActive) {
            firstNonActive = interaction;
          }
      }
    }

    // if no active mouse interaction was found use the first inactive mouse
    // interaction
    if (firstNonActive) {
      return firstNonActive;
    }

    // find any mouse or pen interaction.
    // ignore the interaction if the eventType is a *down, and a simulation
    // is active
    for (var _i4 = 0; _i4 < scope.interactions.length; _i4++) {
      var _ref6;

      _ref6 = scope.interactions[_i4];
      var _interaction = _ref6;

      if (_interaction.pointerType === pointerType && !(/down/i.test(eventType) && _interaction.simulation)) {
        return _interaction;
      }
    }

    return null;
  },

  // get interaction that has this pointer
  hasPointer: function hasPointer(_ref7) {
    var pointerId = _ref7.pointerId;

    for (var _i5 = 0; _i5 < scope.interactions.length; _i5++) {
      var _ref8;

      _ref8 = scope.interactions[_i5];
      var interaction = _ref8;

      if (utils.contains(interaction.pointerIds, pointerId)) {
        return interaction;
      }
    }
  },

  // get first idle interaction with a matching pointerType
  idle: function idle(_ref9) {
    var pointerType = _ref9.pointerType;

    for (var _i6 = 0; _i6 < scope.interactions.length; _i6++) {
      var _ref10;

      _ref10 = scope.interactions[_i6];
      var interaction = _ref10;

      // if there's already a pointer held down
      if (interaction.pointerIds.length === 1) {
        var target = interaction.target;
        // don't add this pointer if there is a target interactable and it
        // isn't gesturable
        if (target && !target.options.gesture.enabled) {
          continue;
        }
      }
      // maximum of 2 pointers per interaction
      else if (interaction.pointerIds.length >= 2) {
          continue;
        }

      if (!interaction.interacting() && pointerType === interaction.pointerType) {
        return interaction;
      }
    }

    return null;
  }
};

module.exports = finder;

},{"../scope":33,"./index":44}],46:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var win = require('./window');
var isWindow = require('./isWindow');

var is = {
  array: function array() {},

  window: function window(thing) {
    return thing === win.window || isWindow(thing);
  },

  docFrag: function docFrag(thing) {
    return is.object(thing) && thing.nodeType === 11;
  },

  object: function object(thing) {
    return !!thing && (typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === 'object';
  },

  function: function _function(thing) {
    return typeof thing === 'function';
  },

  number: function number(thing) {
    return typeof thing === 'number';
  },

  bool: function bool(thing) {
    return typeof thing === 'boolean';
  },

  string: function string(thing) {
    return typeof thing === 'string';
  },

  element: function element(thing) {
    if (!thing || (typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) !== 'object') {
      return false;
    }

    var _window = win.getWindow(thing) || win.window;

    return (/object|function/.test(_typeof(_window.Element)) ? thing instanceof _window.Element //DOM2
      : thing.nodeType === 1 && typeof thing.nodeName === 'string'
    );
  },

  plainObject: function plainObject(thing) {
    return is.object(thing) && thing.constructor.name === 'Object';
  }
};

is.array = function (thing) {
  return is.object(thing) && typeof thing.length !== 'undefined' && is.function(thing.splice);
};

module.exports = is;

},{"./isWindow":47,"./window":52}],47:[function(require,module,exports){
"use strict";

module.exports = function (thing) {
  return !!(thing && thing.Window) && thing instanceof thing.Window;
};

},{}],48:[function(require,module,exports){
'use strict';

function pointerExtend(dest, source) {
  for (var prop in source) {
    var prefixedPropREs = module.exports.prefixedPropREs;
    var deprecated = false;

    // skip deprecated prefixed properties
    for (var vendor in prefixedPropREs) {
      if (prop.indexOf(vendor) === 0 && prefixedPropREs[vendor].test(prop)) {
        deprecated = true;
        break;
      }
    }

    if (!deprecated && typeof source[prop] !== 'function') {
      dest[prop] = source[prop];
    }
  }
  return dest;
}

pointerExtend.prefixedPropREs = {
  webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/
};

module.exports = pointerExtend;

},{}],49:[function(require,module,exports){
'use strict';

var hypot = require('./hypot');
var browser = require('./browser');
var dom = require('./domObjects');
var domUtils = require('./domUtils');
var domObjects = require('./domObjects');
var is = require('./is');
var pointerExtend = require('./pointerExtend');

var pointerUtils = {
  copyCoords: function copyCoords(dest, src) {
    dest.page = dest.page || {};
    dest.page.x = src.page.x;
    dest.page.y = src.page.y;

    dest.client = dest.client || {};
    dest.client.x = src.client.x;
    dest.client.y = src.client.y;

    dest.timeStamp = src.timeStamp;
  },

  setCoordDeltas: function setCoordDeltas(targetObj, prev, cur) {
    targetObj.page.x = cur.page.x - prev.page.x;
    targetObj.page.y = cur.page.y - prev.page.y;
    targetObj.client.x = cur.client.x - prev.client.x;
    targetObj.client.y = cur.client.y - prev.client.y;
    targetObj.timeStamp = cur.timeStamp - prev.timeStamp;

    // set pointer velocity
    var dt = Math.max(targetObj.timeStamp / 1000, 0.001);

    targetObj.page.speed = hypot(targetObj.page.x, targetObj.page.y) / dt;
    targetObj.page.vx = targetObj.page.x / dt;
    targetObj.page.vy = targetObj.page.y / dt;

    targetObj.client.speed = hypot(targetObj.client.x, targetObj.page.y) / dt;
    targetObj.client.vx = targetObj.client.x / dt;
    targetObj.client.vy = targetObj.client.y / dt;
  },

  isNativePointer: function isNativePointer(pointer) {
    return pointer instanceof dom.Event || pointer instanceof dom.Touch;
  },

  // Get specified X/Y coords for mouse or event.touches[0]
  getXY: function getXY(type, pointer, xy) {
    xy = xy || {};
    type = type || 'page';

    xy.x = pointer[type + 'X'];
    xy.y = pointer[type + 'Y'];

    return xy;
  },

  getPageXY: function getPageXY(pointer, page) {
    page = page || {};

    // Opera Mobile handles the viewport and scrolling oddly
    if (browser.isOperaMobile && pointerUtils.isNativePointer(pointer)) {
      pointerUtils.getXY('screen', pointer, page);

      page.x += window.scrollX;
      page.y += window.scrollY;
    } else {
      pointerUtils.getXY('page', pointer, page);
    }

    return page;
  },

  getClientXY: function getClientXY(pointer, client) {
    client = client || {};

    if (browser.isOperaMobile && pointerUtils.isNativePointer(pointer)) {
      // Opera Mobile handles the viewport and scrolling oddly
      pointerUtils.getXY('screen', pointer, client);
    } else {
      pointerUtils.getXY('client', pointer, client);
    }

    return client;
  },

  getPointerId: function getPointerId(pointer) {
    return is.number(pointer.pointerId) ? pointer.pointerId : pointer.identifier;
  },

  setCoords: function setCoords(targetObj, pointers, timeStamp) {
    var pointer = pointers.length > 1 ? pointerUtils.pointerAverage(pointers) : pointers[0];

    var tmpXY = {};

    pointerUtils.getPageXY(pointer, tmpXY);
    targetObj.page.x = tmpXY.x;
    targetObj.page.y = tmpXY.y;

    pointerUtils.getClientXY(pointer, tmpXY);
    targetObj.client.x = tmpXY.x;
    targetObj.client.y = tmpXY.y;

    targetObj.timeStamp = is.number(timeStamp) ? timeStamp : new Date().getTime();
  },

  pointerExtend: pointerExtend,

  getTouchPair: function getTouchPair(event) {
    var touches = [];

    // array of touches is supplied
    if (is.array(event)) {
      touches[0] = event[0];
      touches[1] = event[1];
    }
    // an event
    else {
        if (event.type === 'touchend') {
          if (event.touches.length === 1) {
            touches[0] = event.touches[0];
            touches[1] = event.changedTouches[0];
          } else if (event.touches.length === 0) {
            touches[0] = event.changedTouches[0];
            touches[1] = event.changedTouches[1];
          }
        } else {
          touches[0] = event.touches[0];
          touches[1] = event.touches[1];
        }
      }

    return touches;
  },

  pointerAverage: function pointerAverage(pointers) {
    var average = {
      pageX: 0,
      pageY: 0,
      clientX: 0,
      clientY: 0,
      screenX: 0,
      screenY: 0
    };

    for (var _i = 0; _i < pointers.length; _i++) {
      var _ref;

      _ref = pointers[_i];
      var pointer = _ref;

      for (var _prop in average) {
        average[_prop] += pointer[_prop];
      }
    }
    for (var prop in average) {
      average[prop] /= pointers.length;
    }

    return average;
  },

  touchBBox: function touchBBox(event) {
    if (!event.length && !(event.touches && event.touches.length > 1)) {
      return;
    }

    var touches = pointerUtils.getTouchPair(event);
    var minX = Math.min(touches[0].pageX, touches[1].pageX);
    var minY = Math.min(touches[0].pageY, touches[1].pageY);
    var maxX = Math.max(touches[0].pageX, touches[1].pageX);
    var maxY = Math.max(touches[0].pageY, touches[1].pageY);

    return {
      x: minX,
      y: minY,
      left: minX,
      top: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  },

  touchDistance: function touchDistance(event, deltaSource) {
    var sourceX = deltaSource + 'X';
    var sourceY = deltaSource + 'Y';
    var touches = pointerUtils.getTouchPair(event);

    var dx = touches[0][sourceX] - touches[1][sourceX];
    var dy = touches[0][sourceY] - touches[1][sourceY];

    return hypot(dx, dy);
  },

  touchAngle: function touchAngle(event, prevAngle, deltaSource) {
    var sourceX = deltaSource + 'X';
    var sourceY = deltaSource + 'Y';
    var touches = pointerUtils.getTouchPair(event);
    var dx = touches[1][sourceX] - touches[0][sourceX];
    var dy = touches[1][sourceY] - touches[0][sourceY];
    var angle = 180 * Math.atan2(dy, dx) / Math.PI;

    return angle;
  },

  getPointerType: function getPointerType(pointer) {
    return is.string(pointer.pointerType) ? pointer.pointerType : is.number(pointer.pointerType) ? [undefined, undefined, 'touch', 'pen', 'mouse'][pointer.pointerType]
    // if the PointerEvent API isn't available, then the "pointer" must
    // be either a MouseEvent, TouchEvent, or Touch object
    : /touch/.test(pointer.type) || pointer instanceof domObjects.Touch ? 'touch' : 'mouse';
  },

  // [ event.target, event.currentTarget ]
  getEventTargets: function getEventTargets(event) {
    var path = is.function(event.composedPath) ? event.composedPath() : event.path;

    return [domUtils.getActualElement(path ? path[0] : event.target), domUtils.getActualElement(event.currentTarget)];
  }
};

module.exports = pointerUtils;

},{"./browser":36,"./domObjects":38,"./domUtils":39,"./hypot":43,"./is":46,"./pointerExtend":48}],50:[function(require,module,exports){
'use strict';

var _require = require('./window'),
    window = _require.window;

var vendors = ['ms', 'moz', 'webkit', 'o'];
var lastTime = 0;
var request = void 0;
var cancel = void 0;

for (var x = 0; x < vendors.length && !window.requestAnimationFrame; x++) {
  request = window[vendors[x] + 'RequestAnimationFrame'];
  cancel = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
}

if (!request) {
  request = function request(callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);

    lastTime = currTime + timeToCall;
    return id;
  };
}

if (!cancel) {
  cancel = function cancel(id) {
    clearTimeout(id);
  };
}

module.exports = {
  request: request,
  cancel: cancel
};

},{"./window":52}],51:[function(require,module,exports){
'use strict';

var extend = require('./extend');
var is = require('./is');

var _require = require('./domUtils'),
    closest = _require.closest,
    parentNode = _require.parentNode,
    getElementRect = _require.getElementRect;

var rectUtils = {
  getStringOptionResult: function getStringOptionResult(value, interactable, element) {
    if (!is.string(value)) {
      return null;
    }

    if (value === 'parent') {
      value = parentNode(element);
    } else if (value === 'self') {
      value = interactable.getRect(element);
    } else {
      value = closest(element, value);
    }

    return value;
  },

  resolveRectLike: function resolveRectLike(value, interactable, element, functionArgs) {
    value = rectUtils.getStringOptionResult(value, interactable, element) || value;

    if (is.function(value)) {
      value = value.apply(null, functionArgs);
    }

    if (is.element(value)) {
      value = getElementRect(value);
    }

    return value;
  },

  rectToXY: function rectToXY(rect) {
    return rect && {
      x: 'x' in rect ? rect.x : rect.left,
      y: 'y' in rect ? rect.y : rect.top
    };
  },

  xywhToTlbr: function xywhToTlbr(rect) {
    if (rect && !('left' in rect && 'top' in rect)) {
      rect = extend({}, rect);

      rect.left = rect.x || 0;
      rect.top = rect.y || 0;
      rect.right = rect.right || rect.left + rect.width;
      rect.bottom = rect.bottom || rect.top + rect.height;
    }

    return rect;
  },

  tlbrToXywh: function tlbrToXywh(rect) {
    if (rect && !('x' in rect && 'y' in rect)) {
      rect = extend({}, rect);

      rect.x = rect.left || 0;
      rect.top = rect.top || 0;
      rect.width = rect.width || rect.right - rect.x;
      rect.height = rect.height || rect.bottom - rect.y;
    }

    return rect;
  }
};

module.exports = rectUtils;

},{"./domUtils":39,"./extend":41,"./is":46}],52:[function(require,module,exports){
'use strict';

var win = module.exports;
var isWindow = require('./isWindow');

function init(window) {
  // get wrapped window if using Shadow DOM polyfill

  win.realWindow = window;

  // create a TextNode
  var el = window.document.createTextNode('');

  // check if it's wrapped by a polyfill
  if (el.ownerDocument !== window.document && typeof window.wrap === 'function' && window.wrap(el) === el) {
    // use wrapped window
    window = window.wrap(window);
  }

  win.window = window;
}

if (typeof window === 'undefined') {
  win.window = undefined;
  win.realWindow = undefined;
} else {
  init(window);
}

win.getWindow = function getWindow(node) {
  if (isWindow(node)) {
    return node;
  }

  var rootNode = node.ownerDocument || node;

  return rootNode.defaultView || rootNode.parentWindow || win.window;
};

win.init = init;

},{"./isWindow":47}]},{},[1])(1)
});




/***/ }),

/***/ "../package.json":
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/*! exports provided: name, version, description, main, directories, scripts, repository, author, license, bugs, homepage, devDependencies, engines, jest, eslintConfig, standard, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"alpheios-embedded","version":"0.7.0","description":"Alpheios Embedded Library","main":"dist/alpheios-embedded.js","directories":{"doc":"doc"},"scripts":{"test":"eslint --fix src/**/*.js && jest --coverage && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","build":"eslint --fix src/**/*.js && node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs all all vue","build-prod":"eslint --fix src/**/*.js && node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs all production vue","build-dev":"eslint --fix src/**/*.js && node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs all development vue","auth0-env-update":"node --experimental-modules ./node_modules/alpheios-node-build/dist/files.mjs replace --s=../protected-config/auth0/prod --t=dist/auth0 --f=env-embed.js","auth0-env-dev-update":"node --experimental-modules ./node_modules/alpheios-node-build/dist/files.mjs replace --s=../protected-config/auth0/dev --t=dist/auth0 --f=env-embed.js","lint":"eslint --fix src/**/*.js","dev":"npm run build-dev && http-server -c-1 -p 8888 & onchange src -- npm run build-dev"},"repository":{"type":"git","url":"git+https://github.com/alpheios-project/wordsvc.git"},"author":"The Alpheios Project, Ltd.","license":"ISC","bugs":{"url":"https://github.com/alpheios-project/wordsvc/issues"},"homepage":"https://github.com/alpheios-project/wordsvc#readme","devDependencies":{"alpheios-client-adapters":"github:alpheios-project/client-adapters","alpheios-components":"file:../components","alpheios-data-models":"github:alpheios-project/data-models","alpheios-experience":"github:alpheios-project/experience","alpheios-inflection-tables":"git://github.com/alpheios-project/inflection-tables.git","alpheios-node-build":"github:alpheios-project/node-build","alpheios-res-client":"github:alpheios-project/res-client","coveralls":"^3.0.2","css-loader":"^2.1.0","eslint":"^5.12.1","eslint-config-standard":"^12.0.0","eslint-plugin-import":"^2.16.0","eslint-plugin-node":"^8.0.1","eslint-plugin-promise":"^4.0.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^5.1.0","html-loader":"^0.5.5","html-loader-jest":"^0.2.1","http-server":"^0.11.1","interactjs":"^1.3.4","intl-messageformat":"^2.2.0","jest":"^24.0.0","jest-fetch-mock":"2.1.0","onchange":"^5.2.0","raw-loader":"^1.0.0","sass-loader":"^7.1.0","source-map-loader":"^0.2.4","style-loader":"^0.23.1","url-loader":"^1.1.2","vue-loader":"^15.6.2","vue-style-loader":"^4.1.2","vue-svg-loader":"^0.11.0","webpack-dev-server":"^3.1.14"},"engines":{"node":">= 9.10.1","npm":">= 5.6.0"},"jest":{"verbose":true,"transform":{"^.+\\.htmlf$":"html-loader-jest","^.+\\.jsx?$":"babel-jest"},"transformIgnorePatterns":["node_modules/alpheios-components/"]},"eslintConfig":{"env":{"browser":true,"node":true},"parserOptions":{"ecmaVersion":2018,"sourceType":"module"}},"standard":{"ignore":["**/dist","**/support"]},"dependencies":{"node-sass":"^4.11.0"}};

/***/ }),

/***/ "./embedded.js":
/*!*********************!*\
  !*** ./embedded.js ***!
  \*********************/
/*! exports provided: Embedded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Embedded", function() { return Embedded; });
/* harmony import */ var _node_modules_alpheios_components_dist_style_style_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/alpheios-components/dist/style/style.min.css */ "../../components/dist/style/style.min.css");
/* harmony import */ var _node_modules_alpheios_components_dist_style_style_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_alpheios_components_dist_style_style_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alpheios_data_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alpheios-data-models */ "../node_modules/alpheios-data-models/dist/alpheios-data-models.js");
/* harmony import */ var alpheios_data_models__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alpheios_data_models__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alpheios_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alpheios-components */ "../../components/dist/alpheios-components.js");
/* harmony import */ var alpheios_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alpheios_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./state.js");
/* harmony import */ var _template_htmlf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.htmlf */ "./template.htmlf");
/* harmony import */ var _template_htmlf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_template_htmlf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! interactjs */ "../node_modules/interactjs/dist/interact.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../package.json */ "../package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "../package.json", 1);
/* harmony import */ var _lib_app_authenticator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/app-authenticator */ "./lib/app-authenticator.js");
/* eslint-env jest */
/* global Event */
 // eslint-disable-line








/*
A UI controller's builder function customized for webextension
 */
const createUiController = (state, options) => {
  let uiController = new alpheios_components__WEBPACK_IMPORTED_MODULE_2__["UIController"](state, options)

  uiController.siteOptionsDefaults = []

  // Register data modules
  uiController.registerDataModule(alpheios_components__WEBPACK_IMPORTED_MODULE_2__["L10nModule"], alpheios_components__WEBPACK_IMPORTED_MODULE_2__["Locales"].en_US, alpheios_components__WEBPACK_IMPORTED_MODULE_2__["Locales"].bundleArr())
  if (typeof auth0Env !== 'undefined') {
    // Register an authentication module only with authentication environment is loaded
    uiController.registerDataModule(alpheios_components__WEBPACK_IMPORTED_MODULE_2__["AuthModule"], new _lib_app_authenticator__WEBPACK_IMPORTED_MODULE_7__["default"]())
  }

  // Register UI modules
  uiController.registerUiModule(alpheios_components__WEBPACK_IMPORTED_MODULE_2__["PanelModule"], {
    mountPoint: '#alpheios-panel-embedded'
  })
  uiController.registerUiModule(alpheios_components__WEBPACK_IMPORTED_MODULE_2__["PopupModule"], {
    mountPoint: '#alpheios-popup-embedded'
  })

  // Creates on configures an event listener
  let eventController = new alpheios_components__WEBPACK_IMPORTED_MODULE_2__["UIEventController"]()
  switch (uiController.options.textQueryTrigger) {
    case 'dblClick':
      eventController.registerListener('GetSelectedText', uiController.options.textQuerySelector, uiController.getSelectedText.bind(uiController), alpheios_components__WEBPACK_IMPORTED_MODULE_2__["MouseDblClick"])
      break
    case 'longTap':
      eventController.registerListener('GetSelectedText', uiController.options.textQuerySelector, uiController.getSelectedText.bind(uiController), alpheios_components__WEBPACK_IMPORTED_MODULE_2__["LongTap"])
      break
    default:
      eventController.registerListener(
        'GetSelectedText', uiController.options.textQuerySelector, uiController.getSelectedText.bind(uiController), alpheios_components__WEBPACK_IMPORTED_MODULE_2__["GenericEvt"], uiController.options.textQueryTrigger
      )
  }

  eventController.registerListener('HandleEscapeKey', document, uiController.handleEscapeKey.bind(uiController), alpheios_components__WEBPACK_IMPORTED_MODULE_2__["GenericEvt"], 'keydown')
  eventController.registerListener('AlpheiosPageLoad', 'body', uiController.updateAnnotations.bind(uiController), alpheios_components__WEBPACK_IMPORTED_MODULE_2__["GenericEvt"], 'Alpheios_Page_Load')

  // Attaches an event controller to a UIController instance
  uiController.evc = eventController

  // Subscribe to LexicalQuery events
  alpheios_components__WEBPACK_IMPORTED_MODULE_2__["LexicalQuery"].evt.LEXICAL_QUERY_COMPLETE.sub(uiController.onLexicalQueryComplete.bind(uiController))
  alpheios_components__WEBPACK_IMPORTED_MODULE_2__["LexicalQuery"].evt.MORPH_DATA_READY.sub(uiController.onMorphDataReady.bind(uiController))
  alpheios_components__WEBPACK_IMPORTED_MODULE_2__["LexicalQuery"].evt.MORPH_DATA_NOTAVAILABLE.sub(uiController.onMorphDataNotFound.bind(uiController))
  alpheios_components__WEBPACK_IMPORTED_MODULE_2__["LexicalQuery"].evt.HOMONYM_READY.sub(uiController.onHomonymReady.bind(uiController))
  alpheios_components__WEBPACK_IMPORTED_MODULE_2__["LexicalQuery"].evt.LEMMA_TRANSL_READY.sub(uiController.updateTranslations.bind(uiController))
  alpheios_components__WEBPACK_IMPORTED_MODULE_2__["LexicalQuery"].evt.WORD_USAGE_EXAMPLES_READY.sub(uiController.onWordUsageExamplesReady.bind(uiController))
  alpheios_components__WEBPACK_IMPORTED_MODULE_2__["LexicalQuery"].evt.DEFS_READY.sub(uiController.onDefinitionsReady.bind(uiController))
  alpheios_components__WEBPACK_IMPORTED_MODULE_2__["LexicalQuery"].evt.DEFS_NOT_FOUND.sub(uiController.onDefinitionsNotFound.bind(uiController))

  // Subscribe to ResourceQuery events
  alpheios_components__WEBPACK_IMPORTED_MODULE_2__["ResourceQuery"].evt.RESOURCE_QUERY_COMPLETE.sub(uiController.onResourceQueryComplete.bind(uiController))
  alpheios_components__WEBPACK_IMPORTED_MODULE_2__["ResourceQuery"].evt.GRAMMAR_AVAILABLE.sub(uiController.onGrammarAvailable.bind(uiController))
  alpheios_components__WEBPACK_IMPORTED_MODULE_2__["ResourceQuery"].evt.GRAMMAR_NOT_FOUND.sub(uiController.onGrammarNotFound.bind(uiController))

  // Subscribe to AnnotationQuery events
  alpheios_components__WEBPACK_IMPORTED_MODULE_2__["AnnotationQuery"].evt.ANNOTATIONS_AVAILABLE.sub(uiController.onAnnotationsAvailable.bind(uiController))

  return uiController
}

/**
 * Encapsulation of Alpheios functionality which can be embedded in a webpage
 */
class Embedded {
  /**
   * @constructor
   * @param {Object} arguments - object with the following properties:
   *     clientId: a string identifying the embedding client or site. Required.
   *     documentObject: the parent document. Default: window.document
   *     enabledSelector: a CSS Selector string identifying the page elements for which Alpheios should be activated
   *                      Default: ".alpheios-enabled"
   *     disabledSelector: a CSS Selector string identifying the page elements for which Alpheios should be deactivated
   *                       Default: [data-alpheios-ignore="all"]
   *     enabledClass: a CSS class to apply to alpheios enabled elements
   *                   Default: ""
   *     disabledClass: a CSS class to apply to alpheios disabled elements
   *                    Default: ""
   *     eventTriggers: a comma-separated list of DOM events to which Alpheios functionality should be attached
   *                    Default: "dblclick"
   *     triggerPreCallback: a callback function which is called when the trigger event handler is invoked, prior to initiating
   *                         Alpheios functionality. It should return true to proceed with lookup or false to abort.
   *                         Default: no-op, returns true
   *     mobileRedirectUrl: a URL to which to direct users if they use a mobile device to access a page which has Alpheios embedded
   */
  constructor ({
    clientId = null,
    documentObject = document,
    mobileRedirectUrl = null,
    enabledSelector = '.alpheios-enabled',
    disabledSelector = '',
    enabledClass = '',
    disabledClass = '',
    triggerEvents = 'dblclick',
    triggerPreCallback = (evt) => { return true } // Not used at the moment but can be set as a filter for `this.ui.getSelectedText()` calls
    } = {}) {
    this.clientId = clientId

    if (this.clientId === null) {
      throw new Error('Please identify the site.')
    }
    // TODO at some point in the future we may add authentication of
    // clientId
    this.doc = documentObject
    this.state = new _state__WEBPACK_IMPORTED_MODULE_3__["default"]()
    this.mobileRedirectUrl = mobileRedirectUrl
    this.enabledSelector = enabledSelector
    this.disabledSelector = disabledSelector
    this.enabledClass = enabledClass
    this.disabledClass = disabledClass
    this.triggerEvents = triggerEvents
    this.triggerPreCallback = triggerPreCallback

    let pckg
    try {
      pckg = _package_json__WEBPACK_IMPORTED_MODULE_6__
    } catch (e) {
      throw new Error(`Cannot parse package.json, its format is probably incorrect`)
    }

    // Set an initial UI Controller state for activation
    // this.state.setPanelClosed() // A default state of the panel is CLOSED
    this.state.tab = 'info' // A default tab is "info"

    this.ui = createUiController(this.state, {
      storageAdapter: alpheios_components__WEBPACK_IMPORTED_MODULE_2__["LocalStorageArea"],
      textQueryTrigger: this.triggerEvents,
      textQuerySelector: this.enabledSelector,
      app: { version: pckg.version, name: pckg.description },
      template: { html: _template_htmlf__WEBPACK_IMPORTED_MODULE_4___default.a }
    })
  }

  notifyExtension () {
    this.doc.body.dispatchEvent(new Event('Alpheios_Embedded_Response'))
  }

  async activate () {
    try {
      /**
       * Notify extension that an embedded lib is present.
       * We need to do this right after an activation.
       * If webextension is loaded sooner than the embedded library
       * than the extension will have no information about
       * the embedded library presence unless explicitly notified by us.
       */
      this.notifyExtension()

      // await this.ui.init() // Activate will call `init()` if has not been initialized previously
      await this.ui.activate()

      console.log('UIController has been activated')
      // Set a body attribute so the content scrip will know if embedded library is active on a page
      this.doc.body.setAttribute('alpheios-embed-lib-status', 'active')
      this.doc.body.addEventListener('Alpheios_Embedded_Check', event => { this.notifyExtension(event) })

    } catch (error) {
      console.error(`Cannot activate a UI controller: ${error}`)
      return
    }

    if (this.mobileRedirectUrl && this.detectMobile()) {
      document.location = this.mobileRedirectUrl
    }
    let selector = this.enabledSelector

    let trigger = this.triggerEvents.split(/,/)
    if (!selector || !trigger) {
      throw new Error('Configuration must define both trigger and selector')
    }
    let activateOn = this.doc.querySelectorAll(selector)
    if (activateOn.length === 0) {
      throw new Error(`activation element ${activateOn} is missing`)
    }
    if (this.enabledClass) {
      for (let elem of activateOn) {
        elem.classList.add(this.enabledClass)
      }
    }
    if (this.disabledSelector) {
      let disableOn = this.doc.querySelectorAll(this.disabledSelector)
      for (let elem of disableOn) {
        elem.setAttribute('data-alpheios-ignore', 'all')
        if (this.disabledClass) {
          elem.classList.add(this.disabledClass)
        }
      }
    }

    let alignment = new alpheios_components__WEBPACK_IMPORTED_MODULE_2__["AlignmentSelector"](this.doc, {})
    alignment.activate()
    let alignedTranslation = this.doc.querySelectorAll('.aligned-translation')
    for (let a of alignedTranslation) {
      interactjs__WEBPACK_IMPORTED_MODULE_5___default()(a).resizable({
      // resize from all edges and corners
        edges: { left: true, right: true, bottom: false, top: false },

        // minimum size
        restrictSize: {
          min: { width: 200 }
        },

        // keep the edges inside the parent
        restrictEdges: {
          outer: this.doc.body,
          endOnly: true
        },
        inertia: true
      }).on('resizemove', event => {
        let target = event.target
        // update the element's style
        target.style.width = `${event.rect.width}px`
      })
    }
  }

  /**
   *  Detect mobile device
   */
  detectMobile () {
    if (window.sessionStorage.desktop) {
      return false
    } else if (window.localStorage.mobile) {
      return true
    }

    // alternative
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile']
    for (var i in mobile) {
      if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) {
        return true
      }
    }

    // nothing found.. assume desktop
    return false
  }
}




/***/ }),

/***/ "./lib/app-authenticator.js":
/*!**********************************!*\
  !*** ./lib/app-authenticator.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppAuthenticator; });
/* global Auth0Lock */
/**
 * Encapsulates Authentication Functionality For a Client Side Application
 */
class AppAuthenticator {
  /**
   * @constructor
   */
  constructor () {
    // An Auth0 Lock widget instance. Will be initialized lazily
    this.auth0Lock = null
    this._auth0profile = null // A user profile from Auth0
  }

  /**
   * Authenticates user with an Auth0.
   * @return {Promise}
   */
  authenticate () {
    // TODO we should check to see if we already have a valid idToken before
    // initiating authentication
    return new Promise((resolve, reject) => {
      if (!this.auth0Lock) {
        if (!auth0Env) {
          let error = `Unable to find Auth0 configuration. Auth0 functionality will be disabled`
          console.error(error)
          reject(error)
        }
        this.auth0env = auth0Env
        // test environment
        if (this.auth0env.TEST_ID) {
          localStorage.setItem('access_token', this.auth0env.TEST_ID)
          localStorage.setItem('id_token', this.auth0env.TEST_ID)
          localStorage.setItem('is_test_user', true)
          resolve("Authenticated")
        } else {
          // initialize auth0 lock
          this.auth0Lock = new Auth0Lock(this.auth0env.CLIENT_ID, this.auth0env.DOMAIN, {
            theme: {
              logo: 'https://alpheios.net/logos/alpheios_32.png',
              labeledSubmitButton: false,
              primaryColor: '#436476'
            },
            languageDictionary: {
              title: "Login",
              signUpTerms: "By signing up, you agree to our terms of service and <a href=\"https://alpheios.net/pages/privacy-policy\">privacy policy</a>."
            },
            auth: {
              redirect: false,
              params: {
                audience: this.auth0env.AUDIENCE,
                scope: 'openid profile email',
                prompt: 'consent'
              },
              responseType: 'token id_token'
            }
          })
          // Handle login
          this.auth0Lock.on('authenticated', (authResult) => {
            this.auth0Lock.hide()
            localStorage.setItem('access_token', authResult.accessToken)
            localStorage.setItem('id_token', authResult.idToken)
            //localStorage.setItem('profile', JSON.stringify(profile))
            resolve("Authenticated")
          })

          // Unrecoverable error handler
          this.auth0Lock.on('unrecoverable_error', (error) => {
            console.error(`Auth0 Lock unrecoverable error: `, error)
            reject('Auth0 Lock unrecoverable')
          })

          // An authorization error
          this.auth0Lock.on('authorization_error', (error) => {
            console.error(`Auth0 Lock authorization error: `, error)
            reject('Auth0Lock authorization error')
          })
          this.auth0Lock.show()
          // TODO: Handle a situation when `authenticated` event is never fired (is that ever possible)
          // maybe via a Timeout?
        }
      }
    })
  }

  /**
   * Retrieves user profile information from Auth0.
   * @return {Promise}
   */
  getProfileData () {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('access_token')
      if (!token) {
       console.error('You must login to call this protected endpoint!')
       reject('Login required')
      }
      if (localStorage.getItem('is_test_user')) {
          let testProfile =  {
            name: 'Alpheios Test User',
            nickname: 'testuser'
          }
          localStorage.setItem('profile', JSON.stringify(testProfile))
          resolve(testProfile)
      } else {
        this.auth0Lock.getUserInfo(token, (error, profile) => {
          if (error) {
            reject(error)
          } else {
            localStorage.setItem('profile', JSON.stringify(profile))
            resolve(profile)
          }
        })
      }
    })
  }

  /**
   * Retrieves user data from a remote provider (e.g. Alpheios servers).
   * @return {Promise}
   */
  getUserData () {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('access_token')

      // block request from happening if no JWT token present
      if (!token) {
       console.error('You must login to call this protected endpoint!')
       reject('Login required')
      }
      // Do request to private endpoint
      fetch(this.auth0env.ENDPOINT, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => resolve(response.json()))
      .catch((e) => {
        console.error('error', e)
        reject("Unable to retrieve data")
      })
    })
  }

  /**
   * Respond to a logout request
   */
  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    localStorage.removeItem('profile')
    this.auth0Lock.logout({
      returnTo: this.auth0env.LOGOUT_URL
    })
  }

}


/***/ }),

/***/ "./state.js":
/*!******************!*\
  !*** ./state.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return State; });
/**
 * Contains Alpheios state
 * @property {panelStatus} panelStatus
 */
class State {
  constructor (tabID) {
    this.panelStatus = undefined
    this.tab = undefined
    this.watchers = new Map()
  }

  static create (source) {
    let copy = new State()
    for (let key of Object.keys(source)) {
      copy[key] = source[key]
    }
    return copy
  }

  static get defaults () {
    return {
      panelStatus: State.statuses.panel.OPEN
    }
  }

  static get statuses () {
    return {
      embedLib: {
        PENDING: Symbol.for('Alpheios_Status_Pending'), // Has not been fully initialized yet
        ACTIVE: Symbol.for('Alpheios_Status_Active'), // Is loaded and active
        DEACTIVATED: Symbol.for('Alpheios_Status_Deactivated'), // Has been loaded, but is deactivated
        DISABLED: Symbol.for('Alpheios_Status_Disabled') // Has been loaded, but it is disabled
      },
      panel: {
        OPEN: Symbol.for('Alpheios_Status_PanelOpen'), // Panel is open
        CLOSED: Symbol.for('Alpheios_Status_PanelClosed'), // Panel is closed
        DEFAULT: Symbol.for('Alpheios_Status_PanelDefault') // Panel should set its state according to default values
      },
      tab: {
        DEFAULT: 'default' // A tab should be set according to default values
      }
    }
  }

  /**
   * Sets a watcher function that is called every time a property is changed using a setItem() method.
   * @param {String} property - A name of a property that should be monitored
   * @param {Function} watchFunc - A function that will be called every time a property changes
   * @return {State} Reference to self for chaining
   */
  setWatcher (property, watchFunc) {
    this.watchers.set(property, watchFunc)
    return this
  }

  /**
   * SetItem provides a monitored way to change state. If value is assigned to a data property directly
   * there is no way to know if a property was changed. However, if a property was changed using setItem() method,
   * and if there is a watcher function registered for a changed property name,
   * this function will be called on every property change, passing a changed property name as an argument.
   * @param key
   * @param value
   * @return {State}
   */
  setItem (key, value) {
    this[key] = value
    if (this.watchers && this.watchers.has(key)) {
      this.watchers.get(key)(key, this)
    }
    return this
  }

  isPanelOpen () {
    return this.panelStatus === State.statuses.panel.OPEN
  }

  isPanelClosed () {
    return this.panelStatus === State.statuses.panel.CLOSED
  }

  isPanelStateDefault () {
    return this.panelStatus === State.statuses.panel.DEFAULT
  }

  isPanelStateValid () {
    return (
      this.panelStatus === State.statuses.panel.OPEN ||
      this.panelStatus === State.statuses.panel.CLOSED
    )
  }

  setPanelOpen () {
    this.setItem('panelStatus', State.statuses.panel.OPEN)
    return this
  }

  setPanelClosed () {
    this.setItem('panelStatus', State.statuses.panel.CLOSED)
    return this
  }

  changeTab (tabName) {
    this.setItem('tab', tabName)
    return this
  }

  activateUI () {
    this.setItem('uiActive', true)
    return this
  }

  // TODO: A temporary solution for compatibility with TabScript.
  isActive () {
    return this.status === State.statuses.embedLib.ACTIVE
  }

  isDeactivated () {
    return this.status === State.statuses.embedLib.DEACTIVATED
  }

  isDisabled () {
    return this.status === State.statuses.embedLib.DISABLED
  }

  isTabStateDefault () {
    return this.tab === State.statuses.tab.DEFAULT
  }

  uiIsActive () {
    return this.uiActive
  }

  activate () {
    this.status = State.statuses.embedLib.ACTIVE
    return this
  }

  deactivate () {
    this.status = State.statuses.embedLib.DEACTIVATED
    return this
  }

  disable () {
    this.status = State.statuses.embedLib.DISABLED
    return this
  }
}


/***/ }),

/***/ "./template.htmlf":
/*!************************!*\
  !*** ./template.htmlf ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"alpheios-popup-embedded\" >\r\n    <component v-bind:is=\"currentPopupComponent\" :messages=\"messages\" :definitions=\"definitions\" :lexemes=\"lexemes\" :translations=\"translations\"\r\n    \t   :linkedfeatures=\"linkedFeatures\" :classes-changed=\"classesChanged\"\r\n           :data=\"popupData\" @closepopupnotifications=\"clearNotifications\" @showpaneltab=\"showPanelTab\"\r\n           @sendfeature=\"sendFeature\">\r\n    </component>\r\n</div>\r\n<div id=\"alpheios-panel-embedded\">\r\n    <component v-bind:is=\"currentPanelComponent\" :data=\"panelData\" @closenotifications=\"clearNotifications\" :classes-changed=\"classesChanged\"\r\n               @setposition=\"setPositionTo\"></component>\r\n</div>\r\n";

/***/ })

/******/ });
//# sourceMappingURL=alpheios-embedded.js.map