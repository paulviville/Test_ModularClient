import { Object3D } from "./three/three.module.js";
import GraphicsModuleTypes from "./GraphicsModuleTypes.js";

export default class GraphicsModulesManager extends Object3D{
	#graphicsModules = new Map ( );

	constructor ( ) {
		console.log( `GraphicsModulesManager - constructor` );
		super( );

	}

	register ( modulesManager ) {
		console.log( `GraphicsModulesManager - register` );

		modulesManager.setModuleProcessing(
			this.#addGraphicsModule.bind( this ),
			this.#removeGraphicsModule.bind( this )
		);
	}

	#addGraphicsModule ( module ) {
		console.log( `GraphicsModulesManager - #addGraphicsModule` );
		console.log( module );

		const { type, uuid } = module;

		const constructor = GraphicsModuleTypes[ type ];
		console.log(constructor)

		if ( constructor === undefined ) {
			console.warn( `unsupported module type: ${ type }`);
			return;
		}

		const graphicsModule = new constructor( module );
		this.#graphicsModules.set ( uuid, graphicsModule );
		this.add( graphicsModule );
	}

	#removeGraphicsModule ( module ) {
		console.log( `GraphicsModulesManager - #removeGraphicsModule` );
		console.log( module );
	}
}