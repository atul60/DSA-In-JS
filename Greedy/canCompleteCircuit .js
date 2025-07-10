/**
 * Determines the starting gas station index from which a car can complete a circular route.
 *
 * @param {number[]} gas - Amount of gas at each station
 * @param {number[]} cost - Cost of gas to travel to the next station
 * @return {number} - Index of the starting gas station, or -1 if not possible
 */
var canCompleteCircuit = function (gas, cost) {
  // Calculate total gas and total cost over the entire circuit
  let totlaGas = 0,
    totalCost = 0;

  for (let i = 0; i < gas.length; i++) {
    totlaGas += gas[i];
    totalCost += cost[i];
  }

  // If total gas is less than total cost, completing the circuit is impossible
  if (totlaGas - totalCost < 0) return -1;

  // Reset totalGas to track fuel from a candidate starting point
  let startPoint = 0;
  totlaGas = 0;

  // Try to find the valid starting point
  for (let i = 0; i < gas.length; i++) {
    // Calculate the gas left after reaching the next station
    totlaGas += gas[i] - cost[i];

    // If gas is negative, the current start point doesn't work
    if (totlaGas < 0) {
      // Set the next station as the new candidate starting point
      startPoint = i + 1;
      // Reset totalGas for the new start point
      totlaGas = 0;
    }
  }

  // Return the valid start point index
  return startPoint;
};
