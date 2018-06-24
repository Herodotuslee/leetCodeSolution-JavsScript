var removeDuplicates = function(nums) {

    if(nums.length<2){
        return nums.length
    }
    // because at least we have 2 items
    let count =0;
    // 2 pointers  (I am not sure this words is correct in English or not)
    for(let i=2;i<nums.length;i++){
        if(nums[i]!=nums[count]){
            // evaluate with the first one
            // if not same, put it in the 3rd location (index 2)
            // if it's same, pass and check the next index i

            nums[count+2] =nums[i];
            count++
            // store the value from index 0
            // if it's not same than we get the new item
            //
        // break;
        }
        }
        console.log(nums)
    return  count+2
    }



var removeDuplicates = function(nums) {

       if(nums.length<2){
           return nums.length
       }
       let arr=[nums[0],nums[1]]

       let count =0;
       for(let i=2;i<nums.length;i++){
           if(nums[i]!=arr[count]){
               arr[count+2] =nums[i];
               count++
           }
         }
         return arr
     }


  //   0 0  0 1 1 1 1 2 3 3 3  (before)
  //   0 0                     (after)
  //        i
  //   c
  //    because nums[i]!=nums[c]
  //        i+1
  //        c+1




  //   0 0  0 1 1 1 1 2 3 3 3
  //   0 0  1 ?
  //          i
  //     c
  //          nums[i] != nums[c]
  //          put 1 in the array because it's different
  //          c+1
  //          next i
  //   0 0  0 1 1 1 1 2 3 3 3
  //   0 0  1 1 ?
  //            i
  //     c
  //          nums[i] != nums[c]
  //          next i
  //           // important point, because the max number of the new items is 2
  //           // repeat!
  // 0 0  0 1 1 1 1 2 3 3 3
  // 0 0  1 1 ?
  //              i
  //          c

  //           nums[i]===nums[c], next one
  //           c still same
  // 0 0  0 1 1 1 1 2 3 3 3
  // 0 0  1 1       i
  //          c
  //          nums[i]!=nums[c]


console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))
