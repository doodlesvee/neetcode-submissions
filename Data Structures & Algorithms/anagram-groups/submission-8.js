class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
 const groupedObj = {};

  for (let i = 0; i < strs.length; i++) {
    const alphabetMap = createAlphabetsMap();
    for (let j = 0; j < strs[i].length; j++) {
      alphabetMap[strs[i][j]]++;
    }

   const key = Object.values(alphabetMap)

    if( key in groupedObj){
        groupedObj[key] = [...groupedObj[key], strs[i]]
    }else {
        groupedObj[key] = [strs[i]]
    }
  }

  return Object.values(groupedObj)
    }

    
}


function createAlphabetsMap() {
  const alphaMap = {};

  for (let i = 97; i <= 122; i++) {
    alphaMap[String.fromCharCode(i)] = 0;
  }

  return alphaMap;
}