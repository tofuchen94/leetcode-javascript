var { arr2Tree, TreeNode } = require("../utils/utils.js");
/**
 * 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
 * 每条从根节点到叶节点的路径都代表一个数字：
 *
 * 例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
 * 计算从根节点到叶节点生成的 所有数字之和 。
 * 叶节点 是指没有子节点的节点。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    let res = 0;
    const path = [];
    function helper(root) {
        if (!root) return;
        path.push(root.val);
        if (!root.left && !root.right) {
            res += parseInt(path.join(""));
        } else {
            root.left && helper(root.left);
            root.right && helper(root.right);
        }
        path.pop();
    }
    helper(root);
    return res;
};

// 示例
// 25
console.log(sumNumbers(arr2Tree([1, 2, 3])));
// 1026
console.log(sumNumbers(arr2Tree([4, 9, 0, 5, 1])));
// 0
console.log(sumNumbers(arr2Tree([0])));
