
var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf,leafImg;
var select_sprites = Math.round(random(1,2));

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");

}



function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);


  if (frameCount % 80 == 0) {
    if(select_sprites == 1) {
      
    }
    else {
      createLeaf()
      createApple()
    }
  }
  drawSprites();
}

function createApple() {
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.velocityY= 3;
  apple.lifetime = 400;
  apple.scale = 0.1;
}

function createLeaf() {
  leaf = createSprite(random(50,350),40,10,10)
  leaf.addImage(leafImg)
  leaf.velocityY= 3;
  leaf.lifetime = 400;
  leaf.scale = 0.1;
}