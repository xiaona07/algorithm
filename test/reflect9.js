function copy(obj) {
  if (base(obj)) {
    return obj
  }
  let newObj = {}
  if (obj instanceof Map) {
    newObj = new Map()
    for (let [key, val] of obj) {
      let newKey = key, newVal = val
      // if (flag(key)) {
      if (flag(key)) {
      // if (typeof Key === "object" && key) {
        newKey = copy(key)
      }
      if (flag(val)) {
        newVal = copy(val)
      }
      newObj.set(newKey, newVal)
    }
  } else if (obj instanceof Set) {
    //1、set与数组转换遍历
    // const objArray = [...obj]
    // let newObj1 = []
    // usualTraverse(objArray, newObj1)
    // newObj = new Set(newObj1)

    //2、set遍历
    newObj = new Set()
    for (let val of obj) {
      let newVal = val
      if (flag(val)) {
        newVal = copy(val)
      }
      newObj.add(newVal)
    }
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
    if (flag(val)) {
      newObj[key] = copy(val)
    } else {
      newObj[key] = val
    }
  }
}
function base(obj) {
  return typeof obj === "number" || obj instanceof Number || typeof obj === "string" || obj instanceof String || typeof obj === "boolean" || obj instanceof Boolean || typeof obj === "symbol" || typeof obj === "undefined" || !obj
}
// function flag2(obj) {
//   return (typeof obj === "object" || typeof obj === "function" ) && obj && !(obj instanceof Number) && !(obj instanceof String) && !(obj instanceof Boolean)
// }
function flag(obj) {
  return (typeof obj === "object" && obj) && !(obj instanceof Number) && !(obj instanceof String) && !(obj instanceof Boolean)
}



function reflectCopy(obj) {
  if (base(obj)) {
      return obj
  }
  let newObj = Array.isArray(obj) ? [...obj] : { ...obj }
  Reflect.ownKeys(newObj).forEach(key => {
      newObj[key] = flag(obj[key]) ? reflectCopy(obj[key]) : obj[key]
  })
  return newObj
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

  let stringObj = {a:new String("123")}
  let stringObjCopy = copy(stringObj)
  console.log(stringObj)
  console.log(stringObjCopy)

  let num = 1
  let numCopy = copy(num)
  console.log(num)
  console.log(numCopy)
}
function testRefCopy() {
  let myMap = new Map();
  let girl = new Map();
  var ttt = new String("mygirl")
  girl.set(ttt, new String("1234"))
  let keyObj = "123";
  let valObj = {q: girl};
  let keyFunc = function () { console.log(11111) };
  myMap.set(keyObj, valObj)
  myMap.set(keyFunc, 'function')
  let myMapCopy = reflectCopy(myMap)
  myMap.set("test", 'test')
  girl.set("mygirl", "lily")
  console.log(myMap);
  console.log(myMapCopy);
  console.log(myMap === myMapCopy);

  let testMap = {a: 1}
  const mySet = new Set([testMap, "value2", "value3"]);
  const mySetCopy = reflectCopy(mySet)
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
  var jsonObjCopy = reflectCopy(jsonObj)
  jsonObj.age = 100
  console.log(jsonObj);
  console.log(jsonObjCopy);
  console.log(jsonObj === jsonObjCopy);

  var arrayObjCopy = reflectCopy(arrayObj)
  arrayObj[0].age = 100
  console.log(arrayObj);
  console.log(arrayObjCopy);
  console.log(arrayObj === arrayObjCopy);

  let stringObj = {a:new String("123")}
  let stringObjCopy = reflectCopy(stringObj)
  console.log(stringObj)
  console.log(stringObjCopy)

  let num = 1
  let numCopy = reflectCopy(num)
  console.log(num)
  console.log(numCopy)
}

// testCopy()
testRefCopy()