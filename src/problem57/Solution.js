/**
 * 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (intervals.length === 0) return [newInterval];
    let res = [];
    let index = 0;
    while (index < intervals.length && intervals[index][1] < newInterval[0]) {
        res.push(intervals[index]);
        index++;
    }
    while (index < intervals.length && intervals[index][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
        index++;
    }
    res.push(newInterval);
    while (index < intervals.length) {
        res.push(intervals[index]);
        index++;
    }
    return res;
};

/**
 * 示例
 */
//[[1,5],[6,9]]
let intervals = [
    [1, 3],
    [6, 9],
];
let newInterval = [2, 5];
console.log(insert(intervals, newInterval));

//[[1,2],[3,10],[12,16]]
let intervals1 = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
];
let newInterval1 = [4, 8];
console.log(insert(intervals1, newInterval1));

//[[5,7]]
let intervals2 = [];
let newInterval2 = [5, 7];
console.log(insert(intervals2, newInterval2));

//[[1,5]]
let intervals3 = [[1, 5]];
let newInterval3 = [2, 3];
console.log(insert(intervals3, newInterval3));

//[[1,7]]
let intervals4 = [[1, 5]];
let newInterval4 = [2, 7];
console.log(insert(intervals4, newInterval4));
