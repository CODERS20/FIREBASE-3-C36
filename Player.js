class Player{

      constructor(){

         this.index = null;
         this.name = null;
         this.distance = 0;

      }

      readCount(){
  
        var readC = database.ref('playerCount');
        readC.on("value",function(data){
  
            playerCount = data.val();

        })

      }

      updateCount(count){

       var readP = database.ref('/');
           readP.update({

           playerCount: count

           })

      }

      updatePlayerInfo(){

      var playerIndex = "Players/player" + this.index;
      var playerRef = database.ref(playerIndex);
             playerRef.set({

              'playerName': this.name,
              'playerDistance': this.distance

            })
            }

       static getPlayerInfo(){

         var PI_ref = database.ref('Players');
         PI_ref.on("value",(data) => {
         
          allPlayers = data.val();

         })

      }

}
   