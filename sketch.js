const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var roof;

var trex = "dino";
console.log(trex);

var num = 20;
console.log(num);

var object;
console.log(object);

var arr1 = [1,2,3,4,"suveer",true];
console.log(arr1);
console.log(arr1[4]);

var arr2 = [[1,2],["coder",4],[true,"mam"]];
console.log(arr2[1][0]);
arr2.push('suveer is a good coder');
console.log(arr2);
arr2.pop();
console.log(arr2);



function preload(){

}

function setup() {
  createCanvas(800,700);
  
engine = Engine.create();
world = engine.world;

Engine.run(engine); 

roof = new Roof();

bob1 = new Bob(300);
bob2 = new Bob(350);
bob3 = new Bob(400);
bob4 = new Bob(450);
bob5 = new Bob(500);

rope1 = new Rope(bob1.body,roof.body,-100);
rope2 = new Rope(bob2.body,roof.body,-50);
rope3 = new Rope(bob3.body,roof.body,0);
rope4 = new Rope(bob4.body,roof.body,50);
rope5 = new Rope(bob5.body,roof.body,100);

getTime();
}

function draw() {
  background(0); 
 
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}


function keyPressed(){
  if(keyCode == UP_ARROW){
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
  }
}

 async function getTime(){

  var response =  await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var responseJSON =  await response.json();
  console.log(responseJSON);

  var datetime = responseJSON.datetime;
  console.log(datetime);

  var hour = datetime.slice(11,13);
  console.log(hour);
}

