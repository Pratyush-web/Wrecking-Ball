const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ground;
var rope;
var block = [];

function setup() 
{
  createCanvas(900, 400);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground(width/2, 390, width, 5);
  ball = new Ball(200, 200, 30);
  rope = new Rope(ball.body, {x: 200, y: 100});

  for(var numb = 0; numb <= 5; numb++)
  {
    block.push(new Block(300, 350, 50, 50));
  }
  for(var numb = 0; numb <= 5; numb++)
  {
    block.push(new Block(370, 350, 50, 50));
  }
  for(var numb = 0; numb <= 5; numb++)
  {
    block.push(new Block(440, 350, 50, 50));
  }
 console.log(block);

  
}

function draw() 
{
  background(56, 44, 44); 
 
  textSize(20);
  fill("lightyellow");

  ground.display();
  fill("red");
  ball.display();
  rope.display();
  
  for(var i = 0; i < block.length; i++)
  block[i].display();

  console.log(block.length);
 
  

}

function mouseDragged()
{
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
  rope.fly();
  Matter.Body.applyForce(ball.body, {x: 40, y: 30});
}
