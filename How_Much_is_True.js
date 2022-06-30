//1.How Much is True?
//Create a function which returns the number of true values there are in an array.
function countTrue(arr){
    let i=0,
        j=0;
    while(i <= arr.length ){
        if(arr[i] === true){
            j++;
        }
        i++
    }
    console.log(j)
}

countTrue([true, false, false, true, false])

countTrue([false, false, false, false])

countTrue([])

