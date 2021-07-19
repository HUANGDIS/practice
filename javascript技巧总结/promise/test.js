let Promise = require('./2promise')

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 1000)
})
promise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})