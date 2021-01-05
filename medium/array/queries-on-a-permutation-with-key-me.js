/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {


    // What
    // Create initial p
    // get the value of current index in queries
    // then get current index of value in P
    // push that index into result
    // then create new P with value in front

    const result = []
    let pArr = []
    for (let i = 1; i <= m; i++) {
        pArr.push(i)
    }

    // console.log(pArr)

    for (let i in queries) {
        // console.log(pArr)
        const currVal = queries[i]
        const currIdx = pArr.indexOf(currVal)
        result.push(currIdx)
        const newArr = [currVal]
        pArr = newArr.concat(pArr.slice(0, currIdx).concat(pArr.slice(currIdx+1)))
    }

    return result
};
