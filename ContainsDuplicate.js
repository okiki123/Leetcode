/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 */

var containsDuplicate = function(nums) {
    let numSet = new Set();
    for (const i of nums) {
        if (numSet.has(i)) {
            return true;
        }
  
    }
    return false;
}