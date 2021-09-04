var { TreeNode, arr2Tree, tree2Arr } = require("../utils/utils.js");
/**
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 注意:
 * 你可以假设树中没有重复的元素。
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    function helper(inL, inR, postL, postR) {
        const res = new TreeNode(postorder[postR]);
        const index = inorder.indexOf(postorder[postR]);
        if (index > inL) {
            res.left = helper(inL, index - 1, postL, postL - inL + index - 1);
        }
        if (index < inR) {
            res.right = helper(index + 1, inR, index - inR + postR, postR - 1);
        }
        return res;
    }
    return helper(0, inorder.length - 1, 0, postorder.length - 1);
};

// 示例
// [3,9,20,null,null,15,7]
console.log(tree2Arr(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])));
// [-1]
console.log(tree2Arr(buildTree([-1], [-1])));
