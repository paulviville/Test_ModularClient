import * as THREE from './three/three.module.js';
import { GUI } from './three/libs/lil-gui.module.min.js'; 
import { OrbitControls } from './three/controls/OrbitControls.js';

export default class SceneController {
	#renderer;
	#scene;
	#camera;
	#orbitControls;

	constructor ( ) {
		console.log( `SceneController - constructor` );
		
		this.#renderer = new THREE.WebGLRenderer({antialias: true});
		this.#renderer.autoClear = false;
		this.#renderer.setPixelRatio( window.devicePixelRatio );
		this.#renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.#renderer.domElement );

		this.#scene = new THREE.Scene( );
        this.#scene.background = new THREE.Color(0xcccccc);
		this.#camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 100 );
		this.#camera.position.set( -2, 3, -3 );
		this.#orbitControls = new OrbitControls( this.#camera, this.#renderer.domElement);

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
		this.#scene.add(ambientLight);
		const pointLight = new THREE.PointLight( 0xffffff, 120);
		pointLight.position.set(-2, 3, -4);
		this.#scene.add(pointLight);
		this.#addDebug( );
	}



	#addDebug ( ) {
		const axesHelper = new THREE.AxesHelper( );
		this.#scene.add( axesHelper );
		const gridHelper = new THREE.GridHelper( );
		this.#scene.add( gridHelper );
	}

	#onWindowResize ( ) {
		this.#camera.aspect = window.innerWidth / window.innerHeight;
		this.#camera.updateProjectionMatrix();

		this.#renderer.setSize(window.innerWidth, window.innerHeight);
	}

	#initializeGui ( ) {
		console.log("SceneController - initializeGui");
	}

	#updateGui ( ) {
		console.log("SceneController - updateGui");

	}

	#animate ( ) {
		this.#renderer.render(this.#scene, this.#camera);
	}

	startRender ( ) {
		this.#renderer.setAnimationLoop( this.#animate.bind(this) );
	}
	
	stopRender ( ) {
		this.#renderer.setAnimationLoop(null);
	}

	get camera ( ) {
		return this.#camera;
	}

	get controls ( ) {
		return this.#orbitControls;
	}

	get scene ( ) {
		return this.#scene;
	}
}