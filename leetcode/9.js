// 编写一个函数来查找字符串数组中的最长公共前缀
/**
 * 示例 1：

  输入：strs = ["flower","flow","flight"]
  输出："fl"
  示例 2：

  输入：strs = ["dog","racecar","car"]
  输出：""
  解释：输入不存在公共前缀。


  提示：

  0 <= strs.length <= 200
  0 <= strs[i].length <= 200
  strs[i] 仅由小写英文字母组成
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return
  if (strs.length === 1) return strs[0]
  return strs.reduce(getSameStr, strs[0])
}
function getSameStr(a, b) {
  let res = ''
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      res += a[i]
    } else {
      return res
    }
  }
  return res
}
let strs = ["flower", "flow", "flight"]
let str1 = ['dos', 'doss']
console.log(longestCommonPrefix(strs))
console.log(longestCommonPrefix(str1))