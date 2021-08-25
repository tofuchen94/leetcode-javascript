/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 2) return nums.length;
    let slow = 2;
    let fast = 2;
    while (fast < nums.length) {
        if (nums[slow - 2] !== nums[fast]) {
            nums[slow++] = nums[fast++];
        } else {
            fast++;
        }
    }
    return slow;
};

// 示例
// 5, nums = [1,1,2,2,3]
let nums1 = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums1));
console.log(nums1);
// 7, nums = [0,0,1,1,2,3,3]
let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums2));
console.log(nums2);
