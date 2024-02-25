/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let tmp = nums[i];
            nums[i] = nums[j];
            nums[j++] = tmp;
        }
    }
};

var moveZeroes3 = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j++] = nums[i];
        }
    }

    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }
};

var moveZeroes2 = function (nums) {
    function findNext(i, isZero) {
        for (let j = i; j < nums.length; j++) {
            if (!(isZero ^ (nums[j] === 0))) {
                return j;
            }
        }
        return nums.length;
    }

    function swap(i, j) {
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }

    let nextZero = findNext(0, true);
    let nextNotZero = findNext(nextZero, false);
    while (nextZero < nums.length && nextNotZero < nums.length) {
        // console.log(nextZero, nextNotZero);
        swap(nextZero, nextNotZero);
        nextZero = findNext(nextZero, true);
        nextNotZero = findNext(nextZero, false);
    }
};
let arr = [0, 1, 0, 3, 12];
// let arr= [0];
moveZeroes(arr);
console.log(arr);

