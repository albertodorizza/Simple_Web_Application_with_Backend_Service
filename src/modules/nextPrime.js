/**
 * Helper fuction for computing the next prime number of the higher number among the input ones
 * @param {*} num1 First input number
 * @param {*} num2 Second input number
 * @returns The first prime number after the highest between input numbers
 */
exports.nextPrime = function (num1, num2) {
    var higherNum = num1 > num2 ? num1 : num2;

    // Start checking from the next number after 'num'
    for (var i = higherNum + 1;; i++) {
        var isPrime = true;
        // Check divisibility from 2 up to the square root of the number
        for (var d = 2; d * d <= i; d++) {
            // If 'i' is divisible by 'd', it's not a prime number
            if (i % d === 0) {
                isPrime = false;
                break;
            }
        }
        // If 'isPrime' is still true, return 'i' (it's a prime number)
        if (isPrime) {
            return i;
        }
    }
}