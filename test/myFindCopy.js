function myFind(str,rule) {
  if(!rule){
    return 0
  }
  let matchLen=-1;

  //贪婪匹配
  // if(rule[0]==="*"){
  //   matchLen=myFind(str,rule.substring(1))
  //   if(str){
  //     let subMatchLen=myFind(str.substring(1),rule)
  //     if(subMatchLen>=0 && ++subMatchLen>matchLen){
  //       matchLen=subMatchLen
  //     }
  //   }
  // }
  
  //非贪婪匹配
  if(rule[0]==="*"){
    matchLen=myFind(str,rule.substring(1))
    if(str && matchLen < 0){
      let subMatchLen=myFind(str.substring(1),rule)
      if(subMatchLen>=0){
        matchLen=subMatchLen + 1
      }
    }
  }

  if(!str){
    return matchLen
  }
  if(rule[0]==="?"|| rule[0]===str[0]){
    let subMatchLen=myFind(str.substring(1),rule.substring(1))
    // if(subMatchLen>=0 && ++subMatchLen>matchLen){
    if(subMatchLen>=0){
      matchLen=subMatchLen + 1;
    }
  }
return matchLen
}

console.log(myFind("fashghdssssd","f*d"))
//贪婪的时候输出12，非贪婪的时候输出7

