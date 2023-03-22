//1
for (let i=1; i<11; i++) {
    if(i%3==0){
        console.log(i,'FizBuz')
    }else if(i%2==0){
        console.log(i,'Fiz')
    }else{
        console.log(i,'Buz')
    }
}

//2
let factorial = 1
for (let i=1; i<11; i++) {
    factorial *= i
}
console.log(factorial)

//3
const sheetsInReamPaper = 500
const consumptionPerWeek = 1200
const weeksAmount = 8
let result = (consumptionPerWeek*weeksAmount)/sheetsInReamPaper >> 0
console.log(result)

//4
function getEntranceAndFloor(roomNumber) {
    const roomsPerFloor = 3
    const floors = 9
    const roomsPerPorch = roomsPerFloor * floors

    const porch = Math.trunc((roomNumber - 1) / roomsPerPorch) + 1
    const floor = Math.trunc(((roomNumber - 1) % roomsPerPorch) / roomsPerFloor) + 1

    console.log( `Подъезд: ${porch}, Этаж: ${floor}`)
}
getEntranceAndFloor(465)

//5
const medianNumber = 9
let pyramid = ''
for (let i = 1; i <= medianNumber; i++) {
    let spaces = ''
    let hashes = ''
    for (let j = 0; j < medianNumber - i; j++) {
        spaces += '-'
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        hashes += '#'
    }
    pyramid += spaces + hashes + spaces + '\n'
}
console.log(pyramid)



