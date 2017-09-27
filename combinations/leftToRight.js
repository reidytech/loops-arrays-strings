const strInput = "Four score and seven years ago";
const strInputTwo = "abcda"
const strInputThree = "abcd";

let genStrCombo = function(str) {
    let comboArr = [];
    let strArr = str.split('');
    for(let i = 0; i < strArr.length; i++) {
        let indexStr = strArr[i];
        comboArr.push(indexStr);
        for(let j = i + 1; j < strArr.length; j++) {
            indexStr += strArr[j];
            comboArr.push(indexStr);
        }
    }
    return comboArr;
}

//console.log(genStrCombo(strInputTwo));

let genStrAllCombo = function(str) {
    let comboArr = [];
    let strArr = str.split('');
    for(let i = 0; i < strArr.length; i++) {
        let indexStr = strArr[i];
        let backIndexStr = strArr[strArr.length - 1 - i];
        comboArr.push(indexStr);
        comboArr.push(backIndexStr);
        for(let j = i + 1; j < strArr.length; j++){
            indexStr += strArr[j];
            backIndexStr += strArr[j - i - 1];
            comboArr.push(indexStr);
            comboArr.push(backIndexStr);
        }
    }
    return comboArr;
}

console.log(genStrAllCombo(strInputThree));