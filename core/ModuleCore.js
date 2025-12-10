export default class ModuleCore {
	#id;
	#commands = new Map( );
	#commandHandlers = new Map( );
	#eventBus = null;
	#emit = null;

	constructor ( id = 0xFFFFFFFF ) {
		console.log( `ModuleCore - constructor - id: ${ id }` );
		
		this.#id = id;
	};

	get id ( ) {
		return this.#id;
	};

	register ( eventBus ) {
		console.log( `ModuleCore - register` );

		this.#eventBus = eventBus;
		this.#eventBus.registerModule( this );
		this.#emit = this.#eventBus.emitNetwork.bind( this.#eventBus, this.#id );
	};

	unregister ( ) {
		console.log( `ModuleCore - unregister` );

		this.#eventBus.unregisterModule( this );
		this.#eventBus = null;
		this.#emit = null;
	};

	addCommandHandler ( command, handler ) {
		console.log( `ModuleCore - addCommandHandler - ${ command }` );
		
		this.#commandHandlers.set( command, handler );
	};

	deleteCommandHandler ( command ) {
		console.log( `ModuleCore - deleteCommandHandler - ${ command }` );
		
		this.#commandHandlers.delete( command );
	};

	receiveCommand ( command, data ) {
		console.log( `ModuleCore - receiveCommand - ${ command }` );
	
		if ( !this.#commandHandlers.has( command ) ) {
			console.warn( `module ${ this.id } - has no handler for ${ command }`);
			return;
		}
		
		const handler = this.#commandHandlers.get( command );
		handler( data );
	};

	emitCommand ( command, data ) {
		console.log( `ModuleCore - emitCommand - ${ command }` );

		this.#emit( command, data );
	};
}