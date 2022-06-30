//7 H4ck3r Sp34k 
//a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.


function hackerSpeak(speak){
   let i=0;
   let output="";
 while (i< speak.length){
   if(speak[i] === "a") {
      output += 4;
  }else if (speak[i] === "i"){
     output += 1; 
  }else if (speak[i] === "e"){
        output += 3;
  }else if (speak[i] === "o"){
        output += 0;
  }else if (speak[i] === "s"){
      output += 5;
  }else{
        output += speak[i];
  }
   i++
 }
 console.log(output)
}
hackerSpeak("javascript is cool");
hackerSpeak("programming is fun");
hackerSpeak("become a coder")