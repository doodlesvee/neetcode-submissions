class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0,
    right = str.length - 1,
    isValidPalindrome = true;

  while (true) {
    console.log(str[left], str[right])

    if(left>= right) break
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      isValidPalindrome = false;
      break;
    }


  }

  return isValidPalindrome;
    }
}
