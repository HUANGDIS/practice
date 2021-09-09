// 给定一个非空整数数组，除了某个元素只出现一次以外，
// 其余每个元素均出现两次。找出那个只出现了一次的元素。
/**
 *示例 1:
  输入: [2,2,1]
  输出: 1
  示例 2:
  输入: [4,1,2,1,2]
  输出: 4
 */

const singleNumber = function (arr) {
  let obj = {}
  arr.forEach(item => {
    obj[item] = (obj[item] || 0) + 1
  })
  console.log(obj)
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === 1) {
      return arr[i]
    }
  }
}

let arr1 = [4, 1, 2, 1, 2]
console.log(singleNumber(arr1))