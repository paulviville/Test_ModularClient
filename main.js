// import Module from "./modules/module.js";

import ClientNetwork from "./ClientNetwork.js";
import EventBus from "./core/EventBus.js";
import ModuleLambda from "./ModuleLambda.js";
import ModuleTypes from "./modules/ModuleTypes.js";
import ModulesManager from "./ModulesManager.js";


const clientNetwork = new ClientNetwork( );
clientNetwork.connect()

// const modulesManager = new ModulesManager( clientNetwork );

// console.log( modulesManager.modules )
// console.log( modulesManager.modulesList )
console.log( clientNetwork.moduleManager.commandsList( ) )

let cameraModule;
window.camera = ( ) => {
	const uuid = crypto.randomUUID( );
	clientNetwork.moduleManager.addModule( "ModuleCamera", uuid, true);
	window.cameraModule = clientNetwork.moduleManager.modules.get( uuid );
	console.log(cameraModule);
}

window.test = ( ) => {
	console.log( clientNetwork.moduleManager.modules )
	clientNetwork.moduleManager.addModule( "ModuleLambda", crypto.randomUUID( ), true);
	console.log( clientNetwork.moduleManager.modules )
	console.log(clientNetwork.moduleManager.state)
}

window.test2 = ( ) => {
	clientNetwork.moduleManager.input({command: "SET_STATE", data: {test: 0}})
}