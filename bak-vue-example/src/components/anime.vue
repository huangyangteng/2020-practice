<template>
    <section class="wrapper">
        <section class="canvas">
            <div
                v-show="canShow(item)"
                class="box"
                :style="getStyle(item)"
                v-for="item in rule"
                :key="item.id"
                :class="{ ['attach_' + item.id]: true }"
            >
                <h1 style="font-size:32px;text-align:center">{{ item.id }}</h1>
            </div>
        </section>
        <section>
            <button @click="play">play</button>
            <button @click="pause">pause</button>
            <input
                style="width:400px"
                v-model="cur"
                @input="onChange"
                type="range"
            />
            <br />
            <p>当前时间{{ curTime }}</p>
            <p>总时间{{ maxEndTime }}</p>
        </section>

        <ul class="debug-list">
            <li v-for="(item, index) in rule" :key="item.id + '_' + index">
                <span>id：{{ item.id }}</span>
                <span>出现时间：{{ item.startTime }}-</span>
                <span>消失时间：{{ item.endTime }}-</span>
                <span>入场动画：{{ item.motionInClass?item.motionInClass:'无动画' }}-</span>
                <span>入场时间：{{ item.inTime}}-</span>
                <span>出场动画：{{ item.motionOutClass? item.motionOutClass:'无动画' }}</span>
                <span>出场时间：{{ item.outTime }}</span>
            </li>
        </ul>
    </section>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import { getAnim } from './motion'

// 同时播放多个元素
export default {
    name: 'anime',
    data() {
        return {
            anime: null,
            cur: 0,
            timer:0,
            rule: [
                // 第一种情况 0-3 不添加动画
                // {
                //     id: '0',
                //     x: 100,
                //     y: 0,
                //     w: 100,
                //     h: 100,
                //     startTime: 0,
                //     endTime: 10,
                //     inTime: 1,
                //     outTime: 1,
                //     retentionTime: 1,
                //     motionInClass: '',
                //     motionOutClass: '',
                //     retentionClass: ''
                // },
                // 第二种情况 1-4,添加出入场动画
                {
                    id: '1',
                    x: 0,
                    y: 100,
                    w: 100,
                    h: 100,
                    startTime: 1,
                    endTime: 4,
                    inTime: 1,
                    outTime: 1,
                    retentionTime: 1,
                    motionInClass: 'bounceInUp',
                    motionOutClass: '',
                    retentionClass: ''
                },

                {
                    id: '2',
                    x: 100,
                    y: 100,
                    w: 100,
                    h: 100,
                    startTime: 1,
                    endTime: 6,
                    inTime: 1,
                    outTime: 1,
                    retentionTime: 1,
                    motionInClass: 'fadeInLeft',
                    motionOutClass: 'fadeOutRight',
                    retentionClass: ''
                },
                // {
                //     id: '3',
                //     x: 0,
                //     y: 0,
                //     w: 100,
                //     h: 100,
                //     startTime: 8,
                //     endTime: 12,
                //     inTime: 1,
                //     outTime: 1,
                //     retentionTime: 1,
                //     motionInClass: 'fadeInLeft',
                //     motionOutClass: 'fadeOutRight',
                //     retentionClass: ''
                // },
                // {
                //     id: '4',
                //     x: 0,
                //     y: 0,
                //     w: 100,
                //     h: 100,
                //     startTime: 0,
                //     endTime: 3,
                //     inTime: 1,
                //     outTime: 1,
                //     retentionTime: 1,
                //     motionInClass: '',
                //     motionOutClass: '',
                //     retentionClass: ''
                // }
            ]
        }
    },
    computed: {
        maxEndTime() {
            return Math.max(...this.rule.map((item) => item.endTime))
        },
        animationList() {
            return this.anime
        },
        curTime() {
            return ((this.cur / 100) * this.maxEndTime).toFixed(2)
        },
        animationDuration(){
            return this.anime.duration
        }
    },
    methods: {
        canShow(attach) {
            // return true
            let curTime = this.curTime
            if (attach.startTime <= curTime && curTime <= attach.endTime) {
                return true
            } else {
                return false
            }
        },
        getStyle({ w, h, x, y }) {
            return {
                width: w + 'px',
                height: h + 'px',
                left: x + 'px',
                top: y + 'px'
            }
        },
        onChange() {
            this.anime.seek(this.anime.duration * (this.cur / 100))
        },
        play() {
            this.timer=setInterval(()=>{
                if(this.curTime>this.maxEndTime){
                    this.pause()
                }
                this.cur=Number(this.cur)+1
                this.onChange()
            },100)
        },
        pause() {
            // this.anime.pause()
           clearInterval(this.timer)
        },
        generateAnimRule() {
            this.anime = anime.timeline({
                loop: false,
                autoplay: false,
                duration: 1000,
                easing: 'easeInOutSine'
            })
            this.anime.add({
                target:'.canvas',
                duration:this.maxEndTime*1000
            })
            this.rule.forEach((item) => {
                console.log('generateAnimRule -> getAnim(item)', getAnim(item))
                const animation=getAnim(item)
                if(animation){
                    this.anime.add(animation, 0)
                }
            })

        }
    },
    mounted() {
        this.generateAnimRule()
    }
}
</script>

<style scoped>
.wrapper {
    width: 1200px;
    margin: 10px auto;
}
.canvas {
    position: relative;
    height: 400px;
}
.box {
    position: absolute;
    width: 200px;
    height: 100px;
    border-radius: 10px;
    background: #333;
}
.attach_1 {
    background: yellow;
}
.attach_2 {
    background: green;
}
.attach_3 {
    background: blue;
}
.attach_4 {
    background: gold;
}
.debug-list li {
    text-align: left;
}
.debug-list li span {
    margin-right: 10px;
}
</style>
