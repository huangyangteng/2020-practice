//1°  =π/180

export function toAngle(radian) {
    return (180 / Math.PI) * radian
}

export function toRadian(angle) {
    return (Math.PI / 180) * angle
}
