var garden,rabbit;
var gardenImg,rabbitImg;
var orangeleaves, redleaves, apples;
var orangeleavesImg,redleavesImg, applesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  orangeleavesImg= loadImage ("orangeLeaf.png");
  redleavesImg=loadImage("redImage.png");
  applesImg= loadImage("apple.png");
}

function setup(){
  createCanvas(400,400);
  
  // Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}



function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(applesImg);
  apple.scale= 0.06;
  apple.velocityY=5;
  apple.lifetime=100;

}
function createOrangeleaves(){
  orangeleaves=createSprite(random(50,350),40,10,10);
  orangeleaves.addImage(orangeleavesImg);
  orangeleaves.scale= 0.06;
  orangeleaves.velocityY=5;
  orangeleaves.lifetime=100;

}
function createRedleaves(){
  redleaves=createSprite(random(50,350),40,10,10);
  redleaves.addImage(redleavesImg);
  redleaves.scale= 0.06;
  redleaves.velocityY=5;
  redleaves.lifetime=100;

}

  
//creating boy running



function draw() {
  background(0);
  rabbit.x=mouseX;
  var select_sprites=Math.round(random(1,3))
  if (frameCount%80==0){
    if (select_sprites==1){
  createApples();
    }else if (select_sprites===2){
      createOrangeleaves();
    }
    else{
      createRedleaves();
    }
  }
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}