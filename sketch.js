var car,wall;

var speed=random(55,90);
var weight=random(500,1500);



function setup() {
  createCanvas(400,400);
  car=createSprite(50,200,30,20)
  car.shapeColor="blue";
wall=createSprite(370,200,30,400);
wall.shapeColor="blue";

}

function draw() {
  background(0); 
 
 car.velocityX=speed;
  if(wall.x-car.x<car.width/2+wall.width/2){
    
    var deformation=0.5*speed*weight/22500;
    if(deformation>180){
      car.shapeColor="red"
    }
    if(deformation<180){
      car.shapeColor="yellow"
    }
    if(deformation>100){
      car.shapeColor="green";
    }
  }
  drawSprites();
}