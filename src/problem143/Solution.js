var { ListNode, List2Arr, arr2List } = require("../utils/utils.js");
/**
 * 给定一个单链表 L 的头节点 head ，单链表 L 表示为：
 * L0 → L1 → … → Ln-1 → Ln
 * 请将其重新排列后变为：
 * L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
 * 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head) return;
    let mid = findMid(head);
    let l2 = mid.next;
    mid.next = null;
    l2 = reverse(l2);
    merge(head, l2);

    function findMid(head) {
        let slow = head;
        let fast = head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    function reverse(head) {
        let next = null;
        let now = head;
        while (now) {
            let temp = now.next;
            now.next = next;
            next = now;
            now = temp;
        }
        return next;
    }
    function merge(l1, l2) {
        let next1;
        let next2;
        while (l1 && l2) {
            next1 = l1.next;
            next2 = l2.next;
            l1.next = l2;
            l2.next = next1;
            l1 = next1;
            l2 = next2;
        }
    }
};

// 示例
// [1,4,2,3]
let head = arr2List([1, 2, 3, 4]);
reorderList(head);
console.log(List2Arr(head));
// [1,5,2,4,3]
let head1 = arr2List([1, 2, 3, 4, 5]);
reorderList(head1);
console.log(List2Arr(head1));
