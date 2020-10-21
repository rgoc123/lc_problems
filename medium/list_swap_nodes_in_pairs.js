/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // swap pairs
    // question: is the length always even?
        // if not, need to ignore the last node (not swap)
        // recursion? with index tracker?

    // are we creating a new linked list?

    // how could I have realized need to pin head earlier?
        // because as we're going to change the head but
        // never come back to it so need to do it at the start
    // newHead
    // currNode
    // currNext
    // currThird
    // currPrev

    // Iterative
    // - if not new head, make it currhead.next, currNode = newHead

    // while currThird
    // make currNode next = currThird
    // make currNext next = currNode
    // make currPrev next = currNext
    // make currPrev = currNode
    // make currNode = currThird
    //
    //

    if (!head) return head
    if (!head.next) return head

    let newHead = null
    let currNode = head
    let currNext = head.next
    let currThird = currNext.next
    let currPrev = null

    newHead = head.next

    while (currNode && currNode.next) {
        currNext = currNode.next
        currThird = currNext.next
        currNode.next = currThird
        currNext.next = currNode

        if (currPrev) {
            currPrev.next = currNext
        }

        currPrev = currNode
        currNode = currThird
    }

    return newHead


    // - look at head's next (currNext)
    // - make currThird = currNext.next
    // - make next's next head (currNode)
    // - make curr
};
