<template>
    <section style="overflow:hidden">
        <button @click="play">play</button>
        <button @click="pause">pause</button>
        <input style="width:400px" v-model="cur" @input="onChange" type="range" />
        <br>
        {{curTime}}

        <ul style="position:absolute;right:200px">
        <li   v-for="(item,index) in rule" :key="item.id+'_'+index">
           <span>{{item.startTime}}-</span>
            <span>{{item.endTime}}-</span>
            <span>{{item.motionInClass}}-</span>
            <span>{{item.motionOutClass}}</span>
        </li>
        </ul>

        <div v-show="canShow(item)" class="box" :style="getStyle(item)" v-for="item in rule" :key="item.id" :class="{['attach_'+item.id]:true}">
            <span>{{item.startTime}}-</span>
            <span>{{item.endTime}}-</span>
            <span>{{item.motionInClass}}</span>
            
        </div>
        <!-- <div class="box box2"></div>
        <div class="box box3"></div> -->
    </section>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import {getAnim} from './motion'

// 同时播放多个元素
export default {
    name: 'anime',
    data() {
        return {
            anime: null,
            cur: 0,
            rule:[
                // 第一种情况 0-3 不添加动画
                {id:'0',x:0,y:0,w:100,h:100,startTime:0,endTime:10,inTime:1,outTime:1,retentionTime:1,motionInClass:'',motionOutClass:'',retentionClass:''},
                // 第二种情况 1-4,添加出入场动画
                {id:'1',x:100,y:100,w:100,h:100,startTime:1,endTime:4,inTime:1,outTime:1,retentionTime:1,motionInClass:'bounceInUp',motionOutClass:'fadeOutRight',retentionClass:''},

                {id:'2',x:200,y:200,w:100,h:100,startTime:1,endTime:6,inTime:1,outTime:1,retentionTime:1,motionInClass:'fadeInLeft',motionOutClass:'fadeOutRight',retentionClass:''},
                {id:'3',x:300,y:300,w:100,h:100,startTime:8,endTime:12,inTime:1,outTime:1,retentionTime:1,motionInClass:'fadeInLeft',motionOutClass:'fadeOutRight',retentionClass:''},
                {id:'4',x:400,y:400,w:100,h:100,startTime:0,endTime:3,inTime:1,outTime:1,retentionTime:1,motionInClass:'',motionOutClass:'',retentionClass:''},
            ]
        }
    },
    computed: {
        maxEndTime(){
            return Math.max(...this.rule.map(item=>item.endTime))
        },
        animationList(){
            
            console.log("animationList -> this.anime", this.anime)
            return this.anime
        },
        curTime(){
            return (this.cur/100*this.maxEndTime).toFixed(2)
        }
    },
    methods: {
        canShow(attach){
             let curTime = this.curTime
            if (attach.startTime <= curTime && curTime <= attach.endTime) {
                return true
            } else {
                return false
            }
        },
        getStyle({w,h,x,y}){
            return {
                width:w+'px',
                height:h+'px',
                left:x+'px',
                top:y+'px'
            }

        },
        onChange() {
            this.anime.seek(this.anime.duration * (this.cur / 100))
        },
        play() {
            this.anime.play()
        },
        pause() {
            this.anime.pause()
        },
        generateAnimRule(){
            this.anime = anime.timeline({
                loop: false,
                autoplay: false,
                duration: 1000,
                easing: 'easeInOutSine',
            })
            this.rule.forEach((item) => {
                console.log("generateAnimRule -> getAnim(item)", getAnim(item))
                 this.anime.add(getAnim(item),10)
                // if(index==1){
                //     console.log("generateAnimRule -> getAnim(item)", getAnim(item))
                //     this.anime.add(getAnim(item),10)
                // }else if(index==2){
                //     //  this.anime.add({"targets":".attach_3","keyframes":[{"delay":8000},{"translateX":["-100%",0],"opacity":[0,1],"duration":1000,},{"delay":3000},{"opacity":[1,0],"translateX":"100%","duration":1000}]},10)
                // }else{
                //     this.anime.add(getAnim(item),10)
                // }
            });
            
        }
    },
    mounted() {
        this.generateAnimRule()
    }
}
</script>

<style scoped>
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
.attach_4{
    background: gold;
}
</style>
