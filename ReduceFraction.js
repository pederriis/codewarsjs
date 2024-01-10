
console.log(reduce([7560, 3256 ]));

function reduce(fraction) {
let output=[];

let maxValue= Math.max(...fraction)/2;

for (let i = maxValue; i>1 ; i--) {

  if (fraction[0]%i==0 && fraction[1]%i==0 )
  {
    output[0]=fraction[0]/i;
    output[1]=fraction[1]/i;
 
    return output;
  }
 
}

return fraction;
}