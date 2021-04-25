<template>
    <div>
        <video
            ref="videoRef"
            @loadedmetadata="loadHandler"
            @timeupdate="timeUpdateHandler"
            @click="clickHandler"
            src="http://10.1.69.42:12300/diyvrbt/material/2021-04-21/202104_13677777777_ZBfOX132MTUYz8cxZA6AJ9p3Ax1LlVWueQHHcBbsDfrJ1FmWjF.mp4"
        ></video>
        <div>{{ currentTime }}</div>
    </div>
</template>

<script>
export default {
 name:'test-player',
    data() {
        return {
            playRange: [
                [0, 5],
                [10, 14],
                [3,7]
            ],
            pause: true,
            currentTime: 0
        }
    },
    methods: {
        timeUpdateHandler() {
            let ref = this.$refs.videoRef
            let current = ref.currentTime

            let currentPlayRange = this.playRange.find(
                range => range[0] <= current && range[1] >= current
            )
            
            console.log("timeUpdateHandler -> currentPlayRange", currentPlayRange)

            // 判断是否抵达区间终点
            // 0.2为误差范围
            if (Math.abs(current - currentPlayRange[1]) < 0.2) {
                let nextRangeIndex =
                    this.playRange.indexOf(currentPlayRange) + 1
                console.log(nextRangeIndex)
                this.pauseVideo()
                // 如果没有下一个播放片段的话直接暂停
                if (nextRangeIndex >= this.playRange.length) {
                    //pause
                    this.pauseVideo()
                    return
                }

                // 跳转到下一个区间
                let nextRange = this.playRange[nextRangeIndex]
                console.log("timeUpdateHandler -> nextRange", nextRange)
                this.$refs.videoRef.currentTime = nextRange[0]
                this.playVideo()
            }
            this.currentTime = current
        },
        playVideo() {
            let ref = this.$refs.videoRef

            //  TODO:从PlayRange中选择一个起始区间，然后设置当前时间为该区间内再开始播放
            ref.play()
            this.pause = false
        },
        pauseVideo() {
            let ref = this.$refs.videoRef
            ref.pause()
            this.pause = true
        },
        loadHandler() {
            console.log(this.$refs.videoRef.duration)
        },
        clickHandler() {
            if (this.pause) {
                this.playVideo()
            } else {
                this.pauseVideo()
            }
        }
    }
}
</script>

<style scoped>
div {
    video {
        display: block;
        width: 400px;
    }
}
</style>
