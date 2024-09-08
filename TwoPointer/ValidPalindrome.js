/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let lenStr = s.length;
  let i = 0, j = lenStr - 1;
  let result = true;
  let ch1, ch2;
  while(i < j) {
    ch1 = s.charCodeAt(i);
    ch2 = s.charCodeAt(j);
    console.log("test-", s.charAt(i), ch1, s.charAt(i));
    if(((65 <= ch1 && ch1 <= 90) || (97 <= ch1 && ch1 <= 122) || (48 <= ch1 && ch1 <= 57)) && ((65 <= ch2 && ch2 <= 90) || (97 <= ch2 && ch2 <= 122) || (48 <= ch2 && ch2 <= 57))) {
        if(s.charAt(i).toLowerCase() !== s.charAt(j).toLowerCase()) {
            result = false;
            break;
        }
        i++;
        j--;
    } else {
        if(!((65 <= ch1 && ch1 <= 90) || (97 <= ch1 && ch1 <= 122) || (48 <= ch1 && ch1 <= 57))) {
            i++;
        }
        if(!((65 <= ch2 && ch2 <= 90) || (97 <= ch2 && ch2 <= 122) || (48 <= ch2 && ch2 <= 57))) {
            j--;
        }
    }
  } 
  return result; 
};

console.log(isPalindrome("race a car"));