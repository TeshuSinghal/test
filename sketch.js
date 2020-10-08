
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObject;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var radius = this.radius;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new Roof(400, 100, 600, 50);
	bobObject1 = new Bob(240, 550, 80);
	bobObject2 = new Bob(320, 550, 80);
	bobObject3 = new Bob(400, 550, 80);
	bobObject4 = new Bob(480, 550, 80);
	bobObject5 = new Bob(560, 550, 80);
	rope1 = new Rope(bobObject1.body, roofObject.body, -radius*4, 40);
	rope2 = new Rope(bobObject2.body, roofObject.body, -radius*4, 0);
	rope3 = new Rope(bobObject3.body, roofObject.body, -radius*4, 0);
	rope4 = new Rope(bobObject4.body, roofObject.body, -radius*4, 0);
	rope5 = new Rope(bobObject5.body, roofObject.body, -radius*4, 0);
	
	
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //keyPressed();
  
  drawSprites();
 
}

function keyPressed(){ 
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-125,y:-85})
	}
}



