irSum = function(nums) {
    let sum =0
    nums.sort(sortNumber)
    for(let i=0;i<nums.length;i++){
        if(i%2==0){
            sum +=nums[i]
        }
    }
    return sum
    
    
};

// 技巧

// sort不會依照大小排序！！
function sortNumber(a,b){
    return a - b
    
}
