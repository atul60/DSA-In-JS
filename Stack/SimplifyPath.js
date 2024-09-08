/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    let ch, len = path.length, temp = "";
    for(let i=0; i<len; i++) {
        ch = path.charAt(i);
        if(ch === "/") {
            if(temp !== "") {
                if(temp === "..") {
                    stack.length !== 0 && stack.pop();
                } else if(temp !== ".") {
                    stack.push(temp);
                }
            }
            temp = "";
        } else {
            temp += ch;
        }
    }
    if(temp !== "" && temp !== ".") {
        if(temp === "..")
        stack.length !== 0 && stack.pop();
        else stack.push(temp);
    }
    let finalPath = "";
    stack.forEach(item => finalPath += "/" + item);
    return finalPath === "" ? "/" : finalPath;
};

console.log(simplifyPath("/..."));