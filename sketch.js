var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg;
var music;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg  = loadImage("images/star.png");
	bgImg    = loadImage("images/starNight.png");
	//load animation for fairy 
	fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");

	music = loadSound("sound/JoyMusic.mp3")
}

function setup()
{
	createCanvas(1000, 600);

	//write code to play fairyVoice sound
	music.play();

	engine = Engine.create();
	world = engine.world;

	//create fairy sprite and add animation for fairy
	fairy = createSprite(130,400);
	fairy.addAnimation("flying", fairyImg);
    fairy.scale = 0.3;
	World.add(world, fairy);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	World.add(world, star);

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  //console.log(star.y);
  //console.log(starBody);

  //write code to stop star in the hand of fairy
  if(star.y > 337 && starBody.position.y > 337)
  {
	Matter.Body.setStatic(starBody,true);
  }

  keyPressed();

  drawSprites();

}

function keyPressed() {

	if (keyDown("DOWN_ARROW")) 
	{
	  Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyDown("LEFT_ARROW")) 
	{
		fairy.x = fairy.x - 65;
	}

	if(keyDown("RIGHT_ARROW")) 
	{
		fairy.x = fairy.x + 70;
	}
	
}
