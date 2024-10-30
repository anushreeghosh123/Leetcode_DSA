##2348_ Number of zero filled subarray
#Given an integer array nums, return the number of subarrays filled with 0.

#A subarray is a contiguous non-empty sequence of elements within an array.

#Example 1:

#Input: nums = [1,3,0,0,2,0,0,4]
#Output: 6
#Explanation: 
#There are 4 occurrences of [0] as a subarray.
#There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.

C++ Solution
class Solution {
public:
    long long zeroFilledSubarray(vector<int>& nums) {
        long long result=0;
        long long count=0;
        for(int num:nums){
            if(num==0){
                count++;
            }
            else{
                result=result+(count*(count+1))/2;
                count=0;

            }
        }
        if(count>0){
            result=result+(count*(count+1))/2;
        }
        return result;
    }
};
