var twoSum = function(nums, target) {
    let sol =[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] ===target){
            sol.push(i,j)
            // sol.push(j)x
            return sol
        }

    }
    }
};

//兩個for loop
// push的使用
