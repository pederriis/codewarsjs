console.log(domainName("http://ohzn5s-pbvi50y.io/archive/"));

function domainName(url){

    let startCut="";

    if(url.includes("//"))
    {

       startCut=url.indexOf("//")+2
    }

    if (url.includes("www."))
    {
       startCut=url.indexOf("www.")+4
    }
 
    let afterFistCut = url.slice(startCut);

return afterFistCut.slice(0,afterFistCut.indexOf("."));


  }