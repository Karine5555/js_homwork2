//5 Remove Duplicates from an Array
//Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
function removeDups(arr){
let x = [...new Set(arr)];
console.log(x)
}



removeDups([1, 0, 1, 0]);
removeDups(["The", "big", "cat"]);
removeDups(["John", "Taylor", "John"]);


