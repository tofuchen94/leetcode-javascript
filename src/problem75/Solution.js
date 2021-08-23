/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    nums.sort();
};

//[0,0,1,1,2,2]
let nums1 = [2, 0, 2, 1, 1, 0];
sortColors(nums1);
console.log(nums1);
//[0,1,2]
let nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2);
//[0]
let nums3 = [0];
sortColors(nums3);
console.log(nums3);
//[1]
let nums4 = [1];
sortColors(nums4);
console.log(nums4);
