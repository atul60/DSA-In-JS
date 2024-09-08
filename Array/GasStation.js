/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totlaGas = 0,
    totalCost = 0;
  for (let i = 0; i < gas.length; i++) {
    totlaGas += gas;
    totalCost += cost;
  }
  if (totlaGas - totalCost < 0) return -1;
  let startPoint = 0;
  totlaGas = 0;
  for(let i=startPoint; i<gas.length; i++) {
    if(totlaGas + gas[i] - cost[i] < 0) {
        startPoint = i+1;
        totlaGas = 0;
    } else {
        totlaGas = totlaGas + gas[i] - cost[i];
    }
  }
  return startPoint;
};

console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6]));
