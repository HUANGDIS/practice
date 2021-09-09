// 题目如下：给定两个数组，编写一个函数来计算它们的交集。
/**
 * 示例 1：

  输入：nums1 = [1,2,2,1], nums2 = [2,2]
  输出：[2]
  示例 2：

  输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  输出：[9,4]
  说明：
  输出结果中的每个元素一定是唯一的。
  我们可以不考虑输出结果的顺序。
 */
const intersection = function (arr1, arr2) {
  // let set1 = new Set(arr1)
  // let set2 = new Set(arr2)
  // let res = []
  // for (let item of set1.keys()) {
  //   if (set2.has(item)) {
  //     res.push(item)
  //   }
  // }
  // return res
  // 优化1
  // return result = [...new Set(arr1)].filter(item => new Set(arr2).has(item))

  // 优化2
  let map = {}
  let res = []
  for (let i = 0; i < arr1.length; i++) {
    map[arr1[i]] = true
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      res.push(arr2[j])
      map[arr2[j]] = false
    }
  }
  return res
}
let nums1 = [4, 9, 5, 1], nums2 = [9, 4, 9, 8, 4, 1]
console.log(intersection(nums1, nums2))