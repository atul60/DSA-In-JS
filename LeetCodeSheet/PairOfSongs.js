/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    let count = 0;
    time = time.map((no) => no >= 60 ? no % 60 : no);
    const obj = {};
    time.forEach((no) => {
        if (no in obj) {
            obj[no] += 1;
        } else {
            obj[no] = 1;
        }
    })
    console.log("obj", obj);
    const keys = Object.keys(obj);
    console.log("calling keys", keys);
    keys.forEach(no => {
        no = Number(no);
            if(no == 0 || no == 30) {
                count += obj[no]*(obj[no]-1)/2;
            } else if(no < 30) {
                if((60-no) in obj) {
                    count += obj[no]*obj[60-no];
                }
            }
            delete obj[no];
    })
    return count;
};

const time = [15,63,451,213,37,209,343,319];
console.log(numPairsDivisibleBy60(time));