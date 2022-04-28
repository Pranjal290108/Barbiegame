var bg,bgImg;
var barbie, barbieImg;
var candy, spider, candy2, candyImg, candyImg2, spiderImg;
var score;
var candyGroup, spiderGroup;


function preload(){
  
  barbieImg = loadImage("assets/Barbie.png");
  candyImg = loadImage("assets/candy.png");
  candyImg2 = loadImage("assets/candy2.png");
  bgImg = loadImage("assets/barbieHouse.png");
  spiderImg = loadImage("assets/spider.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgImg);
bg.scale = 2;
  

//creating the player sprite
barbie = createSprite(displayWidth-1150, displayHeight-250, 50, 50);
 barbie.addImage(barbieImg);
   barbie.scale = 0.3;
   barbie.debug = true;
   barbie.setCollider("rectangle",0,0,300,300);

   candyGroup = new Group();
spiderGroup = new Group();





}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("LEFT_ARROW")||touches.length>0){
  barbie.x = barbie.x-30;
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 barbie.x = barbie.x+30;
}


candy();

drawSprites()
}

function candy(){

  if(frameCount%100===0){

    candy = createSprite(random(100,1100),100,40,40);
    candy.addImage(candyImg);
    candy.scale = 0.2;
    candy.setVelocityY = -5;
    candy.debug = true;
    candy.setCollider("rectangle",0,0,200,200);

    candy.lifetime = 400;
    candyGroup.add(candy);

  }

}

function spider(){

  if(frameCount%200===0){

    spider = createSprite(random(100,1100),100,40,40);
    spider.addImage(spiderImg);
    spider.scale = 0.2;
    spider.setVelocityY = -5;
    spider.debug = true;
    spider.setCollider("rectangle",0,0,200,200);

    spider.lifetime = 400;
    spiderGroup.add(spider);

  }

}



























