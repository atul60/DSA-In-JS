/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const operation = {
        "+": "add",
        "-": "subtract",
        "*": "mulltiply",
        "/": "divide" 
    }
    let num1, num2, result;
    if(tokens.length === 1) return tokens[0];
    for(let item of tokens) {
        if(operation.hasOwnProperty(item)) {
            num2 = stack.pop();
            num1 = stack.pop();
            result = calculation(num1, num2, item);
            stack.push(result);
        } else {
            stack.push(Number(item));
        }
    }
    return result;
};

const calculation = (num1, num2, operator) => {
    let result;
    switch(operator) {
        case "+": result =  num1 + num2; break;
        case "-": result =  num1 - num2; break;
        case "*": result =  num1 * num2; break;
        case "/": 
            result = (num1 / num2) < 0 ? Math.ceil(num1 / num2) : Math.floor(num1 / num2);
            break;
    }
    return result;
}

const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(tokens));;