var scene, camera, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.5, 2000 );
	camera.position.z = 1000;

	geometry = new THREE.SphereGeometry(100, 32, 32);
	var material = new THREE.MeshLambertMaterial({color: 0x1DA1F2});
	
	var light = new THREE.AmbientLight( 0xffff );
	scene.add( light );
	var light = new THREE.PointLight(0xffffff);
	light.position.set(3000,800,1500);
	scene.add(light);

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight );

	document.body.appendChild( renderer.domElement);
	renderer.setClearColor(0xF3F6F9, 1);

}

function animate() {

	requestAnimationFrame( animate );

	mesh.rotation.x += 0.02;
	mesh.rotation.y += 0.02;

	renderer.render( scene, camera );

}