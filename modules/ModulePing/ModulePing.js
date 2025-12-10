import ModuleCore from "../../core/ModuleCore.js";

const commandsPing = { 
	ping: "PING",
	pong: "PONG",
};

export default class ModulePing extends ModuleCore {

	#data = {
		
	};

	constructor ( id ) {
		console.log( `ModulePing - constructor - id: ${ id }` );

		super( id );

		this.addCommandHandler( commandsPing.ping, ( data ) => this.onPing( data ) );
		this.addCommandHandler( commandsPing.pong, ( data ) => this.onPong( data ) );
	}

	onPing ( data ) {
		console.log( `ModulePing - onPing - id: ${ this.id }` );

		this.emitCommand( commandsPing.pong, data );
	}

	onPong ( data ) {
		console.log( `ModulePing - onPong - id: ${ this.id }` );
		
	}

	
}