function DoubleSnake(x, y ,xVelocity, yVelocity, colour) {
         
         this.location = createVector(x, y);
         this.velocity = createVector(xVelocity, yVelocity);

  this.trail = [];
  this.color = color;

}

  DoubleSnake.prototype.draw = function() {
    
    noStroke();
    fill(this.color);
    
    for(var i = 0; i < this.trail.length; i++) {
      
      rect(this.trail[i].x * SCL, this.trail[i].y *SCL , SCL, SCL) ;
    }
};

DoubleSnake.prototype.update = function() {
  this.trail.push(createVector(this.location.x, this.location.y));
  this.location.add(this.velocity);
};

DoubleSnake.prototype.collidesWith = function(trail) {
  
  for (var i = 0; i < trail.length; i++) {
    
    if (trail[i].x === this.location.x && trail[i].y === this.location.y) {
      
        return true;
     }
}
  
  return false;

};


DoubleSnake.prototype.collidesWithBounds = function() {
  
  return (this.location.x < 0 || this.location.x > (width / SCL) ||
          this.location.y < 0 || this.location.y > height);
};  

  
