/* exported $ */
/* global AjaxSender */

/**
 * The AjaxSender class
 * @external AjaxSender
 * @see {@link https://zenoo.github.io/ajax-sender/AjaxSender.html}
 */

 
/**
 * Events holder
 * @type {Object.<String, Object[]>}
 * @private
 */
const __$_events__ = {}; // eslint-disable-line camelcase

/**
 * Default elements display value
 * @type {Object.<String, String>}
 * @private
 */
const __$_default_display_inline__ = [ // eslint-disable-line camelcase
	'a',
	'i',
	'script',
	'abbr',
	'iframe',
	'select',
	'acronym',
	'img',
	'slot',
	'audio',
	'input',
	'small',
	'b',
	'ins',
	'span',
	'bdi',
	'kbd',
	'strong',
	'bdo',
	'label',
	'sub',
	'big',
	'map',
	'sup',
	'br',
	'mark',
	'svg',
	'button',
	'meter',
	'template',
	'canvas',
	'noscript',
	'textarea',
	'cite',
	'object',
	'time',
	'code',
	'output',
	'u',
	'data',
	'picture',
	'tt',
	'datalist',
	'progress',
	'var',
	'del',
	'q',
	'video',
	'dfn',
	'ruby',
	'wbr',
	'em',
	's',
	'embed',
	'samp'
];

/**
 * LightQuery holder class
 * @type {Element[]}
 * @extends Array
 */
class _$ extends Array{
	/**
	 * 
	 * @param {Element|NodeList|Array|String|Document|Window|Function|_$} parameter The parameter to initialize the _$ object with
	 * @param {Element}                                                   [context] Potential query context
	 */
	constructor(parameter, context){
		super();

		if(parameter instanceof Function){
			window.addEventListener('load', () => {
				Reflect.apply(parameter, null, []);
			});
		}else{
			this.push(..._$._STD(parameter, context));
		}
	}

	/**
	 * Standardizes any input to an Element array
	 * @param   {Element|NodeList|Array|String|Document|Window|_$} parameter Element to standardize
	 * @param   {Element}                                          [context] Potential query context
	 * @returns {Element[]}                                                  Resulting Element array
	 * @private
	 */
	static _STD(parameter, context){
		const result = [];

		// Element | Document | Window passed as a parameter
		if(parameter instanceof Element || parameter instanceof Document || parameter instanceof Window){
			result.push(parameter);

		// Array-like passed as a parameter
		}else if(parameter instanceof _$ || parameter instanceof NodeList || parameter instanceof Array){
			result.push(...parameter);
			
		// String passed as a parameter
		}else if(typeof parameter == 'string'){
			// Valid selector
			try {
				// Check the context before querying globally
				const elements = (context || document).querySelectorAll(parameter);

				result.push(...elements);
			// Invalid selector
			} catch (error) {
				const template = document.createElement('template');

				// Try to create a DOM from the string
				template.innerHTML = parameter;

				result.push(...template.content.childNodes);
			}
		}

		return result;
	}

	/**
	 * Converts element(s) to a DocumentFragment
	 * @param {Element[]} elements 
	 * @returns {DocumentFragment}
	 * @private
	 */
	static _toFragment(elements){
		const
			fragment = document.createDocumentFragment(),
			elementArray = [...elements];

		while(elementArray[0]){
			fragment.appendChild(elementArray.shift());
		}

		return fragment;
	}

	/**
	 * Add elements to the current _$ elements
	 * @param   {Element|NodeList|Array|String|_$} parameter Element(s) to add
	 * @param   {Element}                          [context] Context of the potential query
	 * @returns {_$}                                         The current object
	 */
	add(parameter, context){
		if(parameter instanceof _$){
			this.push(...parameter);
		}else{
			this.push(..._$._STD(parameter, context));
		}

		return this;
	}

	/**
	 * Add class(es) to each element
	 * @param   {String} parameter Space separated classes to add
	 * @returns {_$}                        The current object
	 */
	addClass(parameter){
		this.forEach(item => {
			item.classList.add(...parameter.split(/\s+/));
		});

		return this;
	}

	/**
	 * Insert content after each element
	 * @param  {Element|NodeList|Array|String|_$|Element[]|NodeList[]|Array[]|String[]|_$[]} elements Elements to be inserted
	 * @returns {_$}                                                                                  The current object
	 */
	after(...elements){
		this.forEach(item => {
			let previousElement = item;

			elements.forEach(newElement => {
				previousElement = _$.insert(newElement, 'after', previousElement);
			});
		});

		return this;
	}

	/**
	 * Append content to the end of each element
	 * @param   {Element[]|NodeList[]|Array[]|String[]|_$[]} elements Elements to be appended
	 * @returns {_$}                                                  The current object
	 */
	append(...elements){
		this.forEach(item => {
			elements.forEach(newElement => {
				_$.insert(newElement, 'end', item);
			});
		});

		return this;
	}

	/**
	 * Append each element to the end of the targets
	 * @param   {Element|NodeList|Array|String|_$} targets Elements to be appended to
	 * @returns {_$}                                       The current object
	 */
	appendTo(targets){
		_$.insert(this, 'end', targets);

		return this;
	}

	/**
	 * Set/Get an attribute for each element
	 * @param   {String}              name    The attribute name
	 * @param   {String|Number|null}  [value] The attribute value
	 * @returns {_$|String}                   The current object or the value of the attribute
	 */
	attr(name, value){
		// Getter
		if(typeof value === 'undefined'){
			return this.length ? this[0].getAttribute(name) : null;
		}

		// Setter
		this.forEach(item => {
			item.setAttribute(name, value);
		});

		return this;
	}

	/**
	 * Insert content before each element
	 * @param   {Element[]|NodeList[]|Array[]|String[]|_$[]} elements Elements to be inserted
	 * @returns {_$}                                                  The current object
	 */
	before(...elements){
		// For each current element
		this.forEach(item => {
			// For each new element
			elements.forEach(newElement => {
				_$.insert(newElement, 'before', item);
			});
		});

		return this;
	}

	/**
	 * Force the focus out of each element
	 * @returns {_$} The current object
	 */
	blur(){
		this.forEach(item => {
			item.blur();
		});

		return this;
	}

	/**
	 * Get the children of each element
	 * @param   {String} [selector] An optional filter
	 * @returns {_$}                The current object's children
	 */
	children(selector){
		const children = [];

		this.forEach(item => {
			[...item.children].forEach(child => {
				if(!selector || child.matches(selector)) children.push(child);
			});
		});

		return new _$([...new Set(children)]);
	}

	/**
	 * Clone each element
	 * @param   {Boolean}      [deep=true] Deep clone the elements ?
	 * @returns {_$}                       A clone of the previous object
	 */
	clone(deep=true){
		return new _$(this.map(item => item.cloneNode(deep)));
	}

	/**
	 * Get the closest (self-included) parent matching the selector for each element
	 * @param   {String} selector The selector
	 * @returns {_$}              A new LightQuery object
	 */
	closest(selector){
		return new _$(this.map(item => item.closest(selector)).filter(item => item));
	}

	/**
	 * Get the children of each element (including text nodes)
	 * @returns {_$} A LightQuery object containing the child nodes
	 */
	contents(){
		return new _$(this.reduce((acc, item) => {
			acc.push(...item.childNodes);

			return acc;
		}, []));
	}

	/**
	 * Set/Get a CSS property
	 * @param   {String|Object} parameter The CSS property name or an object containing every CSS properties to be changed
	 * @param   {String}        [value]   The CSS property value
	 * @returns {_$}                      The current object
	 */
	css(parameter, value){
		// Simple String way
		if(typeof parameter == 'string'){
			if(value){
				this.forEach(item => {
					item.style[parameter] = value;
				});
			}else{
				return this.length ? this[0].style[parameter] || getComputedStyle(this[0])[parameter] : null;
			}
		// Object way
		}else{
			this.forEach(item => {
				Object.entries(parameter).forEach(([key, val]) => {
					item.style[key] = val;
				});
			});
		}
		
		return this;
	}

	/**
	 * Remove each element from the DOM, to be reused later
	 * @returns {_$} The current object
	 */
	detach(){
		this.forEach(item => {
			item.parentElement.removeChild(item);
		});

		return this;
	}

	/**
	 * Iterate over each element
	 * Inside this method, `this` corresponds to the current element
	 * @param   {Function} callback The callback function
	 * @returns {_$}                The current object
	 */
	each(callback){
		this.forEach((item, index) => {
			Reflect.apply(callback, item, [index, item]);
		});

		return this;
	}

	/**
	 * Remove all child nodes of each element
	 * @returns {_$} The current object
	 */
	empty(){
		this.forEach(item => {
			item.innerHTML = '';
		});

		return this;
	}

	/**
	 * Get the Nth element (a negative N starts counting from the end)
	 * @param   {Number} index The element index
	 * @returns {_$}           The Nth element's object
	 */
	eq(index){
		return this.length ? new _$(this[index >= 0 ? index : this.length + index]) : new _$([]);
	}

	/**
	 * Filter elements from a selector or a function returning a Boolean
	 * @param   {String|Function} parameter A selector or a filtering function
	 * @returns {_$}                        The filtered object
	 */
	filter(parameter){
		const filtered = [];

		this.forEach((item, index) => {
			// Filter by function
			if(parameter instanceof Function){
				if(Reflect.apply(parameter, item, [item, index])) filtered.push(item);
			// Filter by selector
			}else if(item.matches(parameter)) filtered.push(item);
		});

		return new _$([...new Set(filtered)]);
	}

	/**
	 * Find descendants of each element corresponding to the selector
	 * @param   {String} selector The selector
	 * @returns {_$}              The corresponding descendants' object
	 */
	find(selector){
		const descendants = [];

		this.forEach(item => {
			descendants.push(...item.querySelectorAll(selector));
		});

		return new _$([...new Set(descendants)]);
	}

	/**
	 * Get the first element
	 * @returns {_$}   The first element's object
	 */
	first(){
		return this.eq(0);
	}

	/**
	 * Get one or every element
	 * @param   {Number} [index]    The element index (null to get every element)
	 * @returns {Element|Element[]} The requested element(s)
	 */
	get(index){
		return index ? this[index] : [...this];
	}

	/**
	 * Reduce the elements based on a descendant selector or descendant element
	 * @param   {String|Element} parameter The selector or element to reduce with
	 * @returns {_$}                       The corresponding elements' object
	 */
	has(parameter){
		// Reduce by element
		if(parameter instanceof Element){
			return new _$(this.filter(item => item.contains(parameter)));
		}

		//Reduce by selector
		return new _$(this.filter(item => item.querySelector(parameter)));
	}

	/**
	 * Determine if at least one element contains the given class
	 * @param   {String} className The class name
	 * @returns {Boolean}          `true` if an element contains the class, `false` otherwise
	 */
	hasClass(className){
		return !!this.filter(item => item.classList.contains(className)).length;
	}

	/**
	 * Get the computed height of the first element
	 * @returns {Number} The computed height of the first element (px)
	 */
	height(){
		return this.length ? this[0] instanceof Document || this[0] instanceof Window ? document.documentElement.clientHeight : this[0].clientHeight : null;
	}

	/**
	 * Hide each element
	 * @returns {_$} The current object
	 */
	hide(){
		this.forEach(item => {
			item.style.display = 'none';
		});

		return this;
	}

	/**
	 * Get the HTML of the first element or Set each element's HTML
	 * @param   {String} [html] The HTML to set
	 * @returns {_$}            The current object
	 */
	html(html){
		// Get
		if(!html){
			return this.length ? this[0].innerHTML : null;
		}

		// Set
		this.forEach(item => {
			item.innerHTML = html;
		});
		
		return this;
	}

	/**
	 * Get the first element's index in relation to its siblings
	 * @returns {Number} The index
	 */
	index(){
		return this.length ? [...this[0].parentElement.children].indexOf(this[0]) : null;
	}

	/**
	 * Shorthand to insert element(s) relative to other(s)
	 * @param   {Element|NodeList|Array|String|_$} toInsert         The elements to insert
	 * @param   {String}                           position         The position of the new elements
	 * @param   {Element|NodeList|Array|String|_$} relativeElements The elements to position from
	 * @returns {_$}                                                A new LightQuery object containing the inserted nodes
	 */
	static insert(toInsert, position, relativeElements){
		const elements = [];

		_$._STD(relativeElements).forEach(relative => {
			const
				newElements = _$._STD(toInsert),
				newNode = _$._toFragment(newElements);

			elements.push(...newElements);

			if(position == 'before'){
				relative.parentNode.insertBefore(newNode, relative);
			}else if(position == 'start'){
				relative.insertBefore(newNode, relative.firstChild);
			}else if(position == 'end'){
				relative.appendChild(newNode);
			}else if(position == 'after'){
				relative.parentNode.insertBefore(newNode, relative.nextElementSibling);
			}
		});

		return new _$(elements);
	}

	/**
	 * Insert each element after the target(s)
	 * @param   {Element|NodeList|Array|String|_$} target The target(s)
	 * @returns {_$}                                      The current object
	 */
	insertAfter(target){
		_$.insert(this, 'after', target);

		return this;
	}

	/**
	 * Insert each element before the target(s)
	 * @param   {Element|NodeList|Array|String|_$} target The target(s)
	 * @returns {_$}                                      The current object
	 */
	insertBefore(target){
		_$.insert(this, 'before', target);

		return this;
	}

	/**
	 * Check if at least one of the elements matches the target
	 * @param   {String|Function|Element|_$} target The target or Function to match against
	 * @returns {Boolean}                           `true` if at least one of the elements matches the target, `false` otherwise
	 */
	is(target){
		if(target instanceof _$){
			return !!this.filter(item => target.includes(item)).length;
		}else if(target instanceof Function){
			return !!this.filter((item, index) => Reflect.apply(target, item, [index, item])).length;
		}else if(target instanceof Element){
			return !!this.filter(item => target.isSameNode(item)).length;
		}

		return !!this.filter(item => item.matches(target)).length;
	}

	/**
	 * Callback function used for the XHR error
	 *
	 * @callback errorCallback
	 * @param {XMLHttpRequest} response The XHR response
	 */

	/**
	 * Callback function used for the XHR success
	 *
	 * @callback successCallback
	 * @param {Object} response The XHR response
	 */

	/**
	 * Send an AJAX request
	 * @param   {String|Object}           parameter                URL of the request or settings object
	 * @param   {Object}                  [settings]               Settings object
     * @param   {Object|FormData}	      [settings.data]          Request data
     * @param   {String}	              [settings.dataType=json] Response data type
     * @param   {errorCallback}	          [settings.error]         Callback for the error event
     * @param   {Object.<String, String>} [settings.headers]       Request headers
     * @param   {String}	              [settings.method=GET]    Request method
     * @param   {successCallback}	      [settings.success]       Callback for the success event
     * @param   {String}	              [settings.url]           Request URL
	 * @returns {XMLHttpRequest}                                   The XHR request
	 */
	static ajax(parameter, settings){
		// Load AjaxSender
		new Promise(resolve => {
			if(typeof AjaxSender == 'function'){
				resolve();
			}else{
				const script = document.createElement('script');
		
				script.src = 'https://gitcdn.link/repo/Zenoo/ajax-sender/v0.1.7/AjaxSender.min.js';
				script.onload = () => {
					resolve();
				};
			
				document.querySelector('head').appendChild(script);
			}
		}).then(() => {
			// AjaxSender is ready here
			if(!settings){
				settings = parameter;
				parameter = settings.url;
			}
	
			return new AjaxSender(parameter, {
				method: settings.method || 'GET',
				data: settings.data,
				responseType: settings.dataType || 'json',
				header: settings.headers,
				load: settings.success,
				error: settings.error
			}).xhr;
		});
	}

	/**
	 * Shorthand for sending a GET AJAX request
	 * @param   {String}          url        URL of the request or settings object
	 * @param   {Object}          [data]     Request data
	 * @param   {successCallback} [success]  Callback for the success event
     * @param   {String}	      [dataType] Response data type
	 * @returns {XMLHttpRequest}             The XHR request
	 */
	static get(url, data, success, dataType){
		return _$.ajax(url, {
			data,
			success,
			dataType
		});
	}

	/**
	 * Get the last element
	 * @returns {_$}   The last element's object
	 */
	last(){
		return this.eq(this.length - 1);
	}

	/**
	 * Get next immediate sibling. If a selector is provided, doesn't return the sibling if it doesn't match
	 * @param   {String} [selector] The sibling selector
	 * @returns {_$}                The next immediate sibling
	 */
	next(selector){
		return this.map(item => selector ? item.nextElementSibling.matches(selector) ? item.nextElementSibling : null : item.nextElementSibling).filter(Boolean);
	}

	/**
	 * Get next siblings. If a selector is provided, doesn't return the siblings if they don't match
	 * @param   {String} [selector] The sibling selector
	 * @returns {_$}                The next siblings
	 */
	nextAll(selector){
		const nextSiblings = [];

		this.forEach(item => {
			const
				siblings = [...item.parentElement.children],
				index = siblings.indexOf(item);

			nextSiblings.push(...siblings.slice(index + 1, siblings.length));
		});

		return new _$([...new Set(selector ? nextSiblings.filter(sibling => sibling.matches(selector)) : nextSiblings)]);
	}

	/**
	 * Remove elements matching the target from the current object
	 * @param   {Element|NodeList|Array|String|Function|_$} target The target
	 * @returns {_$}                                               Object containing elements not matching the target
	 */
	not(target){
		const unmatched = [];

		this.forEach((item, index) => {
			if(target instanceof Function){
				if(!Reflect.apply(target, item, [index, item])) unmatched.push(item);
			}else if(target instanceof _$){
				if(!target.includes(item)) unmatched.push(item);
			}else if(!_$._STD(target).includes(item)) unmatched.push(item);
		});

		return new _$([...new Set(unmatched)]);
	}

	/**
	 * Remove an event handler
	 * @param   {String}   events     The events to stop listening to
	 * @param   {String}   [selector] The selector matching the one used with {@link _$#on}
	 * @param   {Function} [handler]  The handler used with {@link _$#on}
	 * @returns {_$}                  The current object
	 */
	off(events, selector, handler){
		const eventList = events.split(/\s+/);

		const eventsToRemove = [];

		// Gather the events to remove
		eventList.forEach(event => {
			if(selector){
				// .off(events, selector, handler)
				if(handler){
					// eslint-disable-next-line camelcase
					eventsToRemove.push(...__$_events__[event].filter(stored => this.includes(stored.element) && stored.selector == selector && stored.handler == handler));
				}else{
					// .off(events, selector)

					// eslint-disable-next-line camelcase
					eventsToRemove.push(...__$_events__[event].filter(stored => this.includes(stored.element) && stored.selector == selector));
				}
			}else{
				// .off(events)

				// eslint-disable-next-line camelcase
				eventsToRemove.push(...__$_events__[event].filter(stored => this.includes(stored.element)));
			}
		});

		eventsToRemove.forEach(event => {
			// Remove the events from the DOM
			event.element.removeEventListener(event.eventName, event.silentHandler);

			// Remove the events from the datastore
			// eslint-disable-next-line camelcase
			__$_events__[event.eventName] = __$_events__[event.eventName].filter(stored => stored != event);
		});
		
		return this;
	}

	/**
	 * Get the coordinates of the first element
	 * @returns {DOMRect} Object containing the coordinates of the first element. *Use `.left`, `.top`*
	 */
	offset(){
		return this.length ? this[0].getBoundingClientRect() : null;
	}

	/**
	 * Add an event handler
	 * @param   {String}   events     The events to start listening to
	 * @param   {String}   [selector] The selector used for event delegation
	 * @param   {Function} handler    The handler for the event(s)
	 * @param   {Object}   [data]     The data to be passed the the handler
	 * @returns {_$}                  The current object
	 */
	on(events, selector, handler, data){
		const eventList = events.split(/\s+/);

		if(selector instanceof Function){
			data = handler;
			handler = selector;
			selector = null;
		}
		
		eventList.forEach(event => {
			this.forEach(item => {
				const silentHandler = e => {
					if(selector){
						const target = e.target.closest(selector);

						if(item.contains(target)){
							e.data = data;
							Reflect.apply(handler, target, [e]);
						}
					}else{
						e.data = data;
						Reflect.apply(handler, item, [e]);
					}
				};

				// Attach event
				item.addEventListener(event, silentHandler);

				// Store event in datastore
				if(!__$_events__[event]) __$_events__[event] = []; // eslint-disable-line camelcase

				__$_events__[event].push({ // eslint-disable-line camelcase
					eventName: event,
					element: item,
					selector,
					handler,
					silentHandler
				});
			});
		});
		
		return this;
	}

	/**
	 * Get the parent of each element. If a selector is passed, filter those parents
	 * @param   {String} [selector] The parent selector
	 * @returns {_$}                The parent(s)
	 */
	parent(selector){
		return new _$([...new Set(selector ? this.map(item => item.parentElement.matches(selector) ? item.parentElement : null).filter(Boolean) : this.map(item => item.parentElement))]);
	}

	/**
	 * Get the ancestors of each element. If a selector is passed, filter those parents
	 * @param   {String} [selector] The parents selector
	 * @returns {_$}                The parent(s)
	 */
	parents(selector){
		const parents = new Set();

		this.forEach(item => {
			let parent = item.parentElement;

			while(parent){
				if(selector){
					if(parent.matches(selector)) parents.add(parent);
				}else{
					parents.add(parent);
				}

				parent = parent.parentElement;
			}
		});

		return new _$([...parents]);
	}

	/**
	 * Prepend content to the end of each element
	 * @param   {Element[]|NodeList[]|Array[]|String[]|_$[]} elements Elements to be prepended
	 * @returns {_$}                                                  The current object
	 */
	prepend(...elements){
		this.forEach(item => {
			_$.insert(elements.reduce((acc, element) => acc.add(element), new _$()), 'start', item);
		});

		return this;
	}

	/**
	 * Prepend each element before the targets
	 * @param   {Element|NodeList|Array|String|_$} targets Elements to be prepended to
	 * @returns {_$}                                       The current object
	 */
	prependTo(targets){
		_$.insert(this, 'start', targets);

		return this;
	}

	/**
	 * Get previous immediate sibling. If a selector is provided, doesn't return the sibling if it doesn't match
	 * @param   {String} [selector] The sibling selector
	 * @returns {_$}                The previous immediate sibling
	 */
	prev(selector){
		return this.map(item => selector ? item.previousElementSibling.matches(selector) ? item.previousElementSibling : null : item.previousElementSibling).filter(Boolean);
	}

	/**
	 * Get previous siblings. If a selector is provided, doesn't return the siblings if they don't match
	 * @param   {String} [selector] The sibling selector
	 * @returns {_$}                The previous siblings
	 */
	prevAll(selector){
		const previousSiblings = [];

		this.forEach(item => {
			const
				siblings = [...item.parentElement.children],
				index = siblings.indexOf(item);

			previousSiblings.push(...siblings.slice(0, index));
		});

		return new _$([...new Set(selector ? previousSiblings.filter(sibling => sibling.matches(selector)) : previousSiblings)]);
	}

	/**
	 * Remove each element from the DOM
	 * @returns {_$}   The current object
	 */
	remove(){
		this.forEach(item => {
			item.remove();
		});

		return this;
	}

	/**
	 * Remove an attribute from each element
	 * @param   {String} attribute Attribute name
	 * @returns {_$}               The current object
	 */
	removeAttr(attribute){
		this.forEach(item => {
			item.removeAttribute(attribute);
		});

		return this;
	}

	/**
	 * Remove class(es) from each element
	 * @param   {String} classes Space separated classes to remove
	 * @returns {_$}             The current object
	 */
	removeClass(classes){
		this.forEach(item => {
			item.classList.remove(...classes.split(/\s+/));
		});

		return this;
	}

	/**
	 * Replace each target with each element
	 * @param   {Element|NodeList|Array|String|_$} targets The targets
	 * @returns {_$}                                       The current object
	 */
	replaceAll(targets){
		_$._STD(targets).forEach(target => {
			this.insertAfter(target);
			target.remove();
		});

		return this;
	}

	/**
	 * Replace each element with the new content
	 * @param   {Element|NodeList|Array|String|_$} newContent The new content
	 * @returns {_$}                                          The current object
	 */
	replaceWith(newContent){
		this.forEach(item => {
			_$.insert(newContent, 'before', item);
			item.remove();
		});

		return this;
	}

	/**
	 * Get the horizontal scroll value of the first element or set the horizontal scroll value for each element
	 * @param   {Number}    [value] The new horizontal scroll value
	 * @returns {Number|_$}         The horizontal scroll value of the first element or the current object
	 */
	scrollLeft(value){
		// Get
		if(isNaN(value)){
			return this.length
				? this[0] instanceof Document
					? this[0].scrollingElement.scrollLeft
					: this[0] instanceof Window
						? this[0].document.scrollingElement.scrollLeft
						: this[0].scrollLeft
				: null;
		}

		// Set
		this.forEach(item => {
			if(item instanceof Document) item.scrollingElement.scrollLeft = value;
			else item.scrollLeft = value;
		});

		return this;
	}

	/**
	 * Get the vertical scroll value of the first element or set the vertical scroll value for each element
	 * @param   {Number} [value] The new vertical scroll value
	 * @returns {Number|_$}      The vertical scroll value of the first element or the current object
	 */
	scrollTop(value){
		// Get
		if(isNaN(value)){
			return this.length
				? this[0] instanceof Document
					? this[0].scrollingElement.scrollTop
					: this[0] instanceof Window
						? this[0].document.scrollingElement.scrollTop
						: this[0].scrollTop
				: null;
		}

		// Set
		this.forEach(item => {
			if(item instanceof Document) item.scrollingElement.scrollTop = value;
			else item.scrollTop = value;
		});

		return this;
	}

	/**
	 * Encode each form element as a string
	 * @returns {String} The serialized value of each element
	 */
	serialize(){
		let stringified = '';

		this.forEach(item => {
			if(item instanceof HTMLFormElement) stringified += Array.from(new FormData(item), e => e.map(encodeURIComponent).join('=')).join('&');
			else if(typeof item.value !== 'undefined' && typeof item.name !== 'undefined'){
				if(stringified.length) stringified += '&';
				stringified += encodeURIComponent(item.name) + '=' + encodeURIComponent(item.value);
			}
		});

		return stringified;
	}

	/**
	 * Encode each form element as an array of names and values
	 * @returns {Object[]} An array of names and values
	 */
	serializeArray(){
		const array = [];

		this.forEach(item => {
			if(item instanceof HTMLFormElement){
				array.push(...Array.from(new FormData(item), ([name, value]) => ({
					name,
					value
				})));
			}else if(typeof item.value !== 'undefined' && typeof item.name !== 'undefined'){
				array.push({
					name: item.name,
					value: item.value
				});
			}
		});

		return array;
	}

	/**
	 * Show each element
	 * @returns {_$} The current object
	 */
	show(){
		this.forEach(item => {
			// Inline hidden
			if(item.style && item.style.display == 'none'){
				item.style.display = '';
			}

			// CSS hidden
			if(item instanceof Element && getComputedStyle(item).display == 'none'){
				// eslint-disable-next-line camelcase
				item.style.display = __$_default_display_inline__[item.nodeName.toLowerCase()] ? 'inline' : 'block';
			}
		});

		return this;
	}

	/**
	 * Get all siblings. If a selector is provided, doesn't return the siblings if they don't match
	 * @param   {String} [selector] The sibling selector
	 * @returns {_$}                The siblings
	 */
	siblings(selector){
		const siblings = [];

		this.forEach(item => {
			siblings.push(...[...item.parentElement.children].filter(sibling => !this.includes(sibling)));
		});

		return new _$([...new Set(selector ? siblings.filter(sibling => sibling.matches(selector)) : siblings)]);
	}

	/**
	 * Get/Set the text of each element
	 * @param   {String|Function} [value] Text to set or Function returning the text to set
	 * @returns {String|_$}               The text of each element or the current object
	 */
	text(value){
		// Get
		if(typeof value === 'undefined'){
			return this.reduce((acc, item) => acc += item.innerText || item.textContent, '');
		}

		// Set
		this.forEach(item => {
			item.innerText = value;
		});

		return this;
	}

	/**
	 * Toggle each element's display
	 * @param   {Boolean} [force] `true` to show, `false` to hide
	 * @returns {_$}              The current object
	 */
	toggle(force){
		this.forEach(item => {
			if(item.style){
				if(typeof force !== 'undefined'){
					// eslint-disable-next-line camelcase
					item.style.display = force ? __$_default_display_inline__[item.nodeName.toLowerCase()] ? 'inline' : 'block' : 'none';
				}else if(item.style.display == 'none'){
					item.style.display = '';
				}else if(getComputedStyle(item).display == 'none'){
					// eslint-disable-next-line camelcase
					item.style.display = __$_default_display_inline__[item.nodeName.toLowerCase()] ? 'inline' : 'block';
				}else{
					item.style.display = 'none';
				}
			}
		});

		return this;
	}

	/**
	 * Toggle class(es) for each element
	 * @param   {String} classes Space separated classes to toggle
	 * @returns {_$}             The current object
	 */
	toggleClass(classes){
		this.forEach(item => {
			classes.split(/\s+/).forEach(className => {
				item.classList.toggle(className);
			});
		});

		return this;
	}

	/**
	 * Trigger an event for each element
	 * @param   {String} eventName Event name
	 * @returns {_$}               The current object
	 */
	trigger(eventName){
		this.forEach(item => {
			const event = new Event(eventName);

			item.dispatchEvent(event);
		});
	}

	/**
	 * Remove the direct parents of each element, if they match the selector
	 * @param   {String} [selector] The parent selector
	 * @returns {_$}                The current object
	 */
	unwrap(selector){
		this.reduce((acc, item) => acc.add(item.parentNode), new Set()).forEach(parent => {
			if(!selector || parent.matches(selector)){
				parent.parentElement.replaceChild(_$._toFragment(parent.childNodes), parent);
			}
		});

		return this;
	}

	/**
	 * Get the value of the first element or set the value of each element
	 * @param   {Object} [value] The value to set
	 * @returns {String|_$}      The value of the first element or the current object
	 */
	val(value){
		// Get
		if(typeof value === 'undefined'){
			return this.length ? this[0].value : null;
		}

		// Set
		this.forEach(item => {
			if(typeof item.value !== 'undefined') item.value = value;
		});

		return this;
	}

	/**
	 * Get the computed width of the first element
	 * @returns {Number} The computed width of the first element (px)
	 */
	width(){
		return this.length ? this[0] instanceof Document || this[0] instanceof Window ? document.documentElement.clientWidth : this[0].clientWidth : null;
	}

	/**
	 * Wrap each element
	 * @param   {Element|NodeList|Array|String|_$} wrapper The wrapper
	 * @returns {_$}                                       The current object
	 */
	wrap(wrapper){
		this.forEach(item => {
			const wrapperElements = _$._STD(wrapper);

			if(wrapperElements.length){
				const newWrapper = wrapperElements[0].cloneNode(true);

				_$.insert(newWrapper, 'after', item);
				_$.insert(item, 'start', newWrapper);
			}
		});

		return this;
	}

	/**
	 * Wrap all elements
	 * @param   {Element|NodeList|Array|String|_$} wrapper The wrapper
	 * @returns {_$}                                       The current object
	 */
	wrapAll(wrapper){
		const
			elementsBySiblings = [],
			wrapperElements = _$._STD(wrapper);

		if(wrapperElements.length){
			// Group each element with its siblings
			this.forEach(item => {
				const siblingsIndex = elementsBySiblings.findIndex(groupedElements => [...item.parentElement.children].includes(groupedElements[0]));

				if(siblingsIndex > -1) elementsBySiblings[siblingsIndex].push(item);
				else elementsBySiblings.push([item]);
			});

			// Wrap each group
			elementsBySiblings.forEach(group => {
				const newClone = wrapperElements[0].cloneNode(true);

				_$.insert(newClone, 'before', group[0]);
				_$.insert(group, 'start', newClone);
			});
		}

		return this;
	}
}

const $ = parameter => new _$(parameter);

$.ajax = _$.ajax;
$.get = _$.get;
$.insert = _$.insert;