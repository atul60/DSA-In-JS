/**
 * @param {number[][]} bookings - Each booking is an array [start, end, seats],
 *                                meaning seats are booked from flight 'start' to 'end' (inclusive)
 * @param {number} n - Total number of flights
 * @return {number[]} - An array where result[i] is the total seats booked on the (i+1)th flight
 */
var corpFlightBookings = function (bookings, n) {
  // Initialize the result array of size `n` with all 0s
  const result = Array.from({ length: n }).fill(0);

  // Apply a reverse prefix sum strategy to mark changes
  for (let i = 0; i < bookings.length; i++) {
    let startIdx = bookings[i][0] - 1; // Convert to 0-based index
    let endIdx = bookings[i][1] - 1; // Convert to 0-based index
    let seats = bookings[i][2]; // Number of seats booked

    // Add seats to the end index
    result[endIdx] += seats;

    // Subtract seats just before the start index to denote beginning of addition
    if (startIdx !== 0) {
      result[startIdx - 1] -= seats;
    }
  }

  // Compute reverse prefix sum to get actual seat bookings per flight
  let prefixSum = 0;
  for (let i = n - 1; i >= 0; i--) {
    prefixSum += result[i];
    result[i] = prefixSum;
  }

  return result;
};
