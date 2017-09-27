const strOne = "To infinity and beyond";
const strTwo = "racecars are racecars";

let strFlip = function(str) {
    let stringLength = str.length;
    for(let i = 0; i < stringLength; i++) {
        let tempSub = '';
        let tempFirst = '';
        let tempSecond = '';
        let end = '';
        let tempEnd = '';
        let tempBegin = '';
        if(i === 0) {
            tempSub = str.substr(i + 1, str.length - 2);
            tempFirst = str.slice(i, i + 1);
            tempSecond = str.slice(str.length - 1);
            end = tempSub.concat(tempFirst);
            str = tempSecond.concat(end);
        }
        else if(i === str.length - 1) {
            break;
        }
        else {
            tempSub = str.substr(-1*(str.length - i), str.length - i - 1);
            console.log(tempSub);
            end = str.substr(str.length - i);
            tempFirst = str.slice(i, i + 1);
            tempSecond = str.slice(str.length - (i + 1), str.length - i);
            tempBegin = tempSecond.concat(tempSub);
            tempEnd = tempFirst.concat(end);
         //   console.log(tempEnd);
            str = tempBegin.concat(tempEnd);
        }
    }
    return str;
}



console.log(strFlip(strOne));