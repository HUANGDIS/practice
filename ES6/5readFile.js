//异步
//并行
let fs = require('fs')
let res = [];

fs.readFile('./a.txt', 'utf8', function (err, data) {
  // res.push(data)
  // if (res.length === 2) {
  //   console.log(res)
  // }
  fn(data)
})

fs.readFile('./b.txt', 'utf8', function (err, data) {
  // res.push(data)
  // if (res.length === 2) {
  //   console.log(res)
  // }
  if (err) {
    console.log(err)
  }
  fn(data)
})

function fn(data) {
  res.push(data)
  if (res.length === 2) {
    console.log(res)
  }
}