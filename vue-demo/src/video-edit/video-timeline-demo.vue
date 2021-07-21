<template>
    <section>
        <div class="wrapper">
            <canvas id="canvas" />
            <div class="box" style="left: 300px"></div>
        </div>
        <span>一个刻度表示的时间：</span>
        <input v-model="eachScaleTime" @change="onScaleTimeChange" />
        <br />
        <span>一个长刻度中有多少个小刻度：</span>
        <input v-model="eachScale" @change="onScaleChange" />
        <br />
        <Button @click="reduce">减少</Button>
        <Button @click="add">增加</Button>
    </section>
</template>

<script>
import VideoEditingTimeline from './draw-rule'
// 一个小刻度
// 0.1 0.2 0.4 1 2 3

export default {
    name: 'video-timeline',
    data() {
        return {
            eachScaleTime: 1,
            eachScale: 10,
            config: {
                el: '#canvas',
                canvasWidth: 3800,
                canvasHeight: 50,
                minimumScale: 10, // 一个小刻度长度(单位px)
                minimumScaleTime: 1, // 一个小刻度代表时间（单位秒）
                minimumScalesInLongScale: 10, //一个长刻度中有几个最少刻度
                mode: 'bottom',
            },
        }
    },
    watch: {
        config: {
            immediate: true,
            handler(val) {
                console.log('handler -> val', val)
                this.$nextTick(() => {
                    const videoEditingTimeline = new VideoEditingTimeline(val)
                    console.log(
                        'handler -> videoEditingTimeline',
                        videoEditingTimeline
                    )
                })
            },
        },
    },
    methods: {
        onScaleTimeChange() {
            this.config = Object.assign({}, this.config, {
                minimumScaleTime: this.eachScaleTime,
            })
        },
        onScaleChange() {
            this.config = Object.assign({}, this.config, {
                minimumScalesInLongScale: this.eachScale,
            })
        },
        reduce() {
            console.log('reduce')
        },
        add() {
            console.log('add')
        },
    },
    mounted() {
        // setTimeout(() => {
        //     console.log(this.config, '---')
        //     this.config = Object.assign({}, this.config, {
        //         canvasHeight: 80,
        //     })
        // }, 1000)
    },
    created() {},
}
</script>

<style lang="less" scoped>
.wrapper {
    width: 1200px;
    overflow-x: auto;
    position: relative;
    > canvas {
        background: #000;
    }
}
</style>
