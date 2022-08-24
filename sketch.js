const World=Matter.World
const Bodies=Matter.Bodies
const Engine=Matter.Engine


//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body
var engine,world

function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the engine
  engine=Engine.create()
    world=engine.world

  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world
ground=Bodies.rectangle(200,380,400,30,ground_options)
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
 World.add(world,ground) 
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
 rect(ground.position.x,ground.position.y,400,30)


  
  
}

