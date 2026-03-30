class Solution: 
    def hasDuplicate(self, nums: List[int])->bool:
        s = set(nums)
        print(len(s),len(nums))
        if len(s) == len(nums):
            return False;
        return True