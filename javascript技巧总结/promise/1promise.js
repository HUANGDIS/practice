
let fs = reuqire('fs')

let promise = new Promise((resolve, reject) => {
  console.log('111')
  fs.readFile('./a.txt', 'utf-8', function (err, data) {
    if (err) reject()
    resolve()
  })
})