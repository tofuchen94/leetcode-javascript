var { TreeNode, tree2Arr, arr2Tree } = require("../utils/utils.js");
/**
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 叶子节点 是指没有子节点的节点。
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    const preorder = [];
    function helper(node) {
        if (!node) return;
        preorder.push(node);
        helper(node.left);
        helper(node.right);
    }
    helper(root);
    const head = new TreeNode();
    let tail = head;
    preorder.forEach((node) => {
        node.left = null;
        node.right = null;
        tail.right = node;
        tail = node;
    });
};

// 示例
// [1,null,2,null,3,null,4,null,5,null,6]
let root = arr2Tree([1, 2, 5, 3, 4, null, 6]);
flatten(root);
console.log(tree2Arr(root));

// []
let root1 = arr2Tree([]);
flatten(root1);
console.log(tree2Arr(root1));

// [0]
let root2 = arr2Tree([0]);
flatten(root2);
console.log(tree2Arr(root2));
