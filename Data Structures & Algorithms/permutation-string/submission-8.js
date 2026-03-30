class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
  checkInclusion(s1, s2) {
    let s1Count = {};
    let s2Count = {};

    for (let char of s1) {
        s1Count[char] = (s1Count[char] || 0) + 1;
    }

    let l = 0;
    for (let r = 0; r < s2.length; r++) {
        s2Count[s2[r]] = (s2Count[s2[r]] || 0) + 1; // Bug 1 fix

        if ((r - l + 1) > s1.length) {
            s2Count[s2[l]]--;  // Bug 2 fix
            l++;
        }

        // Bug 3 fix: verify ALL keys match
        let match = true;
        for (let key in s1Count) {
            if (s2Count[key] !== s1Count[key]) {
                match = false;
                break;
            }
        }
        if (match) return true;
    }

    return false;
}
}