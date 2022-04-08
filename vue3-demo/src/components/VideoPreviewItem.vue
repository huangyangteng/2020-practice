<template>
    <div
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
        class="video-wrapper"
        :style="wrapperStyle"
    >
        <video
            v-if="showVideo"
            :src="videoSrc"
            :poster="videoCover"
            muted
            autoplay
            loop
        ></video>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue'
let videoSrc = ref('http://111.229.14.189/file/test-verticle.mp4')
let videoCover = ref('http://111.229.14.189/file/test-verticle-cover.jpg')
let showVideo = ref(false)
let wrapperStyle = computed(() => {
    return {
        'background-image': `url(${videoCover.value})`,
        'background-size': '100% 100%',
        'background-repeat': 'no-repeat',
    }
})
const mouseEnter = () => {
    showVideo.value = true
}
const mouseLeave = () => {
    showVideo.value = false
}
</script>
<style lang="less" scoped>
.video-wrapper {
    width: 360px;
    height: 640px;
    background: #ccc;
    video {
        width: 100%;
        height: 100%;
    }
}
</style>
