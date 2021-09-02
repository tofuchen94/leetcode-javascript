var { TreeNode, arr2Tree, tree2Arr } = require("../utils/utils.js");
/**
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (root === null) return [];
    let res = [];
    let arr = [root];
    let flag = false; //是否需要倒置
    while (arr.length > 0) {
        let temp = [];
        let arr2 = [];
        arr.forEach((node) => {
            temp.push(node.val);
            if (node.left) arr2.push(node.left);
            if (node.right) arr2.push(node.right);
        });
        if (flag) {
            temp.reverse();
        }
        res.push(temp);
        flag = !flag;
        arr = arr2;
    }
    return res;
};

// 示例
// [
//  [3],
//  [20,9],
//  [15,7]
// ]
console.log(zigzagLevelOrder(arr2Tree([3, 9, 20, null, null, 15, 7])));
