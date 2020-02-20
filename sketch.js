
let buckwheat; // Declare object



function setup() {
  createCanvas(710, 400);
  // Create object
  buckwheat = new Pancake();
  sourDoughPancake = new PonyPancake();

  fot (let i = 0, i < 1000; i++)

  
}

function draw() {
  background(50, 89, 100);
  buckwheat.move();
  buckwheat.display();


}

// Pancake class
class Pancake {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
    this.red = random(255);
    this.green = 100;
    this.blue = 150;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    fill(this.red, this.green, this.blue);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
