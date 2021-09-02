var { TreeNode, arr2Tree, tree2Arr } = require("../utils/utils.js");
/**
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) return [];
    let res = [];
    let arr = [root];
    while (arr.length > 0) {
        let temp = [];
        let arr2 = [];
        arr.forEach((node) => {
            temp.push(node.val);
            if (node.left) arr2.push(node.left);
            if (node.right) arr2.push(node.right);
        });
        res.push(temp);
        arr = arr2;
    }
    return res;
};

// 示例
// [
//  [3],
//  [9,20],
//  [15,7]
// ]
console.log(levelOrder(arr2Tree([3, 9, 20, null, null, 15, 7])));
