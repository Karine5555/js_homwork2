//2.Find the Second Largest Number
//Create a function that takes an array of numbers and returns the second largest number.

function secondLargest(arr) {
    let newmax=arr.sort(function(a,b){
        return a-b
    })
    let y=newmax[newmax.length-2]
    
    return y;
}

console.log( secondLargest([10, 40, 30, 20, 50])) 

 console.log(secondLargest([25, 143, 89, 13, 105]))

console.log (secondLargest([54, 23, 11, 17, 10]))