/**
 * 给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。
 */
// Definition for a Node.
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return node;
    const clonedMap = new Map();
    function helper(node) {
        if (clonedMap.has(node)) {
            return clonedMap.get(node);
        }
        const clonedNode = new Node(node.val);
        clonedMap.set(node, clonedNode);
        clonedNode.neighbors = node.neighbors.map((neighbor) =>
            helper(neighbor)
        );
        return clonedNode;
    }
    return helper(node);
};
