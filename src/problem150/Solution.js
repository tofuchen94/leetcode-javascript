/**
 * 根据 逆波兰表示法，求表达式的值。
 * 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 说明：
 *   整数除法只保留整数部分。
 *   给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    let a, b;
    tokens.forEach((token) => {
        switch (token) {
            case "+":
                a = stack.pop();
                b = stack.pop();
                stack.push(b + a);
                break;
            case "-":
                a = stack.pop();
                b = stack.pop();
                stack.push(b - a);
                break;
            case "*":
                a = stack.pop();
                b = stack.pop();
                stack.push(b * a);
                break;
            case "/":
                a = stack.pop();
                b = stack.pop();
                stack.push(parseInt(b / a));
                break;
            default:
                stack.push(parseInt(token));
                break;
        }
    });
    return stack.pop();
};

// 示例
// 9
console.log(evalRPN(["2", "1", "+", "3", "*"]));
// 6
console.log(evalRPN(["4", "13", "5", "/", "+"]));
// 22
console.log(
    evalRPN([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
    ])
);
// 1
console.log(evalRPN(["4", "3", "-"]));
