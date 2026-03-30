class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resIdx = 0;
        let resLen = 0;

        const expandAroundCenter = (l, r) => {
            while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
                let currLen = r - l + 1;
                if (currLen > resLen) {
                    resIdx = l;
                    resLen = currLen;
                }
                l--;
                r++;
            }
        };

        for (let i = 0; i < s.length; i++) {
            // Explicitly check for odd-length palindrome
            expandAroundCenter(i, i);

            // Explicitly check for even-length palindrome (only if adjacent chars are the same)
            if (i + 1 < s.length && s.charAt(i) === s.charAt(i + 1)) {
                expandAroundCenter(i, i + 1);
            }
        }

        return s.substring(resIdx, resIdx + resLen);
    }
}

//
