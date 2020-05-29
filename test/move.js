function shift(arr){
  let t=arr[0]
  for(let i=0;i<arr.length-1;i++){
    arr[i]=arr[i+1]
  }
  arr[arr.length-1]=t
  // console.log(arr)
}

function move(arr,n){
  while(n>1){
    shift(arr)
    n--
  }
}

function test(){
  let arr = [1,2,3,4,5,6,7]
  // console.log(arr)
  shift(arr)
  move(arr,3)
  console.log(arr)
}
test()


function randomArray(length, min, max) {
  let start = Date.now()
  var arr = new Array(length)
  for (var i = 0; i < length; i++) {
    arr[i] = parseInt((max - min) * Math.random() + min)
  }
  let end = Date.now()
  // console.log(end - start);
  return arr
}