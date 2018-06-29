/**
 * @param {number[]} nums
 * @return {number}
 */
var re= function(nums) {
    if(nums == null || nums.length == 0) return 0;
    if(nums.length == 1) return 1;
    var count = 0;
    for(var i = 1 ; i < nums.length ; i++){
        if(nums[count] != nums[i]){
            count++;
            nums[count] = nums[i];
        }
    }
    return ++count;
};


var removeDuplicates = function(nums) {
    var dup_count = 0;
    var prev = '';
    var len = nums.length;
    var index = 0;

    while (index < len) {
        if (dup_count >= 2 && nums[index] == prev) {
            nums.splice(index, 1);
            len -= 1;
            continue;
        }

        if (prev == nums[index]) {
            dup_count += 1;
        } else {
            prev = nums[index];
            dup_count = 1;
        }
    console.log(nums)
        index += 1
    }


    return nums.length

};


removeDuplicates([0,0,1,1,1,1,2,3,3])
