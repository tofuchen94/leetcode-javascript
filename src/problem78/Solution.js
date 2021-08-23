/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let max = Math.pow(2, nums.length);
    let res = [];
    for (let i = 0; i < max; i++) {
        let arr = [];
        for (let j = 0; j < nums.length; j++) {
            if ((i >> j) & (1 === 1)) {
                arr.push(nums[j]);
            }
        }
        res.push(arr);
    }
    return res;
};

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
