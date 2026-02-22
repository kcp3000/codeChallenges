/*
Problem: Cyclic Shift Absolute Difference
Description
You are given two arrays arr1 and arr2 of the same length n.
Let's consider all cyclic shifts of arr1.
Your task is the following: for each cyclic shift of arr1, calculate the sum of absolute differences with arr2. 
Among all possible sums, return the lowest one as the result.

Example
For arr1 = [1, 4, 2, 11] and arr2 = [10, 1, 8, 4], the output should be solution(arr1, arr2) = 7.

Explanation
Let's consider all possible cyclic shifts of arr1:
First Shift (Original): [1, 4, 2, 11]
• Compare with arr2: [10, 1, 8, 4]
• Diffs: |1-10| + |4-1| + |2-8| + |11-4|
• Calculation: 9 + 3 + 6 + 7 = 25

Second Shift: [4, 2, 11, 1] (Move front to back)
• Compare with arr2: [10, 1, 8, 4]
• Diffs: |4-10| + |2-1| + |11-8| + |1-4|
• Calculation: 6 + 1 + 3 + 3 = 13

Third Shift: [2, 11, 1, 4]
• Compare with arr2: [10, 1, 8, 4]
• Diffs: |2-10| + |11-1| + |1-8| + |4-4|
• Calculation: 8 + 10 + 7 + 0 = 25

Fourth Shift: [11, 1, 4, 2]
• Compare with arr2: [10, 1, 8, 4]
• Diffs: |11-10| + |1-1| + |4-8| + |2-4|
• Calculation: 1 + 0 + 4 + 2 = 7

The lowest sum among all of the above is 7, which is the answer.
*/
const shift = [1, 4, 2, 11], stay = [10, 1, 8, 4]

function gcf (arr1, arr2) {//time: O(n) space: O(1)
    let finalLowest = Infinity// initializing this with Infinity, we're looking for the lowest and theres nothing bigger than infinity, making it a great base to use
    const n = arr1.length // getting the length of arr1, this will be used as our countdown functionality

    function recursiveFunction (copyArr1 = arr1, copyArr2 = arr2, countdown = n, curMin = 0) {// creating a recursive function that will be doing all of the shifts and calcs 
        if (countdown === 0) return // base case
        
        for (let i = 0; i < copyArr1.length; i++) {// iterating through copyArr1 and doing the calculations
            curMin += Math.abs(copyArr1[i] - copyArr2[i])
            console.log({copyArr1, curMin})
        }

        if (curMin < finalLowest) finalLowest = curMin// check to see if the curMin is less than finalLowest, if it is then we equate finalLowest to CurMin
        copyArr1.push(copyArr1.shift())// where the shift of copyArr1 takes place, we're shifting first then pushing the element to the back of the array 

        return recursiveFunction(copyArr1, arr2, countdown - 1, curMin = 0)// call back the function, decreasing countdown and restarting curMin
    }
    recursiveFunction()// calling the function

    return finalLowest
}

console.log(gcf(shift, stay))