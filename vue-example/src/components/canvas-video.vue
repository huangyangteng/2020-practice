<template>
    <section>
        <button @click="play">play</button>
        <button @click="pause">pause</button>
        <button @click="clear">clear</button>
        <div>当前时长 {{curTime.toFixed(2)}}</div>
        <canvas id="canvas" width="600" height="320"></canvas>
        <video ref="a" v-show="false" src="../media/a.mp4"></video>
        <video ref="b" v-show="false" src="../media/b.mp4"></video>
    </section>
</template>

<script>
export default {
    name: 'canvas-video',
    data() {
        return {
            canvas:null,
            ctx:null,
            timer:0,
            curTime:0,
            rule:[
                    {start:0,end:3,cutStart:0,cutEnd:3,src:'./media/a.mp4'},//1 2 3
                    {start:3,end:6,cutStart:5,cutEnd:8,src:'./media/a.mp4'},//4 5 6   
                    {start:6,end:9,cutStart:0,cutEnd:3,src:'./media/a.mp4'}
                ]
        }
    },
    computed: {},
    methods: {
        draw(dom,start,end,curTime){
            dom.currentTime=start+curTime
            this.ctx.drawImage(dom,0,0)

        },
        playVideo(curTime){
            //0-3  play a(0-3)
            //4-6 play a(5-8)
            //7-9 play b(0-3)
        //   if(curTime>=0 && curTime<=3){
        //       this.draw(this.$refs.a,0,3,curTime)
        //   }else if(curTime>3 && curTime<=6){
        //       this.draw(this.$refs.a,5,8,curTime-3)
        //   }else if(curTime>6 && curTime<=9){
        //       this.draw(this.$refs.b,0,3,curTime-6)
        //   }
          this.rule.forEach(item=>{
            const {start,end,cutStart,cutEnd}=item
            if(curTime>=start && curTime<end){
                this.draw(this.$refs.a,cutStart,cutEnd,curTime-start)
            }
        })
            
        },
        play(){
            const duration= this.rule.map(item=>item.end-item.start).reduce((prev,next)=>prev+next)
            console.log("play -> duration", duration)
            this.timer=setInterval(()=>{
                if(this.curTime<duration){
                    this.curTime+=0.1
                    this.playVideo(this.curTime)
                }else{
                    this.curTime=duration
                    clearInterval(this.timer)
                }
            },100)
        },
        pause(){
            clearInterval(this.timer)
        },
        clear(){
            this.curTime=0
            clearInterval(this.timer)
        }
    },
    mounted() {
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')
    },
}
</script>

<style lang='less' scoped>
</style>