/**
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    if (n <= 1) return 1;
    const helper = [1, 1];
    for (let i = 2; i <= n; i++) {
        let res = 0;
        for (let j = 0; j <= i - 1; j++) {
            res += helper[j] * helper[i - 1 - j];
        }
        helper.push(res);
    }
    return helper.pop();
};

// 示例
// 5
console.log(numTrees(3));
// 1
console.log(numTrees(1));
