const Engine=Matter.Engine;
 const World=Matter.World;
 const Bodies=Matter.Bodies;


function setup() {
   canvas=createCanvas(400,400);
   engine=Engine.create();
   world=engine.world;
   
   object=Bodies.rectangle(200,390,400,20,{isStatic:true});
   World.add(world,object);

   ball=Bodies.circle(200,200,40,{restitution:2});
   World.add(world,ball);
   //console.log(object);
  console.log(ball);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,40);
  ellipse(ball.position.x,ball.position.y,40);
  
  
  drawSprites();
}