import { Matrix4, CameraHelper, Object3D, PerspectiveCamera } from "./three/three.module.js";

export default class GraphicsModuleCamera extends Object3D {
	#module;
	#cameraHelper = new CameraHelper( new PerspectiveCamera( 50, 4 / 3, 0.02, 0.5 ) );

	constructor ( module ) {
		console.log( `GraphicsModuleCamera - constructor` );

		super( );

		this.add( this.#cameraHelper );

		this.#module = module;
		module.setOnChange( this.#update.bind( this ) );
	}

	#update ( ) {
		const matrix = new Matrix4( ).fromArray( this.#module.matrix );

		this.#cameraHelper.matrix.copy( matrix );
		this.#cameraHelper.update( );
	}
}