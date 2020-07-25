var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
  bullet = createSprite(100,200,40,20);
  wall = createSprite(1200,200,thickness,height/2);
}

function draw() {
  background("pink");
  bullet.shapeColor=("white");
   bullet.velocityX = 2;
   
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=("green");
    }
    if(damage<10){
      wall.shapeColor=("red");
    }
  }
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
