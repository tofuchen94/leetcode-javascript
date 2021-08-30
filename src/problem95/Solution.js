var { TreeNode, arr2Tree, tree2Arr } = require("../utils/utils.js");
/**
 * 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    // 构建从left到right
    function helper(left, right) {
        if (left > right) {
            return [null];
        }
        const res = [];
        for (let i = left; i <= right; i++) {
            let leftNodes = helper(left, i - 1);
            let rightNodes = helper(i + 1, right);
            for (const leftNode of leftNodes) {
                for (const rightNode of rightNodes) {
                    const node = new TreeNode(i, leftNode, rightNode);
                    res.push(node);
                }
            }
        }
        return res;
    }
    return helper(1, n);
};
// 示例
// [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
console.log(generateTrees(3).map((node) => tree2Arr(node)));
// [[1]]
console.log(generateTrees(1).map((node) => tree2Arr(node)));
