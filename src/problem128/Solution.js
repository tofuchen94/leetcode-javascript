/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;
    const set = new Set();
    nums.forEach((num) => set.add(num));
    let res = 1;
    nums.forEach((num) => {
        if (!set.has(num - 1)) {
            let l = 1;
            while (set.has(num + l - 1)) l++;
            res = Math.max(res, l - 1);
        }
    });
    return res;
};

// 示例
// 4
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// 9
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
