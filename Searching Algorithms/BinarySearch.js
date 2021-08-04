// Binary Search
// This Algorithm will work with Sorted Array only.
// So, in this algorithm we'll divide given SORTED ARRAY into two halfs and we'll check whether the search value is greater than the middle Value or less than the middle value or equal to the middle value 
// 1) If the search value is greater than the middle value than we can eleminate the left half of data and keep following same procedure for the right half of data 
// 2) If the search value is less than the middle value then we can eleminate the right half of data and keep following same procedure for the left half of data 
// 3) If the search value is equal to middle value then we can return index of middle value

const binarySearchAlgoritm = (data, searchValue) => {
    // Initialize (left) with starting index (0)
    let left = 0
    // Initialize (right) with last index (n - 1)
    let right = data.length - 1

    // We'll loop through the list until we get (left = right)
    while (left !== right) {

        // We'll find Mid Point
        const mid = (left + right) / 2

        // If search value is equal to mid value then we'll return (mid)
        if (searchValue === data[mid]) return mid

        // If search value is greater than mid value then we'll eliminate left half and start the process again for right half and to achieve that we'll assign (mid + 1) to (left)
        if (searchValue > data[mid]) {
            left = mid + 1
            continue
        }
        // If search value is neither equal to nor greater than the mid value that means it is surely less than mid value and in order to eliminate right half we'll assign (mid - 1) to (right)
        right = mid - 1
    }

    // And if we don't find any matching value in list then we'll return -1
    return -1
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const searchValue = 20

console.log(binarySearchAlgoritm(data, searchValue))

// Time Complexity
// Best Case : O(1)
// Average Case : O(logn)
// Worst Case : O(logn)