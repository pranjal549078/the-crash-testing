var car, wall;
var speed, weight;
function setup() {
  createCanvas(1600, 400);
  //speed
  speed = random(55, 90);
  //weight
  weight = random(900, 1500);
  //car
  car = createSprite(10, 150, 30, 30);
  car.shapeColor = color(255)
  //to give random speed
  car.velocityX = speed;
  // to create a wall
  wall = createSprite(1000, 150, 35, height / 2);
  wall.shapeColor = color(255)
}

function draw() {
  background(0);

/*is touching function*/
  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500
    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    }
    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
    }
    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0);
    }
  }



  drawSprites();
}
