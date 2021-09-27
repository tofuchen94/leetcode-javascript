var { ListNode, List2Arr, arr2List } = require("../utils/utils.js");
/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    let length = 0;
    let node = head;
    while (node !== null) {
        node = node.next;
        length++;
    }
    if (length < 2) return head;
    let newHead = new ListNode(0, head);
    for (let l = 1; l < length; l <<= 1) {
        let pre = newHead;
        let cur = newHead.next;
        while (cur !== null) {
            let head1 = cur;
            // 找到第一个链表尾节点
            for (let i = 1; i < l && cur.next !== null; i++) {
                cur = cur.next;
            }
            let head2 = cur.next;
            cur.next = null;
            cur = head2;
            // 找到第二个链表尾节点
            for (let i = 1; i < l && cur !== null; i++) {
                cur = cur.next;
            }
            if (cur !== null) {
                let node = cur.next;
                cur.next = null;
                cur = node;
            }
            let mergedNode = merge(head1, head2);
            pre.next = mergedNode;
            while (pre.next !== null) {
                pre = pre.next;
            }
        }
    }
    return newHead.next;
};
// 合并两个已排序的链表
function merge(head1, head2) {
    let newHead = new ListNode();
    let tail = newHead;
    while (head1 !== null && head2 !== null) {
        if (head1.val < head2.val) {
            tail.next = head1;
            head1 = head1.next;
        } else {
            tail.next = head2;
            head2 = head2.next;
        }
        tail = tail.next;
    }
    if (head1 !== null) {
        tail.next = head1;
    } else if (head2 !== null) {
        tail.next = head2;
    }
    return newHead.next;
}

// 示例
// [1,2,3,4]
console.log(List2Arr(sortList(arr2List([4, 2, 1, 3]))));
// [-1,0,3,4,5]
console.log(List2Arr(sortList(arr2List([-1, 5, 3, 4, 0]))));
