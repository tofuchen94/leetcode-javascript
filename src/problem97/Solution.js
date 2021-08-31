/**
 * 给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。
 * 两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：
 * s = s1 + s2 + ... + sn
 * t = t1 + t2 + ... + tm
 * |n - m| <= 1
 * 交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
 * 提示：a + b 意味着字符串 a 和 b 连接。
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    const helper = new Array(s1.length + 1)
        .fill(0)
        .map((item) => new Array(s2.length + 1).fill(false));
    for (let m = 0; m <= s1.length; m++) {
        for (let n = 0; n <= s2.length; n++) {
            if (m === 0 && n === 0) {
                helper[m][n] = true;
                continue;
            }
            s1[m - 1] === s3[m + n - 1] &&
                (helper[m][n] = helper[m][n] || helper[m - 1][n]);
            s2[n - 1] === s3[m + n - 1] &&
                (helper[m][n] = helper[m][n] || helper[m][n - 1]);
        }
    }
    return helper[s1.length][s2.length];
};
// 示例
// true
console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
// false
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"));
// true
console.log(isInterleave("", "", ""));
