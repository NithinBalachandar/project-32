const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score = 0;
function preload()
{

}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  polygon1 = new polygon (200,200,100,100);
  sling = new slingShot (polygon1.body,{x:200,y:200});
    ground1 = new Ground (850,600,500,30);
    ground2 = new Ground (700,750,1600,30);
    //FIRST LAYER
    block1 = new Block (650,550,50,50);
    block2 = new Block (700,550,50,50);
    block3 = new Block (750,550,50,50);
    block4 = new Block (800,550,50,50);
    block5 = new Block (850,550,50,50);
    block6 = new Block (900,550,50,50);
    block7 = new Block (950,550,50,50);
    block8 = new Block (1000,550,50,50);
    block9 = new Block (1050,550,50,50);
    //SECOND LAYER
    block10 = new Block (675,500,50,50);
    block11 = new Block (725,500,50,50);
    block12 = new Block (775,500,50,50);
    block13 = new Block (825,500,50,50);
    block14 = new Block (875,500,50,50);
    block15 = new Block (925,500,50,50);
    block16 = new Block (975,500,50,50);
    block17 = new Block (1025,500,50,50);
    //THRID LAYER
    block18 = new Block (725,450,50,50);
    block19 = new Block (775,450,50,50);
    block20 = new Block (825,450,50,50);
    block21 = new Block (875,450,50,50);
    block22 = new Block (925,450,50,50);
    block23 = new Block (975,450,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  text("Score:"+score,width-300,50);                  
  ground1.display();
  ground2.display();
  //FIRST LAYER
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
//SECOND LAYER
block10.display();  
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
//THRID LAYER
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
//SECOND LAYER
block10.score();  
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
//THRID LAYER
block18.score();
block19.score();
block20.score();
block21.score();
block22.score();
block23.score();
sling.display();
polygon1.display();
}


function mouseDragged(){
	Matter.Body.setPosition(polygon1.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
if(keyCode === 32){
  sling.attach();
}
}
 

