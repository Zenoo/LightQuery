---
layout: default
---

# LightQuery - 9 times smaller than jQuery (90kB => 10kB)

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

* The `LightQuery` object extend the native `Array` object, so you can use all of its methods/properties.

```js
// Examples
$('p').length;
$('p')[0];
$('p').map(...);
```

### Methods

The full API documentation is available on [https://zenoo.github.io/LightQuery/docs/-_$](https://zenoo.github.io/LightQuery/docs/-_$.html).

| [**.add(selector[, context])**](#add) |

| [**.addClass(classes)**](#addClass) |

| [**.after(...elements)**](#after) |

| [**.append(...elements)**](#append) |

| [**.appendTo(targets)**](#appendTo) |

| [**.attr(name[, value])**](#attr) |

### Methods not included

### In-depth method definition

{:#add}
| **.add(selector[, context])** *Add elements to the current LightQuery object* |
|:---|
| `selector`*{Element\|NodeList\|Array\|String\|_$}* *Element(s) to add* |
| `context`*{Element}* *Context of the potential query* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').add('aside');
$('p').add('<div>Example</div>');
$('p').add(document.body);
```

---

{:#addClass}
| **.addClass(classes)** *Add class(es) to each element* |
|:---|
| `classes`*{String}* *Space separated classes to add* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').addClass('selected');
$('p').addClass('selected blue bg');
```

---

{:#after}
| **.after(...content)** *Insert content after each element* |
|:---|
| `elements`*{Element\[\]\|NodeList\[\]\|Array\[\]\|String\[\]\|_$\[\]}* *Content to be inserted* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').after('div');
$('p').after('<aside>See more</aside>');
```

---

{:#append}
| **.append(...content)** *Append content to the end of each element* |
|:---|
| `content`*{Element\[\]\|NodeList\[\]\|Array\[\]\|String\[\]\|_$\[\]}* *Content to be appended* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('div').append('p');
$('div').append('<aside>See more</aside>');
```

---

{:#appendTo}
| **.appendTo(targets)** *Append each element to the end of the targets* |
|:---|
| `elements`*{Element\|NodeList\|Array\|String\|_$}* *Content to be appended* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').appendTo('div');
$('<aside>See more</aside>').appendTo('p');
```

---

{:#attr}
| **.attr(name[, value])** *Set/Get an attribute for each element* |
|:---|
| `name`*{String}* *The attribute name* |
| `value`*{String\|Number\|null}* *The attribute value* |
| **Returns**`{_$\|String}`*The current object or the value of the attribute* |

```js
// Examples
let title = $('p').attr('title');
$('p').attr('title', 'New title');
```

---