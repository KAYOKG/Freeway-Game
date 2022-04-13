//Car variables
let car1Image
let car2Image
let car3Image
// Character variables
let characterImage
let xCharacter = 100
let yCharacter = 366
//collision variables
let collision = false
let roadImage

function preload(){
  roadImage = loadImage('images/road.png')
  characterImage = loadImage('images/character.png')
  car1Image = loadImage('images/car 1.png')
  car2Image = loadImage('images/car 2.png')
  car3Image = loadImage('images/car 3.png')
  carsImage = [car1Image, car2Image, car3Image, car1Image, car2Image, car3Image]
}
function setup() {
  createCanvas(500, 400)
}
function draw() {
  background(roadImage)
  show_character()
  show_cars()
  car_movement()
  character_movement()
  car_movement_loop()
  collide_check()
}
function show_character(){
  image(characterImage, xCharacter, yCharacter, 30, 30)
}
function character_movement(){
  if (keyIsDown(UP_ARROW) && yCharacter >5){
    yCharacter -= 2
  }
  if (keyIsDown(DOWN_ARROW) && yCharacter < 366){
    yCharacter += 2
  }
}
function collide_check(){
  for(i = 0; i < carsImage.length; i++){
    collision = collideRectCircle(xCars[i], yCars[i], carsLength, carsheight, xCharacter, yCharacter, 15)
    if (collision){
      hit()
    }
  }
}
function hit(){
  yCharacter = 366 
}