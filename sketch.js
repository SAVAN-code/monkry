var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var Ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200);
  ground = createSprite(200,180,800,15);
  
  ground.velocityX = -3;
  
  
  monkey = createSprite(25,170,10,10);
  monkey.addAnimation(" running", monkey_running);
  monkey.scale = 0.08;
  
  
 
  
obstacleGroup = createGroup;
  
foodGroup = createGroup;

  
  score = 0;
}




function draw() {
background("white");
  
   
  text("Score: "+ score, 500,50);
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
    monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  
  monkey.collide(ground);
  
  spawnObstacles();
 
   
  
  if (ground.x < 300){
  ground.x = ground.width/2;
    }
  
   
  drawSprites();
}


function spawnObstacles(){
  if (frameCount % 10 === 0){
     obstacle = createSprite(600,160,10,10);
  
  obstacle.velocityX = -5;
  obstacle.scale = 0.08;
 
  var rand = Math.round(random(1,6));
   switch(rand) {
       case 1: obstacle.addImage("stone",obstacleImage);
           break;
  
  
   }
    
   
    
  }
  
}
  

  

