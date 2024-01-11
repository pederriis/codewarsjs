console.log(explode([1, 'd']))

function explode(x){
let score = 0;
let output =[];
let containsNumber = false;

x.forEach( num => {
    if (typeof num=="number"){

        containsNumber=true;
        score += num;
    }
  })



if ( containsNumber==false){
    return "Void!";
  }
  

for (let index = 0; index < score; index++) {
    output.push(x);
    
}
return output;

}