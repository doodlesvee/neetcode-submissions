class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(n, t) {
         let map = {},
    temp = 0,
    result = [];

  for (let i = 0; i < n.length; i++) {
    const diff = t - n[i];

    if (!map.hasOwnProperty(diff.toString())) {
      map[n[i]] = i;
    } else {
      result.push(map[diff], i);
    }
  }

  return result;
    }
}
