

function say(...who) {
  console.log(who + 'saying')
}
Function.prototype.before = function (fn) {
  let _this = this
  return function (...who) {
    fn()
    _this(...who)
  }
}
let fn1 = say.before(function () {
  console.log('drink')
})

fn1('我', '你')