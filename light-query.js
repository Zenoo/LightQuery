/* exported $ */
class LightQuery{
	constructor(parameter){
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
					const elements = document.querySelectorAll(parameter);

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
}

const $ = parameter => new LightQuery(parameter);