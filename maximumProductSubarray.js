/* Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array. */

var maxProduct = function(nums) {
    let result = nums[0];
    let prevMin = nums[0];
    let prevMax = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        currMax = Math.max(nums[i], prevMin * nums[i], prevMax * nums[i]);
        currMin = Math.min(nums[i], prevMin * nums[i], prevMax * nums[i]);
        
        prevMax = currMax;
        prevMin = currMin;
        result = Math.max(currMax, result);
    }
    return result; 
}


console.log(maxProduct([2,3,-2,4]))