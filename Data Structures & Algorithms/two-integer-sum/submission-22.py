class Solution:
    ##1.Declar a variable called obj and assing to an empy object
    """
    2.enumberate through the arg array 
    3. Declare an argument called diff and assign it the dif of target and nums[i]
    4. Declare an if codniontal that cehcks if obj has dif as index , reutnr obj index, obj from value
    5. Populate obj with value as index and i as index 
    """
    ##

    def twoSum(self, nums: List[int], target: int) -> List[int]:
        obj = {};

        for i, n in enumerate(nums):
            dif = target - n
            if dif in obj:
                return[obj[dif],i]
            obj[n] = i 

        