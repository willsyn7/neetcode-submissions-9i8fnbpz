class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
 characterReplacement(s, k) {
    let l = 0;
    let res = 0;
    const values = new Map();
    let windowMax = 0;

    for (let r = 0; r < s.length; r++) {
        values.set(s[r], (values.get(s[r]) || 0) + 1);
        windowMax = Math.max(windowMax, values.get(s[r]));

        while ((r - l + 1) - windowMax > k) {
            values.set(s[l], values.get(s[l]) - 1);
            l++;
        }

        res = Math.max(res, r - l + 1);
    }

    return res;
    }
}
