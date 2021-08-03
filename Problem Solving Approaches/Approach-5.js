// Approach-5 is Recursion
// Recursion occurs when a function calls itself within it's body

// Problem Statement: A Program that prints series of positive integers upto some number

const printNumber = (number) => {
    // if Number is greater than 0 then and only then we will make a recursive call for (number - 1) and print (number)
    if (number > 0) {
        console.log(number)
        printNumber(--number)
    }
    // And if number is less than or equal to 0 then we'll simply just return the function with nothing
    return
}

printNumber(10)     // 10 9 8 7 6 5 4 3 2 1

// Problem Statement: A Program that prints sum of series of positive integers upto some number

const sumNumbers = (number) => {
    // If number is 1 then we'll return sum of 1 as 1
    if (number === 1) return 1
    // and if number is not 1 then we'll add (number) into recursive call of (number - 1)
    return number + sumNumbers(number - 1)
}

console.log(sumNumbers(10))     // 55

// Problem Statement: A Program that can calculate Factorial of given value

const findFactorial = (val) => {
    // If val is 1 or 0 then we'll return factorial of them as 1
    if (val === 0 || val === 1) return 1

    // and if val is neither 0 nor 1 then we will return multiplication of (val) and recursive call of (val-1)
    return val * findFactorial(val - 1)
}

console.log(findFactorial(5))   // 120 