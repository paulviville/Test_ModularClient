// import Module from "./modules/module.js";

import ClientNetwork from "./ClientNetwork.js";
import EventBus from "./core/EventBus.js";
import ModuleLambda from "./ModuleLambda.js";
import ModuleTypes from "./modules/ModuleTypes.js";
import ModulesManager from "./ModulesManager.js";


const clientNetwork = new ClientNetwork( );
clientNetwork.connect()

const modulesManager = new ModulesManager( );


modulesManager.input({command: "ADD_MODULE", data: {type: "ModuleLambda", uuid: crypto.randomUUID( )}})



console.log( modulesManager.modules )
console.log( modulesManager.modulesList )
console.log( modulesManager.commandsList( ) )
modulesManager.input({command: "REMOVE_MODULE", data: { uuid: modulesManager.modulesList[1]}})

console.log( modulesManager.modules )
console.log( modulesManager.modulesList )
console.log( modulesManager.commandsList( ) )