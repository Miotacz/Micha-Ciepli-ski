const SCL = 5; // skala rozmiaru pixeli

var gracz1, gracz2; // Zmienne i typy (int mozna zamienic varem)

function setup() {
  createCanvas(1400,1000);

  frameRate(10); /* Określa liczbę klatek wyświetlanych co sekundę.  */

	/* inicjacja graczy */
  gracz1 = new Snake(50 / SCL, height / 2 / SCL, 1, 0, color("#0000FF")); /* kolor niebieski*/
  gracz2 = new Snake((width - 50) / SCL, height / 2 / SCL, -1, 0, color("#FF0000"));  /* kolor czerwony*/
	/* SCL= screen coordinate list */
}

function draw() {
  background(51);

	handlePlayers();
}

/**
 * ulepszanie , odswiezanie, rysowanie, oraz sprawdzanie kolizji miedzy graczami
 */
function handlePlayers() {

	/* ulepszanie(odswiezanie) graczy */
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

		endGame("Remis! Gra autorstwa Michala.C");
	} else if (gracz1.collidesWith(gracz2.trail) ||
		gracz1.collidesWithBounds() || gracz1.collidesWith(gracz1.trail)) {

		//jesli gracz1 uderza gracza2 lub w jego bok
		// lub gdy gracz2 uderza siebie 
		endGame("Czerwony wygrywa! Gra autorstwa Michala.C");
	} else if (gracz2.collidesWith(gracz1.trail) ||
		gracz2.collidesWithBounds() || gracz2.collidesWith(gracz2.trail)) {

		//jesli gracz2 uderza gracza1 lub w jego bok
		// lub gdy gracz1 uderza siebie 

		endGame("Niebieski wygrywa! Gra autorstwa Michala.C");
	}
}

/**
 * sterowanie 
 * gracz1 = W, A, S, & D
 * gracz2 = UP, LEFT, DOWN, & RIGHT
 */
function keyPressed() {
/* Instrukcji wyboru SWITCH używamy, jeśli chcemy w zależności od wartości pewnego wyrażenia wykonać jeden z kilku fragmentów kodu. 
Jest to w pewnym sensie rozszerzenie instrukcji warunkowej IF. */
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

  noStroke(); /** Wyłącza rysowanie obrysu (kontur). 
  Jeśli zostaną wywołane zarówno noStroke (), jak i noFill (), nic nie zostanie wyświetlone na ekranie. **/
  textAlign(CENTER);
  textSize(60);
  fill(255); /** Komenda Fill () Ustawia kolor używany do wypełniania kształtów **/
  text(winner, width / 2, height / 2);
  noLoop();
}
