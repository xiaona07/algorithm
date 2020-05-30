function copy(obj) {
  let newObj = {};
  if (obj instanceof Map) {
    //1、for of 遍历
    newObj = new Map()
    for (let [key, val] of obj) {
      let newKey = key, newVal = val
      if (typeof Key === "object" && key) {
        newKey = copy(key)
      }
      if (typeof val === "object" && val) {
        newVal = copy(val)
      }
      newObj.set(newKey, newVal)
    }
    //2、 forEach遍历
    // newObj = new Map()
    // obj.forEach((val, key) => {
    //   if (typeof Key === "object" && val) {
    //     var newKey = copy(key)
    //   } else {
    //     var newKey = key
    //   }
    //   if (typeof val === "object" && val) {
    //     newObj.set(newKey, copy(val))
    //   } else {
    //     newObj.set(newKey, val)
    //   }
    // }, obj)

    //3、通过转变为数组
    // let arr = Array.from(obj)
    // newObj = new Map(arr)

    //4、简单克隆
    // newObj = new Map(obj)
  } else if (obj instanceof Set) {
    //1、好方法
    const objArray = [...obj]
    let newObj1 = []
    usualTraverse(objArray, newObj1)
    newObj = new Set(newObj1)
  } else {
    if (obj instanceof Array) {
      newObj = []
    }
    usualTraverse(obj, newObj)
  }
  return newObj
}
function usualTraverse(obj, newObj) {
  for (const key in obj) {
    var val = obj[key]
    if (typeof val === "object" && val) {
      newObj[key] = copy(val)
    } else {
      newObj[key] = val
    }
  }
}
function testCopy() {
  let myMap = new Map();
  let girl = new Map();
  var ttt = new String("mygirl")
  girl.set(ttt, new String("1234"))
  let keyObj = "123";
  let valObj = {q: girl};
  let keyFunc = function () { console.log(11111) };
  myMap.set(keyObj, valObj)
  myMap.set(keyFunc, 'function')
  let myMapCopy = copy(myMap)
  ttt="123"
  myMap.set("test", 'test')
  girl.set("mygirl", "lily")
  console.log(myMap);
  console.log(myMapCopy);
  console.log(myMap === myMapCopy);

  let testMap = {a: 1}
  const mySet = new Set([testMap, "value2", "value3"]);
  const mySetCopy = copy(mySet)
  mySet.add({test: "test"});
  testMap.a = 2;
  console.log(mySet);
  console.log(mySetCopy);
  console.log(mySet === mySetCopy);

  var jsonObj = {
    "name": "david",
    "age": 12,
    "memeber": false,
    "hobby": null,
    "friends": [
      {
        "name": "lily",
        "age": 11
      },
      {
        "name": "lucy",
        "age": 15
      },
      {
        "name": "lilei",
        "age": 16
      }
    ] 
  }
  var arrayObj = [
    {
      "name": "lily",
      "age": 11
    },
    {
      "name": "lucy",
      "age": 15
    },
    {
      "name": "lilei",
      "age": 16
    }
  ]
  var jsonObjCopy = copy(jsonObj)
  jsonObj.age = 100
  console.log(jsonObj);
  console.log(jsonObjCopy);
  console.log(jsonObj === jsonObjCopy);

  var arrayObjCopy = copy(arrayObj)
  arrayObj[0].age = 100
  console.log(arrayObj);
  console.log(arrayObjCopy);
  console.log(arrayObj === arrayObjCopy);
}
testCopy()