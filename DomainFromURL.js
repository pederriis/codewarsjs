console.log(domainName("http://www.ohzn5s-pbvi50y.io/archive/"));

function domainName(url){

    
    
    let startCut= url.includes("//")?url.indexOf("//")+2
    :url.includes("www.")?url.indexOf("www.")+4
    :url.includes("/www.")?url.indexOf("/www.")+5
    
    :0 ; 
 
    let afterSlases = url.slice(startCut);


return afterSlases.slice(0,afterSlases.indexOf("."));


  }