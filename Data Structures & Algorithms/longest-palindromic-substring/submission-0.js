class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resIdx = 0;
        let resLen = 0;
        let resType = ""; // Tracks whether the longest palindrome is "odd" or "even"

        const expandAroundCenter = (l, r, type) => {
            while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
                let currLen = r - l + 1;
                if (currLen > resLen) {
                    resIdx = l;
                    resLen = currLen;
                    resType = type; // Store whether it's odd or even
                }
                l--;
                r++;
            }
        };

        for (let i = 0; i < s.length; i++) {
            // Check for odd-length palindrome
            if (i < s.length) {
                expandAroundCenter(i, i, "odd");
            }

            // Check for even-length palindrome
            if (i + 1 < s.length && s.charAt(i) === s.charAt(i + 1)) {
                expandAroundCenter(i, i + 1, "even");
            }
        }

        console.log("Longest palindrome is of type:", resType);
        return s.substring(resIdx, resIdx + resLen);
    }
}
