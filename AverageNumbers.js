
console.log(averages([1, 3, 5, 1, -10]))

function averages(numbers) {

    let output=[];
    if (numbers==null)
    {
        return output;
    }
    
    for (let i = 1; i < numbers.length; i++ ){
     
        
        output.push((numbers[i-1]+numbers[i])/2);
       
    };


return output;
}