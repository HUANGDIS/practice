class Promise {
  constructor(exectorCallback) {
    this.status = 'pending'
    this.value = undefined
    this.fulfilledArray = []
    this.rejectArray = []
    let resolveFn = (result) => {
      let timer = setTimeout(() => {
        clearTimeout(timer)
        if (this.status === 'pending') {
          this.status = 'fulfilled'
          this.value = result
          this.fulfilledArray.forEach(item => item(this.value))
        }
      })

    }
    let rejectFn = (reason) => {
      let timer = setTimeout(() => {
        clearTimeout(timer)
        if (this.status === 'pending') {
          this.status = 'rejected'
          this.value = reason
          this.rejectArray.forEach(item => item(this.value))
        }
      })
    }
    try {
      exectorCallback(resolveFn, rejectFn)
    } catch (e) {
      reject(e)
    }

  }
  then(fulfilledCb, rejectedCb) {
    this.fulfilledArray.push(fulfilledCb)
    this.rejectArray.push(rejectedCb)
  }

  resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) return { reject() }
    let called
    if (x != null && (typeof x === 'Object' || typeof x === "function")) {
      try {
        let then = x.then()
        if (typeof then === 'function') {
          then.call(x, y => {
            if (called) return
            called = true
            this.resolvePromise(promise2, x, resolve, reject)
          }, err => {
            if (called) return
            called = true
            reject(err)
          })
        } else {
          resolve(x)
        }
      } catch (e) {
        if (called) return
        called = true
        reject(e)
      }
    } else {
      resolve(x)
    }
  }
}
module.exports = Promise