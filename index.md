---
layout: default
---

# LightQuery - 10 times smaller than jQuery (90kB => 9kB)

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

* The `LightQuery` object extends the native `Array` object, so you can use all of its methods/properties.

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

| [**.insertAfter(target)**](#insertAfter) |

| [**.insertBefore(target)**](#insertBefore) |

| [**.is(target)**](#is) |

| [**$.ajax(parameter[, settings])**](#ajax) |

| [**$.get(url[, data, success, dataType])**](#sget) |

| __NEW !__ [**$.insert(toInsert, position, relativeElements)**](#insert) |

| [**.last()**](#last) |

| [**.next([selector])**](#next) |

| [**.nextAll([selector])**](#nextAll) |

| [**.not(target)**](#not) |

| [**.off(events[, selector, handler])**](#off) |

| [**.offset()**](#offset) |

| [**.on(events[, selector], handler[, data])**](#on) |

| [**.parent([selector])**](#parent) |

| [**.parents([selector])**](#parents) |

| [**.prepend(...elements)**](#prepend) |

| [**.prependTo(targets)**](#prependTo) |

| [**.prev([selector])**](#prev) |

| [**.prevAll([selector])**](#prevAll) |

| [**.remove()**](#remove) |

| [**.removeAttr(attribute)**](#removeAttr) |

| [**.removeClass(classes)**](#removeClass) |

| [**.replaceAll(targets)**](#replaceAll) |

| [**.replaceWith(newContent)**](#replaceWith) |

| [**.scrollLeft([value])**](#scrollLeft) |

| [**.scrollTop([value])**](#scrollTop) |

| [**.serialize()**](#serialize) |

| [**.serializeArray()**](#serializeArray) |

| [**.show()**](#show) |

| [**.siblings([selector])**](#siblings) |

| [**.text([value])**](#text) |

| [**.toggle([force])**](#toggle) |

| [**.toggleClass(classes)**](#toggleClass) |

| [**.trigger(eventName)**](#trigger) |

| [**.unwrap([selector])**](#unwrap) |

| [**.val([value])**](#val) |

| [**.width()**](#width) |

| [**.wrap(wrapper)**](#wrap) |

| [**.wrapAll(wrapper)**](#wrapAll) |

### Methods not included

| **.addBack()** *Use more appropriate selectors instead* |

| **.ajaxComplete()** *Use **$.ajax()** instead* |

| **.ajaxError()** *Use **$.ajax()** instead* |

| **.ajaxSend()** *Use **$.ajax()** instead* |

| **.ajaxStart()** *Use **$.ajax()** instead* |

| **.ajaxStop()** *Use **$.ajax()** instead* |

| **.ajaxSuccess()** *Use **$.ajax()** instead* |

| **.andSelf()** *Use more appropriate selectors instead* |

| **.animate()** *Use CSS3 animations instead* |

| **.change()** *Use **.on('change')** or **.trigger('change')** instead* |

| **.clearQueue()** *There is no queue* |

| **.click()** *Use **.on('click')** or **.trigger('click')** instead* |

| **.data()** *Use **.attr('data-...')** instead* |

| **.dblclick()** *Use **.on('dblclick')** or **.trigger('dblclick')** instead* |

| **.delay()** *Use **setTimeout()** or CSS3 animations instead* |

| **.delegate()** *Use **.on()** instead* |

| **.dequeue()** *There is no queue* |

| **.die()** *Use **.off()** instead* |

| **.end()** *Use another query instead* |

| **.error()** *Use **.on('error')** instead* |

| **.fadeIn()** *Use classes and CSS transitions instead* |

| **.fadeOut()** *Use classes and CSS transitions instead* |

| **.fadeTo()** *Use classes and CSS transitions instead* |

| **.fadeToggle()** *Use classes and CSS transitions instead* |

| **.finish()** *Use CSS3 animations instead* |

| **.focus()** *Use **.on('focus')** or **.trigger('focus')** instead* |

| **.focusin()** *Use **.on('focusin')** instead* |

| **.focusout()** *Use **.on('focusout')** instead* |

| **.hover()** *Use **.on('mouseenter')** and **.on('mouseleave')** instead* |

| **.innerHeight()** *Use **.height()** instead* |

| **.innerWidth()** *Use **.width()** instead* |

| **$.each()** *Use **for ... of** or **.forEach()** instead* |

| **$.extend()** *Use **Object.assign()** instead* |

| **$.fn.extend()** *Use **_$.prototype.XXX** instead* |

| **$.getJSON()** *Use **$.ajax()** instead* |

| **$.getScript()** *Use **$.ajax()** instead* |

| **$.globalEval()** *Use proper coding instead* |

| **$.post()** *Use **$.ajax()** instead* |

| **.queue()** *There is no queue* |

| **.keydown()** *Use **.on('keydown')** or **.trigger('keydown')** instead* |

| **.keypress()** *Use **.on('keypress')** or **.trigger('keypress')** instead* |

| **.keyup()** *Use **.on('keyup')** or **.trigger('keyup')** instead* |

| **.live()** *Use **.on()** instead* |

| **.load()** *Use **$.ajax()** and **.html()** instead* |

| **.mousedown()** *Use **.on('mousedown')** or **.trigger('mousedown')** instead* |

| **.mouseenter()** *Use **.on('mouseenter')** or **.trigger('mouseenter')** instead* |

| **.mouseleave()** *Use **.on('mouseleave')** or **.trigger('mouseleave')** instead* |

| **.mousemove()** *Use **.on('mousemove')** or **.trigger('mousemove')** instead* |

| **.mouseout()** *Use **.on('mouseout')** or **.trigger('mouseout')** instead* |

| **.mouseover()** *Use **.on('mouseover')** or **.trigger('mouseover')** instead* |

| **.mouseup()** *Use **.on('mouseup')** or **.trigger('mouseup')** instead* |

| **.nextUntil()** *Use better queries instead* |

| **.offsetParent()** *Why would you ever need this* |

| **.one()** *Use **.on()** and **.off()** instead* |

| **.outerHeight()** *Use **.height()** and **.css()** instead* |

| **.outerWidth()** *Use **.width()** and **.css()** instead* |

| **.parentsUntil()** *Use **.parents()** and **.not()** instead* |

| **.prevUntil()** *Use better queries instead* |

| **.promise()** *There is no queue* |

| **.prop()** *Use **.attr()** instead* |

| **.pushStack()** *There is no stack* |

| **.queue()** *There is no queue* |

| **.ready()** *Use **$(function(){ ... })** or **$(() => { ... })** instead* |

| **.removeData()** *Use **.removeAttr()** instead* |

| **.removeProp()** *Use **.removeAttr()** instead* |

| **.resize()** *Use **.on('resize')** or **.trigger('resize')** instead* |

| **.scroll()** *Use **.on('scroll')** or **.trigger('scroll')** instead* |

| **.select()** *Use **.on('select')** or **.trigger('select')** instead* |

| **.size()** *Use **.length** instead* |

| **.slideDown()** *Use classes and CSS transitions instead* |

| **.slideToggle()** *Use classes and CSS transitions instead* |

| **.slideUp()** *Use classes and CSS transitions instead* |

| **.stop()** *Use CSS3 animations instead* |

| **.submit()** *Use **.on('submit')** or **.trigger('submit')** instead* |

| **.toArray()** *Use **.get()** instead* |

| **.triggerHandler()** *Use **.trigger()** instead* |

| **.unbind()** *Use **.off()** instead* |

| **.undelegate()** *Use **.off()** instead* |

| **.unload()** *Use **.on('unload')** instead* |

| **.wrapInner()** *Use **.children().wrapAll()** instead* |

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

{:#insertAfter}
| **.insertAfter(target)** *Insert each element after the target(s)* |
|:---|
| `target`*{Element\|NodeList\|Array\|String\|_$}* *The target(s)* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').insertAfter('aside');
$('p').insertAfter(section);
```

---

{:#insertBefore}
| **.insertBefore(target)** *Insert each element before the target(s)* |
|:---|
| `target`*{Element\|NodeList\|Array\|String\|_$}* *The target(s)* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').insertBefore('aside');
$('p').insertBefore(section);
```

---

{:#is}
| **.is(target)** *Check if at least one of the elements matches the target* |
|:---|
| `target`*{String\|Function\|Element\|_$}* *The target or Function to match against* |
| **Returns**`{Boolean}`*True if at least one of the elements matches the target, False otherwise* |

```js
// Examples
$('p').is('.red');
$('p').is(function(){
  return $(this).hasClass('red');
});
$('p').is(p => $(p).hasClass('red'));
```

---

{:#ajax}
| **$.ajax(parameter[, settings])** *Send an AJAX request* |
|:---|
| `parameter`*{String\|Object}* *URL of the request or settings object* |
| `settings`*{Object}* *Settings object* |
| `settings.data`*{Object\|FormData}* *Request data* |
| `settings.dataType`*{String}* *Response data type* **Default:** `json`|
| `settings.error`*{Function}* *Callback for the error event* |
| `settings.headers`*{Object.&lt;String, String&gt;}* *Request headers* |
| `settings.method`*{String}* *Request headers* **Default:** `GET`|
| `settings.success`*{Function}* *Callback for the success event* |
| `settings.url`*{String}* *Request URL* |
| **Returns**`{XMLHttpRequest}`*The XMLHttpRequest* |

```js
// Examples
$.ajax('https://whatev.er', {
  data: {
    example: 1,
    test: 'Example'
  },
  dataType: 'text',
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST',
  success: response => {
    console.log(response);
  },
  error: response => {
    console.log(response);
  }
});
$.ajax({
  url: 'https://whatev.er',
  ...
});
```

---

{:#sget}
| **$.get(url[, data, success, dataType])** *Shorthand for sending a GET AJAX request* |
|:---|
| `url`*{String}* *URL of the request or settings object* |
| `data`*{Object}* *Request data* |
| `success`*{Function}* *Callback for the success event* |
| `dataType`*{String}* *Response data type* |
| **Returns**`{XMLHttpRequest}`*The XMLHttpRequest* |

```js
// Example
$.get('https://whatev.er', {
  example: 1,
  test: 'Example'
}, response => {
  console.log(response);
}, 'text');
```

---

{:#insert}
| **$.insert(toInsert, position, relativeElements)** *Shorthand to insert element(s) relative to other(s)* |
|:---|
| `toInsert`*{Element\|NodeList\|Array\|String\|_$}* *The element(s) to insert* |
| `position`*{String}* *The position of the new element(s)* **Possible values:** `before|start|end|after` |
| `relativeElements`*{Element\|NodeList\|Array\|String\|_$}* *The element(s) to position from* |
| **Returns**`{_$}`*A new LightQuery object containing the inserted nodes* |

```js
// Examples
$.insert('p', 'before', 'aside');
$.insert(element, 'start', 'aside');
$.insert('p', 'end', elements);
$.insert('p', 'after', 'aside');
```

---

{:#last}
| **.last()** *Get the last element* |
|:---|
| **Returns**`{_$}`*The last element's LightQuery object* |

```js
// Example
$('p').last();
```

---

{:#next}
| **.next([selector])** *Get next immediate sibling. If a selector is provided, doesn't return the sibling if it doesn't match* |
|:---|
| `selector`*{String}* *The sibling selector* |
| **Returns**`{_$}`*The next immediate sibling's LightQuery object* |

```js
// Examples
$('p').next();
$('p').next('.red');
```

---

{:#nextAll}
| **.nextAll([selector])** *Get next siblings. If a selector is provided, doesn't return the siblings if they don't match* |
|:---|
| `selector`*{String}* *The sibling selector* |
| **Returns**`{_$}`*The next siblings' LightQuery object* |

```js
// Examples
$('p').nextAll();
$('p').nextAll('.red');
```

---

{:#not}
| **.not(target)** *Remove elements matching the target from the current LightQuery object* |
|:---|
| `target`*{Element\|NodeList\|Array\|String\|Function\|_$}* *The target or a Function returning a `Boolean`* |
| **Returns**`{_$}`*LightQuery Object containing the elements not matching the target* |

```js
// Examples
$('p').not('.blue');
$('p').not(function(){
	return !$(this).hasClass('blue');
});
$('p').not(p => !$(p).hasClass('blue'));
```

---

{:#off}
| **.off(events[, selector, handler])** *Remove an event handler* |
|:---|
| `events`*{String}* *The events to stop listening to* |
| `selector`*{String}* *The selector matching the one used with [`.on()`](#on)* |
| `handler`*{Function}* *The handler used with [`.on()`](#on)* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').off('click');
$('p').off('click dblclick');
$('p').off('click', 'span');
$('p').off('click', 'span', e => {
  ...
});
```

---

{:#offset}
| **.offset()** *Get the coordinates of the first element* |
|:---|
| **Returns**`{DOMRect}`*Object containing the coordinates of the first element. **Use .left, .top*** |

```js
// Examples
const left = $('p').offset().left;
const top = $('p').offset().top;
const {
  left: leftOffset,
  top: topOffset
} = $('p').offset();
```

---

{:#on}
| **.on(events[, selector], handler[, data])** *Add an event handler* |
|:---|
| `events`*{String}* *The events to start listening to* |
| `selector`*{String}* *The selector used for event delegation* |
| `handler`*{Function}* *The handler for the event(s)* |
| `data`*{Object}* *The data to be passed the the handler* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').on('click', function(){
  console.log($(this));
});
$('p').on('click', 'span', function(){
  console.log($(this));
});
```

---

{:#parent}
| **.parent([selector])** *Get the parent of each element. If a selector is passed, filter those parents* |
|:---|
| `selector`*{String}* *The parent selector* |
| **Returns**`{_$}`*The parent(s)' LightQuery object* |

```js
// Example
$('p').parent();
```

---

{:#parents}
| **.parent([selector])** *Get the ancestors of each element. If a selector is passed, filter those parents* |
|:---|
| `selector`*{String}* *The parents selector* |
| **Returns**`{_$}`*The parent(s)' LightQuery object* |

```js
// Example
$('p').parents();
```

---

{:#prepend}
| **.prepend(...elements)** *Prepend content to the end of each element* |
|:---|
| `elements`*{Element\[\]\|NodeList\[\]\|Array\[\]\|String\[\]\|_$\[\]}* *Elements to be prepended* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').prepend('<em>Example</em>');
$('p').prepend('span.red');
```

---

{:#prependTo}
| **.prependTo(targets)** *Prepend each element before the targets* |
|:---|
| `targets`*{Element\|NodeList\|Array\|String\|_$}* *Elements to be prepended to* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').prependTo('div');
$('p').prependTo(section);
```

---

{:#prev}
| **.prev([selector])** *Get previous immediate sibling. If a selector is provided, doesn't return the sibling if it doesn't match* |
|:---|
| `selector`*{String}* *The sibling selector* |
| **Returns**`{_$}`*The previous immediate sibling LightQuery object* |

```js
// Examples
$('p').prev();
$('p').prev('ul');
```

---

{:#prevAll}
| **.prevAll([selector])** *Get previous siblings. If a selector is provided, doesn't return the siblings if they don't match* |
|:---|
| `selector`*{String}* *The siblings selector* |
| **Returns**`{_$}`*The previous siblings LightQuery object* |

```js
// Examples
$('p').prevAll();
$('p').prevAll('ul');
```

---

{:#remove}
| **.remove()** *Remove each element from the DOM* |
|:---|
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Example
$('p').remove();
```

---

{:#removeAttr}
| **.removeAttr(attribute)** *Remove an attribute from each element* |
|:---|
| `attribute`*{String}* *Attribute name* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Example
$('p').removeAttr('title');
```

---

{:#removeClass}
| **.removeClass(classes)** *Remove class(es) from each element* |
|:---|
| `classes`*{String}* *Space separated classes to remove* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').removeClass('red');
$('p').removeClass('blue flash');
```

---

{:#replaceAll}
| **.replaceAll(targets)** *Replace each target with each element* |
|:---|
| `targets`*{Element\|NodeList\|Array\|String\|_$}* *The targets* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p.new').replaceAll('p.old');
$('<p>New content</p>').replaceAll('p');
```

---

{:#replaceWith}
| **.replaceWith(newContent)** *Replace each element with the new content* |
|:---|
| `newContent`*{Element\|NodeList\|Array\|String\|_$}* *The new content* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p.old').replaceWith('p.new');
$('p').replaceWith('<p>New content</p>');
```

---

{:#scrollLeft}
| **.scrollLeft([value])** *Get the horizontal scroll value of the first element or set the horizontal scroll value for each element* |
|:---|
| `value`*{Number}* *The new horizontal scroll value* |
| **Returns**`{Number\|_$}`*The horizontal scroll value of the first element or the current LightQuery object* |

```js
// Examples
$('p').scrollLeft();
$('p').scrollLeft(420);
```

---

{:#scrollTop}
| **.scrollTop([value])** *Get the vertical scroll value of the first element or set the vertical scroll value for each element* |
|:---|
| `value`*{Number}* *The new vertical scroll value* |
| **Returns**`{Number\|_$}`*The vertical scroll value of the first element or the current LightQuery object* |

```js
// Examples
$('p').scrollTop();
$('p').scrollTop(420);
```

---

{:#serialize}
| **.serialize()** *Encode each form element as a string* |
|:---|
| **Returns**`{String}`*The serialized value of each element* |

```js
// Examples
$('form').serialize();
$('input').serialize();
```

---

{:#serializeArray}
| **.serializeArray()** *Encode each form element as an array of names and values* |
|:---|
| **Returns**`{Object[]}`*An array of names and values* |

```js
// Examples
$('form').serializeArray();
$('input').serializeArray();
```

---

{:#show}
| **.show()** *Show each element* |
|:---|
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Example
$('p').show();
```

---

{:#siblings}
| **.siblings([selector])** *Get all siblings. If a selector is provided, doesn't return the siblings if they don't match* |
|:---|
| `selector`*{String}* *The sibling selector* |
| **Returns**`{_$}`*The siblings LightQuery object* |

```js
// Examples
$('p').siblings();
$('p').siblings('div');
```

---

{:#text}
| **.text([value])** *Get/Set the text of each element* |
|:---|
| `value`*{String\|Function}* *Text to set or Function returning the text to set* |
| **Returns**`{String\|_$}`*The text of each element or the current LightQuery object* |

```js
// Examples
$('p').text();
$('p').text('Example');
$('p').text(function(){
  return 'Example ' + this.id;
});
```

---

{:#toggle}
| **.toggle([force])** *Toggle each element's display* |
|:---|
| `force`*{Boolean}* *True to show, False to hide* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').toggle();
$('p').toggle(true);
$('p').toggle(false);
```

---

{:#toggleClass}
| **.toggleClass(classes)** *Toggle class(es) for each element* |
|:---|
| `classes`*{String}* *Space separated classes to toggle* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').toggleClass('red');
$('p').toggleClass('blue flash');
```

---

{:#trigger}
| **.trigger(eventName)** *Trigger an event for each element* |
|:---|
| `eventName`*{String}* *Event name* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Example
$('p').trigger('click');
```

---

{:#unwrap}
| **.unwrap([selector])** *Remove the direct parents of each element, if they match the selector* |
|:---|
| `selector`*{String}* *The parent selector* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').unwrap();
$('p').unwrap('div');
```

---

{:#val}
| **.val([value])** *Get the value of the first element or set the value of each element* |
|:---|
| `value`*{Object}* *The value to set* |
| **Returns**`{String\|_$}`*The value of the first element or the current LightQuery object* |

```js
// Examples
$('#email').val();
$('#email').val('what@ev.er');
```

---

{:#width}
| **.width()** *Get the computed width of the first element* |
|:---|
| **Returns**`{Number}`*The computed width of the first element (px)* |

```js
// Example
const width = $('div').width();
```

---

{:#wrap}
| **.wrap(wrapper)** *Wrap each element* |
|:---|
| `wrapper`*{Element\|NodeList\|Array\|String\|_$}* *The wrapper* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').wrap('<div></div>');
$('p').wrap('section');
$('p').wrap(section);
```

---

{:#wrapAll}
| **.wrapAll(wrapper)** *Wrap all elements* |
|:---|
| `wrapper`*{Element\|NodeList\|Array\|String\|_$}* *The wrapper* |
| **Returns**`{_$}`*The current LightQuery object* |

```js
// Examples
$('p').wrapAll('<div></div>');
$('p').wrapAll('section');
$('p').wrapAll(section);
```

---