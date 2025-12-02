export default class Module {
	#id;

	constructor ( id ) {
		console.log( `Module - constructor ${ id }` );

		this.#id = id;
	}

	get id ( ) {
		return this.#id;
	}
}