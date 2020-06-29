class Form{

     constructor(){

        this.inputBox = createInput("Type your name here");
        this.playButton = createButton("CLICK HERE TO START");
        this.greeting = createElement('h3');

     }

     display() {
     
     var title = createElement('h2');
         title.html("PLAYER DETAILS");
         title.position(130,0);

         this.inputBox.position(130,160);

         this.playButton.position(250,200);

         this.playButton.mousePressed(() => {

             this.inputBox.hide();
             this.playButton.hide();
         
             player.name = this.inputBox.value();
             playerCount = playerCount + 1;
             player.index = playerCount;
             player.updatePlayerInfo();
             player.updateCount(playerCount);
             this.greeting.html("WELCOME PLAYER" + player.name);
             this.greeting.position(130,160);

         })

     }

     form_Hide(){

       this.inputBox.hide();
       this.playButton.hide();
       this.greeting.hide();

     }

}