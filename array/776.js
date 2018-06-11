
var isToeplitzMatrix = function(matrix) {
    for(let i=1;i<matrix.length;i++){
        for(let j=1;j<matrix[0].length;j++){
            if(i>0 &&j>0 &&matrix[i][j] !==matrix[i-1][j-1]){
                return false
            }
        }
    }
      return true
}


// double let 
// understand the question is very important!
// use && is better than set i = 1

