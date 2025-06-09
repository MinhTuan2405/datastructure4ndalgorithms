// Array Static methods
/*
from()
Creates a shallow copy of the array.

isArray()
Returns boolean values based on the argument is an array.

Of()
Creates an array from multiple arguments.
*/

// Array instance methods
/*
    at()
    To get element from the particular index.
        
    concat()
    Returns a new array comprised of this array joined with another array (s) and/or value(s).
        
    copyWithin()
    To Copy part of the array into the same array at different locations.
        
    entries()
    To get each entry of the array.
        
    every()
    Returns true if every element in this array satisfies the provided testing function.
        
    fill()
    To fill the array with static values.
        
    filter()
    Creates a new array with all of the elements of this array for which the provided filtering function returns true.
        
    find()
    To find an element satisfying the condition.
        
    findIndex()
    To find an index of the element satisfying the condition.
        
    findLast()
    To find an element satisfying the condition from the last.
        
    findLastIndex()
    To find an index of the element satisfying the condition from the last.
        
    flat()
    To flatten the array.
        
    flatMap()
    To get a new array after flattening the array.
        
    forEach()
    Calls a function for each element in the array.
        
    Includes()
    Returns a boolean value if the array contains the specific element.
        
    indexOf()
    Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
        
    join()
    Joins all elements of an array into a string.
        
    Keys()
    Returns an array iterator containing the key for each array element.
        
    lastIndexOf()
    Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
        
    map()
    Creates a new array with the results of calling a provided function on every element in this array.
        
    pop()
    Removes the last element from an array and returns that element.
        
    push()
    Adds one or more elements to the end of an array and returns the new length of the array.
        
    reduce()
    Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
        
    reduceRight()
    Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.
        
    reverse()
    Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.
        
    shift()
    Removes the first element from an array and returns that element.
        
    slice()
    Extracts a section of an array and returns a new array.
        
    some()
    Returns true if at least one element in this array satisfies the provided testing function.
        
    toSorted()
    Sorts the elements of an array in a specific order.
        
    sort()
    Sorts the elements of an array.
        
    splice()
    Adds and/or removes elements from an array.
        
    toLocaleString()
    To convert array elements into the string.
        
    toReversed()
    Returns a reverse of the array.
        
    toSpliced()
    This method returns a new array with some elements removed and/or replaced at a given index.
        
    toString()
    Returns a string representing the array and its elements.
        
    unshift()
    Adds one or more elements to the front of an array and returns the new length of the array.
        
    values()
    To get an iterator containing values of each array index.
        
    with()
    This method returns a new array with the element at the given index replaced with the given value.
*/


const testingArray = new Array (10)

for (let i = 0; i < testingArray.length; ++i) {
    testingArray[i] = i
}

const a = [100, 200, 300]

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Array.every ()
//  the Array.every() method is used to check all elements in an array satisfy a specified condition. 
//  This method takes a "callback function" as an argument, which iterates on every element in the array. It returns "true" if all the elements 
//  in the array passes the specified condition in the callback function; otherwise, it returns "false".

// This method does not execute the function for empty array elements. In addition to that, this method does not modify the original array.

// every(callbackFn, thisArg)
// callbackFn − A function to be executed for each element in the array. It takes three arguments −
    // element − The current element being processed in the array.
    // index (optional) − The index of the current element being processed in the array.
    // array (optional) − The array every() was called upon.
// thisArg (optional) − A value to be passed to the function as its this value.
// -> return boolean
const isPositive = testingArray.every ((el, id, arr) => {
    console.log (id)
    if (el >= 0) return true
})


console.log (isPositive? 'this array is positive': 'this array contains at least one negative element')


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
