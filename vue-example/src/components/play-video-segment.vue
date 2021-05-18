<template>
    <section>
        <span>当前时间{{curTime}}</span>
        <br>
        <button @click="handlePlay">play</button>
        <button @click="handlePause">pause</button>
        <button @click="reset">reset</button>
        <video  @timeupdate="onTimeUpdateNew"  ref="v" style="height:400px" src="http://10.1.69.42:12300/diyvrbt/video/2021-04-16/202104_1056_18592_3BDuB4USv5yWqxQzkTYi.mp4"></video>

    </section>
</template>

<script>
export default {
    name: 'play-video-segment',
    data() {
        return {
            counter:0,
            videoSegments:[
                    {start:0,end:3,cutStart:0,cutEnd:3,src:'./media/a.mp4'},//播放0-3s
                    {start:3,end:6,cutStart:5,cutEnd:8,src:'./media/a.mp4'},//播放5-8s
                    {start:6,end:9,cutStart:0,cutEnd:3,src:'./media/a.mp4'}//播放0-3s
                ],
            timer:0,
            playTime:0,
            curTime:0,
            duration:9
           
        }
    },
    computed: {
        curSegment(){
            return this.videoSegments[this.counter]
        }
    },
    methods: {
        reset(){
            this.$refs.v.currentTime=0
            this.counter=0
            this.curTime=0
        },
        handlePlay(){
            this.timerPlay()
            this.videoPlay()
        },
        handlePause(){
            this.timerPause()
            this.videoPause()
        },


        timerPlay(){
            this.timer=setInterval(()=>{
                this.curTime=this.curTime+0.01
                if(this.curTime+0.01>=this.duration){
                    this.curTime=this.duration
                    this.timerPause()
                }
            },10)
        },
        timerPause(){
            clearInterval(this.timer)
        },
        getCutTime(){
            let item=this.videoSegments.find(item=>{
                const {start,end}=item
                return start<=this.curTime && this.curTime<=end
            })
             let dis=this.curTime-item.start
             return item.cutStart+dis
        },
        videoPlay(){
            if(this.counter>=this.videoSegments.length){
                this.videoPause()
                return 
            }
            this.$refs.v.currentTime=this.getCutTime()
            this.$refs.v.play()
        },
        videoPause(){
            this.$refs.v.pause()
        },
        onTimeUpdateNew(){
             if(this.counter>=this.videoSegments.length){
                this.videoPause()
                return 
            }
            const currentTime=this.$refs.v.currentTime
            console.log("onTimeUpdateNew -> currentTime", currentTime)

            if(currentTime>=this.curSegment.cutEnd){
                this.curTime=this.curSegment.end
                this.counter+=1
                this.videoPlay()
            }
        },
    },
    created() {}
}
</script>

<style lang='less' scoped></style>