var obj  = {};
var demo = document.querySelector('#demo')
var inp = document.querySelector('#inp')
Object.defineProperty(obj, 'name', {
    get: function() {
        return val;
    },
    set: function (newVal) {//当该属性被赋值的时候触发
        inp.value = newVal;
        demo.innerHTML = newVal;
    }
})
inp.addEventListener('input', function(e) {
    // 给obj的name属性赋值，进而触发该属性的set方法
    obj.name = e.target.value;
});
obj.name = 'fei';//在给obj设置name属性的时候，触发了set这个方法