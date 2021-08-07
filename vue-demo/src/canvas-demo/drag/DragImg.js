export class DragImg {
    constructor(img) {
        //x y为初始坐标
        this.x = 100
        this.y = 100
        //w,h为初始宽高
        this.w = img.w
        this.h = img.h
        this.dom = img.dom
        /**@type {CanvasRenderingContext2D} */
        this.rotate = 10
        this.selected = img.selected
    }

    paint(ctx1) {
        /**@type {CanvasRenderingContext2D} */
        let ctx = ctx1
        //计算图片中心的坐标，后续要用上
        this.centerX = this.x + this.w / 2
        this.centerY = this.y + this.h / 2
        // 旋转处理
        ctx.save()
        ctx.translate(this.centerX, this.centerY)
        ctx.rotate((this.rotate * Math.PI) / 180)
        ctx.drawImage(
            this.dom,
            (-1 / 2) * this.w,
            (-1 / 2) * this.h,
            this.w,
            this.h
        )
        if (this.selected) {
            //如果选中了
            ctx.strokeStyle = 'red'
            ctx.lineWidth = 2
            ctx.setLineDash([5, 15])
            ctx.strokeRect((-1 / 2) * this.w, (-1 / 2) * this.h, this.w, this.h)
            // 关闭按钮
            // this.ctx.drawImage()
            // 缩放按钮
        }
        ctx.restore()
    }
    isInWhere(x, y) {
        // 变换区域左上角的坐标和区域的高度宽度
        let transformW = 24
        let transformH = 24
        let transformX = this.x + this.w
        let transformY = this.y + this.h
        // 删除区域左上角的坐标和区域的高度宽度
        let delW = 24
        let delH = 24
        let delX = this.x
        let delY = this.y
        //移动区域的坐标
        let moveX = this.x
        let moveY = this.y
        if (
            x - transformX >= 0 &&
            y - transformY >= 0 &&
            transformX + transformW - x >= 0 &&
            transformY + transformH - y >= 0
        ) {
            // 缩放区域
            return 'transform'
        } else if (
            x - delX >= 0 &&
            y - delY >= 0 &&
            delX + delW - x >= 0 &&
            delY + delH - y >= 0
        ) {
            // 删除区域
            return 'del'
        } else if (
            x - moveX >= 0 &&
            y - moveY >= 0 &&
            moveX + this.w - x >= 0 &&
            moveY + this.h - y >= 0
        ) {
            // 移动区域
            return 'move'
        }
        // 不在选择区域里面
        return false
    }
}
