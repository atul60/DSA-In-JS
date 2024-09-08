var numDecodings = function(s) {
    let dp = Array(s.length);
    return helper(s, 0, 0, dp);
}

function helper(s, start, count, dp) {
    let str = s.substring(start);
    if(Boolean(dp[start])) {
        return dp[start] + count;
    }else 
    if(s.charAt(start) === '0') {
        return count;
    } else if(str === '' || str.length === 1) {
        return count+1;
    }
    for(let i=0; i<2; i++) {
        if(i === 0) {
            count = helper(s, start+1, count, dp);
        } else {
            if(Number(s.substring(start, start+2) < 27))
                count = helper(s, start+2, count, dp);
        }
    }
    dp[start] = count;
    return count;
}

let s = "1111";
console.log(numDecodings(s));