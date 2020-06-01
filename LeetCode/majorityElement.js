/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
        let len = nums.length / 2
        let map = new Map()
        for (let val of nums) {
            if (map.get(val)) {
                map.set(val, map.get(val) + 1)
            }else {
                map.set(val, 1)
            }
            if(map.get(val) > len){
                return val
            }
        }
        return null
    };

var majorityElement = function(nums) {
    let res =0,votes = 0
    for (let num of nums) {
        if (votes === 0) res = num
        votes += (num === res ? 1 : -1);
    }
    return res
};

console.log(majorityElement([1,2,3,2,2,2,5,4,2]))
