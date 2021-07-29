let fs = require('fs')

let res = [];

// let i = 0
// function fn(data, index) {
//   res[index] = data
//   if (++i === 2) {
//     console.log(res)
//   }
// }
// fs.readFile('./a.txt', 'utf8', function (err, data) {
//   fn(data, 0)
// })
// fs.readFile('./b.txt', 'utf8', function (err, data) {
//   fn(data, 1)
// })

function after(times, callback) {
  return function (data) {
    res.push(data)
    if (--times === 0) {
      callback(res)
    }
  }
}

let newFn = after(2, function (res) {
  console.log(res)
})
fs.readFile('./a.txt', 'utf8', function (err, data) {
  newFn(data)
})
fs.readFile('./b.txt', 'utf8', function (err, data) {
  newFn(data)
})