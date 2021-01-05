class Solution(object):
    def minStickers(self, stickers, target):
        # create object with letter-count key-value
        t_count = collections.Counter(target)

        # create an array of counter objects for count of letter matches in each word
        A = [collections.Counter(sticker) & t_count
             for sticker in stickers]

        # for each index in the range from 0 to A.length - 1
        for i in range(len(A) - 1, -1, -1):
            # if any of the keys
            # for each index
            if any(A[i] == A[i] & A[j] for j in range(len(A)) if i != j):
                # remove that counter
                A.pop(i)

        stickers = ["".join(s_count.elements()) for s_count in A]
        dp = [-1] * (1 << len(target))
        dp[0] = 0
        for state in xrange(1 << len(target)):
            if dp[state] == -1: continue
            for sticker in stickers:
                now = state
                for letter in sticker:
                    for i, c in enumerate(target):
                        if (now >> i) & 1: continue
                        if c == letter:
                            now |= 1 << i
                            break
                if dp[now] == -1 or dp[now] > dp[state] + 1:
                    dp[now] = dp[state] + 1

        return dp[-1]
        
