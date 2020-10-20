var fixedRect,movingRect;

var newRect1, newRect2;



function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";

  newRect1 = createSprite(100,100,50,50);
  newRect1.shapeColor = "green";

  newRect2 = createSprite(200,100,50,50);
  newRect2.shapeColor = "green";
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
//When calling the function, pass the sprites for which we want to check the collision.
  if(isTouching(movingRect,newRect2)){
    movingRect.shapeColor = "red";
    newRect2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    newRect2.shapeColor = "green";
  }

 
  drawSprites();
}

