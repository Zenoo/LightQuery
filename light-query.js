/* exported $ */
class LightQuery{
	constructor(parameter, context){
		/**
		 * Elements holder
		 * @type {Element[]}
		 * @private
		 */
		this._elements = [];

		if(parameter instanceof Function){
			window.addEventListener('load', () => {
				Reflect.apply(parameter, null, []);
			});
		}else{
			this._elements.push(...LightQuery._STD(parameter, context));
		}
	}

	/**
	 * Standardizes any input to an Element array
	 * @param {Element|NodeList|Array|String} parameter Element to standardize
	 * @param {Element} context                         Potential query context
	 * @private
	 */
	static _STD(parameter, context){
		const result = [];

		switch (parameter.constructor){
			// Element passed as a parameter
			case Element:
				result.push(parameter);

				break;
			// Array-like passed as a parameter
			case NodeList:
			case Array:
				result.push(...Array.from(parameter));

				break;
			// String passed as a parameter
			case String:
				// Valid selector
				try {
					// Check the context before querying globally
					const elements = (context || document).querySelectorAll(parameter);

					result.push(...Array.from(elements));
				// Invalid selector
				} catch (error) {
					const template = document.createElement('template');

					// Try to create a DOM from the string
					template.innerHTML = parameter;

					result.push(...Array.from(template.content.childNodes));
				}

				break;
			default:
		}

		return result;
	}

	/**
	 * Add elements to the current LightQuery elements
	 * @param {Element|NodeList|Array|String} parameter Element(s) to add
	 * @param {Element}                       context   Context of the potential query
	 */
	add(parameter, context){
		if(parameter instanceof LightQuery){
			this._elements.push(...parameter._elements);
		}else{
			this._elements.push(...LightQuery._STD(parameter, context));
		}

		return this;
	}

	/**
	 * Add class(es) to each element
	 * @param {String|Function} parameter Space separated classes to add
	 */
	addClass(parameter){
		this._elements.forEach(element => {
			element.classList.add(...parameter.split(/\s+/));
		});

		return this;
	}

	/**
	 * Insert content after each element
	 * @param {Element[]|NodeList[]|Array[]|String[]|LightQuery[]} elements Elements to be inserted
	 */
	after(...elements){
		this._elements.forEach(element => {
			elements.forEach(newElement => {
				let previousElement = element;

				LightQuery._STD(newElement).forEach(newSingleElement => {
					previousElement.parentNode.insertBefore(newSingleElement, previousElement.nextSibling);
					previousElement = newSingleElement;
				});
			});
		});

		return this;
	}

	/**
	 * Append content to the end of each element
	 * @param {Element[]|NodeList[]|Array[]|String[]|LightQuery[]} elements Elements to be appended
	 */
	append(...elements){
		this._elements.forEach(element => {
			elements.forEach(newElement => {
				element.append(...LightQuery._STD(newElement));
			});
		});

		return this;
	}

	/**
	 * Append each element to the end of the targets
	 * @param {Element|NodeList|Array|String|LightQuery} targets Elements to be appended to
	 */
	appendTo(targets){
		LightQuery._STD(targets).forEach(target => {
			target.append(...this._elements);
		});

		return this;
	}

	/**
	 * Set/Get an attribute for each element
	 * @param {String} name 
	 * @param {String|Number|null} value 
	 */
	attr(name, value){
		// Getter
		if(typeof value == 'undefined'){
			return this._elements[0].getAttribute(name);
		}

		// Setter
		this._elements.forEach(element => {
			element.setAttribute(name, value);
		});

		return this;
	}
}

const $ = parameter => new LightQuery(parameter);