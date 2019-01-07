/* exported $ */
class LightQuery{
	constructor(parameter, context){
		/**
		 * Elements holder
		 * @type {Element[]}
		 * @private
		 */
		this._elements = [];

		switch (parameter.constructor){
			// Element passed as a parameter
			case Element:
				this._elements.push(parameter);

				break;
			// NodeList passed as a parameter
			case NodeList:
				this._elements.push(...Array.from(parameter));

				break;
			// String passed as a parameter
			case String:
				// Valid selector
				try {
					// Check the context before querying globally
					const elements = (context || document).querySelectorAll(parameter);

					this._elements.push(...Array.from(elements));
				// Invalid selector
				} catch (error) {
					const template = document.createElement('template');

					// Try to create a DOM from the string
					template.innerHTML = parameter;

					this._elements.push(...Array.from(template.content.childNodes));
				}

				break;
			// Allow for $(function(){ ... })
			case Function:
				window.addEventListener('load', () => {
					Reflect.apply(parameter, null, []);
				});

				break;
			default:
				console.warn('LightQuery: Invalid parameter.');
		}
	}

	/**
	 * Add elements to the current LightQuery elements
	 * @param {Element|NodeList|String} parameter Element(s) to add
	 * @param {Element}                 context   Context of the potential query
	 */
	add(parameter, context){
		if(parameter instanceof LightQuery){
			this._elements.push(...parameter._elements);
		}else{
			this._elements.push(...new LightQuery(parameter, context)._elements);
		}

		return this;
	}

	/**
	 * Add class(es) to each element
	 * @param {String|Function} parameter Space separated classes to add, or a Function that returns a String for each element
	 */
	addClass(parameter){
		// Element-specific function
		if(parameter instanceof Function){
			this._elements.forEach((element, index) => {
				element.classList.add(...Reflect.apply(parameter, element, [index]).split(/\s+/));
			});
		// Basic usage
		}else{
			this._elements.forEach(element => {
				element.classList.add(...parameter.split(/\s+/));
			});
		}

		return this;
	}
}

const $ = parameter => new LightQuery(parameter);