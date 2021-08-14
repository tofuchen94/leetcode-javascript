/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let res = new Array(n);
    res = res.fill(0).map((item) => {
        return new Array(n);
    });
    let time = Math.floor((n + 1) / 2);
    let num = 1;
    for (let i = 0; i < time; i++) {
        for (let col = i; col < n - i; col++) {
            res[i][col] = num++;
        }
        for (let row = i + 1; row < n - i; row++) {
            res[row][n - 1 - i] = num++;
        }
        for (let col = n - 2 - i; col > i - 1; col--) {
            res[n - 1 - i][col] = num++;
        }
        for (let row = n - 2 - i; row > i; row--) {
            res[row][i] = num++;
        }
    }
    return res;
};

/**
 * 示例
 */
//[[1,2,3],[8,9,4],[7,6,5]]
console.log(generateMatrix(3));

//[[1]]
console.log(generateMatrix(1));
