class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state){
    database.ref("/").update(
      {
        gameState:state
      }
    );

  }
  
  
  
  
  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
  car1=createSprite(width/2-50,height-100)
  car1.addImage(car1_img);
  car2=createSprite(width/2+100,height-100)
  car2.addImage(car2_img);     
}

 drawSprites()

handleElements() {
  form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    form.hide();
   text("LET THE GAME START",200,200)
  
  
  }
}
