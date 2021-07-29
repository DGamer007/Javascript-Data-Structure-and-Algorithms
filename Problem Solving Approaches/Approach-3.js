// Approach-3 is Slider Window

// Problem Statement: A program that can find max sum of Subarrays of given length from Given Array

function maxSubArraySum(arr, num) {

    if (num > arr.length)
        return null

    let maxSum = 0

    // Run the loop for "num" times so that we can get sum of 1st SubArray
    for (let i = 0; i < num; i++)
        maxSum += arr[i]

    let tempSum = maxSum
    for (let i = 1; i < arr.length; i++) {
        // To get the value of next SubArray we will
        // add the next value in Previous SubArray Sum
        // and remove previous value from Previous SubArray Sum
        tempSum = tempSum - arr[i - 1] + arr[i + num - 1];

        // If tempSum is greater than MaxSum then we will assign tempSum to MaxSum
        if (tempSum > maxSum)
            maxSum = tempSum
    }

    return maxSum
}

const data = [1, 2, 1, 1, 1, 1, 1, 1, 1, 1]

console.log(maxSubArraySum(data, 3))