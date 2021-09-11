/**
 * 给定一个 二叉树。二叉树定义如下：
 * struct Node {
 *  int val;
 *  Node *left;
 *  Node *right;
 *  Node *next;
 * }
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 初始状态下，所有 next 指针都被设置为 NULL。
 */
// Definition for a Node.
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    // 寻找下一个有子节点的节点
    function helper(node) {
        node = node.next;
        while (node) {
            if (node.left || node.right) return node;
            else node = node.next;
        }
        return null;
    }
    if (!root || (!root.left && !root.right)) return root;
    let start = root;
    while (start) {
        debugger;
        let node = start;
        while (node) {
            let nextNode = helper(node);
            if (node.left && node.right) {
                node.left.next = node.right;
            }
            if (node.left && !node.right && nextNode) {
                node.left.next = nextNode.left || nextNode.right;
            }
            if (node.right && nextNode) {
                node.right.next = nextNode.left || nextNode.right;
            }
            node = nextNode;
        }
        let nextStartFather = helper(start);
        start =
            start.left ||
            start.right ||
            nextStartFather?.left ||
            nextStartFather?.right;
    }
    return root;
};
