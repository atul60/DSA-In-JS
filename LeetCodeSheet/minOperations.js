/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {

    const boxLen = boxes.length;
    const oneCount = {
        left: 0,
        right: 0
    }
    let previousSum = 0;
    for(let i=1; i<boxLen; i++) {
        if(boxes[i] == 1) {
            oneCount.right += 1;
            previousSum += i;
        }
    }

    const answer = new Array(boxLen).fill(0);
    answer[0] = previousSum;
    let previousValue = boxes[0];

    for(let i=1; i<boxLen; i++) {
        if(previousValue == 1) {
            oneCount.left += 1;
        }
        let current = boxes[i];
        if(current == 1) {
            oneCount.right -= 1;
        }

        answer[i] = previousSum + oneCount.left - oneCount.right - (current == 1 ? 1 : 0);
        previousSum = answer[i];
        previousValue = current;
    }

    return answer;
    
};

const boxes = "001011";
console.log(minOperations(boxes));

// Output: [1,1,3]