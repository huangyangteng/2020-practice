<template>
    <section :style="{ color: color }">当前时间：{{ curTime }}</section>
</template>

<script>
export default {
    name: 'clock',
    props: {
        color: {
            type: String,
            default: '#333',
        },
    },
    data() {
        return {
            curTime: 0,
            timer: 0,
        }
    },
    mounted() {
        this.timer = setInterval(() => {
            console.log('hahah')
            this.curTime = new Date()
        }, 1000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
}
</script>
