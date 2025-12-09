export default class ModuleCore {
	#id;
	#commands = new Map( );
	#commandHandlers = new Map( );

	constructor ( id ) {
		console.log( `ModuleCore - constructor - id: ${ id }` );
		
		this.#id = id;
	};

	get id ( ) {
		return this.#id;
	};

	register ( eventBus ) {

	};

	addCommand ( command, handler ) {
		
	};

	receiveCommand ( command, data ) {
		console.log( `ModuleCore - receiveCommand - ${ command }` );
	};

	emitCommand ( command, data ) {

	};
}