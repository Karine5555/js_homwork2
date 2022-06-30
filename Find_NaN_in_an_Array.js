//6 Find NaN in an Array
//Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

function findNaN(arr){
    let i=0;
    let n=0;
    
    while(i < arr.length){
        if (arr[i] != (+arr[i])){
            n=i;
            break;
              
        }else{
            n="-1"
        }
        i++  
    } 
    console.log(n)
}

findNaN([1, 2, NaN]);
findNaN([NaN, 1, 2, 3, 4]);
findNaN([0, 1, 2, 3, 4])

