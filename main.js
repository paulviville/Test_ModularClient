// import Module from "./modules/module.js";

import EventBus from "./core/EventBus.js";
import ModuleManager from "./core/ModuleManager.js";
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


const moduleManager0 = new ModuleManager( 0 );
const moduleManager0_ = new ModuleManager( 0 );
moduleManager0.register( eventBus );
moduleManager0_.register( eventBus_ );

moduleManager0.emitCommand("REQUEST_MODULE", {type: "Camera"});

window.modules = moduleManager0.modules;
const moduleCamera = moduleManager0.modules.get(1);
const moduleCamera_ = moduleManager0_.modules.get(1);
console.log(moduleCamera)
moduleCamera.setCamera(
	[1,0,0,0
	,0,1,0,0
	,0,0,1,0
	,0,0,0,1], true);

moduleCamera_.setCamera(
	[1,0,0,1
	,0,1,0,2
	,0,0,1,3
	,0,0,0,1], true);

moduleCamera.debugData()
moduleCamera_.debugData()
// const modulePing0 = new ModuleTypes.Ping( 0 );
// modulePing0.register( eventBus );

// const modulePing0_ = new ModuleTypes.Ping( 0 );
// modulePing0_.register( eventBus_ );

// modulePing0_.emitCommand("PING", {});
// modulePing0_.ping();
// modulePing0.emitCommand("PING", {});