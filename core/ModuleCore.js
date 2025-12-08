export default class ModuleCore {
	#id;

	constructor ( id ) {
		console.log( `ModuleCore - constructor - id: ${ id }` );
		
		this.#id = id;
	}

	get id ( ) {
		return this.#id;
	}
}