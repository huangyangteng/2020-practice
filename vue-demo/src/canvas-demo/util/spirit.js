export class Spirit {
    constructor(props) {
        const {
            ctx,
            x = 0,
            y = 0,
            w = 20,
            h = 20,
            rotate = 0,
            start = 0,
            end = 3,
            dom = null,
        } = props
        /** @type {CanvasRenderingContext2D} */
        this.ctx = ctx
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.rotate = rotate
        this.start = start
        this.end = end
        this.dom = dom
    }
}

export class Picture extends Spirit {
    constructor(props) {
        super(props)
    }
    draw(curTime) {
        if (curTime < this.start || curTime > this.end) return
        const { x, y, w, h } = this
        // 处理旋转
        this.ctx.drawImage(this.dom, x, y, w, h)
    }
}
export class Text extends Spirit {
    constructor(props) {
        super(props)
    }
    draw() {}
}
