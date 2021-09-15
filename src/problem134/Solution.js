/**
 * 在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
 * 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
 * 如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。
 * 说明:
 * 如果题目有解，该答案即为唯一答案。
 * 输入数组均为非空数组，且长度相同。
 * 输入数组中的元素均为非负数。
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let length = gas.length;
    for (let i = 0; i < length; ) {
        let sumg = 0;
        let sumc = 0;
        let j = 0;
        while (j < length) {
            let index = (i + j) % length;
            sumg += gas[index];
            sumc += cost[index];
            if (sumg < sumc) {
                break;
            }
            j++;
        }
        if (j === length) {
            return i;
        } else {
            i = i + j + 1;
        }
    }
    return -1;
};

// 示例
// 3
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
// -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
