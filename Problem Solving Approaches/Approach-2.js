// Approach-2 is Multiple Pointers

// Problem Statement: A Program that can find value pair from sorted array whose addition is zero.

const sumZero = (data) => {
    let left = 0
    let right = data.length - 1

    while (left < right) {
        let sum = data[left] + data[right]

        // Return value pair if sum is zero
        if (sum === 0) {
            return [data[left], data[right]]
            // if sum is negative then we will decrement right by 1
        } else if (sum > 0) {
            right--
            // if sum is non-negative and non-zero then we will increment left by 1
        } else {
            left++
        }
    }
}

const sortedArray1 = [-4, -3, -2, 0, 1, 5, 10]
const sortedArray2 = [-3, -2, -1, 0, 2, 3, 4, 5, 6, 7]

console.log(sumZero(sortedArray1))   // undefined
console.log(sumZero(sortedArray2))  // [-3,3]