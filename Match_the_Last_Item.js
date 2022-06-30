//4.Match the Last Item
//Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

function matchLastItem(arr){
        let y=arr.pop()
        if(arr.join("") == y){
            console.log(true)
        }else{
            console.log(false)
        }
    }
    

matchLastItem(["rsq", "6hi", "g", "rsq6hig"]);
matchLastItem([1, 1, 1, "11"]);
matchLastItem([8, "thunder", true, "8thundertrue"]);
