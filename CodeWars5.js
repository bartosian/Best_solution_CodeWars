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