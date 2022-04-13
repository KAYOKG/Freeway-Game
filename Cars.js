let xCars = [510, 510, 510, 510, 510, 510]
let yCars = [40, 96, 150, 212, 262, 318]
let carsLength = 50
let carsheight = 40
let carsSpeed = [2.5, 3, 3.5, 2.7, 4, 3.2]

function show_cars(){
    for (let i = 0; i < carsImage.length; i++){
        image(carsImage[i], xCars[i], yCars[i], carsLength, carsheight)
    }
}
function car_movement(){
    for(i = 0; i < carsImage.length; i++){
       xCars[i] -= carsSpeed[i]
    }
  }
function car_movement_loop(){
    for(i = 0; i < carsImage.length; i++){
        if (xCars[i] < -31){
            xCars[i] = 510
        }
    }
}