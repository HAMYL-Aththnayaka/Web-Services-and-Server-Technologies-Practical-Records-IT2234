//how to create a arrow function
const msg=()=>{
    return console.log(`Hello`);
};
msg();

//an Arrow function with parameters
const addNum=(a,b)=>{
    return console.log(a+b);
};
addNum(10,20);

//a default parameter
const multNum=(a,b=2)=>{
    return (a*b);
}
//beacause of the default value asisgn to the parameter the arrow function on;uy require on argument
console.log(multNum(5));

//if we send 2 argumnets the default value will be overWritten
console.log(multNum(5,10));

//when we put 3 dots(...) with a variable it can take infinite number of arguments
const myNum=(...n)=>{
    console.log(n);
}
myNum(1,2,3,4,5,6,7,8,9);

function addAllNum(...nums) {
    let sum=0;
    nums.forEach((i)=>sum =sum+i);
    console.log(sum);
}

addAllNum(1, 2, 3); 

//by using reduce 
const myNum_2 =(...n)=>{
    return n.reduce((t,i)=>t=t+i);
}
console.log(myNum_2(1,2,3,4));

const myName =(name)=>{
    console.log(`My name is ${name}`
    )};

     
//callback functions
//give one function to another function

const greetMsg =(msg,fun)=>{
     console.log(`Hi...${msg}`); 
     fun() ;
     }

     greetMsg(`Good morning`,()=>{
        console.log(`My name is david`);
     });

     const multtwo = (n) => n * 2

     const myarr = (mul, ...n) =>{
         n.forEach((i) => console.log(mul(i)))
     }
     
     myarr(multtwo, 4, 5, 6, 8, 2)