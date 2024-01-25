console.log(rot13("Codewars"))

function rot13(message){
   const alphabet="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
let output="";
  
   for (const c of message){

    alphabet.includes(c)?output+=alphabet[alphabet.indexOf(c)+13]
    :alphabet.toUpperCase().includes(c)?output+=alphabet[alphabet.indexOf(c.toLowerCase())+13].toUpperCase()
    :output+= c; 
    }
   return output;
  }