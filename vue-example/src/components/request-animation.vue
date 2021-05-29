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
        const element = document.getElementById('box')
        let start

        function step(timestamp) {
            console.log("step -> timestamp", timestamp)
            if (start === undefined) start = timestamp
            const elapsed = timestamp - start

            // `Math.min()` is used here to make sure that the element stops at exactly 200px.
            element.style.transform =
                'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)'

            if (elapsed < 2000) {
                // Stop the animation after 2 seconds
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
