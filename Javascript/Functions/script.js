sum(3, 4);

function sum(a,b){
    let c = a + b;
    console.log(c);   
}

sum(5, 10);

function sum_with_d(x,y = 10){
    console.log(x = y);
    
}
sum_with_d(7)
sum_with_d(20,8)



const greet = function(){
    console.log("Welcome to JavaScript");    
}
greet();

//Arrow function


// () => {
//     console.log("This is a arrow function");
    
// }

// console.log(() => {
//     let a = 10,
//     b = 5;
//     return a + b;
// });

const a = () => {
    console.log("This is a arrow function");
    
}
a();

//Callback Function
function add (a , b) {
    let x = a + 5;
    let y = b + 5;
    console.log(x + y);
    
}

function sum (m , n, jor) {
    let p = m * 2;
    let q = n * 2;

    jor(p,q);
}

sum(5 , 6 , add);

sum(8 , 10, (a , b)=> {
    let x = a + 5;
    let y = b + 5;
    console.log(x + y);  
});


//Closure function

function Greetings(name) {

    return function () {
        console.log("Welcome to RICR !!!", name);

    }
}

const greetPushkar = Greetings("Pushkar");
const greetAman = Greetings("Aman");

greetPushkar();
greetAman();
