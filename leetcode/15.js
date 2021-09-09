// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

//不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
/**
 *示例 1：

输入：nums = [1,1,2]
输出：2, nums = [1,2]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
示例 2：

输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
 

提示：

0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums 已按升序排列
 */

const removeDuplicates = function (nums) {
  let i = 0
  for (j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j]
      i++
    }
  }
  return i + 1
}
// const removeDuplicates = function (nums) {
//   let set = new Set(nums)
//   return set, set.size
// }

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums))