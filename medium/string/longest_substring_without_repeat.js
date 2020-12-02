/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0

    const seenCharsIdx = {}

    let i = 0
    let j = 0

    while (j < s.length) {
        if (seenCharsIdx[s[j]] !== undefined) {
            i = Math.max(i, seenCharsIdx[s[j]])
        }

        ans = Math.max(ans, j - i + 1)
        seenCharsIdx[s[j]] = j + 1
        j++
    }

    return ans
};
