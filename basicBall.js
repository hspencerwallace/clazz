
/* Coding Challenge 2

Take this code that gives a basic bouncing ball and change it in 2 major ways


1)refactor it so that you have a ball class, and write a draw loop 
that has many bouncing balls. 

2) instead of a ball change it into a more interesting shape, or a picture or something
also change the name of your class to reflect your sketch better
*/

//display circle at x location
// stroke(0)
// strokeWeight(2);
// fill(127);
// elllipse(x, y, 48, 48);

//mycode

let ball;
let ballPic;
let balls = [];
let howManyBalls = 50;

let mouseBoxX;
let mouseBoxY;

let lwidth = 500;
let lheight = 500;


function setup(){
	// createCanvas(710, 400, WEBGL);
  createCanvas(windowWidth, windowHeight);

  background(45, 210, 247);

	ballPic = loadImage('lock.png');
  keyPic = loadImage('key.png')

	ball = new Ball();

	for (let i = 0; i < howManyBalls; i++){
		balls[i] = new Ball();
	}
}

function draw(){


ball.display();
ball.move();

for (let i = 0; i <howManyBalls; i++){
		balls[i].move();
		balls[i].display();

	}
  image(keyPic, mouseBoxX, mouseBoxY, 100, 100);

}

function mousePressed(){
mouseBoxX = mouseX;
mouseBoxY = mouseY;
ponies[whichpony]

}

class Ball {

	constructor(){
		this.x = random(width);
		this.y = random(height);
		this.xspeed = random(-0.5, 0.5);
		this.yspeed = random(-0.5, 0.5);
	}

	display(){
    imageMode(CENTER);
		image(ballPic, this.x, this.y, lwidth, lheight);
	}

	move(){
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;

		if ((this.x > width) || (this.x < 0)) {
		this.xspeed = this.xspeed * -1;
		}

		if ((this.y > height) || (this.y < 0)) {
		this.yspeed = this.yspeed * -1;
		}	

    if ((this.x > mouseBoxX && this.x < (mouseBoxX + 50))&&
      (this.y > mouseBoxY && this.y < (mouseBoxY + 50))){

this.xspeed = this.xspeed + 1;
this.yspeed = this.yspeed + 1;

lwidth -= 4.1;
lheight -= 4.1;




    }

	}
  teleportPony(xLoc, yLoc){
this.x

  }

}

