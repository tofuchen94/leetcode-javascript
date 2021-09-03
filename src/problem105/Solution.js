var { TreeNode, arr2Tree, tree2Arr } = require("../utils/utils.js");
/**
 * 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    function helper(preL, preR, inL, inR) {
        const res = new TreeNode(preorder[preL]);
        const index = inorder.indexOf(preorder[preL]);
        if (index > inL) {
            res.left = helper(preL + 1, preL + index - inL, inL, index - 1);
        }
        if (index < inR) {
            res.right = helper(preR - inR + index + 1, preR, index + 1, inR);
        }
        return res;
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

// 示例
// [3,9,20,null,null,15,7]
console.log(tree2Arr(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])));
// [-1]
console.log(tree2Arr(buildTree([-1], [-1])));
