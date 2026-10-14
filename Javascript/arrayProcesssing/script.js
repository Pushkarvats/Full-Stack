const arr = ["Apple", 2.5, 99, "Himachal", "a"];

console.log("With For Each");


arr.forEach((element) => {
    if(typeof element ==="number" ){
        console.log(element);
    } 
});

console.log("With Map");


var x = arr.map((element) => {
    if(typeof element === "number"){
        return element;
    }
    
});

const arr2 = ["Apple", 2.5, 99, "Himachal", "a"];
var F = arr2.filter((item) => item !== 99);
console.log("F =", F);

var Fi = arr2.find((item) => item ===99);
console.log("Fi = ", Fi);

var Fix = arr2.findIndex((item) => item === 99);
console.log("Fix = ", Fix);

const arr3 = [2, 5, 1, 7, 3, 9, 4, 8];
var s = arr3.sort();
console.log("S =",s);
var t = arr3.sort((a, b) => b - a);
var t = arr3.sort("T =",t);




