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

| [**.after(...content)**](#after) |

| [**.append(...content)**](#append) |

| [**.appendTo(targets)**](#appendTo) |

| [**.attr(name[, value])**](#attr) |

| [**.before(...content)**](#before) |

| [**.blur()**](#blur) |

| [**.children([selector])**](#children) |

| [**.clone([deep])**](#clone) |

| [**.closest(selector)**](#closest) |

| [**.contents()**](#contents) |

| [**.css(parameter[, value])**](#css) |

| [**.detach()**](#detach) |

| [**.each(callback)**](#each) |

| [**.empty()**](#empty) |

| [**.eq(index)**](#eq) |

| [**.filter(parameter)**](#filter) |

| [**.find(selector)**](#find) |

| [**.first()**](#first) |

| [**.get([index])**](#get) |

| [**.has(parameter)**](#has) |

| [**.hasClass(className)**](#hasClass) |

| [**.height()**](#height) |

| [**.hide()**](#hide) |

| [**.html([html])**](#html) |

| [**.index()**](#index) |

| __NEW !__ [**$.insert(toInsert, position, relativeElements)**](#insert) |

| [**.insertAfter(target)**](#insertAfter) |

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
| **Returns**`{_$\|String}`*The current LightQuery object or the value of the attribute* |

```js
// Examples
let title = $('p').attr('title');
$('p').attr('title', 'New title');
```

---

{:#before}
| **.before(...content)** *Insert content before each element* |
|:---|
| `content`*{Element\[\]\|\NodeList\[\]\|Array\[\]\|String\[\]\|_$\[\]}* *Content to be inserted* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').before('div');
$('p').before('<aside>See more</aside>');
```

---

{:#blur}
| **.blur()** *Force the focus out of each element* |
|:---|
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Example
$('p').blur();
```

---

{:#children}
| **.children([selector])** *Get the children of each element* |
|:---|
| `selector`*{String}* *An optional filter* |
| **Returns**`{_$}`*The current LightQuery object's children* |

```js
// Examples
$('p').children();
$('p').children('span');
```

---

{:#clone}
| **.clone([deep])** *Clone each element* |
|:---|
| `deep`*{Boolean}* *Deep clone the elements ?* **Default:** `true`|
| **Returns**`{_$}`*A clone of the previous LightQuery object* |

```js
// Examples
let clone = $('p').clone();
let shallowClone = $('p').clone(false);
```

---

{:#closest}
| **.closest(selector)** *Get the closest (self-included) parent matching the selector for each element* |
|:---|
| `selector`*{String}* *The selector* |
| **Returns**`{_$}`*A new LightQuery object* |

```js
// Example
$('p').closest('aside');
```

---

{:#contents}
| **.contents()** *Get the children of each element (including text nodes)* |
|:---|
| **Returns**`{_$}`*A LightQuery object containing the child nodes* |

```js
// Example
$('p').contents();
```

---

{:#css}
| **.css(parameter[, value])** *Set/Get one or more CSS properties* |
|:---|
| `parameter`*{String\|Object}* *The CSS property name or an object containing every CSS properties to be changed* |
| `value`*{String}* *The CSS property value* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').css('color', 'red');
$('p').css('color');
$('p').css({
	color: 'blue',
	opacity: .5
});
```

---

{:#detach}
| **.detach()** *Remove each element from the DOM, to be reused later* |
|:---|
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Example
const forLaterUse = $('p').detach();
```

---

{:#each}
| **.each(callback)** *Iterate over each element<br>Inside this method, `this` corresponds to the current element* |
|:---|
| `callback`*{Function}* *The callback function* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Example
$('p').each(function(){
	$(this).whatever(); // ...
});
```

---

{:#empty}
| **.empty()** *Remove all child nodes of each element* |
|:---|
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Example
$('p').empty();
```

---

{:#eq}
| **.eq(index)** *Get the Nth element (a negative N starts counting from the end)* |
|:---|
| `index`*{Number}* *The element index (zero-based)* |
| **Returns**`{_$}`*The Nth element's LightQuery object* |

```js
// Example
$('p').eq(0);
```

---

{:#filter}
| **.filter(parameter)** *Filter elements from a selector or a function returning a `Boolean`* |
|:---|
| `parameter`*{String\|Function}* *A selector or a filtering function* |
| **Returns**`{_$}`*The filtered LightQuery object* |

```js
// Examples
$('p').filter('.red');
$('p').filter(function(){
	return $(this).hasClass('red');
});
$('p').filter(element => $(element).hasClass('red'));
```

---

{:#find}
| **.find(selector)** *Find the descendants of each element corresponding to the selector* |
|:---|
| `selector`*{String}* *The selector* |
| **Returns**`{_$}`*The corresponding descendants' LightQuery object* |

```js
// Example
$('p').find('span');
```

---

{:#first}
| **.first()** *Get the first element* |
|:---|
| **Returns**`{_$}`*The first element's LightQuery object* |

```js
// Example
$('p').first();
```

---

{:#get}
| **.get([index])** *Get one or every element* |
|:---|
| `index`*{Number}* *The element index (null to get every element)* |
| **Returns**`{Element\|Element\[\]}`*The requested element(s)* |

```js
// Examples
$('p').get();
$('p').get(0);
```

---

{:#has}
| **.has(parameter)** *Reduce the elements based on a descendant selector or descendant element* |
|:---|
| `parameter`*{String\|Element}* *The selector or element to reduce with* |
| **Returns**`{_$}`*The corresponding elements' LightQuery object* |

```js
// Examples
$('p').has('span');
$('p').has(specificSpan);
```

---

{:#hasClass}
| **.hasClass(className)** *Determine if at least one element contains the given class* |
|:---|
| `className`*{String}* *The class name* |
| **Returns**`{Boolean}`*True if an element contains the class, False otherwise* |

```js
// Example
$('p').hasClass('red');
```

---

{:#height}
| **.height()** *Get the computed height of the first element* |
|:---|
| **Returns**`{Number}`*The computed height of the first element (px)* |

```js
// Example
const height = $('p').height();
```

---

{:#hide}
| **.hide()** *Hide each element* |
|:---|
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Example
$('p').hide();
```

---

{:#html}
| **.html([html])** *Get the HTML of the first element or Set each element's HTML* |
|:---|
| `html`*{String}* *The HTML to set* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
const html = $('p').html();
$('p').html(`
	<span>This</span>
	is
	<em>an example.</em>
`);
```

---

{:#index}
| **.index()** *Get the first element's index in relation to its siblings* |
|:---|
| **Returns**`{Number}`*The index* |

```js
// Example
const elementIndex = $('p').index();
```

---

{:#insert}
| **$.insert(toInsert, position, relativeElements)** *Shorthand to insert element(s) relative to other(s)* |
|:---|
| `toInsert`*{Element\|NodeList\|Array\|String\|_$}* *The element(s) to insert* |
| `position`*{String}* *The position of the new element(s)* **Possible values:** `before|start|end|after` |
| `relativeElements`*{Element\|NodeList\|Array\|String\|_$}* *The element(s) to position from* |
| **Returns**`{_$}`* new LightQuery object containing the inserted nodes* |

```js
// Example
const elementIndex = $('p').index();
```

---

{:#insertAfter}
| **.insertAfter(target)** *Get the first element's index in relation to its siblings* |
|:---|
| `html`*{String}* *The HTML to set* |
| **Returns**`{_$}`*The index* |

```js
// Example
const elementIndex = $('p').index();
```

---