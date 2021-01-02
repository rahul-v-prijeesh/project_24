
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1, b2, b3,body1,body2,body3,ball1,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 var ball_options={
		 'isStatic': false,
		 'restitution':0.3,
		 'friction':0.5,
		 'density':1.2

	 }
	 
	 ball1=Bodies.circle(100,height-260,20,ball_options);
	 World.add(world,ball1)
    b1=new bin (600,height-60,200,20, {isStatic:true})
	b2=new bin (700,height-90,20,100, {isStatic:true});
	b3=new bin (500,height-90,20,100, {isStatic:true});
	
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  b1.display();
  b2.display();
  b3.display();
  ellipseMode(RADIUS);
  ellipse(ball1.position.x,ball1.position.y,20)
  fill("yellow")
  rect(width/2,700,width,100)
  drawSprites();
 Keypressed();
}
function Keypressed()
  {
   if(keyWentDown(UP_ARROW))
   {
       Matter.Body.applyForce(ball1,ball1.position,{x:60,y:-60});
   }
  }


