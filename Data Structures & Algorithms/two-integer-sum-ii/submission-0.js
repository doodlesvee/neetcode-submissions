class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(ip, target) {
         let left = 0,
    right = ip.length - 1;

  while (left <= right) {
    let total = ip[left] + ip[right];
    if (total < target) {
      left++;
    } else if (total > target) right--;
    else return [++left, ++right];
  }
    }
}
