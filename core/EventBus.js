export default class EventBus {
	// #events = { };
	// #callbackWrappers = { };
	/// moduleId + command 

	#callbacks = new Map( );
	#registeredModules = new Map( ); // id, object || [ ...objects ] for piggy backing
	#id;
	#networkManager;

	constructor ( ) {
		console.log( `EventBus - constructor` );
	}

	// on ( id, command, callback ) {
	// 	console.log( `EventBus - on ${ id } ${ command }` );

	// 	if ( !this.#callbacks.has( id ) ) {
	// 		this.#callbacks.set( id, new Map( ) );
	// 	}

	// 	this.#callbacks.get( id ).set( command, callback );
	// }

	// registerModuleCommand ( id, command, callback ) {
	// 	if ( !this.#callbacks.has( id ) ) {
	// 		this.#callbacks.set( id, new Map( ) );
	// 	}

	// 	this.#callbacks.get( id ).set( command, callback );
	// }

	registerModule ( module ) {
		console.log( `EventBus - registerModule ${ module?.id }` );

		this.#registeredModules.set( module?.id, module );

		console.log( this.#id, this.#registeredModules );
	};

	unregisterModule ( module ) {
		console.log( `EventBus - unregisterModule ${ module?.id }` );

		/// TODO: clean up first

		this.#registeredModules.delete( module?.id );
	}

	emitModule ( id, command, data ) {
		console.log( `EventBus - ${this.#id} - emitModule ${ id }` );

		if( !this.#registeredModules.has( id ) ) {
			console.warn( `module ${ id } is not registered `)
			return;
		}

		const module = this.#registeredModules.get( id );
		module.receiveCommand( command, data ); 
	}

	registerNetworkManager ( networkManager ) {
		console.log( `EventBus - registerNetworkManager` );

		this.#networkManager = networkManager;
		this.#id = this.#networkManager.addEventBus( this );
	}

	emitNetwork ( id, command, data ) {
		console.log( `EventBus - ${this.#id} - emitModule ${ id }` );

		this.#networkManager.sendMessage( this.#id, {moduleId: id, command, data});
	}

	receiveMessage ( message ) {
		console.log( `EventBus - ${this.#id} - receiveMessage` );
		// console.log(message)
		const { moduleId, command, data } = message;
		// console.log(moduleId, command)
		this.emitModule( moduleId, command, data);
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