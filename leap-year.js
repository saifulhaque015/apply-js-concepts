function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}

const myYear = 2028;
const isMyYearLeap = isLeapYear(myYear);
console.log(isMyYearLeap);

const herYear = 2093;
const herYearLeap = isLeapYear(herYear);
console.log(herYearLeap);