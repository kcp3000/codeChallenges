/*
Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements within the array.
The test cases are generated such that the answer is always unique.
You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]

Example 2:

Input: nums = [7,7], k = 1

Output: [7]

Constraints:

    1 <= nums.length <= 10^4.
    -1000 <= nums[i] <= 1000
    1 <= k <= number of distinct elements in nums.


PEDAC

P

Given an array of integers and integer k, return the top k frequent element that appears wihin the array
can be returned in any order

E

[1,2,2,2,2,3,4,4,3,3,3,3], k = 3
output: [2,3,4]
2 appears 4 times, 3 appears 5 times and 4 appears 2 times. since we want the top 3 (k is equal to 3), we're looking for the 
top 3 most frequent element

[], k = 1
output: []
nothing in the array, so output is an empty array

[1], k = 2
output: [1]
only one element in the array despite k asking for the top 2, but since there's only 1 element we return that one element

[1,1,2,2,3,3,4,4], k = 2
[1,2]

D
arrray

A
inialize a varaible called freqK

iterate through nums array
    if the current num does not exist in freqK
        add the current num and equate it to 1
    else   
        increase the count

inialize a variable called sorted, where you will be using Object.entries to sort in decending order to have the most frequent appreances 
show at the very start of this array

return sorted based on the top k amount
*/

function topKFrequent(nums, k) {//Time: O(n log n) Space: O(n)
    const freqK = {}
   
    for (const num of nums) {
        if (freqK[num] === undefined) freqK[num] = 1
        else freqK[num]++
    }
    //we're sorting the array created by Object.entries so we can order the values in decending order while retaining its key attacted
    //to the value
    const sorted = Object.entries(freqK).sort((a,b) => b[1] - a[1])

    //since sorted is matrix of an array and we want the key that's attacted to the value, we're firstly slicing based on k to ONLY get k
    //top values, then to ensure we get the right numbers, we're mutating the array so that we only get top k value's keys. 
    return sorted.slice(0, k).map(([key]) => Number(key))
}

console.log(topKFrequent([1,1,1,3,3,4,2], 1))