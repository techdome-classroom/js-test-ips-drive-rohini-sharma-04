function smallestMissingPositiveInteger(nums) {


    // Implement the function smallest_missing_positive_integer
    nums = nums.filter(nums=> num >0) ;
    for(let i=0 ; i<nums.length ; i++){
      let index = Math.abs(nums[i])-1 ;
      if(index <nums.length && nums[index] > 0){
        nums[index] = -nums[index] ;
      }
    }

    for(let i=0 ; i<nums.length; i++){
      if(nums[i])
    }
  
  }
  
  module.exports = smallestMissingPositiveInteger;

