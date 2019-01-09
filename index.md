---
layout: default
---

# 9 times smaller than jQuery (90kB => 10kB)

This is a complete rewrite of the well-known jQuery library.

Every method has been rewritten or replaced by another method.

## Installation

Simply import `light-query.min.js` into your HTML by downloading it or using a CDN.
```
<script src="https://gitcdn.link/repo/Zenoo/LightQuery/master/light-query.min.js"></script>	
```

### Usage

* Initialize your object like you would in jQuery using `$`:

```js
$(selector[, context])

// Example
let elements = $('yo.ur[selec="tor"]');
let elementsWithContext = $('yo.ur[selec="tor"]', section);
```

* If you need to wait for the document to be loaded, use:

```js
$(() => {
	// The document is loaded here
});

// OR

$(function(){
	// The document is loaded here
});
```

* The `LightQuery` objects extend the native `Array` object, so you can use all of its methods/properties.

```js
// Examples
$('p').length;
$('p')[0];
$('p').map(...);
```

### Methods

The full API documentation is available on [https://zenoo.github.io/LightQuery/docs/-_$](https://zenoo.github.io/LightQuery/docs/-_$.html).

However, here is a concise documentation:

| **.add(selector[, context])**  
  Add elements to the current LightQuery object |
|:----------------------------------------------|
| **selector**                                  |
| *{Element\|NodeList\|Array\|String\|_$}*          |
| Element(s) to add                             |
|:----------------------------------------------|
| **context**                                   |
| *{Element}*                                   |
| Context of the potential query                |

### Methods not included