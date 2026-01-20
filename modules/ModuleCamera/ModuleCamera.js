import ModuleCore from "../../core/ModuleCore.js";

const commandsCamera = {
	updateCamera: "UPDATE_CAMERA",
}

export default class ModuleCamera extends ModuleCore {

	#data = {
		matrix: new Array( 16 ),
	};

	constructor ( id ) {
		console.log( `ModuleCamera - constructor - id: ${ id }` );

		super( id );

		this.addCommandHandler( commandsCamera.updateCamera, ( data ) => this.onUpdateCamera( data ) );
	}

	setCamera ( matrix, emit = false ) {
		console.log( `ModuleCamera - setCamera` );

		// this.#data.matrix.copy( matrix );
		this.#data.matrix.length = 0;
		this.#data.matrix.push( ...matrix );

		if ( emit ) {
			this.emitCommand( commandsCamera.updateCamera, [ ...matrix ] );
		}
	}

	onUpdateCamera ( data ) {
		console.log( `ModuleCamera - onUpdateCamera` );

		/// extract matrix here
		const matrix = data;
		console.log( matrix );
		this.setCamera( matrix )

	}

	/// debug only
	debugData ( ) {
		console.log( this.#data );
	}
}