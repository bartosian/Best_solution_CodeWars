// // function lastDayIsFriday(initialYear, endYear = initialYear) {
// //     let fridays = 0
// //     for (let y = initialYear; y <= endYear; y++) {
// //         for (let month = 0; month < 12; month++) {
// //             if (new Date(y, month + 1, 0).getDay() === 5) fridays++
// //         }
//     }
//     return fridays
// }
//
// // link on codeWars https://www.codewars.com/kata/5a0d6d8c6975982b5b000383/solutions/javascript
//
// function sumArray(array) {
//     return Array.isArray(array) && array.length > 1
//         ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
//         : 0;
// }
//
// // link on codeWars https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript
//
// const sequenceSum = (begin, end, step) => {
//     if(begin > end) return 0;
//
//     let start = begin;
//     let ended = end;
//     let step1 = step;
//     let result = start;
//
//     while((start + step1) <= end) {
//         start += step1;
//         result += start;
//     }
//
//     return result;
// };
//
// function typeOfSum(a, b) {
//     return typeof(a + b);
// }
//
// function getMiddle(s) {
//     return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }
//
//
//
// var whatTimeIsIt = function(angle) {
//     let minutesAll = 1440;
//     let degreesAll = 360;
//
//     let minutesInAngle = angle * 2;
//     let minutes = String(Math.floor(minutesInAngle % 60));
//     let hours = String(Math.floor(minutesInAngle - minutes) / 60);
//
//
//     if(minutes.length === 1) minutes = "0" + minutes;
//     if(hours === '0') hours = '12';
//     if(hours.length === 1) hours = "0" + hours;
//
//     return `${hours}:${minutes}`;
//
// }
//
//
//
//
//
// function findSecretMessage(paragraph) {
//
//     let phrasesArr = paragraph.split(". ");
//     phrasesArr = phrasesArr.map( p => {
//         return  p.replace(".", '').toLowerCase().split(" ");
//     });
//
//     let duplArr = [];
//
//     for(let i = 0; i < phrasesArr.length; i++) {
//
//        for(let j = i + 1; j < phrasesArr.length;) {
//
//            if(duplArr.length > 1) {
//                console.log(duplArr.join(" "));
//                return;
//            } else if(duplArr.length === 1) {
//                duplArr.length = 0;
//                console.log(duplArr);
//            }
//
//            for(let z = 0; z < phrasesArr[j].length; z++) {
//
//                for(let r = 0; r < phrasesArr[i].length; r++) {
//
//                    if(phrasesArr[i][r] === phrasesArr[j][z]) {
//                         if(!duplArr.includes(phrasesArr[i][r])) {
//                             duplArr.push(phrasesArr[j][z]);
//
//                         }
//
//                    }
//
//                }
//
//            }
//
//        }
//     }
//
//
// }
//
//
//
// function sum(a) {
//
//     if(!a) return 0;
//
//     return function (b) {
//
//         if(!b) return a;
//         return function (c)  {
//             if(!c) return a + b;
//             return function d() {
//                 return a + b + c;
//             }
//         }
//     }
// }c
//
//
//
//
//
// var moveZeros = function (arr) {
//
//     let zeroArr = [];
//
//     for(let i = 0; i < arr.length; i++) {
//
//         if(arr[i] === 0) {
//             zeroArr.push(arr.splice(i, 1));
//             i--;
//         }
//     }
//
//     return arr.concat(zeroArr);
//
//
// }
//
// // link: https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// function solution(string) {
//     let arrStr = string.split("");
//
//     let res = arrStr.map((el) => {
//         if(el === el.toUpperCase()) {
//             return " " + el;
//         } else {
//
//             return el;
//         }
//     });
//
//    return res.join("");
// }
//
//
//
//
// solution('camelCasing');
//
//
//
//
//
//
//
//
// function sortArray(arr) {
//
//     let evenMap = {};
//     let evenArr;
//     let evenLength;
//     let nextIdx = 0;
//
//
//     for(let i = 0; i < arr.length; i++) {
//
//         if(arr[i] % 2 !== 0) {
//             evenMap[String(i)] = arr[i];
//         }
//     }
//
//     evenArr = Object.values(evenMap);
//     evenLength = evenArr.length;
//     evenArr.sort((a,b) => {
//         return a - b;
//
//     });
//
//
//     outside: for(let i = 0; i < evenLength; i++) {
//
//         for(let j = nextIdx; j < arr.length; j++) {
//
//             if(arr[j] % 2 !== 0 && arr[j] !== 0) {
//                 arr[j] = evenArr[i];
//                 nextIdx = j + 1;
//                 continue outside;
//
//             }
//
//         }
//
//     }
//
//    return arr;
//
// }
//
//
//
// function namesSorter (departmentsArray) {
//
//     let unitedArr = [].concat.apply([], departmentsArray);
//
//     unitedArr.sort((a, b) => {
//
//         if(a.length === b.length) {
//
//             if(a < b) return -1;
//             if(a > b) return 1;
//             return 0;
//         }
//
//         return a.length - b.length;
//
//
//
//     });
//
//     return unitedArr;
//
// }
//
//
//
//
// function sumOfDifferences(arr) {
//
//     arr.sort((a, b) => {
//         return b - a;
//     });
//
//     let result = 0;
//
//     for(let i = 0; i < (arr.length - 1); i++) {
//
//         result += arr[i] - arr[i + 1];
//     }
//
//     return result;
// }
//
//
// function domainName(url) {
//
//     var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
//     if ( match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0 ) return match[2].split(".")[0];
// }
//
//
// function solve(st,a,b){
//
//     let strArr = st.split("");
//
//     let subArr = strArr.slice(a, b + 1).reverse();
//
//
//     strArr = strArr.filter((el, idx) => {
//         return idx < a || idx > b;
//     });
//
//
//
//
//     strArr.splice(1, 0 , ...subArr);
//
//     return strArr;
//
// }
//
//
//
// function deleteNth(arr, n) {
//     let numMap = {};
//
//     arr = arr.filter((el, idx, list) => {
//
//         if(!numMap[String(el)]) {
//             numMap[String(el)] = 1;
//             return true;
//         } else if(numMap[String(el)] <=  n) {
//             numMap[String(el)]++;
//             return true;
//         } else {
//             numMap[String(el)]++;
//             return true;
//         }
//
//
//     });
//
//     console.log(numMap);
//     console.log(arr);
// };
//
//
//
//
//
//
//
// deleteNth ([1,1,1,1],3) // return [1,1]
//
// deleteNth ([20,37,20,21],1) // return [20,37,21]
//
//
// function sumStrings(a, b) {
//     a = "0" + a.replace(/\D/g,"");
//     b = "0" + b.replace(/\D/g,"");
//
//
//     var c = 0;
//     var result = "";
//
//     for(var i=b.length-a.length; i>0; --i) a = "0" + a;
//     for(var i=a.length-b.length; i>0; --i) b = "0" + b;
//
//
//
//     for(var i=a.length-1; i>-1; --i) {
//         c = +a[i] + +b[i] + c;
//
//         result = (c%10) + result;
//
//         c = Math.floor(c/10);
//     }
//
//
//     return result.replace(/^0+/,"");
// }
//



function deleteNth(arr, n) {

    let map = {};
    let filtArr = arr.filter(el => {

        if(!map[String(el)]) {

            map[String(el)] = 1;
            return el;
        }

        if(map[String(el)] < n) {
            map[String(el)] += 1;
            return el;
        } else {
            return false;

        }

    });

    return filtArr;
}



function replaceLetter(str, let) {

    let map = {};


    for(let i = 0; i < str.length; i++) {

        if(!map[str[i]]) {
            map[str[i]] = 1;

        } else {
            map[str[i]]++;

        }

    }

    for(let key in map) {

        if(key === ' ') delete map[key];
    }

    let mapVal = Object.values(map);
    let biggest = Math.max(...mapVal);
    let biggestLet;



    for(let num in map) {
        if(map[num] === biggest) {
            biggestLet = num;
            break;
        }

    }

    var re = new RegExp(biggestLet,"g");

    str = str.replace(re, let);

    return str;

}



function replace(str) {

    let map = {};
    let newStr = str.split("");


    for(let i = 0; i < newStr.length; i++) {

        if(!map[newStr[i]]) {
            map[newStr[i]] = 1;
            newStr[i] = map[newStr[i]];

        } else {
            map[newStr[i]] += 1;
            newStr[i] = map[newStr[i]];
        }

    }

   return newStr.join("");


}


// fn(['super','bow','bowl','tar','get','book','let'], "superbowl")      =>   ['super','bowl',   [0,2]]
// fn(['bow','crystal','organic','ally','rain','line'], "crystalline")   =>   ['crystal','line', [1,5]]
// fn(['bow','crystal','organic','ally','rain','line'], "rainbow")       =>   ['bow','rain',     [4,0]]
// fn(['bow','crystal','organic','ally','rain','line'], "organically")   =>   ['organic','ally', [2,3]]
// fn(['top','main','tree','ally','fin','line'], "mainline")             =>   ['main','line',    [1,5]]
// fn(['top','main','tree','ally','fin','line'], "treetop")              =>   ['top','tree',     [2,0]]





function add(a, b) {
    let str1 = a.split("").reverse();
    let str2 = b.split("").reverse();
    let sum = [];
    let reminder = 0;

    for(let i = 0; i < Math.max(str1.length, str2.length); i++) {
        let num1 = str1[i] ? Number(str1[i]) : 0;
        let num2 = str2[i] ? Number(str2[i]) : 0;
        let digit = (num1 + num2 + reminder) % 10;
        reminder = Math.floor((num1 + num2 + reminder) / 10);
        sum.unshift(digit);
    }

    if(reminder) {
        sum.unshift(reminder);
    }

    return String(sum.join(""));

}


// Link to Codewars: https://www.codewars.com/kata/525f4206b73515bffb000b21/solutions/javascript