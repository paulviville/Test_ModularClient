import ModuleCore from "../../core/ModuleCore.js";

export default class ModuleCamera extends ModuleCore {
	#commands = { 
		UPDATE_CAMERA: "UPDATE_CAMERA",
	};

	#data = {
		matrix: new Array( 16 ),
	};

	constructor ( id ) {
		console.log( `ModuleCamera - constructor - id: ${ id }` );

		super( id );
	}
}