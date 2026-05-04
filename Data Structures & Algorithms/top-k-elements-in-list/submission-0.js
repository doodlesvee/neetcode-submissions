class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
         const tracker = {};

  for (let i = 0; i < nums.length; i++) {
    tracker[nums[i]] = tracker[nums[i]] + 1 || 1;
  }

  const sorted = Object.entries(tracker).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map((elem) => parseInt(elem[0]));
    }
}
