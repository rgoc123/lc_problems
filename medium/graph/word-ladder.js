/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord) || !beginWord || !endWord) return 0

    const allComboDict = {}

    for (let word of wordList) {
        for (let i = 0; i < beginWord.length; i++) {
            const processedWord = word.slice(0, i) + "*" + word.slice(i+1)
            if (!allComboDict[processedWord]) {
                allComboDict[processedWord] = [word]
            } else {
                allComboDict[processedWord].push(word)
            }
        }
    }

    console.log(allComboDict)

    let queue = [[beginWord, 1]]
    const visitedObj = { beginWord: true }

    while (queue.length > 0) {
        let currInfo = queue.shift()
        let currWord = currInfo[0]
        let currLevel = currInfo[1]

        for (let i = 0; i < beginWord.length; i++) {
            const intWord = currWord.slice(0, i) + "*" + currWord.slice(i+1)
            console.log(intWord)

            if (allComboDict[intWord]) {
                for (let word of allComboDict[intWord]) {
                    if (word === endWord) {
                        return currLevel + 1
                    } else if (!visitedObj[word]) {
                        visitedObj[word] = true
                        queue.push([word, currLevel+1])
                    }
                }
            }
        }
    }

    return 0
};
