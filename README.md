# Alpheios Embedded Library

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Encapsulates Alpheios functionality for use as an embedded library.


# Usage

1. Add the stylesheets to your HTML page:

```
<link rel="stylesheet" href="dist/style/style.min.css"/>
<link rel="stylesheet" href="dist/style/style-embedded.min.css"/>
```

2. Add the script to your HTML page:

```
<script src="dist/alpheios-embedded.js"></script>
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", function(event) {
      new Alpheios.Embedded().activate();
    });
</script>
```

3. Add an anchor element with the id "alpheios-main" to your HTML page to configure the library. This element supports the following attributes for configuration of the library:

```
   data-selector: a CSS selector string for selecting elements on the page which should have Alpheios activated for them
   data-trigger: the name of the DOM event which triggers the functionality (Currently only 'dblclick' is supported.)
   data-mobile-redirect-url: a url to which you want to redirect users accessing the page from mobile devices
```

   e.g.

```
<div id="alpheios-main" data-trigger="dblclick" data-selector=".alpheios-enabled" data-mobile-redirect-url="https://example.org/mobile-entry.html"></div>
```

4. Configure activation (option)

You can also configure the Alpheios Embedded instance by passing parameters to the constructor:

```
  new Alpheios.Embedded(selector_for_anchor_element,document_object,popup_arguments,panel_arguments)
```

e.g

```
  new Alpheios.Embedded("#alpheios-main",document,{top: "30vh", left: "30vw"},{})
```

Supported configuration options are currently limited to the following, but may be expanded in future releases:

```
  selector_for_anchor_element: css selector for the anchor element which contains the configuration for the library (see below)
  document_object: the DOM Document object for which the library is being activated
  popup_arguments:
  
    top: coordinates of the top of the Alpheios popup
    left: coordinates of the left of the Alpheios popup
```

## Outstanding Issues/Future Plans

Currently the alpheios-embedded.js library does not function well when the page is accessed by a mobile device. Eventually we expect this library to support progressive web applications for mobile access. This work is still under development. In the meantime we provide the `data-mobile-redirect-url` configuration option to facilitate redirection of users of mobile devices to other entry points.


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

