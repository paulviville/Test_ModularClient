import ModuleTypes from "../modules/ModuleTypes.js";
import ModuleCore from "./ModuleCore.js";


export default class ModuleManager extends ModuleCore {
	#commands = {
		requestModule : "REQUEST_MODULE",
		addModule : "ADD_MODULE",
		removeModule : "REMOVE_MODULE",
	}

	#id;
	#modules = new Map ( );
	#eventBus
	constructor ( eventBus, id = 0xFFFFFFFF ) {
		this.#eventBus = eventBus;
	}

	addModule ( type ) {
		console.log( `ModuleManager - addModule ${ id } ${ command }` );

	}

	removeModule ( ) {
		console.log( `ModuleManager - removeModule ${ id } ${ command }` );

	}
}