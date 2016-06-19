var scene, camera, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

	scene = new THREE.PerseptiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.postion.z = 100;

	geometry = new KeyCode.THREE.BoxGeometry(200, 200, 200);
	material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
	
	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer();
	renderer.setsize(window.innerWidth, window.innerHeight );

	document.body.appendChild( renderer.domElement);

}

function animate() {

	requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;

	render( scene, camera );

}