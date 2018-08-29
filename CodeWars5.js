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

function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}



var whatTimeIsIt = function(angle) {
    let minutesAll = 1440;
    let degreesAll = 360;

    let minutesInAngle = angle * 2;
    let minutes = String(Math.floor(minutesInAngle % 60));
    let hours = String(Math.floor(minutesInAngle - minutes) / 60);


    if(minutes.length === 1) minutes = "0" + minutes;
    if(hours === '0') hours = '12';
    if(hours.length === 1) hours = "0" + hours;

    return `${hours}:${minutes}`;

}





function findSecretMessage(paragraph) {

    let phrasesArr = paragraph.split(". ");
    phrasesArr = phrasesArr.map( p => {
        return  p.replace(".", '').toLowerCase().split(" ");
    });

    let duplArr = [];

    for(let i = 0; i < phrasesArr.length; i++) {

       for(let j = i + 1; j < phrasesArr.length;) {

           if(duplArr.length > 1) {
               console.log(duplArr.join(" "));
               return;
           } else if(duplArr.length === 1) {
               duplArr.length = 0;
               console.log(duplArr);
           }

           for(let z = 0; z < phrasesArr[j].length; z++) {

               for(let r = 0; r < phrasesArr[i].length; r++) {

                   if(phrasesArr[i][r] === phrasesArr[j][z]) {
                        if(!duplArr.includes(phrasesArr[i][r])) {
                            duplArr.push(phrasesArr[j][z]);

                        }

                   }

               }

           }

       }
    }


}



function sum(a) {

    if(!a) return 0;

    return function (b) {

        if(!b) return a;
        return function (c)  {
            if(!c) return a + b;
            return function d() {
                return a + b + c;
            }
        }
    }
}

