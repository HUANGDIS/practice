//给定一个非负整数 numRows， 生成杨辉三角的前 numRows 行。
/**
 * 输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */

const generate = function (numRows) {
  if (numRows === 0) return []
  // 创建一个长度为numRows的每个元素为数组
  const result = Array.from(new Array(numRows), () => [])
  for (let i = 0; i < numRows; i++) {
    result[i][0] = 1
    result[i][i] = 1
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
    }
  }
  return result
}

console.log(generate(5))