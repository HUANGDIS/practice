// 给定一个整数数组 nums 和一个整数目标值 target，
//请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。
/**
 *示例 1：

  输入：nums = [2,7,11,15], target = 9
  输出：[0,1]
  解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
  示例 2：

  输入：nums = [3,2,4], target = 6
  输出：[1,2]
  示例 3：

  输入：nums = [3,3], target = 6
  输出：[0,1]
 */
const twoSum = function (arr, target) {
  const map = new Map
  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i]) !== undefined) {
      return [map.get(arr[i]), i]
    } else {
      map.set(target - arr[i], i)
    }
  }
  return []
}
let nums = [3, 2, 4], target = 6
console.log(twoSum(nums, target))