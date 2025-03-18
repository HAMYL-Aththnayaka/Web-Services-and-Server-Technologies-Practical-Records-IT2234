//Common elements
let ans;
let array_1=[4,5,6,3,7,1];
let array_2=[8,3,2,1,5,1];

for(let i = 0 ; i < array_1.length;i++){
	for(let k = 0 ; k < array_2.length;k++)
	if(array_1[i] === array_2[k]){
		console.log(array_1[i]);
	}
};


//TARGET FIDER
let target = 7;
let array_3 = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < array_3.length; i++) {
    for (let k = i + 1; k < array_3.length; k++) {
        if (array_3[i] + array_3[k] === target) {
            console.log(array_3[i] + " + " + array_3[k] + " = " + target);
        }
    }
}

 //the most frequent Element

let array_4 = [4, 8, 3, 4, 3, 2, 1, 8, 4];

// Create an empty object 
let frequency = {}; 
let mostFrequentElement = array_4[0];

// Variable to track the highest frequency count
let highestCount = 0;

// looping through the array 
array_4.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > highestCount) {
        highestCount = frequency[num]; // Update the highest count
        mostFrequentElement = num; // Set the most frequent element
    }
});
console.log("The most frequent element is:", mostFrequentElement);
