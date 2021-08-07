class Timing {
    // iteration 运动周期
    constructor({ duration, iterations = 1 } = {}) {
        this.startTime = Date.now()
        this.duration = duration
        this.iterations = iterations
    }
    get time() {
        //
        return Date.now() - this.startTime
    }
    get p() {
        //process
        const progress = Math.min(
            this.time / this.duration,
            this.iterations
        )
        return this.isFinished ? 1 : progress % 1
    }
    get isFinished() {
        return this.time / this.duration >= this.iterations
    }
}
// 动画模型
class Animator {
    constructor({ duration, iterations }) {
        this.timing = { duration, iterations }
    }
    animate(target, update) {
        //target: 动画的目标，一般为dom元素
        //update 回调函数，在回调函数中更新dom属性
        let frameIndex = 0
        // 创建一个timing对象
        const timing = new Timing(this.timing)

        return new Promise((resolve) => {
            function next() {
                // 更新动画
                if (
                    update({ target, frameIndex, timing }) !==
                        false &&
                    !timing.isFinished
                ) {
                    requestAnimationFrame(next)
                } else {
                    // 结束动画
                    resolve(timing)
                }
                frameIndex++
            }
            next()
        })
    }
}
