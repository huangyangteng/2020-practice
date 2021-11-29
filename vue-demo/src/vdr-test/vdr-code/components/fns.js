export function isFunction(func) {
    return (
        typeof func === 'function' ||
        Object.prototype.toString.call(func) === '[object Function]'
    )
}

export function snapToGrid(grid, pendingX, pendingY, scale = 1) {
    const [scaleX, scaleY] = typeof scale === 'number' ? [scale, scale] : scale
    //根据scaleX和网格计算移动距离
    const x = Math.round(pendingX / scaleX / grid[0]) * grid[0]
    const y = Math.round(pendingY / scaleY / grid[1]) * grid[1]
    return [x, y]
}

export function getSize(el) {
    const rect = el.getBoundingClientRect()

    return [parseInt(rect.width), parseInt(rect.height)]
}

export function computeWidth(parentWidth, left, right) {
    //right是距离右边的距离,参考图片 http://111.229.14.189/gk-files/upload_fc33f7d382c96ff8052eaa3d657f973b.png
    return parentWidth - left - right
}

export function computeHeight(parentHeight, top, bottom) {
    return parentHeight - top - bottom
}

export function restrictToBounds(value, min, max) {
    if (min !== null && value < min) {
        return min
    }

    if (max !== null && max < value) {
        return max
    }

    return value
}

//----------------------------
/**
 * 获取当前元素到页面顶端的距离
 */
export function getOffsetTop(element) {
    if (typeof element == 'string') {
        element = document.querySelector(element)
    }
    let actualTop = element.offsetTop
    let current = element.offsetParent
    while (current != null) {
        actualTop += current.offsetTop
        current = current.offsetParent
    }
    return actualTop
}

/**
 * 获取指定元素距离屏幕左侧的距离
 * @param {element} element dom元素或者是选择器
 */
export function getOffsetLeft(element) {
    if (typeof element === 'string') {
        element = document.querySelector(element)
    }

    let left = element.offsetLeft
    element = element.offsetParent
    while (element !== null) {
        left += element.offsetLeft
        element = element.offsetParent
    }

    return left
}
/**
 *  计算指定坐标的角度
 * @param {point} point 坐标点，包含x,y两个属性
 * @param {origin} origin  坐标原点，包含x,y两个属性
 *
 */
export function calculateAngleDegree(point, origin) {
    if (point === null || origin === null) return 0

    let offsetX = point.x - origin.x
    let offsetY = point.y - origin.y

    if (offsetX === 0) {
        return offsetY > 0 ? 90 : 270
    }

    if (offsetY === 0) {
        return offsetX > 0 ? 0 : 180
    }

    let degree = Math.round((Math.atan(offsetY / offsetX) * 180) / Math.PI)

    if (offsetX >= 0 && offsetY >= 0) {
        return degree
    } else if (offsetX < 0 && offsetY >= 0) {
        return 180 + degree
    } else if (offsetX < 0 && offsetY <= 0) {
        return 180 + degree
    }

    return 360 + degree
}
