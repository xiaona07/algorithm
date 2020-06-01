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