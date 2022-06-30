//3.Clone an Array
//The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?


function clone (x){
    let j=[x]
    let k=x.concat(j)
    console.log(k)
}
clone(["x", "y"])
clone([1, 1])
clone([1, 2, 3]) 