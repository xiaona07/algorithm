/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray1 = function (numbers) {
    let index = Math.floor(numbers.length / 2)
    let last = numbers[numbers.length - 1]
    while (true) {
        if (index === 0) {
            return numbers[0]
        }
        // if (index === numbers.length - 1) {
        //     return last
        // }
        if (numbers[index] > last) {
            index++
        } else if (numbers[index] < last){
            if (numbers[index - 1] > numbers[index]) {
                return numbers[index]
            }
            // else if (numbers[index - 1] <= last) {
            //     index --
            // }
            index--
        } else {
            index++
        }
    }

};
var minArray2 = function (numbers) {
    let i = 0, j = numbers.length - 1, m
    while(j > i + 1){
        m = Math.floor((i + j) / 2)
        if (numbers[m] < numbers[j]) {
            j = m
        } else if (numbers[m] > numbers[j]){
            i = m
        } else {
            --j
        }
    }
    // let i = 0, j = numbers.length -1
    // for (let m = 0; j > i + 1; ) {
    //     m = Math.floor((i + j) / 2)
    //     if (numbers[m] < numbers[j]) {
    //         j = m
    //     } else if (numbers[m] > numbers[j]){
    //         i = m
    //     } else {
    //         --j
    //     }
    // }
    return numbers[i] <= numbers[i + 1] ? numbers[i] : numbers[i + 1]
};
let arr1 = [3, 4, 5, 1, 2]
let arr2 = [2, 2, 2, 0, 1]
let arr3 = [1, 3]
let arr4 = [10,10,10,1,10]
console.log(minArray2(arr3))