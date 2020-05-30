function bubleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      var a = arr[i];
      if (arr[i] > arr[j]) {
        arr[i] = arr[j];
        arr[j] = a;
      }
    }
  }
  let end = Date.now();
  return arr
}
var quickSort = function(arr) {
  　　if (arr.length <= 1) {//如果数组长度小于等于1无需判断直接返回即可 
          return arr;
      }
  　　var pivotIndex = Math.floor(arr.length / 2);//取基准点 
  　　var pivot = arr.splice(pivotIndex, 1)[0];//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数
  　　var left = [];//存放比基准点小的数组
  　　var right = [];//存放比基准点大的数组 
  　　for (var i = 0; i < arr.length; i++){ //遍历数组，进行判断分配 
  　　　　if (arr[i] < pivot) {
  　　　　　　left.push(arr[i]);//比基准点小的放在左边数组 
  　　　　} else {
  　　　　　　right.push(arr[i]);//比基准点大的放在右边数组 
  　　　　}
  　　}
           //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1； 
  　　return quickSort(left).concat([pivot], quickSort(right));
  }

  function sortTest(arr, sortFun){
    let start = Date.now();
    let result=sortFun(arr);
    let end = Date.now();
    console.log(end - start);
    // console.log(result);
  }

function randomArray(length, min, max) {
  let start = Date.now();
  var arr = new Array(length);
  for (var i = 0; i < length; i++) {
    arr[i] = parseInt((max - min) * Math.random() + min);
  }
  let end = Date.now();
  // console.log(end - start);
  return arr;
}

let scale = 50000;
let arr = randomArray(scale,0,scale);
sortTest(arr,quickSort);
sortTest(arr,bubleSort);

