import ModuleCore from "../../core/ModuleCore.js";

export default class ModuleLambda extends ModuleCore {
	#commands = { 
		
	};

	constructor ( id ) {
		console.log( `ModuleLambda - constructor - id: ${ id }` );
		super( id );
	}
}