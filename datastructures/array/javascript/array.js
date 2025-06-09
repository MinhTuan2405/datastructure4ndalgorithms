// In JavaScript, an array is an ordered list of values. Each value is called an element, and each element has a numeric position in the array, known as its index. 
// Arrays in JavaScript are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.

// creation
// using literal
// Creating an Empty Array
let a = [];
console.log(a);
// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b);

// using array contructor
const newArrayWithContructor = new Array (4) // init an empty array object with 4 blank slots
const otherArray = new Array (1, 3,3) // init with some element first
console.log (newArrayWithContructor.length)
console.log (otherArray)

///////////////////////////////////////////////////////////
// operations on the array
// 1. Accessing Elements of an Array
const accessArray = [1, 3, 4]
console.log (accessArray[2])

// update
const updateArray = [1, 3, 4]
updateArray[0] = 'this el has been updated'
console.log (updateArray)

// Adding Elements to the Array
const addingArray = [1, 3, 4]
console.log (addingArray)
addingArray.push ([1, 3]) // return new length, push one element a time
console.log (addingArray)
addingArray.unshift ('mintuan') //// return new length, push one element a time
console.log (addingArray)


//Removing Elements from an Array
// The pop() method removes an element from the last index of the array.
// The shift() method removes the element from the first index of the array.
// The splice() method removes or replaces the element from the array.
// Creating an Array and Initializing with Values
let ai = ["HTML", "CSS", "JS"];
console.log("Original Array: " + a);

// Removes and returns the last element
let lst = ai.pop();
console.log("After Removing the last: " + ai);

// Removes and returns the first element
let fst = ai.shift();
console.log("After Removing the First: " + ai);

// Removes 2 elements starting from index 1
ai.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a);


