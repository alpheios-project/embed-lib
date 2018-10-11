# Alpheios Embedded Library

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The Alpheios Embedded Library encapsulates Alpheios functionality for use as an embedded library, enhancing HTML pages by adding clickable access to dictionary entries, morphological analyses, inflection tables and grammars. Languages supported include Latin, Ancient Greek, Classical Arabic and Persian. 

The library is fully open source under [ISC License](https://opensource.org/licenses/ISC) and can be easily extended with support for additional languages if web services adhering to Alpheios service APIs are or can be made available.  Documentation on how to do so is forthcoming. In the meantime please contact us (contact info available at https://alpheios.net/) if you are interested in extending the language support.

The functionality works best in the browser on laptops and desktops. Support for mobile devices will be added in future releases.

## Including alpheios-embedded

See also sample files `sample.html` and `sample-cdn.html` at the root of this repository.

**1. Add the stylesheets and script to your HTML page:**

**Via jsdelivr CDN**

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/alpheios-embedded/dist/style/style.min.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/alpheios-embedded/dist/style/style-embedded.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/alpheios-embedded/dist/alpheios-embedded.js"></script>
```

**Or install from NPM**

```
npm install alpheios-embedded
```

```
<link rel="stylesheet" href="path_to_node_modules/alpheios-embedded/dist/style/style.min.css"/>
<link rel="stylesheet" href="path_to_node_modules/alpheios-embedded/dist/style/style-embedded.min.css"/>
<script src="path_to_node_modules/alpheios-embedded/dist/alpheios-embedded.js"></script>
```
**2. Activate Alpheios**

Add the following Javascript to your page activate Alpheios:

```
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", function(event) {
      new Alpheios.Embedded().activate();
    });
</script>
```

This will activate the Alpheios functionality for any elements on your page (including their child elements) which have the class `alpheios-enabled`.  

The class used to identify which elements to activate for Alpheios, as well as other aspects can be customized by passing an optional configuration object to the `activate` function with the following properties:

```
   {
     documentObject:     the parent document
                         Default: window.document
     enabledSelector:    a CSS Selector string identifying the page elements for which Alpheios should be activated
                         Default: ".alpheios-enabled"
     disabledSelector:   a CSS Selector string identifying the page elements for which Alpheios should be deactivated
                         Default: "[data-alpheios-ignore=all]"
     enabledClass:       a CSS class to apply to alpheios enabled elements
                         Default: ""
     disabledClass:      a CSS class to apply to alpheios disabled elements
                         Default: ""
     eventTriggers:      a comma-separated list of DOM events to which Alpheios functionality should be attached
                         Default: "dblclick"
     triggerPreCallback: a callback function which is called when the trigger event handler is invoked, prior to initiating
                         Alpheios functionality. It should return true to proced with lookup or false to abort.
                         Default: no-op, returns true
      popupData:         popup data overrides (currently only positioning properties supported, top and left)
                         Default: { top: '10vh', left: '10vw'}
      panelData:         panel data overrides (none currently supported. reserved for future use)
                         Default: {}
  }

```

## Customizing Alpheios Functionality

**1. Precise Elements to Include**
By default Alpheios will be enabled on all elements (and their children) matching the CSS selector ".alpheios-enabled". You can use a different CSS selector by including the `enabledSelector` property in the `activate` configuration object. 

```
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", function(event) {
      new Alpheios.Embedded(
         {
           enabledSelector: ".myalpheioselements"
         }
      ).activate();
    });
</script>
```

**2. Precise Elements to Ignore**

By default, Alpheios will deactivate itself for any elements on the page, even if they are children of the activated elements, if they have the attribute `data-alpheios-ignore="all"`. You can specifiy additional elements to ignore by including the `disabledSelector` property in the `activate` configuration object:

```
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", function(event) {
      new Alpheios.Embedded(
         {
           disabledSelector: ".mydisabledelements"
         }
      ).activate();
    });
</script>
```

**3. Use a different trigger event**

**NB: This is experimental functionality. Instructions and syntax for configuration, etc. are currently in flux.**

By default, the `dblclick` event triggers Alpheios functionality. If this conflicts with your site's features, you can choose a different event by including the `triggerEvents` property in the `activate` configuration object. You may find you need to use this in combination with the `triggerPreCallback` argument which specificies a callback which is executed prior to executing the Alpheios trigger. For example, if you wanted to use a `Ctrl+Click` to activate Alpheios, you would have to have code in a `triggerPreCallback` function which kept track of whether or not the user had pressed the `Ctrl` key prior to clicking.

**4. Connect a Treebank**

**NB: This is experimental functionality. Instructions and syntax for configuration, etc. are currently in flux.**

If your text has been aligned with a treebank annotation, Alpheios can be instructed to display the corresponding treebank data using the [Arethusa Treebank Viewer](https://alpheios.net/pages/tools/#alpheios-treebank-editor) and/or use the treebank data to disambiguate morphological parser results.

Prerequisites:

* Treebank data which:
    * Has been aligned to your text at the word and sentence level 
    * Adheres to the [Perseus/Alpheios Treebank Schema](https://raw.githubusercontent.com/alpheios-project/schemas/master/xsd/treebank-1.7.xsd)
    * Uses one of the [tagsets supported by Arethusa](https://github.com/alpheios-project/arethusa-configs/tree/master/configs) 
    * For viewing diagrams, is accessible via an instance of Arethusa (for viewing)
    * For disambiguating morphological parser results, is accessible via a webservice which takes a filename and word identifier as input and returns the treebank annotation data formatted according to the [Alpheios Lexicon Schema](https://github.com/alpheios-project/schemas/blob/master/xsd/lexicon.xsd)
            * If you want to use your own webservice for this it will currently require a custom build of the alpheios-embedded library to configure the address of the service for the alpheios-morph-client library.
            * If you are interested in loading your treebank data in the Alpheios-hosted treebank data services, please contact the Alpheios support address.

If the prerequisites are met, you can activate the functionality by adding instructions to the page.

To activate the use of Arethusa, you should:

A. add a `meta` tag to the header which identifies the URL template for the viewer as the value of the `data-alpheios_tb_src` attribute.

The syntax for the URL template is as follows:

```
http://example.com/{arethusaPath}/{docPathOrParam}DOC{sentencePathParam}SENTENCE{wordPathoOParam}WORD
```

For example:

```
<meta name="alpheios-v2-treebank-url" data-alpheios_tb_src="https://alpheios.net/alpheios-treebanks/DOC.html?chunk=SENTENCE&amp;w=WORD"></meta>
```

B. add a `data-alpheios_tb_ref` attribute to words which should be linked for viewing in Arethusa.

The template syntax for the attribute value is as follows:


```
{documentIdentifier}#{sentenceIdentifier}-{wordIdentifier}
```

For example:

```
data-alpheios_tb_ref="1999.02.0066#1-1"
```

the `documentIdentifier` will be used as the replacement value for the DOC item in the Arethusa URL template. The `sentenceIdentifier` will be used as the replacement value for the SENTENCE item in the Arethusa URL template. The `wordIdentifier` will be used as the replacement value for the WORD item in the Arethusa URL template.

A full example:

```
<meta name=alpheios-v2-treebank-url" data-alpheios_tb_src="https://alpheios.net/alpheios-treebanks/DOC.html?chunk=SENTENCE&amp;w=WORD"></meta>

<span data-alpheios_tb_ref="1999.02.0066#1-2">prima</span>
```

Alpheios will convert this to the following URL request to retrieve Arethusa and display the results in the Diagram tab on the Alpheios panel when the user double-clicks on the word `prima`:

```
https://alpheios.net/alpheios-treebanks/1999.02.0066.html?chunk=1&w=2
```

The above steps also trigger activation of the use of the treebank data for disamibugating the morphological parser results in the Alpheios popup.  If the `documentIdentifier` is one which is configured as available via webservice for the `AlpheiosTreebankAdapter` in the [alpheios-morph-client](https://github.com/alpheios-project/morph-client) library, then the treebank morphology tag will be used to disambiguate the morphological parser results.


**5. Add an Aligned Translation**

**NB: This is experimental functionality. Instructions and syntax for configuration, etc. are currently in flux.**

You can include an aligned translation in your page and have Alpheios activate mouseover highlighting of the aligned words or phrases. Use the `data-alpheios_align_ref` attribute on elements which have been aligned.

The attribute value should be is a space separated list of CSS selectors for the elements within the same page which contain the aligned translation. It can be bi-directional or uni-directional.

In the following example, the Latin word `cupidinibus` in a child of the element with the id `aligned-text-lat` is aligned to the English words `by` and `passion` which are children of the element with the id `aligned-text-eng`. Similarly the English words are reverse-aligned to the Latin.  When Alpheios is active in a page with this data, mousing over the word `cupidnibus` will highight `by` and `passion` and vice-versa. Clicking on a highlighted word will anchor highlight in place until a second click removes it.

```
<div id="aligned-text-lat" lang="lat">
  ...
  <span data-alpheios_align_word="s1_w12" 
    data-alpheios_align_ref="#aligned-text-eng *[data-alpheios_align_word=s1_w13],#aligned-text-eng *[data-alpheios_align_word=s1_w15]">
    cupidinibus
  </span>
  ...
</div>
<div id="aligned-text-eng" lang="eng">
  ...
  <span  data-alpheios_align_word="s1_w13" 
    data-alpheios_align_ref="#aligned-text-lat *[data-alpheios_align_word=s1_w12]">
    by
  </span>
  ...
  <span class="alpheios-aligned-word" data-alpheios_align_word="s1_w15" 
    data-alpheios_align_ref="#aligned-text-lat *[data-alpheios_align_word=s1_w12]">
    passion
  </span>
  ...
</div>
```

## Outstanding Issues/Future Plans

**Mobile DeviceSupport**: Currently the alpheios-embedded.js library does not function well when the page is accessed by a mobile device. Eventually we expect this library to support progressive web applications for mobile access. This work is still under development. In the meantime we provide the `data-mobile-redirect-url` configuration option to facilitate redirection of users of mobile devices to other entry points.

See also our open [issues](https://github.com/alpheios-project/embed-lib).


# Developer Instructions

## Prerequisites

  * Node 10.5.0 or higher

## Install Dependencies

```
npm install
```

## Build

```
npm run test
npm run build
```

## Develop

```
npm run dev
```

runs a local web server on port 8888. Browse to the demo/ folder. Make changes to the code and they'll show up when you reload.

