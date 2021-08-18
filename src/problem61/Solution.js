/**
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
var arr2List = function (arr) {
    let res;
    for (let i = 0; i < arr.length; i++) {
        let node = new ListNode(arr[arr.length - i - 1], res);
        res = node;
    }
    return res;
};
var List2Arr = function (head) {
    let res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
};
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
