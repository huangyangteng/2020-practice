function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
function getImage(context, video) {
    context.drawImage(video, 0, 0, 400, 200)
    return new Promise((resolve) => {
        context.canvas.toBlob(
            (blob) => {
                const url = URL.createObjectURL(blob)
                resolve(url)
            },
            'image/jpeg',
            1.0
        )
    })
}

export const getCoverList = async (video,frameNum=30) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    const list = []
    const duration = video.duration
    const step = duration / frameNum
    for (let i = 0; i < duration; i += step) {
        video.currentTime = i
        await sleep(200)
        let img = await getImage(context, video)
        let end = i + step > duration ? duration : i + step
        list.push({
            img,
            start: i,
            end: end
        })
    }
    return new Promise(resolve => {
        resolve(list)
    })
}
