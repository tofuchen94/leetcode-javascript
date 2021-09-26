var { ListNode, List2Arr, arr2List } = require("../utils/utils.js");
/**
 * 对链表进行插入排序。
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    let newHead = new ListNode();
    let now = head;
    while (now) {
        let next = now.next;
        let pre = newHead;
        while (pre.next && pre.next.val < now.val) {
            pre = pre.next;
        }
        now.next = pre.next;
        pre.next = now;
        now = next;
    }
    return newHead.next;
};

// 示例
// [1,2,3,4]
console.log(List2Arr(insertionSortList(arr2List([4, 2, 1, 3]))));
// [-1,0,3,4,5]
console.log(List2Arr(insertionSortList(arr2List([-1, 5, 3, 4, 0]))));
