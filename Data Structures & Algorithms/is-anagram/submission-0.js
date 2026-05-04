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

    if (!trackerObj.hasOwnProperty(charS)) {
      trackerObj[charS] = 1;
    } else {
      trackerObj[charS] += 1;
    }

    if (!trackerObj.hasOwnProperty(charT)) {
      trackerObj[charT] = -1;
    } else {
      trackerObj[charT] -= 1;
    }
  }


  for (let i = 0; i < Object.values(trackerObj).length; i++) {
    if(Object.values(trackerObj)[i] !== 0)
        return false
    
  }

  return true;
    }
}
