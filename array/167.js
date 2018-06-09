var twoSum = function(numbers, target) {
    let sol =[]
    for(let i =0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            if(numbers[i]+numbers[j]===target){
                sol.push(i+1,j+1)
                return sol
            
        }
        
        
    }
    
}
}

// 兩個迴圈，不能連續push。
