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
 * @return {number}
 */
var maxPathSum = function(root) {
    // Reqs
    // Find max sum path
    // needs at least one node
    // doesn't have to go through root

    // Examples
    // [1,2,3] 6
    // [-10,9,20,null,null,15,7] 42
    // [1]
    // [-1]
    // [-10, 3] - 3?
    // [-10, 3, -15] - 3?

    // [2, 1, 5, -10, -5, 40, 60 ]
    // [-1, -2, -3, 4] = -1

    // Considerations
    // How to start a new sum? Return greatest number from branches?
        // Return sum of branches
        // Every time you hit a new max, reset it?

    // Properties
    // can follow any path
    // combining two values
    // negative can make sum less
    // roots can have zero, one or two children

    // What
    // go through all children (all left, then all right)
        // for left and for right: if leaf,
            // if leaf's value > currSum, set currSum as value
            // return leaf's value
    // compare left and right
        // if one is negative or null
            // use the other one
        // if both are null or negative
            // use neither
    // get sum val + sum of branches
    // if more than currSum, reset currSum

    if (!root.left && !root.right) return root.val

    let currSum = null
    let leftSum = null
    let rightSum = null

    if (root.left) {
        leftSum = maxPathSum(root.left)
    }

    if (root.right) {
        rightSum = maxPathSum(root.right)
    }

    // [-10, 3]
    if (leftSum === null) {
        currSum = Math.max(root.val + rightSum, rightSum, root.val)
    } else if (rightSum === null) {
        currSum = Math.max(root.val + leftSum, leftSum, root.val)
    } else {
        currSum = Math.max(root.val + leftSum + rightSum, root.val + leftSum, root.val + rightSum, leftSum, rightSum, root.val)
    }

    return currSum

    // Notes
    // didn't consider one branch all negative
    // should have spent more time pondering the property "path", and what the different combos are
    // did a good job thinking through the recursion
    // did a good job of thinking through max
};
