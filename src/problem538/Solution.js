/**
 * 给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var convertBST = function(root) {
    pre =0;
    helper(root);
};

var pre = 0;
var helper = function(root){
    if(root === null || root === undefined)return;
    helper(root.right);
    root.val += pre;
    pre = root.val;
    helper(root.left);
}