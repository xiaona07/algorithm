function myFind(str,rule) {
  if(!rule){
    return 0
  }
  let matchLen=-1;
  //贪婪匹配
  if(rule[0]==="*"){
    matchLen=myFind(str,rule.substring(1))
    if(str){
      let subMatchLen=myFind(str.substring(1),rule)
      if(subMatchLen>=0 && ++subMatchLen>matchLen){
        matchLen=subMatchLen
      }
    }
  }
  
  //非贪婪匹配
  // if(rule[0]==="*"){
  //   matchLen=myFind(str,rule.substring(1))
  //   if(str && matchLen < 0){
  //     let subMatchLen=myFind(str.substring(1),rule)
  //     if(subMatchLen>=0){
  //       matchLen=subMatchLen + 1
  //     }
  //   }
  // }
  if(!str){
    return matchLen
  }
  if(rule[0]==="?"|| rule[0]===str[0]){
    let subMatchLen=myFind(str.substring(1),rule.substring(1))
    // if(subMatchLen>=0 && ++subMatchLen>matchLen){
    if(subMatchLen>=0){
      // matchLen=subMatchLen
      matchLen=subMatchLen + 1;
    }
  }
return matchLen
}

function myRegExp(str,rule){
  let output = "";
  for (var i = 0; i < str.length; i++) {
    let subStr = str.substring(i);
    let matchLen = myFind(subStr, rule);
    if (matchLen > -1) {
      // console.log(subStr.substring(0,matchLen));
      output += subStr.substring(0,matchLen) + " ";
    }
  }
  return output
}
// console.log(myRegExp("asgfgnewsdghsfhnewsdggaa","a*n?w"))
// console.log(myFind("fad","f*d"))
function testFind(fun, n) {
	let start = Date.now();
	for (var i = 0; i < n; i++) {
		fun("sasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaa","a*n?w")
	}
	let end = Date.now();
	console.log(end - start);
}
testFind(myRegExp, 100000)
