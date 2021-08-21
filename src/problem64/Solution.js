/**
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let helper = new Array(grid[0].length).fill(Number.MAX_VALUE);
    helper[0] = 0;
    for (let i = 0; i < grid.length; i++) {
        helper[0] += grid[i][0];
        for (let j = 1; j < grid[0].length; j++) {
            helper[j] = Math.min(helper[j], helper[j - 1]) + grid[i][j];
        }
    }
    return helper[helper.length - 1];
};
