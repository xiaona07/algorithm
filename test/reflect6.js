function copy(obj) {
  if (simpleType(obj)) {
    return obj
  }
  let newObj;
  if (obj instanceof Map) {
    newObj = new Map()
    for (let [key, val] of obj) {
      newObj.set(copy(key), copy(val))
    }
    return newObj
  }
  if (obj instanceof Set) {
    newObj = new Set()
    obj.forEach(item => {
      newObj.add(copy(item))
    })
    return newObj
  }
  if (obj instanceof Array) {
    newObj = []
  } else {
    newObj = {}
  }
  for (const key in obj) {
    newObj[key] = copy(obj[key])
  }
  return newObj
}

function simpleType(obj) {
  let result = (obj === null || obj === undefined || obj === NaN || obj instanceof Number || obj instanceof String || obj instanceof Boolean || obj instanceof Symbol || typeof obj === "number" || typeof obj === "string" || typeof obj === "boolean" || typeof obj === "symbol" || obj instanceof Function)
  return result
}

function testCopy() {
  let obj = {a:new String("123")}
  let copyObj = copy(obj)
  console.log(obj)
  console.log(copyObj)
}
testCopy()