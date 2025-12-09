import ModuleCore from "../../core/ModuleCore.js";

export default class ModulePing extends ModuleCore {
	// #commands = { 
	// 	ping: "PING",
	// 	pong: "PONG",
	// };

	// #commandHandlers = {
	// };

	#data = {
		
	};

	constructor ( id ) {
		console.log( `ModulePing - constructor - id: ${ id }` );

		super( id );
	}

	onPing ( data ) {

	}

	onPong ( data ) {

	}

	receiveCommand ( command, data ) {

	}


}