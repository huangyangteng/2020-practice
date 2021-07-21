<template>
    <section>
        <div id="box" class="box"></div>
    </section>
</template>

<script>
export default {
    name: 'request-animation',
    data() {
        return {}
    },
    computed: {},
    methods: {},
    created() {},
    mounted() {
        // const element = document.getElementById('box')
        let start

        //计算帧速率
        let lastAnimationFrameTime=0
        function calcLateFps(now){
            const fps=1/(now-lastAnimationFrameTime)
            lastAnimationFrameTime=now
            return fps
        }

        


        function step(timestamp) {
            if (start === undefined) start = timestamp
            const between=timestamp-start
            const fps=calcLateFps(timestamp)
            console.log("step -> fps", fps)
            
            if(between<2000){
                window.requestAnimationFrame(step)
            }
            
        }

        window.requestAnimationFrame(step)
    }
}
</script>

<style  scoped>
.box {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background: rebeccapurple;
}
</style>
