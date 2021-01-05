/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
    // Reqs
    // return minimum number of stickers (not cuts...though they might be the same)

    // Properties
    // letters in target can match letters in one sticker, multiple stickers, or no stickers
    // a sticker's can have letters that match, or no letters that match
        // a sticker can have one letter or multiple matches
        // a stickers matches can be few or many
    // count in one sticker could be greater than other(s), which
        // means one sticker could solve what multiple others could
            // how track/how compare? after accum all, go through all trackers?


    // Thoughts
    // correlation between likelihood of words in stickers and target?
    // go through each sticker
        // go through each letter in target
            // track matches
                // track count?
    // and what if one stick has all the letters?
    // create chains of letters? tries?

    // create hash for target
    const targetObj = {}
    for (let i in target) {
        targetObj[target[i]] = true
    }

    // go through each sticker getting count of matching letters
    const stickersMatchCount = {}
    stickers.forEach(word => stickersMatchCount[word] = 0)

    const targetMatchCount = {}
    for (let word of stickers) {
        targetMatchCount[word] = {}
        for (let ltr of word) {
            if (targetObj[ltr]) {
                stickersMatchCount[word]++

                if (!targetMatchCount[word][ltr]) {
                    targetMatchCount[word][ltr] = 1
                } else {
                    targetMatchCount[word][ltr]++
                }
            }
        }
    }

    // console.log(targetMatchCount)
    // console.log(stickersMatchCount)

    // go through each stickers' counts, and see which
        // not only has the greater count of a letter but also the most letters?
            // I don't think this matters because we have unlim amt of stickers
    // sort stickers by highest number of matching letters?

    const sortedStickers = Object.keys(stickersMatchCount).sort((a, b) => {
        return stickersMatchCount[b] - stickersMatchCount[a]
    })

    // console.log(sortedStickers)

    let currCount = 0

    const dfs = (currObj, currStickers, combo) => {
        if (Object.keys(currObj).length === 0) {
            if (combo.length < currCount) {
                currCount = combo.length
                return
            }
        }

        const newObj = { ...currObj }

        for (let i in currStickers) {
            const currSticker = currStickers[i]

            let ltrMatchCount = 0

            for (let ltr of currSticker) {
                if (currObj[ltr]) {
                    delete currObj[ltr]
                    ltrMatchCount++
                }
            }

            if (ltrMatchCount > 0) {
                combo.push(currSticker)
                // console.log()
                dfs(newObj, currStickers.slice(1), combo)
            }
            // track count of letters currObj? if not 0 add to combo
        }
    }

    dfs(targetObj, sortedStickers, [])

//     for (let i in sortedStickers) {
//         const currSticker = sortedStickers[i]


//     }


    // then for each sticker go through other sticks to identify combinations and min count
        // have currWords matching letters (remove letters from hash of target...add back in)
            // Note: why does removing this make sense? because you're looking to fill in gaps
        // if next word has missing letters,
            // identify all letters it has in current obj (compare objs?), and remove
            // drill down (go thru array for more combos)
        // else go to next word
        // when at end, set count if necessary

    return currCount !== 0 ? currCount : -1


    // Considerations
    // How are we going to determine the lowest combinations/num of stickers?
        // Probably backtrack
        // Tree?
            // Maybe sort possible letters in a word words by order in target?
                // Why and how?

    // Examples

    // [basel, basically, trick] basic

    // [ basel, cat, basin ] basic

    // Notes:
    // Abstraction:
        // This is about an ovelap between length of a candidate, its overlap with target,
            // its overlap/connection with other candidates, and the different combinations
            // of candidates
            // What are the properties to look for in a scenario like this?
            // And how do they interact to achieve the solution?
        // How do you come up with good examples for something like this?

    // When tracking seems like the solution, always consider both an obj and a set, and
        // figure out which one is better
        // Is one better for tracking just presence, location, value or count? And is one better
            // for tracking multiple of those values? Or multiple or particular types?
    // If there are gaps in a potential solution, is that when you remove items from an obj/
        // array or reduce count?

    // And for problems like these should we consider solutions by time complexity?
        // Iterate once - O(n)
        // Tree it out - O(logn)
        // Backtrack - O(n^2) or O(2^n)
        // How do identify opportunities for each?

    // Maybe could have recognized the need for counting deduction
    // and backtracker, and that they'd need to be layered on top
    // of each other in some way
};
