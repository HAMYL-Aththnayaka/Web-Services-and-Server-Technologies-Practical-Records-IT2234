// Defining a nested (multi-dimensional) array
let nested_array = [
    [1, 2, 3], 
    [6, 5], 
    [9, 5, 7]
];

// Using forEach loop to print each sub-array
nested_array.forEach((n) => {
    console.log(n); // Logs each inner array
});

console.log("\n");

// Logging the entire nested array structure
console.log(nested_array);

console.log("\n");

// Using nested for loops to access and print each individual element
for (let i = 0; i < nested_array.length; i++) { // Loop through main array
    for (let k = 0; k < nested_array[i].length; k++) { // Loop through sub-array
        console.log(nested_array[i][k]); // Print each element
    }
    console.log("\n"); // New line for better readability
};
