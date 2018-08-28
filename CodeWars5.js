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