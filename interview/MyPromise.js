const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise {
    constructor(executor) {
        this.state = PENDING
        this.value = undefined
        this.reason = undefined
        // 存放成功的回调
        this.onResolvedCallbacks = []
        // 存放失败的回调
        this.onRejectedCallbacks = []

        try {
            executor(this._resolve, this._reject)
        } catch (error) {
            console.log('MyPromise -> constructor -> error', error)
            this._reject(error)
        }
    }

    _resolve = value => {
        // 调用此方法就是成功
        if (this.state === PENDING) {
            this.state = FULFILLED
            this.value = value
            this.onResolvedCallbacks.forEach(fn=>fn())
        }
    }

    _reject = reason => {
        // 调用此方法就是失败
        if (this.state == PENDING) {
            this.state = REJECTED
            this.reason = reason
            this.onRejectedCallbacks.forEach(fn=>fn())
        }
    }

    then(onFulfilled=v=>v, onRejected=err=>{throw err}) {//处理参数传值问题
        // 每次调用then都返回一个新的promise
        let promise2=new MyPromise((resolve,reject)=>{
            if (this.state === FULFILLED) {
                setTimeout(()=>{
                    try {
                        let x=onFulfilled(this.value)
                        // x可能是一个promise
                        
                    } catch (error) {
                        
                    }
                },0)
                onFulfilled(this.value)
                return 
            } 
        })


        if (this.state == PENDING) {
            //异步resolve时，state是pending,需要把 onFulfilled和onRejected存起来，等到异步执行之后，再执行回调
            console.log('pending')
            this.onResolvedCallbacks.push(()=>onFulfilled(this.value))
            this.onRejectedCallbacks.push(()=>onRejected(this.reason))
            return 
        }
        if (this.state === FULFILLED) {

            onFulfilled(this.value)
            return 
        } 
        if (this.state == REJECTED) {
            onRejected(this.reason)
            return 
        }
    }
}
// --------测试

let p = new MyPromise(function (resolve, reject) {
    setTimeout(() => {
        resolve('成功')
    }, 0)
})

p.then(
    res => {
        console.log(res)
    },
    err => {
        console.log('failed', err)
    }
)
