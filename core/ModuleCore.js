export default class ModuleCore {
	#id;
	#commands = { };

	constructor ( id ) {
		console.log( `ModuleCore - constructor - id: ${ id }` );
		
		this.#id = id;
	}

	get id ( ) {
		return this.#id;
	}

	// registerOutboundCommands
	// registerInboundCommands
}