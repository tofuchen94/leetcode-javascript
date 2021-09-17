/**
 * 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 * 说明：
 *  拆分时可以重复使用字典中的单词。
 *  你可以假设字典中没有重复的单词。
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    const set = new Set(wordDict);
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && set.has(s.substr(j, i - j))) {
                dp[i] = true;
            }
        }
    }
    return dp[s.length];
};
// 示例
// true
console.log(wordBreak("leetcode", ["leet", "code"]));
// true
console.log(wordBreak("applepenapple", ["apple", "pen"]));
// false
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
