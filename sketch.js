var fixedRect,movingRect;





function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=5;

  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY=-5;
}

function draw() {
  background(0);  
  

  
  

bounceOff(movingRect,fixedRect);
  drawSprites();
}
