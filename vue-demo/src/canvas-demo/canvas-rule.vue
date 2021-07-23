<template>
    <section>
        <button @click="draw">draw</button>
        <button @click="clear">clear</button>
        <button @click="testDraw">test</button>
        <button @click="play">play</button>
        <button @click="pause">pause</button>
        <br />
        <canvas
            ref="canvas"
            id="canvas"
            width="640"
            height="360"
            class="canvas-content"
        ></canvas>
        <img v-show="false" src="../resource/necklace.jpeg" alt="" srcset="" />
        <video
            v-show="false"
            id="testVideo"
            width="200px"
            controls
            src="http://111.229.14.189/file/1.mp4"
        ></video>
    </section>
</template>

<script>
import { loadResource } from './util/resource'
export default {
    name: 'canvas-rule',
    data() {
        return {
            rule: [
                {
                    id: 0,
                    type: 'video',
                    src: 'http://111.229.14.189/file/1.mp4',
                    x: 0,
                    y: 0,
                    w: 160,
                    h: 90,
                },
                {
                    id: 1,
                    type: 'picture',
                    src: 'http://111.229.14.189/file/2.jpg',
                    x: 0,
                    y: 200,
                    w: 80,
                    h: 90,
                },
            ],
            ruleMap: {},
            /** @type {HTMLCanvasElement} */
            canvas: null,
            /** @type {CanvasRenderingContext2D} */
            ctx: null,
            W: 0,
            H: 0,
        }
    },
    methods: {
        play() {},
        pause() {},
        initCanvas() {
            this.canvas = document.getElementById('canvas')
            this.ctx = this.canvas.getContext('2d')
            this.W = this.canvas.width
            this.H = this.canvas.height
        },
        clear() {
            this.ctx.clearRect(0, 0, this.W, this.H)
        },

        async draw() {
            for (let i = 0; i < this.rule.length; i++) {
                const item = this.rule[i]
                const { id, type, x, y, w, h } = item
                /**@type{HTMLVideoElement} */
                const dom = this.ruleMap[id]
                if (type == 'picture') {
                    this.ctx.drawImage(dom, x, y, w, h)
                } else if (type == 'video') {
                    dom.currentTime = 1
                    setTimeout(() => {
                        console.log(dom.currentTime)
                        this.ctx.drawImage(dom, x, y, w, h)
                    }, 1000)
                }
            }
        },
        testDraw() {
            const video = document.getElementById('testVideo')
            video.currentTime = 2
            console.log('testDraw -> video', video)
            this.ctx.drawImage(video, 0, 0, 256, 256)
        },
    },
    async mounted() {
        this.initCanvas()
        this.ruleMap = await loadResource(this.rule)
    },
}
</script>

<style lang="less" scoped>
.canvas-content {
    background: #333;
}
</style>
