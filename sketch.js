var paper,box;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	ground=createSprite(width/2,height-35,width,10);
	ground.shapeColor=color(255)

	paper=createSprite()

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true});
	World.add(world,ground); 
	
	paper = Matter.Bodies.circle(300, 645, 2);
	World.add(world,paper);
	
	Engine.run(engine);
  
	box1 = new Box(595,645,200,20);
	box2 = new Box(495,645,20,100);
	box3 = new Box(695,645,20,100);
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();
  
  
  drawSprites();
 
}



