// const number = 15;
// if (number % 2 == 1) {
//     console.log('odd number');
// }
// else {
//     console.log("even number");
// }

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 1450;
const isMyNumberEven = isEven(myNumber);
console.log(isMyNumberEven);

const herNumber = 5260;
const isHerNumberEven = isEven(herNumber);
console.log(isHerNumberEven);