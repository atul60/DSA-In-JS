/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let len = nums.length;
    if(len < 3) return [];
    nums.sort((a,b) => a-b);
    const result = [];
    if(nums[0] > 0) 
        return [];
    let j, k;
    let end = false;
    for(let i=0; i<len-2; i++) {
        j=i+1;
        k=len-1;
        while(j<k) {
            if(nums[j] + nums[k] + nums[i] < 0) {
                j++;
            } else if(nums[j] + nums[k] + nums[i] > 0) {
                k--;
            } else {
                result.push([nums[i], nums[j], nums[k]]);
                if(nums[i] === 0 && nums[k] === 0) {
                    end = true;
                }
                j++;
                while(j<k) {
                    if(nums[j] === nums[j+1]) {
                        j++;
                    } else {
                        j++;
                        break;
                    } 
                }
                while(j<k) {
                    if(nums[k] === nums[k-1]) {
                        k--;
                    } else {
                        k--;
                        break;
                    };
                }
                while(i<k) {
                    if(nums[i] === nums[i+1]) {
                        i++;
                    } else break;
                }
            }
            if(end) {
                break;
            }
        }
        if(end) {
            break;
        }
    }
    return result;
};