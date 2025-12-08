export default class EventBus {
	// #events = { };
	// #callbackWrappers = { };
	/// moduleId + command 

	#callbacks = new Map( );

	constructor ( ) {
		console.log( `EventBus - constructor` );
	}

	on ( id, command, callback ) {
		console.log( `EventBus - on ${ id } ${ command }` );

		if ( !this.#callbacks.has( id ) ) {
			this.#callbacks.set( id, new Map( ) );
		}

		this.#callbacks.get( id ).set( command, callback );
	}

	registerModuleCommand ( id, command, callback ) {
		if ( !this.#callbacks.has( id ) ) {
			this.#callbacks.set( id, new Map( ) );
		}

		this.#callbacks.get( id ).set( command, callback );
	}

	/// registerModuleManagerCommand
	/// registerServerCommand

	// registerOut ( )
	// registerModuleCommands = this.register.bind(this, )
	


	/// directions
	/// inbound
	/// outbound
	/// client
	/// modules


	/// targets:
	/// Server
	/// ModuleManager <id> ~= instance server side
	/// Module


	emitOut ( scope, id, command, data ) {

	}


	emitSystem ( command, data ) {

	}

	// emitModule ( comma)

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

	removeAll ( eventName ) { }
}