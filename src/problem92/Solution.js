var { ListNode, arr2List, List2Arr } = require("../utils/utils.js");
/**
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let newHead = new ListNode(0, head);
    let node = newHead;
    let preLeftNode, leftNode;
    for (let i = 0; i < right; i++) {
        if (i === left - 1) {
            preLeftNode = node;
        }
        node = node.next;
    }
    leftNode = preLeftNode.next;
    preLeftNode.next = node.next;
    node.next = null;
    while (leftNode) {
        node = leftNode.next;
        leftNode.next = preLeftNode.next;
        preLeftNode.next = leftNode;
        leftNode = node;
    }
    return newHead.next;
};

// 示例
// [1,4,3,2,5]
console.log(List2Arr(reverseBetween(arr2List([1, 2, 3, 4, 5]), 2, 4)));
// [5]
console.log(List2Arr(reverseBetween(arr2List([5]), 1, 1)));
