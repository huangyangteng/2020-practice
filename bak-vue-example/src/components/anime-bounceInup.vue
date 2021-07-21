<template>
    <section>
        <h1>bounceInUp</h1>
        <button @click="run">run</button>
        <input v-model="cur" @input="onChange" type="range" />
        <div class="box"></div>
        <div class="box1 animate__animated" ref="box1"></div>
    </section>
</template>

<script>
import anime from 'animejs'
import 'animate.css'
export default {
    name: 'anime-bounceInup',
    data() {
        return {
            cur: 0
        }
    },
    computed: {},
    methods: {
        run() {
            //duration 4000
            //0-20% 0-800
            //20%-40% 800
            this.t1.play()
            let old = this.$refs.box1.className
            this.$refs.box1.className =
                this.$refs.box1.className + ' animate__bounceInLeft'
            setTimeout(() => {
                this.$refs.box1.className = old
            }, 1000)
        },
        onChange() {
            this.t1.seek(this.t1.duration * (this.cur / 100))
        }
    },
    mounted() {
        this.t1 = anime.timeline()
        this.t1.add({
            targets: '.box',

            keyframes: [
                {
                    duration: 600,
                    opacity: [0, 1],
                    translateX: [-3000, 25],
                    scale: [3, 1],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: 150,
                    translateX: [25, -10],
                    scale: [1, 0.98],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: 150,
                    translateX: [-10, 5],
                    scale: [0.98, 0.995],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                },
                {
                    duration: 100,
                    translateX: [5, 0],
                    easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
                }
            ],
            duration: 1000
        })
    }
}
</script>

<style scoped>
.box {
    position: absolute;
    width: 200px;
    height: 100px;
    border-radius: 10px;
    background: blueviolet;
    left: 300px;
}
.box1 {
    position: absolute;
    width: 200px;
    height: 100px;
    border-radius: 10px;
    background: blueviolet;
    left: 300px;
    top: 300px;
}
</style>
