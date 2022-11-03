// https://leetcode.com/problems/two-sum/

const twoSums = (nums, target) => {};

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given nums = [2, 11, 7, 15], target = 9,
// Because nums[0] + nums[2] = 2 + 7 = 9
// return [0, 2].

function twoSums(nums, target) {
    let idx1 = 0;
    let idx2 = 1;
    const output = []; // 0(n2)
    while (idx1 !== nums.length) {
        if (nums[idx1] + nums[idx2] === target) {
            output.push(idx1);
            output.push(idx2);
            return output;
        } else if (idx2 === nums.length) {
            idx1++;            // by only incrementing idx1 under select conditions, our
            idx2 = idx1 + 1;   // while loop is actually running quite a bit slower than
        } else {               // a single for loop.
            idx2++;
        }
    }
}

function twoSumBetter(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        let missingNumber = target - nums[i];
        if (map.hasOwnProperty(missingNumber)) { // hasOwnProperty runs at 0(1)
            return [map[missingNumber], i];
        }
        map[missingNumber] = i;
    }
    return [];
}