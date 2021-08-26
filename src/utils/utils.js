var ListNode = function (val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
};
exports.ListNode = ListNode;
exports.arr2List = function (arr) {
    let res;
    for (let i = 0; i < arr.length; i++) {
        let node = new ListNode(arr[arr.length - i - 1], res);
        res = node;
    }
    return res;
};
exports.List2Arr = function (head) {
    let res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
};
