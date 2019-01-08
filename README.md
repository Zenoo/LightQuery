# LightQuery

A lightweight jQuery alternative.

### Doc

* **Installation**

Simply import `light-query.min.js` into your HTML.
```
<script src="https://gitcdn.link/repo/Zenoo/LightQuery/master/light-query.min.js"></script>	
```

* **Methods**

  * `.add()`
  * `.addClass()`
  * `.after()`
  * `.append()`
  * `.appendTo()`
  * `.before()`
  * `.blur()`
  * `.children()`
  * `.clone()`
  * `.closest()`
  * `.css()`
  * `.detach()`
  * `.each()`
  * `.empty()`
  * `.eq()`
  * `.filter(callback)` *The callback follows `function(item, index){ ... }`*
  * `.first()`
  * `.get()`
  * `.has()`
  * `.hasClass()`
  * `.height()`
  * `.hide()`
  * `.html()`
  * `.index()`


* **Not included**

  * `.addBack()` *Use more appropriate selectors instead*
  * `.ajaxComplete()`
  * `.ajaxError()`
  * `.ajaxSend()`
  * `.ajaxStart()`
  * `.ajaxStop()`
  * `.ajaxSuccess()`
  * `.andSelf()` *Use more appropriate selectors instead*
  * `.animate()` *Use CSS3 animations instead*
  * `.change()` *Use `.on('change')` or `.trigger('change')` instead*
  * `.clearQueue()` *There is no queue*
  * `.click()` *Use `.on('click')` or `.trigger('click')` instead*
  * `.data()` *Use `.attr('data-...')` instead*
  * `.dblclick()` *Use `.on('dblclick')` or `.trigger('dblclick')` instead*
  * `.delay()` *Use `setTimeout()` or CSS3 animations instead*
  * `.delegate()` *Use `.on()` instead*
  * `.dequeue()` *There is no queue*
  * `.die()` *Use `.off()` instead*
  * `.end()` *Use another query instead*
  * `.error()` *Use `.on('error')` instead*
  * `.fadeIn()` *Use classes and CSS transitions instead*
  * `.fadeOut()` *Use classes and CSS transitions instead*
  * `.fadeTo()` *Use classes and CSS transitions instead*
  * `.fadeToggle()` *Use classes and CSS transitions instead*
  * `.finish()` *Use CSS3 animations instead*
  * `.focus()` *Use `.on('focus')` or `.trigger('focus')` instead*
  * `.focusin()` *Use `.on('focusin')` instead*
  * `.focusout()` *Use `.on('focusout')` instead*
  * `.hover()` *Use `.on('mouseenter')` and `.on('mouseleave')` instead*

## Authors

* **Zenoo** - *Initial work* - [Zenoo.fr](https://zenoo.fr)