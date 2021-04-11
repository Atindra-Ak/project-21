var g1,g2,g3,g4,canvas;
var box,music,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   box=createSprite(random(20,750),200,40,40);
   box.shapeColor="white";
   box.velocityX=4;
   box.velocityY=4;

   g1=createSprite(0,590,360,30);
   g1.shapeColor="blue";

   g2=createSprite(295,590,200,30);
   g2.shapeColor="yellow";

   g3=createSprite(510,590,200,30);
   g3.shapeColor="red";

   g4=createSprite(723,590,200,30); 
   g4.shapeColor="green";

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
     
    box.bounceOff(edges);
    

    colorChange();

    drawSprites();
    }

    function colorChange(){
        if(g1.isTouching(box) && box.bounceOff(g1)){  
            box.shapeColor="blue";
            music.play();
          }
     
          if(g2.isTouching(box)){
             box.velocityX=0;
             box.velocityY=0;
             box.shapeColor="yellow";
             music.stop();
          }
     
          if(g3.isTouching(box) && box.bounceOff(g3)){
              box.shapeColor="red";
              music.play();
             }
          
          if(g4.isTouching(box) && box.bounceOff(g4)){
            box.shapeColor="green";
            music.play(); 
         }
    }
