# 263. UGLY NUMBERS
# An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
#Given an integer n, return true if n is an ugly number.

# Example 1:

# Input: n = 6
# Output: true
# Explanation: 6 = 2 × 3


SOLUTION 

IN C++
class Solution {
public:
    bool isUgly(int n) {
        if(n==0){
            return false;
        }
        for(const int prime:{2,3,5}){
            while(n%prime==0){
                n=n/prime;
            }
        }
        return n==1;
        
    }
};

