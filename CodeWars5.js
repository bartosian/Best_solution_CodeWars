function lastDayIsFriday(initialYear, endYear = initialYear) {
    let fridays = 0
    for (let y = initialYear; y <= endYear; y++) {
        for (let month = 0; month < 12; month++) {
            if (new Date(y, month + 1, 0).getDay() === 5) fridays++
        }
    }
    return fridays
}

// link on codeWars https://www.codewars.com/kata/5a0d6d8c6975982b5b000383/solutions/javascript

function sumArray(array) {
    return Array.isArray(array) && array.length > 1
        ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
        : 0;
}

// link on codeWars https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript

const sequenceSum = (begin, end, step) => {
    if(begin > end) return 0;

    let start = begin;
    let ended = end;
    let step1 = step;
    let result = start;

    while((start + step1) <= end) {
        start += step1;
        result += start;
    }

    return result;
};

function typeOfSum(a, b) {
    return typeof(a + b);
}

function getMiddle(s)
{
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}