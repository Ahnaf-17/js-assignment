// function cubeNumber(number) {
//     let num = 0;
//     if(typeof number === "number"){
//        num = Math.pow(number, 3);
//        return num;
//     }    
//     else{
//         return "not a number";
//     }
// }
// var ans = cubeNumber(2);
// console.log(ans);



// function matchFinder(string1, string2) {
//     if(typeof string1 == "string" && typeof string2 == "string"){
//         if(string1.includes(string2) ){
//             return true
//         }else
//             return false
//     }else
//         return "not a string";

// }


function sortMaker(arr) {
    for (let i = 0; i < 2; i++) {
        if (arr[i] < 0) {
            return "Invalid Input";
        }
    } if (arr[0] > arr[1]) {
        return arr;
    }else if (arr[1] > arr[0]) {
        const temp = arr[1];
        arr[1] = arr[0];
        arr[0] = temp;
        return arr;
    } else
        return "equal";

}
var inputArray = [2, 3];

var result = sortMaker(inputArray);

console.log(result);