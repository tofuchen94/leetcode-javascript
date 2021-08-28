/**
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((n1, n2) => n1 - n2);
    const visited = new Array(nums.length).fill(0).map((item) => false);
    const arr = [];
    const res = [];
    const helper = (i) => {
        if (i === nums.length) {
            res.push([...arr]);
            return;
        }
        helper(i + 1);
        if (i === 0 || nums[i] !== nums[i - 1] || visited[i - 1]) {
            visited[i] = true;
            arr.push(nums[i]);
            helper(i + 1);
            arr.pop();
            visited[i] = false;
        }
    };
    helper(0);
    return res;
};
//示例
//[[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([1, 2, 2]));
//[0]
console.log(subsetsWithDup([0]));
