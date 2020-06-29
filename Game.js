class Game{

constructor(){



}

readState(){

      var gameRefer = database.ref('gameState');
        gameRefer.on("value",function(data){
        gameState = data.val();
     })
     }

updateState(state){

      var stateRefer = database.ref('/');
          stateRefer.update({

            gameState: state

          })

} 

start(){

      if(gameState === 0){

         player = new Player();
         player.readCount();
         form = new Form();
         form.display();

      }

}

play(){

       form.form_Hide();
       text("GAME HAS STARTED", 120,100);
       Player.getPlayerInfo();

       if(allPlayers !== undefined){
             var positionY = 130;
             for(var PLR in allPlayers){

                 if(PLR === "player" + player.index){

                 fill("lightblue");

                 } 

                 else {

                   fill("lightgreen");

                 }

            positionY = positionY + 20;
            text(allPlayers[PLR].playerName + ":" + allPlayers[PLR].playerDistance, 120, positionY )

             }
       }

       if(keyIsDown(UP_ARROW) && player.index !== null){
             player.distance = player.distance + 50; 
             player.updatePlayerInfo();
       }

}

}