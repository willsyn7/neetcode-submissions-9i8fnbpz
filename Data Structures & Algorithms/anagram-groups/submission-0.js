class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    ///itterate thorugh the input arugmetn
    // ittereate tthroguh 
    
 groupAnagrams(strs) {
  const anagramGroups = {};

  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');

    if (!anagramGroups[sortedStr]) {
      anagramGroups[sortedStr] = [];
    }

    anagramGroups[sortedStr].push(str);
  }

  return Object.values(anagramGroups);
}

    }






        

