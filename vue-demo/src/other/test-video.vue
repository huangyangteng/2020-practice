<template>
    <section>
        <input type="file" @change="onUpload" />
        <video
            ref="video"
            @error="onError"
            @loadedmetadata="onLoad"
            v-if="src"
            :src="src"
            controls
            width="300"
        ></video>
    </section>
</template>

<script>
export default {
    name: 'test-video',
    data() {
        return {
            src: '',
            file: null,
        }
    },
    methods: {
        onUpload(e) {
            const videoFile = e.target.files[0]
            this.file = videoFile
            this.src = URL.createObjectURL(videoFile)
        },
        onLoad() {
            // 判断是否有画面
            const hasFrame = this.$refs.video.videoWidth
            if (!hasFrame) {
                this.transcoding()
                return
            }
            // ---处理视频逻辑
        },
        onError() {
            console.log('on error')
            this.transcoding()
        },
        transcoding() {
            //上传并转码
        },
    },
}
</script>
