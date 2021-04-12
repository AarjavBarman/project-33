const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var BackgroundIMG;
var particles=[];

function preload()
{
BackgroundIMG = loadImage("snow3.jpg");
}

function setup() {
	createCanvas(800,400);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(BackgroundIMG);
  rectMode(CENTER);
  

	if(frameCount%10===0){
	
		for (var j  = 50; j <=width-10; j=j+50)
		{
		particles.push(new Snow(j,70,20));	
		}
	}
	for (var i = 0; i < particles.length; i++) {
	particles[i].display();	
	}

  //drawSprites();
 
}



