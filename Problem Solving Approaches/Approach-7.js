// Approach-7 is Pure Recursion
// This more of a pattern of Recursion in which the function itself is going to be recursively called

// Problem Statement: A Program that filters out odd values from a given array

const findOdd = (data) => {

    // Each time we'll create an empty array so that we can store result of current call in it
    const newData = []

    // If empty array has been passed then we'll return (newData) array as it is which will be empty at this point in execution
    if (data.length === 0) return newData

    // If first element in (arg) array is odd then we'll add it to the (newData) array
    if (data[0] % 2 !== 0) {
        newData.push(data[0])
    }

    // At the end we'll return concatenated array with (newData) array and recursive call of an array which has 1 less value than (data) array
    return newData.concat(findOdd(data.slice(1)))
}

console.log(findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]))