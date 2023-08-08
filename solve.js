function cubeNumber(number) {
    let num = 0;
    if(typeof number === "number"){
       num = Math.pow(number, 3);
       return num;
    }    
    else{
        return "not a number";
    }
}
var ans = cubeNumber(2);
console.log(ans);



function matchFinder(string1, string2) {
    if(typeof string1 == "string" && typeof string2 == "string"){
        if(string1.includes(string2) ){
            return true
        }else
            return false
    }else
        return "not a string";
    
}
