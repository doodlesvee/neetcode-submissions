class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const tracker = {};
  const group = [];
  for (let i = 0; i < strs.length; i++) {
    if (tracker[i]) continue;
    const tempArr = [strs[i]];
    for (let j = i + 1; j < strs.length; j++) {
      if (strs[j] !== undefined) {
        const isValid = validAnagram(strs[i], strs[j]);
        if (isValid) {
          tempArr.push(strs[j]);
          tracker[j] = true;
        }
      }
    }

    group.push(tempArr);
  }

  return group;
    }
}


function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  const tracker = {};
  for (let i = 0; i < s.length; i++) {
    tracker[s[i]] = (tracker[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] in tracker) {
      tracker[t[i]]--;

      if (tracker[t[i]] < 0) return false;
    } else return false;
  }

  return true;
}

