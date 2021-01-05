/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // get all values
    // sort
    // get [k-1] index

    let vals = []
    const getVals = (node) => {
        if (!node) return

        getVals(node.left)
        vals.push(node.val)
        getVals(node.right)
    }

    getVals(root)

    const sorted = vals.sort((a, b) => a - b)

    return sorted[k-1]
};
