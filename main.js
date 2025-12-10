// import Module from "./modules/module.js";

import EventBus from "./core/EventBus.js";
import ModuleTypes from "./modules/ModuleTypes.js";


class NetworkManager {
	eventBuses = [];
	
	constructor( ) {

	}

	addEventBus ( eventBus ) {
		this.eventBuses.push( eventBus );
		return this.eventBuses.length - 1;
	}

	sendMessage ( id, message ) {
		console.log( `NetworkManager - sendMessage - ${id}` );
		for (let i = 0; i < this.eventBuses.length; ++i ) {
			if ( i == id ) 
				continue;
			this.eventBuses[ i ].receiveMessage( message );
		}
	}
}

const networkManager = new NetworkManager();

const eventBus = new EventBus( );
const eventBus_ = new EventBus( );

eventBus.registerNetworkManager( networkManager );
eventBus_.registerNetworkManager( networkManager );

console.log(ModuleTypes)

// const modulePing = new ModuleTypes.Ping( 0 );
// modulePing.register( eventBus );
// const modulePing1 = new ModuleTypes.Ping( 1 );
// modulePing1.register( eventBus );

// eventBus.emitModule( 0, "PING", {});
// eventBus.emitModule( 1, "PONG", {});



const modulePing0 = new ModuleTypes.Ping( 0 );
modulePing0.register( eventBus );

const modulePing0_ = new ModuleTypes.Ping( 0 );
modulePing0_.register( eventBus_ );

modulePing0_.emitCommand("PING", {});
modulePing0.emitCommand("PING", {});