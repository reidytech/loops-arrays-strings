const strInput = "Take me out to the ballgame."

let changeCharModThree = function(str) {
    let strArr = str.split('');
    for(let i = 0; i < str.length; i++) {
        if(i % 3 === 0) {
            let charNum = strArr[i].charCodeAt(0);
            charNum++;
            strArr[i] = String.fromCharCode(charNum);
        }
    }
    str = strArr.join('');
    return str;
}

let everyOtherChar = function(str, replChar) {
    let strArr = str.split('');
    for(let i = 0; i < str.length; i++) {
        if((i + 1) % 2 === 0) {
            strArr[i] = replChar;
        }
    }
    str = strArr.join('');
    return str;
}

let finishXString = function(str, replChar) {
    let strArr = str.split('');
    let strIndex = str.length;
    for(let i = strIndex; i >= 0; i--) {
        if((i) % 2 == 0) {
            strArr[i] = replChar;
        }
    }
    str = strArr.join('');
    return str;
}

console.log(changeCharModThree(strInput));
console.log(everyOtherChar(strInput, 'X'));
console.log(finishXString(everyOtherChar(strInput, 'X'), 'Y'));