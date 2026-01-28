// import Module from "./modules/module.js";

import ClientNetwork from "./ClientNetwork.js";
import EventBus from "./core/EventBus.js";
import ModuleLambda from "./ModuleLambda.js";
import ModuleTypes from "./modules/ModuleTypes.js";
import ModulesManager from "./ModulesManager.js";


const clientNetwork = new ClientNetwork( );
clientNetwork.connect()

// const modulesManager = new ModulesManager( clientNetwork );

console.log( modulesManager.modules )
console.log( modulesManager.modulesList )
console.log( modulesManager.commandsList( ) )

window.test = ( ) => {
	console.log( modulesManager.modules )
	modulesManager.addModule( "ModuleLambda", crypto.randomUUID( ), true);
	console.log( modulesManager.modules )
}