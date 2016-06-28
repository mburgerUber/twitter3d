function setUp(){
createCanvas(800,500);
background(200);
}

function draw() {
background(80);
noStroke();

fill(204, 101, 192, 127);
translate(580, 200);
noStroke();
for (var i = 0; i < 10; i ++){
		ellipse(0, 30, 20, 80);
		rotate(PI/5);
	}
}