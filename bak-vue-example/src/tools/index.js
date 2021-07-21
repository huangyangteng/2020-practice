
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