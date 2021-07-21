<template>
    <section class="opacity-video">
        <canvas id="mycanvas"></canvas>
        <img id="image" src="../resource/necklace.jpeg" style="display: none" />
        <!-- <audio src="../resource/among_the_stars.mp4"></audio> -->
        <video
            @loadedmetadata="videoOnLoad"
            v-show="false"
            loop="true"
            autoplay="true"
            id="video"
            src="../resource/among_the_stars.mp4"
        ></video>
    </section>
</template>

<script>
export default {
    name: 'opacity-video',
    data() {
        return {}
    },
    computed: {},
    methods: {
        videoOnLoad() {
            function initCanvas() {
                console.log('init canvas')
                mViewWidth = mCanvas.width = mCanvas.clientWidth
                mViewHeight = mCanvas.height = mCanvas.clientHeight
                mCtx = mCanvas.getContext('2d')
            }
            function draw() {
                // prevent flicker
                if (mVideo.currentTime >= 0.01) {
                    mCtx.clearRect(0, 0, mViewWidth, mViewHeight)
                    // source-over: 在目标图像上显示源图像(默认值)
                    mCtx.globalCompositeOperation = 'source-over'
                    mCtx.drawImage(mImage, 40, 0, mViewWidth, mViewHeight)
                    // 屏幕相乘，类似于叠加,但上下图层互换了
                    mCtx.globalCompositeOperation = 'hard-light'
                    // myVIdeo.currentTime
                    mCtx.drawImage(mVideo, 0, 0)
                }
            }

            function loop() {
                draw()
                requestAnimationFrame(loop)
            }
            var mImage = document.getElementById('image')
            const mVideo = document.getElementById('video')
            var mViewWidth = 0,
                mViewHeight = 0,
                mCanvas = document.getElementById('mycanvas'),
                mCtx

            // 初始化canvas
            initCanvas()
            requestAnimationFrame(loop)
        },
    },
    created() {},
}
</script>

<style lang="less" scoped>
.opacity-video {
    margin: 0;
    width: 1200px;
    height: 600px;
    background: black;
}
#mycanvas {
    position: absolute;
    margin: auto;
    width: 400px;
    height: 540px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
