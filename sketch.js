
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImg = loadImage("images/iron.png");
  platformImage = loadImage ("images/stone.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 2;
  iron = createSprite(200,500,20,50);
  iron.addImage(ironImg); 
  iron.scale = 0.3;
  ground = createSprite(200,585,400,10);
  ground.visible = false
  platformGroup = new Group ();
 
}

function draw() {
  
  if (keyDown("space")){
    iron.velocityY = -15
  } 
  if (keyDown("up")){
    iron.velocityY = -10
  }
  if (keyDown("left")){
    iron.x = iron.x  -5
  }
  if (keyDown("right")){
    iron.x = iron.x  +5
  }
  iron.velocityY += 0.5 
iron.collide(ground)
bg.velocityY = 4;
if (bg.y > 500){
  bg.y = bg.width/4;
}
generatePlatforms();
for (var i = 0; i <platformGroup.lenght;i++){
  var temp = platformGroup.generatePlatforms(i);

  if (temp.istouching(ironMan)){
    ironMan.collide(temp);
  }
}
    
    drawSprites();
   
}

function generatePlatforms() {
  if (frameCount % 60 === 0) {
    var brick = createSprite(1200, 10, 40, 10);
    brick.x = random(50, 850);
    brick.addImage(platformImage);
    brick.velocityY = 5;
    brick.lifetime = 250;
    platformGroup.add(brick);
  }
}