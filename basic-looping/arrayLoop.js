const loopArray = [2, 6, 7, 0, -1, 5, 9, 2];
const loopArrayTwo = [2, 1, 4, 5, 7, 6, 5, 4, 1, 2];

let forwardsLoop = function(arr) {
    let loopCat = '';
    for(let i = 0; i < arr.length; i++) {
        if(i + 1 === arr.length) {
            loopCat = loopCat.concat(arr[i]);
        }
        else {
            loopCat = loopCat.concat(arr[i] + ' ');
        }
        
    }
    return loopCat;
}


let backwardsLoop = function(arr) {
    let backCat = '';
    for(let i = arr.length - 1; i >= 0; i--) {
        if(i === 0) {
            backCat = backCat.concat(arr[i]);
        }
        else {
            backCat = backCat.concat(arr[i] + ' ');
        }
    }
    return backCat;
}



console.log(forwardsLoop(loopArray));
console.log(backwardsLoop(loopArray));
console.log(forwardsLoop(loopArrayTwo));
console.log(backwardsLoop(loopArrayTwo));