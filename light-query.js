/* exported $ */
class _${
	/**
	 * 
	 * @param {Element|NodeList|Array|String|Function} parameter The parameter to initialize the _$ object with
	 * @param {Element} [context] 
	 */
	constructor(parameter, context){
		/**
		 * Elements holder
		 * @type {Element[]}
		 * @private
		 */
		this.items = [];

		if(parameter instanceof Function){
			window.addEventListener('load', () => {
				Reflect.apply(parameter, null, []);
			});
		}else{
			this.items.push(..._$._STD(parameter, context));
		}
	}

	/**
	 * Standardizes any input to an Element array
	 * @param {Element|NodeList|Array|String} parameter Element to standardize
	 * @param {Element} [context]                       Potential query context
	 * @private
	 */
	static _STD(parameter, context){
		const result = [];

		// Element passed as a parameter
		if(parameter instanceof Element){
			result.push(parameter);

		// Array-like passed as a parameter
		}else if(parameter instanceof NodeList || parameter instanceof Array){
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
	 * Add elements to the current _$ elements
	 * @param {Element|NodeList|Array|String} parameter Element(s) to add
	 * @param {Element}                       [context] Context of the potential query
	 * @returns {_$} The current object
	 */
	add(parameter, context){
		if(parameter instanceof _$){
			this.items.push(...parameter.items);
		}else{
			this.items.push(..._$._STD(parameter, context));
		}

		return this;
	}

	/**
	 * Add class(es) to each element
	 * @param {String|Function} parameter Space separated classes to add
	 * @returns {_$} The current object
	 */
	addClass(parameter){
		this.items.forEach(item => {
			item.classList.add(...parameter.split(/\s+/));
		});

		return this;
	}

	/**
	 * Insert content after each element
	 * @param {Element[]|NodeList[]|Array[]|String[]|_$[]} elements Elements to be inserted
	 * @returns {_$} The current object
	 */
	after(...elements){
		this.items.forEach(item => {
			elements.forEach(newElement => {
				let previousElement = item;

				_$._STD(newElement).forEach(newSingleElement => {
					previousElement.insertAdjacentElement('afterend', newSingleElement);
					previousElement = newSingleElement;
				});
			});
		});

		return this;
	}

	/**
	 * Append content to the end of each element
	 * @param {Element[]|NodeList[]|Array[]|String[]|_$[]} elements Elements to be appended
	 * @returns {_$} The current object
	 */
	append(...elements){
		this.items.forEach(item => {
			elements.forEach(newElement => {
				item.append(..._$._STD(newElement));
			});
		});

		return this;
	}

	/**
	 * Append each element to the end of the targets
	 * @param {Element|NodeList|Array|String|_$} targets Elements to be appended to
	 * @returns {_$} The current object
	 */
	appendTo(targets){
		_$._STD(targets).forEach(target => {
			target.append(...this.items);
		});

		return this;
	}

	/**
	 * Set/Get an attribute for each element
	 * @param {String}              name    The attribute name
	 * @param {String|Number|null}  [value] The attribute value
	 * @returns {_$|String} The current object or the value of the attribute
	 */
	attr(name, value){
		// Getter
		if(typeof value == 'undefined'){
			return this.items[0].getAttribute(name);
		}

		// Setter
		this.items.forEach(item => {
			item.setAttribute(name, value);
		});

		return this;
	}

	/**
	 * Insert content before each element
	 * @param {Element[]|NodeList[]|Array[]|String[]|_$[]} elements Elements to be inserted
	 * @returns {_$} The current object
	 */
	before(...elements){
		// For each current element
		this.items.forEach(item => {
			// For each new element
			elements.forEach(newElement => {
				// For each single node from the new element
				_$._STD(newElement).forEach(newSingleElement => {
					item.insertAdjacentElement('beforebegin', newSingleElement);
				});
			});
		});

		return this;
	}

	/**
	 * Force the focus out of each element
	 * @returns {_$} The current object
	 */
	blur(){
		this.items.forEach(item => {
			item.blur();
		});

		return this;
	}

	/**
	 * Get the children of each element
	 * @param {String}       [selector] An optional filter
	 * @returns {_$} The current object's children
	 */
	children(selector){
		const children = [];

		this.items.forEach(item => {
			[...item.children].forEach(child => {
				if(!selector || child.matches(selector)) children.push(child);
			});
		});

		return new _$(children);
	}

	/**
	 * Clone each element
	 * @param {Boolean}      [deep=true] Deep clone the elements ?
	 */
	clone(deep){
		return new _$(this.items.map(item => item.cloneNode(!!deep)));
	}

	/**
	 * Get the closest (self-included) parent matching the selector for each element
	 * @param {String} selector The selector
	 * @returns {_$} A new LightQuery object
	 */
	closest(selector){
		return new _$(this.items.map(item => item.closest(selector)).filter(item => item));
	}

	/**
	 * Get the children of each element (including text nodes)
	 * @returns {Element[]} The child nodes
	 */
	contents(){
		return this.items.reduce((acc, item) => {
			acc.push(...item.childNodes);

			return acc;
		}, []);
	}

	/**
	 * Set/Get a CSS property
	 * @param {String|Object} parameter The CSS property name or an object containing every CSS properties to be changed
	 * @param {String}        [value]   The CSS property value
	 * @returns {_$} The current object
	 */
	css(parameter, value){
		// Simple String way
		if(typeof parameter == 'string'){
			if(value){
				this.items.forEach(item => {
					item.style[parameter] = value;
				});
			}else{
				return this.items[0].style[parameter];
			}
		// Object way
		}else{
			this.items.forEach(item => {
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
		this.items.forEach(item => {
			item.parentElement.removeChild(item);
		});

		return this;
	}

	/**
	 * Iterate over each element
	 * Inside this method, `this` corresponds to the current element
	 * @param {Function} callback The callback function
	 * @returns {_$}     The current object
	 */
	each(callback){
		this.items.forEach((item, index) => {
			Reflect.apply(callback, item, [index, item]);
		});

		return this;
	}

	/**
	 * Remove all child nodes of each element
	 * @returns {_$} The current object
	 */
	empty(){
		this.items.forEach(item => {
			item.innerHTML = '';
		});

		return this;
	}

	/**
	 * Get the Nth element (a negative N starts counting from the end)
	 * @param {Number} position The element position
	 * @returns {_$}   The Nth element's object
	 */
	eq(position){
		return new _$(this.items[position >= 0 ? position : this.items.length + position]);
	}

	/**
	 * Filter elements from a selector or a function returning a Boolean
	 * @param {String|Function} parameter A selector or a filtering function
	 * @returns {_$}   The filtered object
	 */
	filter(parameter){
		const filtered = [];

		this.items.forEach((item, index) => {
			// Filter by function
			if(parameter instanceof Function){
				if(Reflect.apply(parameter, item, [index, item])) filtered.push(item);
			// Filter by selector
			}else if(item.matches(parameter)) filtered.push(item);
		});

		return new _$(filtered);
	}

	/**
	 * Find descendants of each element corresponding to the selector
	 * @param {String} selector The selector
	 * @returns {_$}   The corresponding descendants' object
	 */
	find(selector){
		const descendants = [];

		this.items.forEach(item => {
			descendants.push(...item.querySelectorAll(selector));
		});

		return new _$(descendants);
	}
}

const $ = parameter => new _$(parameter);