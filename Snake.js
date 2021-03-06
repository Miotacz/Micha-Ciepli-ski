function Snake(x, y, xVelocity, yVelocity, color) {

	this.location = createVector(x, y);
	this.velocity = createVector(xVelocity, yVelocity);

  this.trail = [];

  this.color = color;
}

/**
 * rysowanie sladu weza
 **/
Snake.prototype.draw = function() {

  noStroke(); /** Wyłącza rysowanie obrysu (kontur). 
  Jeśli zostaną wywołane zarówno noStroke (), jak i noFill (), nic nie zostanie wyświetlone na ekranie. **/
  fill(this.color);

  for (var i = 0; i < this.trail.length; i++) {

    rect(this.trail[i].x * SCL, this.trail[i].y * SCL, SCL, SCL);
  }
};

/**
 * stworzenie predkosci oraz lokacji sladu
 */
Snake.prototype.update = function() {

  this.trail.push(createVector(this.location.x, this.location.y));
  this.location.add(this.velocity);
};

/**
 *  stan predkosci wezy
 */
Snake.prototype.setVelocity = function(velocity) {
		 /* Math.abs = Zwraca wartość bezwzględną danej liczby. */
	if (Math.abs(velocity.y - this.velocity.y) > 1 ||
 		Math.abs(velocity.x - this.velocity.x) > 1) //
		return;

	this.velocity = velocity;
};

/**
 * sprawdzanie kolizji 
 */
Snake.prototype.collidesWith = function(trail) {

  for (var i = 0; i < trail.length; i++) {

		if (trail[i].x === this.location.x && trail[i].y === this.location.y) { /* Identyczny (===) .Zwraca true jeżeli operandy( zbiór obiektów) są równe i tego samego typu.  */

			return true;
		}
  }

  return false;
};

/**
 * sprawdzanie czy waz przekracza "ograniczenia mapy, "bandy"
 */
Snake.prototype.collidesWithBounds = function() {

  return (this.location.x < 0 || this.location.x > (width / SCL) ||
  	this.location.y < 0 || this.location.y > height);
};
