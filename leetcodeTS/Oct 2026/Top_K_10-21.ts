/*
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
*/



class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    //Time Complexity: O(n), Space Complexity: O(n), Accpeted solution on Neetcode.
    topKFrequent(nums: number[], k: number): number[] { 
        const freqMap: Record<number, number> = {}//Taking space per every entry inside of nums array

        for (const num of nums) {//Running O(n) Speed
            if (!freqMap[num]) freqMap[num] = 1
            else freqMap[num]++
        } 

        const resArr = []//Taking space based off of K
        const sortedMap = Object.entries(freqMap).sort((a, b) => b[1] - a[1])

        for (const sort of sortedMap) {//Running O(n) Speed
            const key = Number(sort[0])
            
            if (resArr.length === k) break
            else resArr.push(key) 
        }
        return resArr
    }
}