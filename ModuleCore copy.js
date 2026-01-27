export default class ModuleCore {
	#type;
	#uuid;

	// #needsUpdate = false;
	#handlers = new Map( );
	#commands = new Set ( );

	constructor ( uuid = crypto.randomUUID( ), type ) {
		console.log( `ModuleCore - constructor - ${ uuid } ${ type }` );
		
		this.#uuid = uuid;
		this.#type = type ?? "ModuleCore"; 
	}

	get uuid ( ) {
		return this.#uuid;
	}

	addCommand ( command ) {
		console.log( `ModuleCore - addCommand - ${ command }` );

		this.#commands.add( command );
	}

	removeCommand ( command ) {
		console.log( `ModuleCore - removeCommand - ${ command }` );

	}

	addHandler ( command, handler ) {
		console.log( `ModuleCore - addHandler - ${ command }` );

		this.#handlers.set( command, handler );
	}

	removeHandler ( command ) {
		console.log( `ModuleCore - removeHandler - ${ command }` );
		
		this.#handlers.delete( command );
	};






	input ( message ) {
		console.log( `ModuleCore - input` );

		const { command, data } = this.decode( message );
		console.log( command, data )
	}

	ouput ( command, data ) {
		console.log( `ModuleCore - output` );
		
		const message = this.encode( command, data );
		console.log( message );
	}

	commandsList ( ) {
		console.log( ...this.#commands );
	}



	/// overload in children
	encode ( command, data ) { 
		const message = { command, data };
		return message;
	}

	/// overload in children
	decode ( message ) {
		return message;
	}

}