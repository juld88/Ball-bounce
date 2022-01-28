const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var up;
var right;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  up = createImg("up.png");
  up.position(220,30);
  up.size(50,50);
  up.mouseClicked(Vforce);

  right = createImg("right.png");
  right.position(20,30);
  right.size(50,50);
  right.mouseClicked(Hforce);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  
  var ball_options = {restitution: 0.95}
  ball = Bodies.circle(200,100,25,ball_options);
  World.add(world, ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x, ball.position.y, 25);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function Hforce() {
  Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.05, y:0});
}

function Vforce() {
  Matter.Body.applyForce(ball,{x:0,y:0}, {x:0, y:-0.05});
}