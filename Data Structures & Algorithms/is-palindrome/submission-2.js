class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');

        for(let i = 0 ;i  < s.length;i++){
            if(str[i] !== str[str.length - i - 1])return false
        }
        return true;
    }
}
