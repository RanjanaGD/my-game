class Game{
    constructor(){

    }

    start(){
        
        gamer=createSprite(displayWidth/2,displayHeight-50,10,10)
       gamer.addImage(rocketImg)
        gamer.scale=0.3
        
            game.spawnUfo()

        }
   
collide(){
    fall=createSprite(ufo.x,ufo.y,40,10)
    fall.velocityY=1

console.log("fall")


}



           spawnUfo() {
            if(frameCount%100==0){
                   ufo = createSprite(displayWidth/2,displayHeight/2,40,10);
                 
                  ufo.addImage(ufoImg);
                ufo.scale = 0.5;
                ufo.velocityX = -2;
                 
                   
                   
                   if(ufo.x<200){
                   ufo.velocityX=2
                  }

                  if(ufo.x>500){
                     ufo.velocityX=-2
                    }
                }
            }
        }
              



    









