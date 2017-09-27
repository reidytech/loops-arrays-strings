const numArr = [8, 7, 1, 2, 5, 9, 4];

let watchJump = function(arr) {
                for(let i = 0; i < arr.length; i++) {
                setTimeout(function() { console.log(arr)
                    setTimeout(function() { console.log(arr);
                        if((i + 1) % 2 == 1) {
                            arr[i] = 'X';
                        }
                        else {
                            arr[i] = 'Y';
                        }
                    }, (1000 * arr.length) + (i * -5 * arr.length/2));
                setTimeout(function() {console.log(arr) 
                for(let j = arr.length - 1; j >= 0; j--) {
                    setTimeout(function() { console.log(arr);
                        if((j + arr.length) % 2 == 0) {
                            arr[j] = 'Y';
                        }
                        else {
                            arr[i] = 'X';
                        }
                      
                
                    }, (1000 * arr.length) + (j * 10 * arr.length/2));
                }
                }, i * 100);
            }, 1000 - (i * 10));
                    
            }
} 

watchJump(numArr);