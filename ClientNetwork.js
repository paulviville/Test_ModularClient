import ModulesManager from "./ModulesManager.js";

const messageScope = {
	system: "SYSTEM",
	instance: "INSTANCE",
	module: "MODULE",
};

export default class ClientNetwork {
	#socket;
	#uuid = crypto.randomUUID( );
	moduleManager = new ModulesManager( this );

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
		console.log(messageData.scope, messageScope.module)
		if ( messageData.scope == messageScope.module ) {
			const { moduleUUID } = messageData.data;
			this.receive ( moduleUUID,  messageData.data.message );
		}
    }

	send ( moduleUUID, message ) {
		console.log( `ClientNetwork - send` );
		console.log ( moduleUUID, message );
		
		const networkMessage = {
			senderUUID: this.#uuid,
			scope: "MODULE",
			data: {
				moduleUUID,
				message,
			},
		}
		

		this.#socket.send(
			JSON.stringify( networkMessage )
		);
	}

	receive ( moduleUUID, data ) {
		console.log( `ClientNetwork - receive` );

		console.log ( moduleUUID, data );
		console.log(this.moduleManager.modules)

		const module = this.moduleManager.modules.get( moduleUUID );
		console.log(module);
		module.input( data );

		console.log(this.moduleManager.modules)
	}
}