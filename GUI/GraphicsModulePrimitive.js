import { BoxGeometry, Mesh, Matrix4, MeshPhongMaterial, Object3D, SphereGeometry } from "./three/three.module.js";

export default class GraphicsModulePrimitive extends Object3D {
	#module;
	#geometry = new BoxGeometry( 1, 1, 1 );
	#material = new MeshPhongMaterial( { color: 0x992200 } );
	#mesh = new Mesh( this.#geometry, this.#material );

	constructor ( module ) {
		console.log( `GraphicsModulePrimitive - constructor` );

		super( );

		this.#module = module;

		this.#module.setCallbacks( {
			updateTransform: this.#updateTransform.bind( this ),
			updateType: this.#updateType.bind( this ),
		} );

		this.add( this.#mesh );
	}

	#updateType ( ) {
		console.log( `GraphicsModulePrimitive - #updateType` );

		this.#geometry = this.#getGeometry( this.#module.primitiveType );
		this.#mesh.geometry.dispose( );
		this.#mesh.geometry = this.#geometry;
	}

	#getGeometry ( type ) {
		console.log( `GraphicsModulePrimitive - #getGeometry` );
		let geometry;
		switch ( type ) {
			case "Sphere":
				geometry = new SphereGeometry( 0.5, 16, 16 );
				break;
			case "Box":
			default:
				geometry = new BoxGeometry( 1, 1, 1 );
				break;
		}
		return geometry;
	}

	#updateTransform ( ) {
		console.log( `GraphicsModulePrimitive - #updateTransform` );

	}
}