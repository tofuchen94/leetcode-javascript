var { TreeNode, tree2Arr, arr2Tree } = require("../utils/utils.js");
/**
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 叶子节点 是指没有子节点的节点。
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    if (!root) return [];
    const res = [];
    function helper(path, node, remain) {
        if (!node.left && !node.right && node.val === remain) {
            res.push([...path, node.val]);
            return;
        }
        if (node.left) {
            path.push(node.val);
            helper(path, node.left, remain - node.val);
            path.pop();
        }
        if (node.right) {
            path.push(node.val);
            helper(path, node.right, remain - node.val);
            path.pop();
        }
    }
    helper([], root, targetSum);
    return res;
};

// 示例
// [[5,4,11,2],[5,8,4,5]]
console.log(
    pathSum(arr2Tree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)
);
// []
console.log(pathSum(arr2Tree([1, 2, 3]), 5));
// []
console.log(pathSum(arr2Tree([1, 2]), 0));
