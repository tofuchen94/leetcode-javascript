var { ListNode, arr2List, List2Arr } = require("../utils/utils.js");
/**
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let minHead = new ListNode();
    let minTail = minHead;
    let maxHead = new ListNode();
    let maxTail = maxHead;
    while (head) {
        if (head.val < x) {
            minTail.next = head;
            minTail = head;
            head = head.next;
            minTail.next = null;
        } else {
            maxTail.next = head;
            maxTail = head;
            head = head.next;
            maxTail.next = null;
        }
    }

    if (maxTail !== maxHead) {
        minTail.next = maxHead.next;
    }
    return minHead.next;
};

// 示例
// [1,2,2,4,3,5]
console.log(List2Arr(partition(arr2List([1, 4, 3, 2, 5, 2]), 3)));

// [1,2]
console.log(List2Arr(partition(arr2List([2, 1]), 2)));
