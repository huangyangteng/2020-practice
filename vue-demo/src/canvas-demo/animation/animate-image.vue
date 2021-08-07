<template>
    <section>
        <button @click="clear">clear</button>
        <button @click="run">run</button>
        <button @click="runByInterval">间隔固定时间运动</button>
        <button @click="stop">stop</button>
        <br />
        <canvas
            ref="canvas"
            id="canvas"
            width="640"
            height="360"
            class="canvas-content"
        ></canvas>
        <img
            v-show="false"
            src="http://111.229.14.189/file/2.jpg"
            alt=""
            srcset=""
            @load="imageOnLoad"
            ref="img"
        />
        <video
            v-show="false"
            id="testVideo"
            width="200px"
            controls
            src="http://111.229.14.189/file/1.mp4"
            ref="video"
        ></video>
    </section>
</template>

<script>
export default {
    name: 'animate-image',
    data() {
        return {
            /** @type {HTMLCanvasElement} */
            canvas: null,
            /** @type {CanvasRenderingContext2D} */
            ctx: null,
            W: 0,
            H: 0,
            stopFlag: false,
        }
    },
    methods: {
        initCanvas() {
            this.canvas = document.getElementById('canvas')
            this.ctx = this.canvas.getContext('2d')
            this.W = this.canvas.width
            this.H = this.canvas.height
        },
        clear() {
            this.ctx.clearRect(0, 0, this.W, this.H)
        },
        imageOnLoad() {
            console.log('img on load')
        },
        stop() {
            this.stopFlag = true
        },
        runByInterval() {
            var nextTime = 0 // the next animation begins at "nextTime"
            var duration = 2000 // run animation every 1000ms
            var x = 20 // the X where the next rect is drawn
            const animate = (currentTime) => {
                if (currentTime < nextTime) {
                    // request another loop of animation
                    requestAnimationFrame(animate)
                    // time hasn't elapsed so just return
                    // 时间没到设定的时间就返回
                    return
                }
                //  set nextTime
                nextTime = currentTime + duration
                console.log('animate -> nextTime', nextTime)

                // add another rectangle every 1000ms
                this.ctx.fillStyle =
                    '#' + Math.floor(Math.random() * 16777215).toString(16)
                this.ctx.fillRect(x, 30, 30, 30)

                x += 30
                requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)
        },
        run() {
            var minX = 20 // Keep the image animating
            var maxX = 250 // between minX & maxX
            var x = minX // The current X-coordinate
            var speedX = 1 // The image will move at 1px per loop
            var direction = 1 // The image direction: 1==righward, -1==leftward
            var y = 20 // The Y-coordinate

            const animate = () => {
                // clear
                this.clear()
                // draw
                this.ctx.drawImage(this.$refs.img, x, y)
                // update

                // update
                x += speedX * direction
                // keep "x" inside min & max
                if (x < minX) {
                    x = minX
                    direction *= -1
                }
                if (x > maxX) {
                    x = maxX
                    direction *= -1
                }
                if (!this.stopFlag) {
                    requestAnimationFrame(animate)
                } else {
                    this.stopFlag = false
                }
            }

            requestAnimationFrame(animate)
        },
    },
    async mounted() {
        this.initCanvas()
    },
}
</script>

<style lang="less" scoped>
.canvas-content {
    background: #ccc;
    margin-top: 20px;
}
</style>
