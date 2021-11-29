<template>
    <section>
        <button @click="start">开始动画</button>
        <button @click="end">结束动画</button>
        <div class="line" :style="{ left: left + 'px' }"></div>
    </section>
</template>

<script>
export default {
    name: 'request-animation',
    data() {
        return {
            left: 10,
            timer: 0,
            pause: false,
            requestId: null,
        }
    },
    computed: {},
    methods: {
        loop() {
            this.requestId = null
            if (this.left < 200) {
                this.left += 1
                this.start()
            } else {
                this.end()
                this.left = 0
            }
        },
        start() {
            if (!this.requestId) {
                this.requestId = requestAnimationFrame(this.loop)
            }
        },
        end() {
            if (this.requestId) {
                cancelAnimationFrame(this.requestId)
                this.requestId = null
            }
        },
    },
    created() {},
}
</script>

<style lang="css" scoped>
.line {
    width: 10px;
    height: 100px;
    background-color: #42b983;
    border-radius: 3px;
    position: absolute;
    left: 0;
}
</style>
