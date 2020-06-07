function sortTest(arr, sortFun){
    let start = Date.now();
    let result=sortFun(arr);
    // console.log(result)
    let end = Date.now();
    console.log(end - start);
}

function randomArray(length, min, max) {
    let arr = new Array(length);
    for (let i = 0; i < length; i++) {
        arr[i] = parseInt((max - min) * Math.random() + min);
    }
    return arr;
}
let scale = Math.pow(10,8)
let d = randomArray(scale,0,scale)
sortTest(d,heapSort)
