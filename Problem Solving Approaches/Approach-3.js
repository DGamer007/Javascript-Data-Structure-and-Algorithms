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
    for (let i = num; i < arr.length; i++) {
        /* 
            To get the sum of current subArray we will
            add last element of current subArray to sum of previous subArray
            and subtract last element of previous subArray from it
        */
        tempSum = tempSum + arr[i] - arr[i - num];

        // If tempSum is greater than MaxSum then we will assign tempSum to MaxSum
        if (tempSum > maxSum)
            maxSum = tempSum
    }

    return maxSum
}

const data = [1, 2, 1, 1, 1, 1, 1, 1, 1, 1]

console.log(maxSubArraySum(data, 3))    // 4