const typeMap = {
    picture: 'img',
    video: 'video',
}

export function loadResource(list) {
    let res = {}
    let count = 0
    const total = list.length
    return new Promise((resolve, reject) => {
        for (let i = 0; i < list.length; i++) {
            const { id, type, src } = list[i]
            const ele = document.createElement(typeMap[type])
            ele.src = src
            if (type == 'video') {
                ele.load()
                ele.muted = true
                ele.controls = true
                ele.autoPlay = true

                ele.onloadeddata = function () {
                    res[id] = ele
                    count++
                    console.log(count)
                    if (count == total) {
                        resolve(res)
                    }
                }
            } else if (type == 'picture') {
                ele.onload = function () {
                    res[id] = ele
                    count++
                    if (count == total) {
                        resolve(res)
                    }
                }
            }

            ele.onerror = function (err) {
                console.log('ele.onerror -> err', err)
                reject()
            }
        }
    })
}
