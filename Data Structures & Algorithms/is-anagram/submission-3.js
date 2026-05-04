class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
if (s.length !== t.length) return false;
  const trackerObj = {};

  for (let i = 0; i < s.length; i++) {
    let charS = s[i],
      charT = t[i];

   trackerObj[charS] = (trackerObj[charS] || 0) + 1
   trackerObj[charT] = (trackerObj[charT] || 0) - 1
  }

  for (const key in trackerObj) {
    if (trackerObj[key] !== 0) {
      return false;
    }
  }
  return true;
}
}
