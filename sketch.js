var gameState = 0;
var playerCount = 0;
var form,player,game;
var database;
var allPlayers;
var distance = 0;

function setup(){

createCanvas(1200,1200);

database= firebase.database();
game = new Game();
game.readState();
game.start();

}

function draw(){

if(playerCount === 2){

    game.updateState(1);
}

if(gameState === 1){
    clear();
    game.play();

}

}