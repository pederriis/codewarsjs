console.log(wave("GAP"));

function wave(str){

    let output=[];

    for (let i = 0; i < str.length; i++) {

        if (str[i]!=' '){

            let tmpStr= str.toLowerCase();
            tmpStr=tmpStr.substring(0, i) + tmpStr[i].toUpperCase() + tmpStr.substring(i+1, tmpStr.length);
            output.push(tmpStr);
        }
    };

    return output;
  }