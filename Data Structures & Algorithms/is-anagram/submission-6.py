class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        sorteds = ''.join(sorted(s))
        sortedt = ''.join(sorted(t))
        for i in range(len(sorteds)):
            if(sorteds[i] != sortedt[i]):
                return False
            
        return True 

        