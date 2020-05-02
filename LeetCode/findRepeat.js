/**
 * @param {number[]} nums
 * @return {number}
 */
// var findRepeatNumber = function(nums) {
    // let arr = new Array(nums.length)
    // for (const idx in nums){
    //     if (arr[nums[idx]] === 0 || arr[nums[idx]]) {
    //         return  nums[idx]
    //     } else {
    //         arr[nums[idx]] = nums[idx]
    //     }
    // }
//     let len = nums.length
//     let arr = new Array(len)
//     for (let i = 0; i < len; i++) {
//         if (arr[nums[i]]) {
//             return  nums[i]
//         }
//         arr[nums[i]] = true
//     }
// };
// var findRepeatNumber2 = function(nums) {
//     let len = nums.length
//     let myMap  = new Map()
//     for (let i = 0; i < len; i++) {
//         if(myMap.get(nums[i])) {
//             return  nums[i]
//         }
//         myMap.set(nums[i], 1)
//     }
//
//     let len = nums.length;
//     let hash = new Map()
//     for(let i=0;i<len;i++){
//         if(hash.has(nums[i]))
//             return nums[i]
//         hash.set(nums[i],true)
//     }
//
// };
var findRepeatNumber3 = function(nums) {
    // let a
    // for (let i = 0; i < nums.length; i++) {
    //     if(nums[i] !== i) {
    //         a = nums[nums[i]]
    //         if(a === nums[i]) {
    //             return a
    //         }
    //         nums[nums[i]] = nums[i]
    //         nums[i] = a
    //     }
    // }
    for (let i = 0; i < nums.length; i++) {
        let a
        if(nums[i] !== i) {
            a = nums[nums[i]]
            if(a === nums[i]) {
                return a
            } else if (a === i) {
                nums[nums[i]] = nums[i]
                nums[i] = a
            } else {
                nums[nums[i]] = nums[i]

            }
        }
    }
};
function fun(nums, b) {
    let a
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== i) {
            a = nums[nums[i]]
            if(a === nums[i]) {
                return a
            }
            if (a === i) {
                nums[nums[i]] = nums[i]
                nums[i] = a
            } else {
                nums[nums[i]] = nums[i]
                nums[i] = a
                --i
            }
        }
    }
    // for (let i = b || 0; i < nums.length; i++) {
    //     if(nums[i] !== i) {
    //         a = nums[nums[i]]
    //         if(a === nums[i]) {
    //             return a
    //         } else if (a === i) {
    //             nums[nums[i]] = nums[i]
    //
    //         } else {
    //             nums[nums[i]] = nums[i]
    //             nums[i] = a
    //             let c = fun(nums, i)
    //             if ( c === 0 || c ) {
    //                 return c
    //             }
    //         }
    //     }
    // }
}
let nums = [0,1,3,4,4,5]
// console.log(findRepeatNumber(nums))
// console.log(findRepeatNumber2(nums))
// console.log(findRepeatNumber3(nums))
console.log(fun(nums))
