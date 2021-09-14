/**
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 * 回文串 是正着读和反着读都一样的字符串。
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const dp = new Array(s.length)
        .fill(0)
        .map((item) => new Array(s.length).fill(false));
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        i < s.length - 1 && s[i] === s[i + 1] && (dp[i][i + 1] = true);
    }
    for (let l = 2; l < s.length; l++) {
        for (let i = 0; i + l < s.length; i++) {
            dp[i][i + l] = s[i] === s[i + l] && dp[i + 1][i + l - 1];
        }
    }
    const res = [];
    const path = [];
    function helper(start) {
        if (start === s.length) {
            res.push(path.map(([start, end]) => s.substring(start, end + 1)));
            return;
        } else {
            for (let end = start; end < s.length; end++) {
                if (dp[start][end]) {
                    path.push([start, end]);
                    helper(end + 1);
                    path.pop();
                }
            }
        }
    }
    helper(0);
    return res;
};

// 示例
// [["a","a","b"],["aa","b"]]
console.log(partition("aab"));
// [["a"]]
console.log(partition("a"));
