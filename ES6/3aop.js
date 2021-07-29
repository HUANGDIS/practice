function after(times, callback) {
  let sum = 0
  return function (num) {
    sum += num
    if (--times === 0) {
      console.log(sum)
      callback()
    }
  }
}

let fn = after(3, function (num) {
  console.log('after')
})
fn(1)
fn(2)
fn(3)