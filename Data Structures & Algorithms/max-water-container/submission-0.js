class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(input) {
        let left = 0,
    right = input.length - 1;

  let prevArea = 0;

  while (left < right) {
   let area = Math.min(input[left], input[right]) * (right - left);
    if (prevArea < area) prevArea = area;

    if (input[left] < input[right]) {
      left++;
    } else right--;
  }

  return prevArea;
    }
}
