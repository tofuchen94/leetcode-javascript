/**
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let visited = new Array(board.length)
        .fill(0)
        .map((item) => new Array(board[0].length).fill(false));
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            visited[row][col] = true;
            if (helper(board, word, 0, row, col, visited)) return true;
            visited[row][col] = false;
        }
    }
    return false;
};

var helper = function (board, word, index, row, col, visited) {
    if (index === word.length - 1 && board[row][col] === word[index])
        return true;
    if (board[row][col] !== word[index]) return false;
    // 上
    if (row - 1 > -1 && !visited[row - 1][col]) {
        visited[row - 1][col] = true;
        if (helper(board, word, index + 1, row - 1, col, visited)) return true;
        visited[row - 1][col] = false;
    }
    // 右
    if (col + 1 < board[0].length && !visited[row][col + 1]) {
        visited[row][col + 1] = true;
        if (helper(board, word, index + 1, row, col + 1, visited)) return true;
        visited[row][col + 1] = false;
    }
    // 下
    if (row + 1 < board.length && !visited[row + 1][col]) {
        visited[row + 1][col] = true;
        if (helper(board, word, index + 1, row + 1, col, visited)) return true;
        visited[row + 1][col] = false;
    }
    // 左
    if (col - 1 > -1 && !visited[row][col - 1]) {
        visited[row][col - 1] = true;
        if (helper(board, word, index + 1, row, col - 1, visited)) return true;
        visited[row][col - 1] = false;
    }
    return false;
};

// 示例
// true
console.log(
    exist(
        [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ],
        "ABCCED"
    )
);
// true
console.log(
    exist(
        [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ],
        "SEE"
    )
);
// false
console.log(
    exist(
        [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
        ],
        "ABCB"
    )
);
