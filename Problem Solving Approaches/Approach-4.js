// Approach-4 is Divide and Conquer

// Problem Statement : A program that can search for asked value and return index of that value if it exists and return -1 if it doesn't exist

// Suppose we have SORTED ARRAY [1,2,3,4,5,6,7,8,9] and we are searching for 7

// Step 1 : we will get the center value of given array which is 5 in here so the value we are searching for is 7 and array is sorted we know that 7 will exist right of 5 and we can skip whole portion in left

// Step 2 : we will get the center value of right portion and follow the same method and at some point we'll find that the center value we are fetching is the search value and we will come to know the index of value we are searching