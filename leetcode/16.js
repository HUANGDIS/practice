
//给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
/**
 * 示例 1：

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
示例 2：

输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
 

提示：

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[i] <= 109
 */

const merge = function (nums1, m, nums2, n) {
  let len = m + n - 1
  m--,
    n--
  while (m >= 0 && n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[len] = nums1[m--]
    } else {
      nums1[len] = nums2[n--]
    }
    len--
  }
  if (m === -1) {
    console.log(nums2)
    return nums1.splice(0, len + 1, ...nums2.slice(0, n + 1))
  }
  if (n === -1) {
    return nums1
  }
}
let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
console.log(merge(nums1, m, nums2, n))