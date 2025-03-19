//creating a functio to print a message

function printMsg(){
    console.log("Hello js");
};
printMsg()


//a return type function
 function addNumber(){
    return 5+6;
 }
 console.log(addNumber());
 
 //A functions which takes argumerts
 function subNumbers(a,b){
    return a-b;
 }
 console.log(subNumbers(10,15));

 //write a boolean function to find a givennumber is prime

 function isPrime(num) {
    if (num <= 1) return false;
    if (num % 2 === 0 && num !== 2) return false;
    if (num % 3 === 0 && num !== 3) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
  }
  
  console.log("is the number prime :"+isPrime(6));
  
  //write a recursive function to print numbers from 1 to n

  function printNumbers(n, current = 1) {
      if (current > n) return;
      console.log(current);
      printNumbers(n, current + 1);
  }
  let n = 10;
  printNumbers(n);
  
  
