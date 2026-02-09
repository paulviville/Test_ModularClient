// import Module from "./modules/module.js";

import ClientNetwork from "./ClientNetwork.js";
import EventBus from "./core/EventBus.js";
import GraphicsModulesManager from "./GUI/GraphicsModulesManager.js";
import SceneController from "./GUI/SceneController.js";
import ModuleLambda from "./ModuleLambda.js";
import ModuleTypes from "./modules/ModuleTypes.js";
import ModulesManager from "./ModulesManager.js";


const clientNetwork = new ClientNetwork( );
clientNetwork.connect()

// const modulesManager = new ModulesManager( clientNetwork );

// console.log( modulesManager.modules )
// console.log( modulesManager.modulesList )
console.log( clientNetwork.moduleManager.commandsList( ) )

window.modules = [];
window.addModule = ( type ) => {
	const uuid = crypto.randomUUID( );
	clientNetwork.moduleManager.addModule( type, uuid, true, clientNetwork.uuid );
	window.modules.push( clientNetwork.moduleManager.modules.get( uuid ) )
}

let cameraModule;
window.camera = ( ) => {
	const uuid = crypto.randomUUID( );
	clientNetwork.moduleManager.addModule( "ModuleCamera", uuid, true, clientNetwork.uuid);
	const cameraModule = clientNetwork.moduleManager.modules.get( uuid );
	console.log(cameraModule);
	sceneController.controls.addEventListener(`change`, ( event ) => {
		const matrix = sceneController.camera.matrix.toArray();
		cameraModule.updateCamera( matrix, true );
	});
}

let primitiveModule;
window.box = ( ) => {
	const uuid = crypto.randomUUID( );
	clientNetwork.moduleManager.addModule( "ModulePrimitive", uuid, true, clientNetwork.uuid);
	window.primitiveModule = clientNetwork.moduleManager.modules.get( uuid );

}

const sceneController = new SceneController( );
sceneController.startRender( );

const graphicsModulesManager = new GraphicsModulesManager( );
graphicsModulesManager.register( clientNetwork.moduleManager );

sceneController.scene.add( graphicsModulesManager );


window.grabCamera = ( ) => {
	const uuid = clientNetwork.moduleManager.modulesList[1];
	cameraModule = clientNetwork.moduleManager.modules.get( uuid );
	console.log(cameraModule)
	sceneController.controls.addEventListener(`change`, ( event ) => {
		const matrix = sceneController.camera.matrix.toArray();
		cameraModule.updateCamera( matrix, true );
	});
}


