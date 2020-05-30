function find(str, rule) {
  for (var i = 0; i < rule.length; i++) {
    var flag = 0;
    var num = 0;
    if (rule[i] !== "*" && rule[i] !== "?") {
      var a = rule[i];
      var b = [];
      var c = i;
      for (var j = 0; j < str.length; j++) {
        if (str[j] === a) {
          b.push(j);
        }
      }
      break
    } else if(rule[i] !== "*") {
      num = 10000;
    } else {
      flag ++;
      num ++;
    }
  }
  if (b.length === 0) {
    return "未发现匹配字符"
  }
  var d = [];
  for (var i = 0; i < b.length; i++){
    if ( b[i] >= flag) {
      d.push(b[i])
    }
  }
}