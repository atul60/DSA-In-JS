/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const changes = {
    5: 0,
    10: 0,
    20: 0,
  };

  const len = bills.length;
  for (let i = 0; i < len; i++) {
    let amount = bills[i];
    changes[amount] += 1;

    if (amount == 5) continue;
    if (amount == 10) {
      if (changes[5]) {
        amount -= 5;
        changes[5] -= 1;
      }
    } else if (amount == 20) {
      if (changes[10]) {
        amount -= 10;
        changes[10] -= 1;
      } else if (changes[5] >= 2) {
        amount -= 10;
        changes[5] -= 2;
      }
      if (changes[5]) {
        amount -= 5;
        changes[5] -= 1;
      }
    }

    if (amount != 5) {
      return false;
    }
  }

  return true;
};

lemonadeChange([5, 5, 5, 10, 20]);
