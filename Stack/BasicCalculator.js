/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const len= s.length;
    let result = 0, ch, pastOpt, currNum = 0, temp, i=0;
    while(i<len) {
        ch = s.charAt(i);
        if(ch !== "(" && ch !== ")" && ch !== " ") {
            if(ch === "+" || ch === "-") {
                pastOpt = ch;
            } else {
                currNum = 0;
                while(i<len && ch !== " " && !isNaN(ch)) {
                    currNum = currNum*10 + Number(ch);
                    i++;
                    ch = s.charAt(i);
                }
                i--;
                if(pastOpt) {
                    result = partialCalculation(result, currNum, pastOpt);
                } else result = currNum; 
            }
        }
        i++;
    }
    return result;
};

const partialCalculation = (num1, num2, operator) => {
    switch(operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
    }
}

const s = "132";
console.log(calculate(s));