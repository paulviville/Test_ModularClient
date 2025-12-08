export default class EventBus {
	#events = { };
	#callbackWrappers = { };
	/// moduleId + command 



	constructor ( ) {
		console.log( `EventBus - constructor` );
	}

	on ( eventName = null, callback ) {
		// console.log( `EventsController - on ${ eventName }` );

		// if ( eventName == null || this.#callbackWrappers[ callback ] ) {
		// 	console.warn( `EventBus - on (${ eventName }) null or duplicate`)
		// } 


		// const callbackWrapper = ( data ) => {
		// 	callback?.( data );
		// };

		// this.#callbackWrappers[ callback ] = callbackWrapper;
		// ( this.#events[ eventName ] ??= [ ] ).push( callbackWrapper );
	}

	emit ( eventName = null, data ) {
		// console.log( `EventsController - emit ${ eventName }` );

		// for ( const callback of this.#events[ eventName ] ) {
		// 	callback( data );
		// }
	}

	once ( eventName = null, callback ) {
		// console.log( `EventsController - once ${ eventName }` );

		// const callbackWrapper = ( data ) => {
		// 	callback( data );
		// 	this.remove( eventName, callbackWrapper );
		// };

		// this.on( eventName, callbackWrapper );
	}

	remove ( eventName, callback ) {
		// console.log( `EventsController - remove ${ eventName }` );

		// const callbackWrapper = this.#callbackWrappers[ callback ];
		// this.#events[ eventName ] = this.#events[ eventName ].filter(
		// 	callback => callback !== callbackWrapper
		// );

		// delete this.#callbackWrappers[ callback ]
	}

	// removeAll ( eventName ) { }
}