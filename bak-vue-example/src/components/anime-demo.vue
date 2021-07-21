<template>
    <section>
        <div class="box"></div>
        <button @click="move">move</button>
    </section>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

export default {
    name: 'anime-demo',
    data() {
        return {}
    },
    computed: {},
    methods: {
        move(){
            anime({
                targets:'.box',
                opacity: [0, 1],
                translateX: [-3000, 25],
                scale: [3, 1],
                easing: 'cubicBezier(0.215, 0.61, 0.355, 1)'
            })

        }
    },
    created() {}
}
</script>

<style scoped>
    .box{
        width:50px;
        height: 50px;
        border-radius: 5px;
        background: yellowgreen;
    }
</style>