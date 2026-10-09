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