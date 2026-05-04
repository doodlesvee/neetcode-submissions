class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const store = {};

  for (let i = 0; i < nums.length; i++) {
    let elem = nums[i]

    if (store.hasOwnProperty(target - elem)) {
        return [i, store[target - elem]]
    } else {
      store[elem] = i;
    }
  }
    }
}
