class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
       let top = 0,
    bottom = matrix.length - 1;

  let row = null;

  
    while (top <= bottom) {
      const mid = Math.trunc((top + bottom) / 2);
      console.log({ top, bottom, mid });

      if (
        matrix[mid][0] <= target &&
        matrix[mid][matrix[mid].length - 1] >= target
      ) {
        row = mid;
        break;
      } else if (target < matrix[mid][0]) {
        bottom = mid - 1;
      } else if (target > matrix[mid][matrix[mid].length - 1]) {
        top = mid + 1;
      }
    }
 if(row === null) return false

  let left = 0,
    right = matrix[row].length - 1;

  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    if (matrix[row][mid] > target)
      right = mid - 1; // target is smaller, go left
    else if (matrix[row][mid] < target)
      left = mid + 1; // target is bigger, go right
    else {
      return true;
    }
  }

  return false;
    }
}
