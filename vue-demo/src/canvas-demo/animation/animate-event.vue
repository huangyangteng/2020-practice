<template>
    <section>
        <button @click="clear">clear</button>
        <button @click="stop">stop</button>
        <button @click="run">run</button>
        <button @click="run1">run1</button>
        <br />
        <h4>Move mouse over Canvas to sketch</h4>
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
    name: 'animate-clock',
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

        run() {
            const { ctx } = this
            // 设置样式
            ctx.strokeStyle = 'lightgray'
            ctx.fillStyle = 'skyblue'
            ctx.lineWidth = 5

            const PI = Math.PI
            const fullCircle = PI * 2
            const sa = -PI / 2 //== 12点时的angle
            console.log('run -> sa', sa)

            const animate = () => {
                // get the current seconds value from the system clock
                var date = new Date()
                var seconds = date.getSeconds()
                console.log('animate -> seconds', seconds)

                // clear the canvas
                ctx.clearRect(0, 0, this.W, this.H)

                // draw a full circle (== the clock face);
                ctx.beginPath()
                ctx.moveTo(100, 100)
                ctx.arc(100, 100, 75, 0, fullCircle)
                ctx.stroke()
                // draw a wedge representing the current seconds value
                ctx.beginPath()
                ctx.moveTo(100, 100)
                ctx.arc(100, 100, 75, sa, sa + (fullCircle * seconds) / 60)
                ctx.fill()

                // request another loop of animation
                requestAnimationFrame(animate)
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
