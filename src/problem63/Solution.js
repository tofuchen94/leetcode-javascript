/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let helper = new Array(obstacleGrid[0].length).fill(0);
    helper[0] = 1;
    for (let i = 0; i < obstacleGrid.length; i++) {
        if (obstacleGrid[i][0]) helper[0] = 0;
        for (let j = 1; j < obstacleGrid[0].length; j++) {
            if (obstacleGrid[i][j]) helper[j] = 0;
            else helper[j] += helper[j - 1];
        }
    }
    return helper[helper.length - 1];
};
