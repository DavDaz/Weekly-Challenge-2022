var leng = 100;
var text = ["FIZZ","BUZZ"];



for(var i = 1;i <= leng; i++){

    if(isDivisible(i,3)){
        document.write(text[0]);
        console.log(text[0]);
    }
    if(isDivisible(i,5)){
        document.write(text[1]);
        console.log(text[1]);
    }

    if(!isDivisible(i,3) && !isDivisible(i,5)){
        document.write(i);
        console.log(i);
    }
    document.write("<br/>");
}

function isDivisible(num, divisor){
    result = num % divisor;
    if(result === 0){
        return true;
    }else{
        return false;
    }
}