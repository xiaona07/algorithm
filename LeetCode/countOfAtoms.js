var countOfAtoms = function (formula) {
  if (!formula.length) return {};
  let atomNum = {};

  function atom(str, mutiple1) {
    let mutiple = mutiple1 ? mutiple1 : 1;
    if (!str.length) return;
    let idx = str.indexOf("(");
    if (idx === -1) {
      find(str, mutiple);
      return
    }

    let first = [];
    let last = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        first.push(i);
      } else if (str[i] === ")") {
        last.push(i);
      }
    }
    find(str.slice(0, first[0]), mutiple); // care
    let countIdx1 = count(str, last[last.length - 1]);
    find(str.slice(countIdx1 + 1), mutiple);

    let index = search(first, last);
    let countIdx2 = count(str, index);
    let nowMut = "";
    if (str.slice(index + 1, countIdx2 + 1)){
      nowMut = str.slice(index + 1, countIdx2 + 1);
    }
    if (nowMut){
      atom(str.slice(first[0] + 1, index), Number(nowMut) * mutiple)
      atom(str.slice(countIdx2 + 1, countIdx1 + 1), mutiple)
    }else{
      atom(str.slice(first[0] + 1, index), mutiple)
      atom(str.slice(countIdx2 + 1, countIdx1 + 1), mutiple)
    }
  }
  function count(str, idx) {
    let doIdx = idx;
    for(let i = idx + 1; i < str.length; i++){
      if(!isNum(str[i])){
        break
      }else{
        doIdx = i;
      }
    }
    return doIdx;
  }
  function search(first, last) {
    let rang = first.length
    for (let i = 0; i < last.length; i++) {
      for (let j = 0; j < rang; j++) {
        console.log(first)
        console.log(last)
    
        if (first[j] < last[i]) {
          if ((!first[j + 1]) || (first[j + 1] > last[i])){
            if (j === 0) {
              console.log(last[i]);
              return last[i];
            } else {
              first.splice(j, 1)
            }
          }
        }
      }
    }
  }
  function find(str, mutiple) {
    let atomStr;
    let numStr = "";
    for (let i = 0; i < str.length; i++) {
      if (isUpper(str[i])) {
        if (atomStr && atomStr.length) {
          if (numStr && numStr.length) {
            addAtom(atomStr, Number(numStr) * mutiple)
            atomStr = "";
            numStr = "";
          }else{
            addAtom(atomStr, mutiple)
            atomStr = "";
            numStr = "";
          }

        }
        atomStr = str[i];
        if (i === str.length - 1){
          addAtom(atomStr, mutiple)
          atomStr = "";
          numStr = "";
        }
      } else if (isLower(str[i])) {
        atomStr += str[i];
        if (i === str.length - 1){
          addAtom(atomStr, mutiple);
          atomStr = "";
          numStr = "";
        }
      } else if (isNum(str[i])) {
        numStr = numStr + str[i];
        if (i === str.length - 1) {
          addAtom(atomStr, Number(numStr) * mutiple);
          atomStr = "";
          numStr = "";
        }
      }
    }
  }
  function isNum(code) {
    if(!code || !code.length) return false;
    if (code.charCodeAt(0) >= 48 && code.charCodeAt(0) <= 57) {
      return true
    }
    return false
  }
  function isUpper(code) {
    if(!code.length) return false;
    if (code.charCodeAt(0) >= 65 && code.charCodeAt(0) <= 90) {
      return true
    }
    return false
  }
  function isLower(code) {
    if(!code.length) return false;
    if (code.charCodeAt(0) >= 97 && code.charCodeAt(0) <= 122) {
      return true
    }
    return false
  }
  function addAtom(name, num) {
    if (atomNum[name]){
      atomNum[name] += num;
    } else {
      atomNum[name] = num;
    }
  }

  atom(formula, 1);
  let arr = [];
  for (var i in atomNum){
    arr.push(i)
  }
  arr.sort();
  let result = ""
  arr.forEach((val) => {
    result += val;
    if (atomNum[val] !== 1) {
      result += atomNum[val];
    }
  })
  return result;
}

let str1 = "H2O";
let str2 = "Mg(OH)2";
let str3 = "K4(ON(SO3)2)2";
let str4 = "Mg(OH)2";
let str5 = "Be32";
let str6 = "((Be32)2O)2(H)2";
let str7 = "H11He49NO35B7N46Li20";
let str8 = "((N42)24(OB40Li30CHe3O48LiNN26)33(C12Li48N30H13HBe31)21(BHN30Li26BCBe47N40)15(H5)16)14";
console.log(countOfAtoms(str8));

// 输入：
// "((N42)24(OB40Li30CHe3O48LiNN26)33(C12Li48N30H13HBe31)21(BHN30Li26BCBe47N40)15(H5)16)14"
// 输出：
// "B1350Be1356C300H389He99Li2421N35835O1617undefined14"
// 预期结果：
// "B18900Be18984C4200H5446He1386Li33894N50106O22638"
