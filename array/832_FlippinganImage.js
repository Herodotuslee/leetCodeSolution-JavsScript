/**
 * @param {number[][]} A
 * @return {number[][]}
 */

var flipAndInvertImage = function(A) {
    let matrix =[];
    for(let i=0;i<A.length;i++){
        let m = A[i].reverse();
        // line by line
        // reverse()
        let newArr =[];
        for(let j=0;j<m.length;j++){
            if(m[j]===0){
                newArr.push(1)
            }else
                newArr.push(0)

        }
        matrix.push(newArr)
    }
    return matrix


}
