console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));

function deleteNth(arr,n){
   
   // console.log(arr.filter(x=>x!=1));

    const counts = {};
    let output=[];

for (let num of arr) {
 
if (counts[num]==null){
counts[num]=1;
output.push(num);

}
  else if (counts[num]<n){
    output.push(num);

    counts[num]++;
}


}

return output;
  }