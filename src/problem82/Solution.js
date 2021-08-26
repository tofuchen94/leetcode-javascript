var { ListNode, arr2List, List2Arr } = require("../utils/utils.js");
/**
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。
 * 返回同样按升序排列的结果链表。
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null || head.next === null) return head;
    let newHead = new ListNode(0, head);
    let pre = newHead;
    while (pre.next) {
        let next = pre.next;
        while (next && next.val === pre.next.val) {
            next = next.next;
        }
        if (next !== pre.next.next) {
            pre.next = next;
        } else {
            pre = pre.next;
        }
    }
    return newHead.next;
};

console.log(List2Arr(deleteDuplicates(arr2List([1, 2, 3, 3, 4, 4, 5]))));
console.log(List2Arr(deleteDuplicates(arr2List([1, 1, 1, 2, 2]))));
