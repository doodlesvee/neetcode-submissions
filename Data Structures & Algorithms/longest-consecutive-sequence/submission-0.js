class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         const set = new Set(nums);

  let longest = 0;

  for (let num of set) {

    // only start if it's the beginning of a sequence

    if (!set.has(num - 1)) {

      let current = num;

      let length = 1;

      while (set.has(current + 1)) {

        current++;

        length++;

      }

      longest = Math.max(longest, length);

    }

  }

  return longest;
    }
}
