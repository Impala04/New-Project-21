//Program to make algorithm for collision sprites
var car, wall,wall2;
var carImage;


function preload(){
    carImage=loadImage('car.png')
}
function setup()
{
    createCanvas(1000,1000)

    car=createSprite(200,100,50,50);
    car.addImage(carImage)
    car.scale=0.6;
    wall=createSprite(800,200,60,1000)
    wall.shapeColor="yellow"
    car.velocityX=10;
    car.velocityY=10;  
 wall2=createSprite(500,200,30,600)
}
function draw()
{
    background(0);
     //car.x=World.mouseX;
     //car.y=World.mouseY;

     console.log("Width Gap " + (car.x-wall.x )+ " "+(car.width/2+wall.width/2))
     console.log("Height Gap "+ (car.y-wall.y )+ " " +(car.height/2+wall.height/2))
     
     //collision algorithm
    //if(Math.abs(car.x-wall.x)<=(car.width/2+wall.width/2)) 
      //  car.velocityX=car.velocityX*-1
    bounceOff(car,wall2)
    
    drawSprites();
}
