class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let first = 0;
  for (let i = 1; ; i++) {
    if (i > nums.length) {
      break;
    }

    if (i === nums.length) {
      i = ++first;
    } else {
      if (nums[first] + nums[i] === target) {
        return [first, i]
      }
    }
  }
    }
}
