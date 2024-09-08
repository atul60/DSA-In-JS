/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    let i=0, ch;
    let pop;
    while(s.charAt(i)) {
        ch = s.charAt(i);
        if(ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            pop = stack.pop();
            if(!Boolean(pop) || (pop === '(' && ch !== ')') || (pop === '{' && ch !== '}') || (pop === '[' && ch !== ']')) {
                return false
            }
        } 
        i++;
    }
    if(stack.length > 0)
        return false;
    return true;
};