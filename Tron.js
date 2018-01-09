
const SCL = 8;

var gracz1, gracz2;

function setup();
  createCanvas(800, 800);
  
  frameRate(30);
  
  gracz1 = new Snake(80 / SCL, height / 2 / SCL, 1, 0, colour("#0000FF"));
  gracz2 = new Snake((width - 50) / SCL, height / 2 / SCL, -1, 0, colour("#FF0000"));
  }
  
  function draw() {
  background(50);
  
    handleGracze();
    }
 
 function handleGracze(){
 
          gracz1.update();
          gracz2.update();
          
          gracz1.draw();
          gracz2.draw();
          
          
          if ((gracz1.collidesWith(gracz2.trail) && gracz2.collidesWith(gracz1.trail)) ||
                (gracz1.collidesWith(gracz1.trail) && gracz2.collidesWith(gracz2.trail)) ||
                (gracz1.collidesWithBounds() && gracz2.collidesWithBounds())) {
                
                
                endGame("Remis!!!");
        } else if (gracz1.collidesWith(gracz2.trail)   ||
                gracz1.collidesWithBounds() || gracz1.collidesWith(gracz1.trail)){
                
                
                endGame("Gracz 1, czerwony wygrywa !!!");
        } else if (gracz2.collidesWith(gracz1.trail) ||
                  gracz2.collidesWithBounds() || gracz2.collidesWith(gracz2.trail)) {
                  
                  
                  
                  endGame("Gracz 2, niebieski wygrywa!!!" );
            }
 }
 
 
 
 
 
 
 function keyPressed() {
 
      switch(keyCode) {
      
      case 37:
          gracz2.setVelocity(createVector(-1, 0));
          break;
          
      case 38:
           gracz2.setVelocity(createVector(0, -1));
      
      case 39:
          gracz2.setVelocity(createVector(1, 0));
          break;
                
