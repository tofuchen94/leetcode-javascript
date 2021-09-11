/**
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
 * 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let sum = [0];
    triangle.forEach((nums) => {
        let sum2 = [];
        nums.forEach((num, index) => {
            if (index === 0) {
                sum2.push(num + sum[0]);
            } else if (index === nums.length - 1) {
                sum2.push(num + sum[index - 1]);
            } else {
                sum2.push(num + Math.min(sum[index - 1], sum[index]));
            }
        });
        sum = sum2;
    });
    return Math.min(...sum);
};

// 示例
// 11
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
// -10
console.log(minimumTotal([[-10]]));
