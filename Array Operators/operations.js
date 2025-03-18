//Array operations

//Push and Pop
 array_1 =['a','b','c'];
 console.log(array_1);
 array_1.push('e');
 console.log(array_1);
 array_1.pop();
 console.log(array_1);
 
 //reverse the array using psush and pop
 //abc => cba

 // Function to reverse an array using push and pop
function reverseArray(arr) {
	 // Create an empty stack (array)
    let stack = []; 

    let reversedArray = [];  

    // Push all elements into the stack
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }

    // Pop elements from the stack and push into the reversed array
    while (stack.length > 0) {
        reversedArray.push(stack.pop());
    }

    return reversedArray;
}

let array_1 = ['a', 'b', 'c'];
let reversedArray = reverseArray(array_1);

console.log(reversedArray); 
// Output: [ 'c', 'b', 'a' ]
