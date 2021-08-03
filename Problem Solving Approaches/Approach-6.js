// Approach-6 Helper Method Recursion
// This is more of a pattern of Recursion in which we are doing recursion but the method that we are calling directly is not gonna called recursively but instead that method has another method inside of it which is gonna be called recursively

// Problem Statement: A Program that filters out odd values from a given array

const findOdd = (data) => {

    // We are initializing an empty array so that we can store result of each recursive call
    const result = []

    // Helper method
    const findOddHelperMethod = (helperMethodData) => {

        // If empty array has been passed then we'll return nothing
        if (helperMethodData.length === 0) return

        // If first element is (arg) array is odd then we'll add that element into (result) array
        if (helperMethodData[0] % 2 !== 0) {
            result.push(helperMethodData[0])
        }

        // Recursive call of Helper method in which we are passing an array which has 1 less value than (data) array
        findOddHelperMethod(helperMethodData.slice(1))
    }

    // First call to the Helper Function
    findOddHelperMethod(data)

    // We'll return (result) array at the end
    return result
}

console.log(findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]))   // [1, 3, 5, 7, 9]