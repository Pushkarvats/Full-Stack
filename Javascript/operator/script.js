 let m=true;
 let n=false;
 let o=true;

 console.log(m && n);
 console.log(m && o);
 console.log(n && o);
 console.log(m || n);
 console.log(m || o);
 console.log(n || o);

 console.log(!m && n);
 console.log(!n && o);
 console.log(!m && o);
 console.log(!m || n);

 let a = 10;
 let b = 20;

 if(a>b){
    console.log("Hello")
 }  else{
    console.log("Bye")
 }

 for(var i=0; i<5; i++){
    console.log("We are learning Javascript", i+1);
 }

 var i=0;
 while(i <= 5){
    console.log("We are learning JavaScript while loop", i+1);
    i++;
 }

 console.log("1. Check B alance");
 console.log("2. Withdraw Money" );
 console.log("3. Mini Statement");
 console.log("4. Pin Change");
 console.log("5. Deposit Money");
 console.log("6. Exit");
 

  switch(marks){
    case 1: {
        console.log("Checking your balance");
        break;
    }
    case 2: {
        console.log("Please Collect your Cash");
        break;

    }
    case 3: {
        console.log("Please find your transaction below");
        break;
    }
    case 4: {
        console.log("Enter your new Pin");
        break;
    }
    case 5: {
        console.log("Put your cash into machine");
        break;
    }
    case 6: {
        console.log("Thank you for");
        break;
    }
    case 7: {
        console.log("Wrong Choice");
        
    }
  }



