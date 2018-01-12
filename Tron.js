
const SCL = 5; // skala rozmiaru pixeli(grubosc wezy)

var gracz1, gracz2;

function setup() {
  createCanvas(800, 800);

  frameRate(10);

	/* inicjacja graczy */
  gracz1 = new Snake(50 / SCL, height / 2 / SCL, 1, 0, color("#0000FF")); /* kolor niebieski*/
  gracz2 = new Snake((width - 50) / SCL, height / 2 / SCL, -1, 0, color("#FF0000"));  /* kolor czerwony*/
}

function draw() {
  background(51);

	handlePlayers();
}

/**
 * ulepszanie , odswiezanie, rysowanie, oraz sprawdzanie kolizji miedzy graczami
 */
function handlePlayers() {

	/* ulepszanie graczy */
	gracz1.update();
	gracz2.update();

	/* rysowanie graczy */
gracz1.draw();
	gracz2.draw();

	/* sprawdzanie kolizji */
	if ((gracz1.collidesWith(gracz2.trail) && gracz2.collidesWith(gracz1.trail)) ||
		(gracz1.collidesWith(gracz1.trail) && gracz2.collidesWith(gracz2.trail)) ||
		(gracz1.collidesWithBounds() && gracz2.collidesWithBounds()))	{

		// obaj gracze umieraja w tym samym czasie

		endGame("Remis!");
	} else if (gracz1.collidesWith(gracz2.trail) ||
		gracz1.collidesWithBounds() || gracz1.collidesWith(gracz1.trail)) {

		//jesli gracz1 uderza gracza2 lub w jego bok
		// or if player2 hits themself

		endGame("Czerwony wygrywa!");
	} else if (gracz2.collidesWith(gracz1.trail) ||
		gracz2.collidesWithBounds() || gracz2.collidesWith(gracz2.trail)) {

		//jesli gracz2 uderza gracza1 lub w jego bok
		// lub gdy gracz1 uderza siebie nawzajem 

		endGame("Niebieski wygrywa!");
	}
}

/**
 * sterowanie 
 * gracz1 = W, A, S, & D
 * gracz2 = UP, LEFT, DOWN, & RIGHT
 */
function keyPressed() {

  switch (keyCode) {

    case 37:
      gracz2.setVelocity(createVector(-1, 0));
      break;

    case 38:
      gracz2.setVelocity(createVector(0, -1));
      break;

    case 39:
     gracz2.setVelocity(createVector(1, 0));
      break;

    case 40:
     gracz2.setVelocity(createVector(0, 1));
      break;

    case 65:
      gracz1.setVelocity(createVector(-1, 0));
      break;

    case 87:
      gracz1.setVelocity(createVector(0, -1));
      break;

    case 68:
     gracz1.setVelocity(createVector(1, 0));
      break;

    case 83:
      gracz1.setVelocity(createVector(0, 1));
      break;

  }
}

/**
 * zamykanie gry oraz wyswietlenie wyniku
 */
function endGame(winner) {

  noStroke();
  textAlign(CENTER);
  textSize(60);
  fill(255);
  text(winner, width / 2, height / 2);
  noLoop();
}
