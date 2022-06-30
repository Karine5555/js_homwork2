//8 Return the Sum of the Two Smallest Numbers
//Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
function sumTwoSmallestNums(arr) {
   let newmax = arr.sort(function(a,b){
       return a-b
   })
   let i = 0;
   let newarr=[];
   let j=0;
   let sum=0;
   while ( i < newmax.length){
      if(newmax[i]>0 ){
         newarr[j]=newmax[i];
         j++
      }
      i++
}
console.log(sum=newarr[0]+newarr[1])
}

sumTwoSmallestNums([19, 5, 42, 2, 77]);
sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]);
sumTwoSmallestNums([2, 9, 6, -1]);
sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]);
sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])

