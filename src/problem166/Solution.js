/**
 * 给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以 字符串形式返回小数 。
 * 如果小数部分为循环小数，则将循环的部分括在括号内。
 * 如果存在多个答案，只需返回 任意一个 。
 * 对于所有给定的输入，保证 答案字符串的长度小于 104 。
 */

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    if (numerator % denominator === 0) return numerator / denominator + "";
    let negative = numerator / denominator < 0;
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    let remainder = numerator % denominator;
    let map = new Map();
    let res = [Math.floor(numerator / denominator), "."];
    if (negative) res.unshift("-");
    while (remainder !== 0) {
        map.set(remainder, res.length);
        remainder *= 10;
        res.push(Math.floor(remainder / denominator));
        remainder %= denominator;
        if (map.has(remainder)) {
            res.splice(map.get(remainder), 0, "(");
            res.push(")");
            remainder = 0;
        }
    }
    return res.join("");
};

// 示例
// 0.5
console.log(fractionToDecimal(1, 2));
// 2
console.log(fractionToDecimal(2, 1));
// 0.(6)
console.log(fractionToDecimal(2, 3));
// 0.(012)
console.log(fractionToDecimal(4, 333));
// "-6.25"
console.log(fractionToDecimal(-50, 8));
