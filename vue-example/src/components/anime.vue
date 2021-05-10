<template>
    <section>
        <button @click="play">play</button>
        <button @click="pause">pause</button>
        <input v-model="cur" @input="onChange" type="range" />
        <div class="box" :style="getStyle(item)" v-for="item in rule" :key="item.id" :class="{['attach_'+item.id]:true}"></div>
        <!-- <div class="box box2"></div>
        <div class="box box3"></div> -->
    </section>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
const ANIM_MAP={
    fadeIn(){
        return {
             opacity:[0,1]
        }
    },
    fadeInLeft(){
        return {
            translateX:['-100%',0],
            opacity:[0,1]
        }
    },
    bounceInUp(){
        return 
    },
    fadeOut(){
        return {
             opacity:[1,0]
        }
    },
    fadeOutRight(){
        return {
             opacity:[1,0],
             translateX:'100%'
        }
    },
    
}
function getAnim(item){
    const {id,startTime,endTime,inTime,outTime,motionInClass,motionOutClass}=item
    //motionIn
    //retention
    //motionOut
    let duration=endTime-startTime-inTime-outTime
    return {
        targets: '.attach_'+id,
        keyframes: [
                {...ANIM_MAP[motionInClass](),duration:inTime*1000},
                {delay:duration*1000},
                {...ANIM_MAP[motionOutClass](),duration:outTime*1000}
        ]
    }

}
export default {
    name: 'anime',
    data() {
        return {
            anime: null,
            cur: 0,
            rule:[
                {id:'1',x:100,y:100,w:100,h:100,startTime:0,endTime:3,inTime:1,outTime:1,retentionTime:1,motionInClass:'fadeInLeft',motionOutClass:'fadeOutRight',retentionClass:''},
                {id:'2',x:200,y:200,w:100,h:100,startTime:4,endTime:6,inTime:1,outTime:1,retentionTime:1,motionInClass:'fadeInLeft',motionOutClass:'fadeOutRight',retentionClass:''},
                {id:'3',x:300,y:300,w:100,h:100,startTime:8,endTime:10,inTime:1,outTime:1,retentionTime:1,motionInClass:'fadeInLeft',motionOutClass:'fadeOutRight',retentionClass:''},
            ]
        }
    },
    computed: {},
    methods: {
        getStyle({w,h,x,y}){
            return {
                width:w+'px',
                height:h+'px',
                left:x+'px',
                top:y+'px'
            }

        },
        onChange() {
            console.log(this.cur)
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
                update: function(anim) {
                    console.log('mounted -> anim', anim.progress)
                }
            })
            this.rule.forEach(item => {
                console.log("generateAnimRule -> getAnim(item)", getAnim(item))
                this.anime.add(getAnim(item))
                
            });
            console.log(this.anime)
            // this.anime.add({
            //     targets: '.box1',
            //     keyframes: [
            //         {translateX: [-200,500],opacity:[0,1],duration:1000},
            //         {delay:2000},
            //         {translateX: [500,800],opacity:[1,0],duration:1000}
            //     ]
            // })
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
</style>
