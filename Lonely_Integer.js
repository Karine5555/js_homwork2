//9Lonely Integer
function lonelyInteger(arr){
  let i=0;
  let unique;
  while(i < arr.length){
    if(arr.filter(x => x == arr[i] && x).length == 1){
      unique=arr[i]
    }
    i++;
  }
console.log(unique)

}
lonelyInteger([-3,1,3]);
lonelyInteger([-3, 1, 2, 3, -1, -4, -2]); 
lonelyInteger([-9, -105, -9, -9, -9, -9, 105])
