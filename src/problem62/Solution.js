/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let helper = new Array(m).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < m; j++) {
            helper[j] += j > 0 ? helper[j - 1] : 0;
        }
    }
    return helper[m - 1];
};

// 示例
// 28
console.log(uniquePaths(3, 7));

// 3
console.log(uniquePaths(3, 2));
