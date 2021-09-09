// 罗马数字转整数
/**
 * 示例 1:

  输入: "III"
  输出: 3
  示例 2:

  输入: "IV"
  输出: 4
  示例 3:

  输入: "IX"
  输出: 9
  示例 4:

  输入: "LVIII"
  输出: 58
  解释: L = 50, V= 5, III = 3.
 */
const romanToInt = function (str) {
  let map = {
    I: 1,
    V: 5,
    IV: 4,
    IX: 9,
    X: 10,
    XL: 40,
    XC: 90,
    L: 50,
    C: 100,
    CD: 400,
    CM: 900,
    D: 500,
    M: 1000,
  }
  let res = 0
  let index = 0
  let len = str.length
  while (index < len) {
    if (index + 2 < len && map[str.slice(index, index + 2)]) {
      res += map[str.slice(index, index + 2)]
      index += 2
    } else {
      res += map[str.slice(index, index + 1)]
      index += 1
    }
  }
  return res
}

let str = "LVII"
console.log(romanToInt(str))