var form,player,game;
var rocket;
var gamer;
var rocketImg,ufoImg,bulletImg;
var ufo,bullet;
var fall;
function preload(){
    rocketImg=loadImage("Rocket.png")
    ufoImg=loadImage("ufo.png")
    bulletImg=loadImage("bullet.png")
}

function setup(){
    database=firebase.database();
    createCanvas(displayWidth,displayHeight);
   form=new Form()
player=new Player()
//game=new Game()

}

function draw(){
    background(255);
form.display()
if (ufo!=undefined){


if(ufo.x<200){
    ufo.velocityX=2
   }

   if(ufo.x>1200){
      ufo.velocityX=-2
   }

   if(bullet!=undefined){
   if(bullet.isTouching(ufo)){
    game.collide()
    ufo.destroy()
      
   }
   }


   
    }

drawSprites()
}
function keyPressed(){
 
        if(keyCode ===32 )
        { bullet=createSprite(gamer.x,gamer.y,10,10) 
            bullet.velocityY=-5;
             bullet.lifetime=100;
              bullet.addImage(bulletImg) 
              bullet.scale=0.1 } 
        else if(keyCode ===37) { 
            gamer.velocityX=-5 
        } 
        else if(keyCode ===39)  { 
            gamer.velocityX=5
        }
    }




