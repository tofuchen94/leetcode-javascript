var { TreeNode, ListNode, arr2List, tree2Arr } = require("../utils/utils.js");
/**
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    const nums = [];
    while (head) {
        nums.push(head.val);
        head = head.next;
    }
    function helper(left, right) {
        if (left > right) return null;
        let mid = left + Math.floor((right - left) / 2);
        console.log(mid);
        const res = new TreeNode(nums[mid]);
        if (mid > left) {
            res.left = helper(left, mid - 1);
        }
        if (mid < right) {
            res.right = helper(mid + 1, right);
        }
        return res;
    }
    return helper(0, nums.length - 1);
};

// 示例
// [0, -3, 9, -10, null, 5]
console.log(tree2Arr(sortedListToBST(arr2List([-10, -3, 0, 5, 9]))));
