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
var TreeNode = function (val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
};
exports.TreeNode = TreeNode;
exports.arr2Tree = function (arr) {
    if (arr.length === 0) return null;
    let root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (queue.length > 0) {
        let node = queue.shift();
        if (arr[i]) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        if (arr[i + 1]) {
            node.right = new TreeNode(arr[i + 1]);
            queue.push(node.right);
        }
        i = i + 2;
    }
    return root;
};
exports.tree2Arr = function (root) {
    if (!root) return [];
    const queue = [root];
    const res = [];
    while (queue.length > 0) {
        let node = queue.shift();
        node && queue.push(node.left, node.right);
        res.push(node ? node.val : null);
    }
    let i = res.length - 1;
    while (i >= 0 && res[i] === null) i--;
    res.length = i + 1;
    return res;
};
