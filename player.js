class Player {
    constructor(){
      
      //this.distance = 0;
      this.name = null;
      this.grade=null;
    }
  
    
  
    update(){
      
      database.ref('/').set({
        name:this.name,
        grade:this.grade
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  
    getCarsAtEnd(){
      database.ref('carsAtEnd').on("value",(data)=>{
        this.rank=data.val();
  
      })
  
    }
  
    static updateCarsAtEnd(rank){
      var rank=database.ref('/').update({
        carsAtEnd:rank
      })
    }
  }