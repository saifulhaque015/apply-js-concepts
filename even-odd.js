const number = 15;
if (number % 2 == 1) {
    console.log('odd number');
}
else {
    console.log("even number");
}

// even function

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 1450;
const isMyNumberEven = isEven(myNumber);
console.log(isMyNumberEven);

const herNumber = 5261;
const isHerNumberEven = isEven(herNumber);
console.log(isHerNumberEven);

// odd function

function isOdd(number) {
    if (number % 2 == 1) {
        return true;
    }
    return false;
}

const yourNumber = 11;
const isYourNumberOdd = isOdd(yourNumber);
console.log(isYourNumberOdd);