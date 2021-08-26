var { ListNode, arr2List, List2Arr } = require("../utils/utils.js");
/**
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return head;
    let node = head;
    let length = 0;
    while (node.next) {
        length++;
        node = node.next;
    }
    length++;
    k %= length;
    if (k === 0) return head;
    node.next = head;
    node = head;
    for (let i = 0; i < length - k - 1; i++) {
        node = node.next;
    }
    head = node.next;
    node.next = null;
    return head;
};
// 示例
// [4,5,1,2,3]

console.log(List2Arr(rotateRight(arr2List([1, 2, 3, 4, 5]), 2)));

// 示例
// [2,0,1]
console.log(List2Arr(rotateRight(arr2List([0, 1, 2]), 4)));
