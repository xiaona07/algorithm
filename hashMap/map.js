function MyMap() {
    this.map = {};
}
MyMap.prototype = {
    put: function (key, value) {// 向Map中增加元素（key, value)
        this.map[key] = value;
    },
    get: function (key) { //获取指定Key的元素值Value，失败返回Null
        if (this.map.hasOwnProperty(key)) {
            return this.map[key];
        }
        return null;
    },
    remove: function (key) { // 删除指定Key的元素，成功返回True，失败返回False
        if (this.map.hasOwnProperty(key)) {
            return delete this.map[key];
        }
        return false;
    },
    removeAll: function () {  //清空HashMap所有元素
        this.map = {};
    },
    keySet: function () { //获取Map中所有KEY的数组（Array）
        let _keys = [];
        for (let i in this.map) {
            _keys.push(i);
        }
        return _keys;
    }
};
let map = new MyMap();
// let map = new Map();
function init() {
    let t1 = Date.now()
    for (let i = 0; i < 1000000000; i++) {
        map.put(i,i+1)
    }
    let t2 = Date.now()
    console.log(t2-t1)
}
function test() {
    let t1 = Date.now()
    for (let i = 0; i < 100000000; i++) {
        map.get(2)
    }
    let t2 = Date.now()
    console.log(t2-t1)
}

init()
test()


