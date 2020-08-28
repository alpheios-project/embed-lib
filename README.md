# Alpheios Embedded Library

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The Alpheios Embedded Library is a javascript library that provides complete Alpheios functionality on any page to which it has been added without the need for the end-users of the page to install the Alpheios browser extensions. It provides clickable access to dictionary entries, morphological analyses, inflection tables and grammars for Latin and Ancient Greek. A subset of these resources are available for Classical Arabic and Persian with additional languages and resources currently under development.

The library is fully open source under [ISC License](https://opensource.org/licenses/ISC) and can be easily extended with support for additional languages if web services adhering to Alpheios service APIs are or can be made available.  Documentation on how to do so is forthcoming. In the meantime please contact us (contact info available at https://alpheios.net/) if you are interested in extending the language support.

Use of this library is governed by the [Alpheios API Terms of Service](http://www.alpheios.net/pages/apiterms/). Please review those terms before using it.

The library has been tested under the latest releases (as of September 2019) of the Chrome, Firefox and Safari browsers on desktops/laptops and mobile devices. Internet Explorer and proprietary mobile device browsers are not supported.

## Adding Alpheios to your page

For most websites, we recommend that you include Alpheios by referencing the library and its related files from the Content Delivery Network (CDN). This is the least complicated setup.  The following steps are the minimum needed to activate the default Alpheios functionality for your page, pulling the Alpheios code from the CDN. Later sections describe alternate configurations using the library from a local installation.

The [sample-cdn.html](sample-cdn.html) file at the root of this directory uses this setup.

1. Make sure you include the following `meta` elements in the `<head>` of your page

```
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
```

2. Add the link the stylesheet for the alpheios components library to the `<head>` of your page:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/alpheios-components@latest/dist/style/style-components.min.css"/>
```

3. Add the following Javascript to your page to import the Embedded Library code and dependencies and activate it. Normally a good place to put this is at the end of the `<body>` element.

```
<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function(event) {
      import ("https://cdn.jsdelivr.net/npm/alpheios-embedded@latest/dist/alpheios-embedded.min.js").then(embedLib => {
        window.AlpheiosEmbed.importDependencies({
          mode: 'cdn'
        }).then(Embedded => {
          new Embedded({clientId: null}).activate();
        }).catch(e => {
          console.error(`Import of Alpheios embedded library dependencies failed: ${e}`)
        })

      }).catch(e => {
        console.error(`Import of Alpheios Embedded library failed: ${e}`)
      })
    });
</script>
```

3. **VERY IMPORTANT** in your copy of the above activation code, replace the `null` value for the clientId parameter with a unique string identifying your site. For now, this can be any string you choose. In the future we may assign clientIds to registered users of the Alpheios Embedded Library.


4. Add the CSS class `alpheios-enabled` to any elements on your site's page(s) for which you would like Alpheios to be active. E.g.

```
<div class="alpheios-enabled">
<p lang="lat">Arma virumque canō...</p>
</div>
```

5. Add the `lang` attribute identifying the language of your text.

When a user looks up a word by double-clicking or tapping on it on the page, Alpheios looks for the presence of a `lang` attribute on the enclosing element and its parent and ancestor elements. If it does not find it, it will use the user's default preferred language. To ensure Alpheios identifies the correct language for your text, particularly if your page contains text in multiple languages, add the `lang` attribute on a parent or ancestor element of the text. The attribute value should be the ISO 639-2 3-character language code. The following languages are currently supported:

Language|ISO Code
--------|--------
Latin | lat
Ancient Greek | grc
Classical Arabic | ara
Persian | per
Ancient Ethiopic | gez
Chinese | zhu, zh, zh-Hant, zh-Hans
Syriac | syc, syr, syr-Syrj

```

Example:

<div class="alpheios-enabled">
  <p lang="grc">μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος</p>
  <p lang="lat">Arma virumque canō</p>
  <p lang="ara" dir="rtl">بسماللهالرحمنالرحيم</p>
  <p lang="per" dir="rtl">الا یا ایها الساقی ادر کاساً و ناولها</p>
</div>
```

6. Add the `data-alpheios-ignore=all` attribute to any subsections of your page on which Alpheios should NOT be active.
By default, Alpheios will be active for the entire contents, including children elements, of any element with the `alpheios-enabled` class. If your page is made up of more than just the Latin (or Greek, etc.) text that you want your users to read, then it can sometimes be necessary to tell Alpheios to ignore subset of the page. The following example tells Alpheios to be inactive for the instructional text in English, but active for everything else in the parent `div` element.

```
<div class="alpheios-enabled" lang="lat">
<p>Arma virumque canō...</p>
<p lang="eng">(You can double-click on any Latin word on the page to see the Alpheios features)</p>
<p>...Trōiae quī prīmus ab ōrīs</p>
</div>
```

After you have made the above changes to your website page(s), when you load your page in the browser, the Alpheios toolbar should appear and the sections of text you specified should have Alpheios activated for them.  On a desktop/laptop computer, double-clicking on an enabled word should produce the popup and on a mobile device, doing a long tap on a word should produce the panel.


## Customizing Alpheios Functionality

In addition to the required clientId property, the object that is passed to the Alpheios `Embedded` constructor can contain a number of other optional properties to customize the behavior of the library for your page.

```
        new Embedded({}).activate();
```


The full available list of properties for this configuration object are as follows:

```
   {
     clientId:               a unique identifier string for the embedding site or client
                             Required.
     documentObject:         the parent document.
                             Optional.
                             Default: window.document
     enabledSelector:        a CSS Selector string identifying the page elements for which Alpheios should be activated.
                             Optional.
                             Default: ".alpheios-enabled"
     disabledSelector:       a CSS Selector string identifying the page elements for which Alpheios should be deactivated
                             Optional.
                             Default: "[data-alpheios-ignore=all]"
     enabledClass:           a CSS class to apply to alpheios enabled elements
                             Optional.
                             Default: ""
     disabledClass:          a CSS class to apply to alpheios disabled elements
                             Optional.
                             Default: ""
     mobileTriggerEvent:     the DOM event to which Alpheios functionality should be attached on mobile devices
                             Optional.
                             Default: longtap
     desktopTriggerEvent:    the DOM event to which the Alpheios functionality should be attached on desktop/laptop browsers
                             Optional.
                             Default: dblclick
     triggerPreCallback:     a callback function which is called when the trigger event handler is invoked, prior to initiating
                             Optional.
                             Alpheios functionality. It should return true to proced with lookup or false to abort.
                             Default: no-op, returns true
      popupInitialPos:       The initial position of the Alpheios popup (on desktop/laptop devices)
                             Optional.
                             Default: { top: '10vh', left: '10vw'}
      toolbarInitialPos      The initial position of the Alpheios panel (on desktop/laptop devices)
                             Optional.
                             Default: { top: '10px', right: '15px'}
      actionPanelInitialPos: The initial position of the Alpheios action panel (on mobilde devices)
                             Optional.
                             Default: { bottom: '120px', right: '20px'}
      layoutType:            a preconfigured layout (currently the only supported values are 'default' and 'readingTools'
                             Optional.
                             Default: 'default' ('readingTools' is used for the Alpheios Mobile Reader)
      disableTextSelection:  can be used to disable default browser text selection behavior (not recommended)
                             Optional.
                             Default: false
      textLangCode:          Can be used to specify which language should be used for lookups from the toolbar
                             Optional.
                             Default: null
      overrideHelp:          Set this to true if you want to replace the Alpheios default help function with your own.
                             Optional.
                             Default: false
      simpleMode:            Set this to true if you want the Alpheios UI to default to Simple Mode.
                             Optional.
                             Default: false
  }

```

Some common scenarios which motivate use of one or more of these optional configuration properties are described further below


**1. Tell Alpheios which language to use for toolbar lookups**

Users can enter words they want to look up directly into the lookup field on the Alpheios toolbar. By default, Alpheios will use the user's preferred page language to interpret these lookups.  You can override this behavior and identify the default language for lookups from the toolbar by specifying the `textLangCode` property, set to the ISO 639-2 3-character language code for the language.  For example, to configure Alpheios to default to Greek for lookups on your page:

```
new Embedded({
    clientId: 'myclientid',
    textLangCode: 'grc'
}).activate();
```


**2. Tell Alpheios the page elements for which it should be active**

By default Alpheios will be only be enabled on elements (and their children) matching the CSS selector ".alpheios-enabled". You can use a different CSS selector by including the `enabledSelector` property in the `Embedded` constructor configuration object.

For example, to configure Alpheios to be enabled on all elements which have the class `myalpheioselements`:

```
new Embedded({
    clientId: "myclientid",
    enabledSelector: ".myalpheioselements"
})
```

See also the [demo/index.html](index.html) file in the demos directory.

**3.Tell Alpheios to ignore certain page elements**

By default, Alpheios will deactivate itself for any elements on the page, even if they are children of the activated elements, if they have the attribute `data-alpheios-ignore="all"`. So the simplest way to tell Alpheios to ignore an element is to add the `data-alpheios-ignore="all"` attribute name/value pair to the element. However, if you prefer, you can specifiy additional elements to ignore by including the `disabledSelector` property in the `Embedded` constructor configuration object.

For example, to configure Alpheios to be disabled on all elements which have the class `mydisabledelements`:

```
new Embedded({
    clientId: "myclientid",
    disabledSelector: ".mydisabledelements"
})
```

See also the [demo/index.html](index.html) file in the demos directory.

**4. Tell Alpheios to use a different trigger event**

By default, the `dblclick` event triggers Alpheios functionality on desktop/laptop devices, and a `longtap` event triggers Alpheios functionality on mobile devices. If this conflicts with your site's features, you can choose a different event by including the `desktopTriggerEvent` and/or `mobileTriggerEvent` property in the `Embedded` constructor configuration object. You may find you need to use this in combination with the `triggerPreCallback` argument which specificies a callback which is executed prior to executing the Alpheios trigger. For example, if you wanted to use a `Ctrl+Click` to activate Alpheios on the desktop, you would have to have code in a `triggerPreCallback` function which kept track of whether or not the user had pressed the `Ctrl` key prior to clicking.

See also the [demo/ctrlclick.html](ctrlclick.html) file in the demos directory.

**5. Use your own Help function**

The Alpheios toolbar has a help icon which opens our standard help panel (desktop)/popup (mobile). You may wish to write your own help instructions for users of your site. You can override the default Alpheios help behavior by setting `overrideHelp:true` in the `Embedded` constructor configuration object.  This will disable the Alpheios handler for user clicks/taps on the Alpheios help icon. You will then need to write your own Javascript function and add a handler to the Alpheio help icon, which is identified by the css class `alpheios-toolbar__help-control`.  


```
new Embedded({
    clientId: "myclientid",
    overrideHelp: true
})

...

let helpControl = document.querySelector(".alpheios-toolbar__help-control")
if (helpControl) {
    helpControl.addEventListener('click', function() { alert('This is a custom help popup.') })
}
```

**6. Simplify the Alpheios interface -- BETA FEATURE**

If you do not wish to expose your site's users to the full Alpheios feature set, but still would like to give them access to the morphological details and short definitions for words, you can set `simpleMode:true` in the `Embedded` constructor configuration object.  This will reduce the Alpheios interface to just the morphology popup/panel.  We recommend you use this feature in combination with `overrideHelp:true` (described above) because the default help screen describes the full Alpheios feature set.

```
new Embedded({
    clientId: "myclientid",
    overrideHelp: true
    simpleMode: true
})
```

See also the [demo/simple.html](simple.html) file in the demos directory.

**7. Use your own branding on the Alpheios interface -- BETA FEATURE**

You may wish to rebrand the Alpheios interface with different colors and fonts.  This feature is still experimental. See our [skinning documentation](docs/skinning.md) for further details.

See also the [demo/skinned.html](skinned.html) file in the demos directory.

## Alternate Installation Configurations

Although we recommend you include the Alpheios Embedded Library by referencing the latest version from the CDN, if you have a need to use a specific version or to install it as part of your web application, you can do so.

**1. Use a different CDN version**

We will update the Alpheios Embedded Library and its dependencies from time to time, and if you use the `@latest` tag to include Alpheios, your page will automatically get the latest code.  If you wish to insulate your page from releases of the Alpheios functionality, you can do so by referencing the specific version of the code you wish to include.

For example, to freeze your installation at the `3.0.0-rc.2` version of the Alpheios Embedded Library, and the `1.2.45` version of the Alpheios Components Library dependency, you would use the following code. Note that instead of using the `cdn` mode when importing the dependencies, you need to use `custom` and also specify the explicit versioned url for the `alpheios-components.min.js` via the `libs` object.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/alpheios-components@1.2.44/dist/style/style-components.min.css"/>

<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function(event) {
      import ("https://cdn.jsdelivr.net/npm/alpheios-embedded@3.0.0-rc.2/dist/alpheios-embedded.min.js").then(embedLib => {
        window.AlpheiosEmbed.importDependencies({
          mode: 'custom',
          libs: { components: "https://cdn.jsdelivr.net/npm/alpheios-components@1.2.44/dist/alpheios-components.min.js" }
        }).then(Embedded => {
          new Embedded({clientId: null}).activate();
        }).catch(e => {
          console.error(`Import of Alpheios embedded library dependencies failed: ${e}`)
        })

      }).catch(e => {
        console.error(`Import of Alpheios Embedded library failed: ${e}`)
      })
    });
</script>
```

**2. Use a local installation**

If your web site is a web application using its own javascript libraries, you may prefer to install Alpheios as part of your own environment.  You can install the Alpheios Embedded library using NPM, via `npm install` and then you can configure a custom path to the library and its dependencies.

For example, if your environment installs its javascript npm dependencies at the path `/assets/node_modules` you would use the following configuration:

```
<link rel="stylesheet" href="/assets/node_modules/alpheios-components/dist/style/style-components.min.css"/>

<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function(event) {
      import ("/assets/node_modules/alpheios-embedded/dist/alpheios-embedded.min.js").then(embedLib => {
        window.AlpheiosEmbed.importDependencies({
          mode: 'custom',
          libs: { components: "/assets/node_modules/alpheios-components/dist/alpheios-components.min.js" }
        }).then(Embedded => {
          new Embedded({clientId: null}).activate();
        }).catch(e => {
          console.error(`Import of Alpheios embedded library dependencies failed: ${e}`)
        })

      }).catch(e => {
        console.error(`Import of Alpheios Embedded library failed: ${e}`)
      })
    });
</script>
```


## Advanced Alpheios Functionality

**1. Connect a Treebank**

If your text has been aligned with a treebank annotation, Alpheios can be instructed to display the corresponding treebank data.

1. Deploy your treebank data using the [Perseids Treebank Template](https://perseids-publications.github.io/treebank-template/getting-started).

2. Align your text according to the [Alpheios Integration Instructions](https://perseids-publications.github.io/treebank-template/examples/alpheios-integration).

**2. Add an Aligned Translation**

**NB: This is experimental functionality. Instructions and syntax for configuration, etc. are currently in flux.**

See also the [demo/treebank-translation.html](treebank-translation.html) file in the demos directory.

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

## Outstanding Issues

See our [FAQ pages](http://www.alpheios.net/pages/faq/)


## Developer Instructions

See [BUILD.md][BUILD.md]
