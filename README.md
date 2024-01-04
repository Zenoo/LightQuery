# LightQuery - 10 times smaller than jQuery (90kB => 9kB)

This is a complete rewrite of the well-known jQuery library.

Every method has been rewritten or replaced by another method.

### Doc

See the [documentation](https://zenoo.github.io/LightQuery/) for more

* **Installation**

Simply import `light-query.min.js` into your HTML by downloading it or using a CDN.
```
<script src="https://gitcdn.link/repo/Zenoo/LightQuery/master/light-query.min.js"></script>	
```

* **Usage**

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

* **Methods**

The full API documentation is available on [https://zenoo.github.io/LightQuery/](https://zenoo.github.io/LightQuery/).

  * **`.add()`**
  * **`.addClass()`**
  * **`.after()`**
  * **`.append()`**
  * **`.appendTo()`**
  * **`.before()`**
  * **`.blur()`**
  * **`.children()`**
  * **`.clone()`**
  * **`.closest()`**
  * **`.css()`**
  * **`.detach()`**
  * **`.each()`**
  * **`.empty()`**
  * **`.eq()`**
  * **`.filter(callback)`** *The callback follows `function(item, index){ ... }`*
  * **`.first()`**
  * **`.get()`**
  * **`.has()`**
  * **`.hasClass()`**
  * **`.height()`**
  * **`.hide()`**
  * **`.html()`**
  * **`.index()`**
  * **`.insertAfter()`**
  * **`.insertBefore()`**
  * **`.is()`**
  * **`$.ajax()`** *Uses [AjaxSender](https://github.com/Zenoo/ajax-sender)*
  * **`$.get()`** *$.ajax() shorthand for simple GET requests*
  * **`$.insert()`**
  * **`.last()`**
  * **`.next()`**
  * **`.nextAll()`**
  * **`.not()`**
  * **`.off()`**
  * **`.offset()`**
  * **`.parent()`**
  * **`.parents()`**
  * **`.prepend()`**
  * **`.prependTo()`**
  * **`.prev()`**
  * **`.prevAll()`**
  * **`.remove()`**
  * **`.removeAttr()`**
  * **`.removeClass()`**
  * **`.replaceAll()`**
  * **`.replaceWith()`**
  * **`.scrollLeft()`**
  * **`.scrollTop()`**
  * **`.serialize()`**
  * **`.serializeArray()`**
  * **`.show()`**
  * **`.siblings()`**
  * **`.slice()`**
  * **`.text()`**
  * **`.toggle()`**
  * **`.toggleClass()`**
  * **`.trigger()`**
  * **`.unwrap()`**
  * **`.val()`**
  * **`.width()`**
  * **`.wrap()`**
  * **`.wrapAll()`**


* **Not included**

  * **`.addBack()`** *Use more appropriate selectors instead*
  * **`.ajaxComplete()`** *Use `$.ajax()` instead*
  * **`.ajaxError()`** *Use `$.ajax()` instead*
  * **`.ajaxSend()`** *Use `$.ajax()` instead*
  * **`.ajaxStart()`** *Use `$.ajax()` instead*
  * **`.ajaxStop()`** *Use `$.ajax()` instead*
  * **`.ajaxSuccess()`** *Use `$.ajax()` instead*
  * **`.andSelf()`** *Use more appropriate selectors instead*
  * **`.animate()`** *Use CSS3 animations instead*
  * **`.change()`** *Use `.on('change')` or `.trigger('change')` instead*
  * **`.clearQueue()`** *There is no queue*
  * **`.click()`** *Use `.on('click')` or `.trigger('click')` instead*
  * **`.data()`** *Use `.attr('data-...')` instead*
  * **`.dblclick()`** *Use `.on('dblclick')` or `.trigger('dblclick')` instead*
  * **`.delay()`** *Use `setTimeout()` or CSS3 animations instead*
  * **`.delegate()`** *Use `.on()` instead*
  * **`.dequeue()`** *There is no queue*
  * **`.die()`** *Use `.off()` instead*
  * **`.end()`** *Use another query instead*
  * **`.error()`** *Use `.on('error')` instead*
  * **`.fadeIn()`** *Use classes and CSS transitions instead*
  * **`.fadeOut()`** *Use classes and CSS transitions instead*
  * **`.fadeTo()`** *Use classes and CSS transitions instead*
  * **`.fadeToggle()`** *Use classes and CSS transitions instead*
  * **`.finish()`** *Use CSS3 animations instead*
  * **`.focus()`** *Use `.on('focus')` or `.trigger('focus')` instead*
  * **`.focusin()`** *Use `.on('focusin')` instead*
  * **`.focusout()`** *Use `.on('focusout')` instead*
  * **`.hover()`** *Use `.on('mouseenter')` and `.on('mouseleave')` instead*
  * **`.innerHeight()`** *Use `.height()` instead*
  * **`.innerWidth()`** *Use `.width()` instead*
  * **`$.each()`** *Use `for ... of` or `.forEach()` instead*
  * **`$.extend()`** *Use `Object.assign()` instead*
  * **`$.fn.extend()`** *Use `_$.prototype.XXX` instead*
  * **`$.getJSON()`** *Use `$.ajax()` instead*
  * **`$.getScript()`** *Use `$.ajax()` instead*
  * **`$.globalEval()`** *Use proper coding instead*
  * **`$.post()`** *Use `$.ajax()` instead*
  * **`.queue()`** *There is no queue*
  * **`.keydown()`** *Use `.on('keydown')` or `.trigger('keydown')` instead*
  * **`.keypress()`** *Use `.on('keypress')` or `.trigger('keypress')` instead*
  * **`.keyup()`** *Use `.on('keyup')` or `.trigger('keyup')` instead*
  * **`.live()`** *Use `.on()` instead*
  * **`.load()`** *Use `$.ajax()` and `.html()` instead*
  * **`.mousedown()`** *Use `.on('mousedown')` or `.trigger('mousedown')` instead*
  * **`.mouseenter()`** *Use `.on('mouseenter')` or `.trigger('mouseenter')` instead*
  * **`.mouseleave()`** *Use `.on('mouseleave')` or `.trigger('mouseleave')` instead*
  * **`.mousemove()`** *Use `.on('mousemove')` or `.trigger('mousemove')` instead*
  * **`.mouseout()`** *Use `.on('mouseout')` or `.trigger('mouseout')` instead*
  * **`.mouseover()`** *Use `.on('mouseover')` or `.trigger('mouseover')` instead*
  * **`.mouseup()`** *Use `.on('mouseup')` or `.trigger('mouseup')` instead*
  * **`.nextUntil()`** *Use better queries instead*
  * **`.offsetParent()`** *Why would you ever need this*
  * **`.one()`** *Use `.on()` and `.off()` instead*
  * **`.outerHeight()`** *Use `.height()` and `.css()` instead*
  * **`.outerWidth()`** *Use `.width()` and `.css()` instead*
  * **`.parentsUntil()`** *Use `.parents()` and `.not()` instead*
  * **`.prevUntil()`** *Use better queries instead*
  * **`.promise()`** *There is no queue*
  * **`.prop()`** *Use `.attr()` instead*
  * **`.pushStack()`** *There is no stack*
  * **`.queue()`** *There is no queue*
  * **`.ready()`** *Use `$(function(){ ... })` or `$(() => { ... })` instead*
  * **`.removeData()`** *Use `.removeAttr()` instead*
  * **`.removeProp()`** *Use `.removeAttr()` instead*
  * **`.resize()`** *Use `.on('resize')` or `.trigger('resize')` instead*
  * **`.scroll()`** *Use `.on('scroll')` or `.trigger('scroll')` instead*
  * **`.select()`** *Use `.on('select')` or `.trigger('select')` instead*
  * **`.size()`** *Use `.length` instead*
  * **`.slideDown()`** *Use classes and CSS transitions instead*
  * **`.slideToggle()`** *Use classes and CSS transitions instead*
  * **`.slideUp()`** *Use classes and CSS transitions instead*
  * **`.stop()`** *Use CSS3 animations instead*
  * **`.submit()`** *Use `.on('submit')` or `.trigger('submit')` instead*
  * **`.toArray()`** *Use `.get()` instead*
  * **`.triggerHandler()`** *Use `.trigger()` instead*
  * **`.unbind()`** *Use `.off()` instead*
  * **`.undelegate()`** *Use `.off()` instead*
  * **`.unload()`** *Use `.on('unload')` instead*
  * **`.wrapInner()`** *Use `.children().wrapAll()` instead*

## Authors

* **Zenoo** - *Initial work* - [Zenoo.fr](https://zenoo.fr)