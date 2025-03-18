// Finding the maximum number in an array
let array_1 = [12, 13, 15, 14, 9];

let temp = array_1[0]; 

// Iterate through the array to find the maximum number
array_1.forEach((n) => {
    if (n > temp) {
        temp = n;
    }
});

console.log("The Maximum Number is: " + temp);
