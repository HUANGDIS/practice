// 给定一个大小为 n 的数组，找到其中的多数元素。
//多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
/**
 * 示例 1：
输入：[3,2,3]
输出：3
示例 2：
输入：[2,2,1,1,1,2,2]
输出：2
*/
const majorityElement = function (arr) {
  let len = arr.length
  if (len === 0) return false
  let times = len % 2 == 0 ? len / 2 : Math.floor(len / 2)
  let obj = {}
  for (let i = 0; i < len; i++) {
    // obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1
    obj[arr[i]] = (obj[arr[i]] || 0) + 1
    console.log(obj)
    if (obj[arr[i]] > times) {
      return arr[i]
    }
  }
}
let arr1 = [2, 2, 1, 1, 1, 2, 2]
let arr2 = [3, 2, 3]
console.log(majorityElement(arr1))
console.log(majorityElement(arr2))