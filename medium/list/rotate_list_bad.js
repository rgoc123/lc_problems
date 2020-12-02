/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head

    let currHead = head
    let currPrev = head
    let currTail = head.next

    const findPrevAndTail = (node) => {
        let currNode = node
        while(currNode.next.next) {
            currTail = currNode.next.next
            currPrev = currNode.next
            currNode = currNode.next
        }
    }

    // console.log(currHead)
    // console.log(currPrev)
    // console.log(currTail)

    let i = 0
    while (i < k) {
        findPrevAndTail(currHead)

        currTail.next = currHead
        currPrev.next = null
        currHead = currTail
        currPrev = currHead
        currTail = currHead.next

        i++
    }

    return currHead
};
