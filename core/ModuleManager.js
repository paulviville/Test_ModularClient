import ModuleTypes from "../modules/ModuleTypes.js";
import ModuleCore from "./ModuleCore.js";

const commandsManager = {
	requestModule : "REQUEST_MODULE",
	requestDelete : "REQUEST_DELETE",
	addModule : "ADD_MODULE",
	removeModule : "REMOVE_MODULE",
}


export default class ModuleManager extends ModuleCore {
	#id;
	#modules = new Map ( );
	#nextId = 1;

	constructor ( id ) {
		console.log( `ModuleManager - constructor - id: ${ id }` );
		
		super( id );

		this.#modules.set( id, this );

		this.addCommandHandler( commandsManager.requestModule, ( data ) => this.onRequestModule( data ) );
		this.addCommandHandler( commandsManager.addModule, ( data ) => this.onAddModule( data ) );
		this.addCommandHandler( commandsManager.removeModule, ( data ) => this.onRemoveModule( data ) );


	}

	onAddModule ( data ) {
		console.log( `ModuleManager - onAddModule - id: ${ this.id }` );
		console.log(data)

		const { type, id } = data; 
		// console.log( type, id );
		this.addModule( type, parseInt( id ) );
	}

	onRemoveModule ( data ) {
		console.log( `ModuleManager - onRemoveModule - id: ${ this.id }` );
		console.log(data)

	}

	onRequestModule ( data ) {
		console.log( `ModuleManager - onRequestModule - id: ${ this.id }` );
		// console.log(data)

		const id = this.#nextId;
		++this.#nextId;

		this.addModule( data.type, id );

		const responseData = {
			type: data.type,
			id: id, 
		};

		this.emitCommand( commandsManager.addModule, responseData );
	}

	addModule ( type, id ) {
		console.log( `ModuleManager - addModule ${ id } ${ type }` );

		const constructor = ModuleTypes[ type ];
		const module = new constructor( id );
		module.register( this.eventBus );
		this.#modules.set( id, module );
	}

	removeModule ( ) {
		console.log( `ModuleManager - removeModule ${ id } ${ command }` );

	}

	/// debug only
	get modules ( ) {
		return this.#modules;
	}
}