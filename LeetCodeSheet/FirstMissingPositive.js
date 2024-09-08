function firstMissingPositiveNo(nums) {
    const len = nums.length;
    for(let i=0; i<len; i++) {
        if(nums[i] < 1 || nums[i]>len+1) {
            nums[i] = len+1;
        }
    }

    for(let i=0; i<len; i++) {
        let num = Math.abs(nums[i]);
        if(num < len+1) {
            nums[num-1] = -1*Math.abs(nums[num-1]);
            console.log("nums ", nums);
        }
    }

    let i=0;
    for(; i<len; i++) {
        if(nums[i] > 0) {
            break;
        }
    }

    console.log("len - ", len, i);

    if(i != len){
        return i+1;
    } else {
        return len+1;
    }

}

let nums = [1,1];
console.log(firstMissingPositiveNo(nums));