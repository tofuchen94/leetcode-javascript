/**
 * 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        let count = 0;
        nums.forEach((num) => {
            if ((num >> i) & (1 === 1)) {
                count++;
            }
        });
        if (count % 3 === 1) {
            res |= 1 << i;
        }
    }
    return res;
};

// 示例
// 3
console.log(singleNumber([2, 2, 3, 2]));
// 99
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
