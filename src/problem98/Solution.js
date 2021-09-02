var { TreeNode, arr2Tree, tree2Arr } = require("../utils/utils.js");
/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 假设一个二叉搜索树具有如下特征：
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    // 返回二叉树节点值范围
    function helper(root) {
        if (root === null) return null;
        const leftRange = helper(root.left);
        const rightRange = helper(root.right);
        if (
            leftRange !== null &&
            (leftRange[0] > leftRange[1] || leftRange[1] >= root.val)
        )
            return [1, 0];
        if (
            rightRange !== null &&
            (rightRange[0] > rightRange[1] || rightRange[0] <= root.val)
        )
            return [1, 0];
        const range = [root.val, root.val];
        if (leftRange !== null) range[0] = Math.min(range[0], leftRange[0]);
        if (rightRange !== null) range[1] = Math.max(range[1], rightRange[1]);
        return range;
    }
    const range = helper(root);
    if (range !== null && range[0] > range[1]) return false;
    return true;
};
// 示例
// true
console.log(isValidBST(arr2Tree([2, 1, 3])));
// false
console.log(isValidBST(arr2Tree([5, 1, 4, null, null, 3, 6])));
