// Linear Search
// In Linear Search We compare search value with each and every value in list until we find the same value

const linearSearchAlgorithm = (data, searchValue) => {
    // Loop through the first element to last element
    for (let i = 0; i < data.length; i++) {
        // if (i-th) element is equal to search value then we'll return (i)
        if (searchValue === data[i]) return i
    }

    // If we don't find any matching value, we'll return -1
    return -1
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const searchValue = 8

console.log(linearSearchAlgorithm(data, searchValue))

// Time Complexity
// Best Case : O(1)
// Average Case : O(n)
// Worst Case : O(n)