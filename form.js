class Form{
    constructor(){
        this.input=createInput('name');
        this.input1=createInput('grade')
        this.button=createButton('play');
        this.greeting=createElement('h2')
    }
    
    display(){
        var title=createElement('h1')
        title.html("SPACE")
        title.position(displayWidth-450,displayHeight-600)
          this.input.position(displayWidth-600,displayHeight-300)
          this.input1.position(displayWidth-400,displayHeight-300)
         this.button.position(displayWidth-200,displayHeight-300)
        
    
        this.button.mousePressed(()=>{
            this.input.hide()
            this.input1.hide()
            this.button.hide()
            game=new Game()
            game.start()
            player.name=this.input.value()                  
            player.update()            
            this.greeting.html('hi!   '+player.name)
            this.greeting.position(350,100)
    
        }
        )
    }
}