// Approach-1 is Frequency Counting but we cannot solve each and every Problem using this Approach

// For now, Let's understand the Problem...
// Anagram Checker
// In this problem we are supposed to check whether given 2 strings are anagrams of each other or not.

const validAnagram = (str1, str2) => {

    if (str1.length !== str2.length) return false

    let store = {}

    for (let i = 0; i < str1.length; i++) {
        // Add the Character from String to Object and Assign 1 if it doesn't exist and if it exists increment it's value by 1
        store[str1[i]] ? store[str1[i]] += 1 : store[str1[i]] = 1
    }

    for (let i = 0; i < str2.length; i++) {
        // Return false if there is no Key in Object for This Character
        if (!store[str2[i]]) return false

        // If the key exist then decrement it's value by 1
        store[str2[i]] -= 1
    }
    return true
}

console.log(validAnagram('cinema', 'iceman'))   // true
console.log(validAnagram('hello', 'hola'))      // false