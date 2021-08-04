// Naive String Search
// This is more of a method to find total repeatation of search value inside of a string data

// In this method we loop through a string data (char by char) and try to match each character of it with first character of search value (search string) and if 1st character matches then we'll match their next characters and if all the characters of search value matches with series of characters in string data then we can say that there is 1 substring inside of string data which matches the search value

const naiveStringSearch = (data, searchValue) => {
    // Initialize (count) with (0)
    let count = 0

    // loop through string data(data)
    for (let i = 0; i < data.length; i++) {
        // loop through search value(searchValue) so that we can compare corresponding characters of search value(searchValue) and string data(data)
        for (let j = 0; j < searchValue.length; j++) {
            // If (i+j-th) character of string data(data) is not equal to (j-th) character of search value(searchValue) then we'll break the loop and move to the next character in string data(data)
            if (data[i + j] !== searchValue[j]) break
            // If Loop hasn't broke yet and value of (j) is equal to (size of searchValue - 1) then we'll increase (count) by 1
            if (j === searchValue.length - 1) count++
        }
    }

    // At the end we'll return the (count)
    return count
}

const data = 'HeyholaHeyholaciaoHey'
const searchValue = 'Hey'

console.log(naiveStringSearch(data, searchValue))      // 3