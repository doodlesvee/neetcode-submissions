class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         if (s.length !== t.length) return false;

  let temp = {};
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (temp.hasOwnProperty(charS)) {
      temp[charS] = temp[charS] + 1;
    } else {
      temp[charS] = 1;
    }

    if (temp.hasOwnProperty(charT)) {
      temp[charT] = temp[charT] - 1;
    } else {
      temp[charT] = -1;
    }
  }

  for (let key in temp) {
    if (temp[key]) return false;
  }

  return true;
    }
}
