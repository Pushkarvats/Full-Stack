const arr1 = [1 , 2 , 3 , 4 , 5];
const arr2 = [1 , 2 , 3 , 4 , 5];

console.log(arr1);
console.log(arr2);

arr1[3] = 30;
arr2 = 10;

console.log(arr1);
console.log(arr2);

const ch1 = ["abcd", "defg", "hijk"];
console.log(ch1);

const arr = ["Apple","24kg", "Himachal", 20, 99.1, true];

for( var i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log(arr[2]);
console.log(arr.at(-4));

arr.push("Delhi");
console.log(arr);

arr.pop();
console.log(arr);

let a = arr2.slice(0, 2);
console.log(a);

arr2.splice(2,2);
console.log(arr2);

const arr3 = ["Orange", "2Kg" , "Nagpur", 20, 99.1, true];

arr3.forEach((element) => {
    console.log(element);
    
})





