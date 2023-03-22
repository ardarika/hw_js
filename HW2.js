//1
const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

for (let city in citiesAndCountries) {
    console.log(`${city} - это ${citiesAndCountries[city]}!`)
}

//2
function getArray(){
    const amount = 12;
    let final = []
    let rez = []
    for (let i=1; i<=amount; i++) {
        if (i % 3 !== 0) {
            rez.push(i)
        } else {
            rez.push(i)
            final.push(rez)
            rez = []
        }
    }
    if (rez.length > 0) {
        final.push(rez)
    }
    console.log(final)
}

getArray()

//3
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' , 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' , 'Sunday'],
}
function getNameOfDay(){
    const lang = 'ru'
    const day = 4
    const days = namesOfDays[lang]
    const dayName = days[day - 1]
    console.log(dayName)
}

getNameOfDay()

//4
function compareNumeric(a, b) {
    if (a > b) return 1
    if (a == b) return 0
    if (a < b) return -1
}
function arraySum(array) {
    let newArr = array.sort(compareNumeric)
    console.log(newArr)
    console.log(newArr[0]+newArr[1])
}

arraySum([19, 5, 42, 2, 77])

//5
function binaryToDecimal(arr) {
    let decimal = 0
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 1) {
            decimal += Math.pow(2, arr.length - 1 - i)
        }
    }
    console.log(decimal)
}
binaryToDecimal([1, 0, 0, 1])

function binaryToDecimalFunc(arr) {
    console.log(arr.reverse()
        .map((val, index) => val * Math.pow(2, index))
        .reduce((sum, val) => sum + val, 0))
}
binaryToDecimalFunc([1, 1, 1, 0, 0, 1])