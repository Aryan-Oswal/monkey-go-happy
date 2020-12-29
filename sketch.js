
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
  
}



function setup() {
  createCanvas(600,600)
  background(220)
  
  monkey = createSprite(200,500,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.2
  
  
  ground = createSprite(400,550,2000,10)
  ground.x = ground.width/2

}  


function draw() {
  background(220)
  ground.velocityX = -3
  if(ground.x < 0){
  ground.x = ground.width/2
  }
  monkey.collide(ground)
  drawSprites();
  if(frameCount % 100 === 0 ){
    spawnBanana();
    score = score + 10
  }
  if(frameCount % 100 === 2){
    spawnObsacle()
  }
  
  if(keyDown("space")){
    monkey.velocityY = -10
  }
  monkey.velocityY =  monkey.velocityY + 1;
  
  text( "Survival Time = " + score , 400,30)
}
function spawnBanana() {
  
  banana = createSprite(400,Math.round(random(200,400)),20,20)
  banana.velocityX = -2
  banana.addImage(bananaImage)
  banana.scale = 0.1
}


function spawnObsacle(){
  obstacle = createSprite(400,530,20,20)
  
  obstacle.velocityX = -2
  obstacle.addImage(obstacleImage)
  obstacle.scale = 0.1
  
}



