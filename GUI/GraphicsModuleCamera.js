import { CameraHelper, Object3D, PerspectiveCamera } from "./three/three.module.js";

const dummyCamera = new PerspectiveCamera( 50, 2 / 3, 0.02, 0.5 );


export default class GraphicsModuleCamera extends Object3D {
	#module;
	#cameraHelper = new CameraHelper( dummyCamera );

	constructor ( module ) {
		console.log( `GraphicsModuleCamera - constructor` );

		super( );

		this.add( this.#cameraHelper );

		this.#module = module;
		module.setOnChange( this.#update.bind( this ) );
	}

	#update ( ) {
		const matrix = this.#module.matrix;

		console.log( matrix );
	} 
}