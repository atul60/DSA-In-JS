const arr = [3, 4, 8, 1, 5, 6, 2, 9];  // [4, 1, -1, 6, 2, 3, 5, -2] 
const k = 7;
const set = new Set(arr);  //O(n);
console.log(set);
let req;
for(let i=0; i<arr.length; i++) {
    req = 7-arr[i];
    if(set.has(req)) {
        console.log(arr[i], req);
        set.delete(arr[i]);
        set.delete(req);
    } 
}

