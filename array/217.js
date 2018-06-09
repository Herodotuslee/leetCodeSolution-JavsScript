ontainsDuplicate = function(nums) {
    // let sol =false
    if(nums.length===0){
        return false
    } else{ for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                // sol=true 
                return true
                // break;
            }
               
   
              
        } 
         
   
    }  
           return false
          } 
   
    
	}



