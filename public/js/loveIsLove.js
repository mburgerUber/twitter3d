//set up the secne, camera, and renderer as golbal variables.
var scene, camera, renderer;
var bird;

init();
animate();


//Sets up the scene.
function init() {

	//create the scene and set the scene size.
	scene = new THREE.Scene();
	var WIDTH = window.innerWidth,
		HEIGHT = window.innerHeight;

// create a renderer and add it to the DOM.
	renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setSize(WIDTH, HEIGHT);
	document.body.appendChild(renderer.domElement);

//Create a camera, zoom ito out form the model a bit and add it to the scene.
	camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
	camera.position.set(0,6,0);
	scene.add(camera);

//set the background color of the scene.
	renderer.setClearColor(0xF3F6F9, 1);

//creat a light, set its postion, and add it to the scene.
	var light = new THREE.PointLight(0xffffff);
	light.position.set(3000,800,1500);
	scene.add(light);
	var light = new THREE.AmbientLight(0xffffff);
	scene.add(light);

//load in the mesh and add it to the scene.
	var loader = new THREE.JSONLoader();
	var loader = new THREE.TextureLoader();
	loader.load(
	// resource URL
	'models/SphereSurface_Color.jpg',
	// Function when resource is loaded
	function ( texture ) {
		// do something with the texture
		var material = new THREE.MeshBasicMaterial( {
			map: texture
		 } );
	});
	loader.load("models/Heart.json", function(geometry) {
		bird = new THREE.Mesh(geometry, material);
		scene.add(bird);
	});
	
	//var loader = new THREE.JSONLoader();
	//loader.load("models/Heart.json", function(geometry, materials) {
	//	var material = new THREE.MeshFaceMaterial( materials );
	//	bird = new THREE.Mesh(geometry, material);
	//	scene.add(bird);
	//});
	//function createScene( geometry, materials ) {
    //    var bird = new THREE.Mesh( geometry, new THREE.MultiMaterial( materials ));
    //    scene.add(bird);
    //}
    //texture
//			}, onProgress, onError );

//add orbitControls so that we can pan around with the mouse.
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	
}

//animating the bird

function rotateBird() {
	//bird.rotateZ(Math.PI/-20);
	bird.rotation.z += 0.01;
}


function animate(){

	requestAnimationFrame(animate);

	//Render the scene.
	renderer.render(scene, camera);
	rotateBird();
	controls.update();

	}
