/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    // Reqs
    // Get strings, return stringified product

    // Examples
    // "0", "1"
    // "1", "247"
    // "2", "4"
    // "3", "4"
    // "12", "13" "156"
    // "12", "1475"
        //   "12"
        // "1475"

    // Thoughts
    // split digits, parse, multiply, track remainder (so mod by 10), add remainder to next round
    // ^ convert strings to numbers and then just mod by 10?

    // Questions
    // How big are the inputs? I.e. too big for memory

    // Considerations
    // what if 0
    // if no num1 digit
    // if no num2 digit
    // if no remainder and the above

    // Order
    // parse digits
    // if one of the above, special scenario (what will those look like?)
    // else normal

    // What
    // parse digits
    // multiply ends
        // what if one string is shorter? add remainder until no more remainder, then just add remaining digits of longer string to result
        // add remainder
    // tracker remainder

    // How
    let result = ''
    let num1IdxFromEnd = num1.length - 1
    let num2IdxFromEnd = num2.length - 1
    let remainder = 0

    // While both
    while (num1IdxFromEnd >= 0 && num2IdxFromEnd >= 0) {
        //   "12"
        // "1475"

        let num1Dig = num1[num1IdxFromEnd]
        let num2Dig = num2[num2IdxFromEnd]

        // console.log(num1Dig)
        // console.log(num2Dig)

        let num1Int = parseInt(num1Dig)
        let num2Int = parseInt(num2Dig)

        const currProd = (num1Int * num2Int) + remainder
        remainder = Math.floor(currProd / 10)
        const currResult = currProd % 10

        console.log(remainder)
        console.log(currResult)

        result = currResult + result

        num1IdxFromEnd--
        num2IdxFromEnd--

    }


    // Remaining digits, how to tell
    // if remaining digits
    let longerNum = num1IdxFromEnd > 0 ? num1 : num2
    let longerIdxFromEnd = num1IdxFromEnd > 0 ? num1IdxFromEnd : num2IdxFromEnd

    // console.log(longerNum)
    // console.log(longerIdxFromEnd)
    // console.log(remainder)

    while (longerIdxFromEnd >= 0) {
        let dig = longerNum[longerIdxFromEnd]
        let newRes = dig + remainder

        remainder = Math.floor(newRes / 10)
        const currResultTwo = newRes % 10

        result = currResultTwo + result

        longerIdxFromEnd--
    }


    return result

    // Notes
    // With string/array examples, a good one is what if one is longer than the other
    // With math, especially multiplication and division. need to consider 0s
};
