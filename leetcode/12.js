//返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
/**
 * 示例 1：

输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
示例 2：

输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。


提示：

1 <= prices.length <= 105
0 <= prices[i] <= 104
 */

const maxProfit = function (arr) {
  let max = 0,
    maxIndex = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[j] > arr[i]) && (arr[j] - arr[i] > max)) {
        console.log(arr[i], arr[j])
        max = arr[j] - arr[i]
        maxIndex = j
      }
    }
  }
  return maxIndex
}

// 优化
// const maxProfit = function (arr) {
//   let result = 0
//   let min = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i]
//       console.log(min)
//     } else {
//       result = Math.max(result, arr[i] - min)
//     }
//   }
//   return result
// }
let prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))