import ModuleCore from "../../core/ModuleCore.js";

const commandsPing = { 
	ping: "PING",
	pong: "PONG",
};

export default class ModulePing extends ModuleCore {

	#data = {
		test: 0,
	};

	constructor ( id ) {
		console.log( `ModulePing - constructor - id: ${ id }` );

		super( id );

		this.addCommandHandler( commandsPing.ping, ( data ) => this.onPing( data ) );
		this.addCommandHandler( commandsPing.pong, ( data ) => this.onPong( data ) );
	}

	onPing ( data ) {
		console.log( `ModulePing - onPing - id: ${ this.id }` );

		const responseData = {
			t0: data.t0,
			t1: performance.now( ),
		}
		this.emitCommand( commandsPing.pong, responseData );
	}

	onPong ( data ) {
		console.log( `ModulePing - onPong - id: ${ this.id }` );
		
		const t2 = performance.now( );
		console.log( data, t2 );
	}

	ping ( ) 
	{
		console.log( `ModulePing - ping - id: ${ this.id }` );

		const data = { t0: performance.now( ) };
		this.emitCommand( commandsPing.ping, data );
	}
}