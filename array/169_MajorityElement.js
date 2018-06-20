var majorityElement = function(nums) {
    let list=[]
     for(let i=0;i<nums.length;i++){
             if(!list[nums[i]]){
                 list[nums[i]]=1;
                 // list can be empty
                 } else{
           list[nums[i]]++;
           }
           // untile reach the aim, won't return yet
         if(list[nums[i]]>nums.length/2){
            return nums[i];
        }
     }

};
