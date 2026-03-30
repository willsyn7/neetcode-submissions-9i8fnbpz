class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        maps = {}
        for i , n in enumerate(nums):
            dif = target - n
            if dif in maps:
                return [maps[dif],i]
            maps[n] = i
            

        