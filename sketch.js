//Car variables
let car1Image
let car2Image
let car3Image
// Character variables
let characterImage
let xCharacter = 100
let yCharacter = 366
// variavel dos pontos
let myPoints = 0
//collision variables
let collision = false
let roadImage
// musiquinha do jogo 
let soundTrack
let collisionSound
let scoreSound
function preload(){
  roadImage = loadImage('images/road.png')
  characterImage = loadImage('images/character.png')
  car1Image = loadImage('images/car 1.png')
  car2Image = loadImage('images/car 2.png')
  car3Image = loadImage('images/car 3.png')
  carsImage = [car1Image, car2Image, car3Image, car1Image, car2Image, car3Image]
  collisionSound = loadSound('sons/collisionSound.mp3')
  soundTrack = loadSound('sons/soundtrack.mp3')
  scoreSound = loadSound('sons/scores.wav')
}
function setup() {
  createCanvas(500, 400)
  soundTrack.loop()
}
function draw() {
  background(roadImage)
  show_character()
  show_cars()
  car_movement()
  character_movement()
  car_movement_loop()
  collide_check()
  score()
  scoring()
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
      collisionSound.play()
      hit()
    }
  }
}
function hit(){
  yCharacter = 366 
  myPoints = 0
}
function score(){
  textAlign(CENTER)
  textSize(35)
  fill(255,0,0)
  text(myPoints, width/10, 30)
}
function scoring(){
  if (yCharacter < 5){
    scoreSound.play()
    myPoints += 1
    yCharacter = 366
  }
}