import ModuleManager from "./core/ModuleManager.js";

export default class ClientNetwork {
	#socket;
	#uuid = crypto.randomUUID( );
	#moduleManager = new ModuleManager( );

	constructor ( ) {
		console.log(`ClientNetwork - constructor`);

	}

	connect ( url = "ws://localhost", port = "3000" ) {
		console.log( `ClientNetwork - connect ( ${url}:${port} )` );

		this.#socket = new WebSocket( `${ url }:${ port }` );

		this.#socket.onopen = ( ) => { this.#handleOnOpen(); };
        this.#socket.onmessage = ( event ) => { this.#handleOnMessage( event.data ); };
        this.#socket.onerror = ( error ) => { this.#handleOnError( error ); };
        this.#socket.onclose = ( event ) => { this.#handleOnClose( event ); };
	}

	#handleOnOpen ( ) {
		console.log( `ClientNetwork - #handleOnOpen` );

		this.#socket.send(
			JSON.stringify( { uuid: this.#uuid } )
		);
    }

    #handleOnError ( error ) {
		console.log( `ClientNetwork - #handleOnError` );

        console.error( 'WebSocket error:', error );
    }

    #handleOnClose ( event ) {
		console.log(`ClientNetwork - #handleOnClose` );

        if ( event.wasClean ) {
            console.log( `WebSocket closed cleanly, code=${ event.code }, reason=${ event.reason }` );
        } else {
            console.warn( 'WebSocket connection closed unexpectedly.' );
        }
    }

    #handleOnMessage ( message ) {
		console.log( `ClientNetwork - #handleOnMessage` );

		const messageData = JSON.parse( message );
		console.log( messageData );

    }
}