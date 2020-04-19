/**
 * 动态规划匹配
 * @param str 字符串
 * @param rule 规则 * ?
 * @returns {string} 匹配到的字符串部分
 */
function myFindDynamic(str, rule) {
    let strLen = str.length;
    let ruleLen = rule.length;
    let dp = [];
    for (let i = 0; i <= strLen; i++) {
        dp[i] = [];
    }
    dp[0][0] = 0;
    for (let i = 1; i <= ruleLen; i++) {
        dp[0][i] = -1;
    }
    for (let i = 1; i <= strLen; i++) {
        dp[i][0] = 0;
    }
    for (let i = 1; i <= strLen; i++) {
        for (let j = 1; j <= ruleLen; j++) {
            if (rule.charAt(j - 1) === '*') {
                dp[i][j] = -1;
                if (dp[i - 1][j - 1] !== -1) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                }
                if (dp[i - 1][j] !== -1 && dp[i][j] < dp[i - 1][j] + 1) {
                    // if (dp[i - 1][j] !== -1 ) {
                    dp[i][j] = dp[i - 1][j] + 1;
                }
            } else if (rule.charAt(j - 1) === '?') {
                if (dp[i - 1][j - 1] !== -1) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = -1;
                }
            } else {
                if (dp[i - 1][j - 1] !== -1 && str.charAt(i - 1) === rule.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = -1;
                }
            }
        }
    }
    let maxLen = -1;//记录最大字符串长度
    let ans = [];
    let answerCount = 0;//记录答案个数
    let matchResult = "";
    for (let i = 1; i <= strLen; i++) {
        if (dp[i][ruleLen] > maxLen) {
            maxLen = dp[i][ruleLen];
            answerCount = 0;
            ans[answerCount++] = i - maxLen;
        } else if (dp[i][ruleLen] !== -1 && dp[i][ruleLen] === maxLen) {
            ans[answerCount++] = i - maxLen;
        }
    }
    if (answerCount !== 0) {
        matchResult += str.substring(ans[0], maxLen + ans[0]) + " ";
        for (let j = 1; j < answerCount; j++) {
            matchResult += str.substring(ans[j], maxLen + ans[j]) + " ";
        }
    }
    return matchResult;
}

console.log(myFindDynamic("fadssta", "f?d*t"));
// function testFind(fun, n) {
// 	let start = Date.now();
// 	for (var i = 0; i < n; i++) {
// 		fun("sasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaasasgfgnewsdghsfhnewsdggaa","a*n?w")
// 	}
// 	let end = Date.now();
// 	console.log(end - start);
// }
// testFind(myFindDynamic, 100000)