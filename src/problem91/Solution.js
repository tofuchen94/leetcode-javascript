/**
 * 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：
 * "AAJF" ，将消息分组为 (1 1 10 6)
 * "KJF" ，将消息分组为 (11 10 6)
 * 注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。
 * 给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。
 * 题目数据保证答案肯定是一个 32 位 的整数。
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s.length === 0 || s.charAt(0) === "0") return 0;
    const helper = new Array(s.length + 1).fill(0);
    helper[0] = 1;
    helper[1] = 1;
    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i) === "0" && s.charAt(i - 1) === "0") {
            helper[i + 1] = 0;
        } else if (s.charAt(i - 1) === "0") {
            helper[i + 1] = helper[i];
        } else if (s.charAt(i) === "0") {
            if (s.charAt(i - 1) === "1" || s.charAt(i - 1) === "2") {
                helper[i + 1] = helper[i - 1];
            } else {
                helper[i + 1] = 0;
            }
        } else {
            helper[i + 1] = helper[i];
            if (Number.parseInt(s.slice(i - 1, i + 1)) <= 26) {
                helper[i + 1] += helper[i - 1];
            }
        }
    }
    return helper[s.length];
};

// 示例
// 2
console.log(numDecodings("12"));
// 3
console.log(numDecodings("226"));
// 0
console.log(numDecodings("0"));
// 0
console.log(numDecodings("06"));
