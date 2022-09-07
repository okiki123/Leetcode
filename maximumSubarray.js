/* Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array. */

var maxSubArray = function(nums) {
    let maxSub = nums[0];
    let currSum = 0;

    for(let i = 0; i < nums.length; i++) {
        if(currSum < 0) {
            currSum = 0;
        }
        currSum += nums[i];
        maxSub = Math.max(currSum, maxSub);
    }
    return maxSub;
}