class Solution {
    /**
     * @param {string[]} username
     * @param {number[]} timestamp
     * @param {string[]} website
     * @return {string[]}
     */
    mostVisitedPattern(username, timestamp, website) {
  const n = timestamp.length;
        const arr = [];
        for (let i = 0; i < n; i++) arr.push([timestamp[i], i]);
        arr.sort((a, b) => a[0] - b[0]);

        const mp = new Map();
        for (const [, idx] of arr) {
            const user = username[idx],
                site = website[idx];
            if (!mp.has(user)) mp.set(user, []);
            mp.get(user).push(site);
        }

        const count = new Map();
        for (const user of mp.keys()) {
            const cur = mp.get(user);
            const patterns = new Set();
            for (let i = 0; i < cur.length; i++) {
                for (let j = i + 1; j < cur.length; j++) {
                    for (let k = j + 1; k < cur.length; k++) {
                        patterns.add(`${cur[i]}#${cur[j]}#${cur[k]}`);
                    }
                }
            }
            for (const p of patterns) {
                count.set(p, (count.get(p) || 0) + 1);
            }
        }

        let maxCnt = 0,
            res = '';
        for (const [pat, c] of count.entries()) {
            if (c > maxCnt || (c === maxCnt && (res === '' || pat < res))) {
                maxCnt = c;
                res = pat;
            }
        }
        return res.split('#');
    }
}