const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var plinko;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var score = 0;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2, 790, width, 20);

  for(var d = 0; d <= width; d = d+80) {
      divisions.push(new Division(d, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var p = 75; p <= width; p = p+50) {
    plinkos.push(new Plinko(p, 75));
  }

  for(var p = 50; p <= width-10; p = p+50) {
    plinkos.push(new Plinko(p, 175));
}

for(var p = 75; p <= width-20; p = p+50) {
  plinkos.push(new Plinko(p, 275));
}

for(var p = 50; p <= width-30; p = p+50) {
  plinkos.push(new Plinko(p, 375));
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  for (var j = 0; j < divisions.length; j++) {
    divisions[j].display();
  }

  if(frameCount%60 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

  for(var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var s = 0; s < plinkos.length; s++) {
    plinkos[s].display();
  }

  for (var k = 50; s < plinkos.length; s++) {
    plinkos[k].display();
  }

  for (var b = 100; s < plinkos.length; s++) {
    plinkos[b].display();
  }

  for (var c = 150; s < plinkos.length; s++) {
    plinkos[c].display();
  }
    
  drawSprites();
 
}