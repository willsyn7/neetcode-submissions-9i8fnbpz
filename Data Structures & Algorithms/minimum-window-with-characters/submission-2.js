class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";

        let count = {};
        let window = {};

        // Populate count object with frequencies from t
        for (let c of t) {
            count[c] = (count[c] || 0) + 1;
        }

        let res = [-1, -1];
        let resLength = Infinity;
        let l = 0;
        let have = 0;
        let need = Object.keys(count).length; // Unique characters needed

        // Expanding the right pointer
        for (let r = 0; r < s.length; r++) {
            let x = s[r];
            window[x] = (window[x] || 0) + 1;

            // If the current character count matches in window and count, increment 'have'
            if (count[x] && window[x] === count[x]) {
                have++;
            }

            // Contract the left pointer when all required characters are in the window
            while (have === need) {
                if ((r - l + 1) < resLength) {
                    resLength = r - l + 1;
                    res = [l, r];
                }

                window[s[l]]--;

                // If removing left pointer character causes a mismatch, decrement 'have'
                if (count[s[l]] && window[s[l]] < count[s[l]]) {
                    have--;
                }

                l++;
            }
        }

        return resLength === Infinity ? "" : s.slice(res[0], res[1] + 1);
    }
}
