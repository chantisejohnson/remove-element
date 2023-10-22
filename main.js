/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //the while loop is passing in the argument for the array with the .includes property to identify all of the val integers in the array
    while(nums.includes(val)) {

        //splice method is called on the array and any index that is equivalent to the val integer is removed
        nums.splice(nums.indexOf(val), 1)
    }
};