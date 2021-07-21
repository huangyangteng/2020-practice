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
