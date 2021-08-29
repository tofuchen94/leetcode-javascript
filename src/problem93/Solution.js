/**
 * 给定一个只包含数字的字符串，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
 * 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const res = [];
    const ip = [];
    const helper = (index) => {
        if (ip.length === 4 && index === s.length) {
            res.push(ip.join("."));
            return;
        } else if (ip.length === 4 || index === s.length) {
            return;
        }
        if (s[index] === "0") {
            ip.push("0");
            helper(index + 1);
            ip.pop();
        } else {
            for (let i = index; i < s.length; i++) {
                if (Number.parseInt(s.slice(index, i + 1)) > 255) {
                    break;
                }
                ip.push(s.slice(index, i + 1));
                helper(i + 1);
                ip.pop();
            }
        }
    };
    helper(0);
    return res;
};

// 示例
// ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses("25525511135"));
// ["0.0.0.0"]
console.log(restoreIpAddresses("0000"));
// ["1.1.1.1"]
console.log(restoreIpAddresses("1111"));
// ["0.10.0.10","0.100.1.0"]
console.log(restoreIpAddresses("010010"));
// ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
console.log(restoreIpAddresses("101023"));
