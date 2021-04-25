<template>
    <section>
        <button @click="play">play</button>
        <button @click="pause">pause</button>
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
        },
        play(){//只能从头开始播放?
            if(this.counter>=this.videoSegments.length){
                this.pause()
                return 
            }
            this.$refs.v.currentTime=this.curSegment.cutStart
            this.$refs.v.play()
        },
        pause(){
            this.$refs.v.pause()
        },
        playVideo(){
            //播放第一段
            //播放第二段
            //播放第三段

        },
        onTimeUpdateNew(){
             if(this.counter>=this.videoSegments.length){
                this.pause()
                return 
            }
            const currentTime=this.$refs.v.currentTime
            console.log("onTimeUpdateNew -> currentTime", currentTime)

            if(currentTime>=this.curSegment.cutEnd){
            //    this.$refs.v.pause()
                this.counter+=1
                this.play()
            }
        },
        onTimeUpdate(){
            const curTime=this.$refs.v.currentTime
            console.log("onTimeUpdate -> curTime", curTime)
            const endTime=Math.max(...this.videoSegments.map(item=>item.end))
            if(curTime>=endTime){
                this.pause()
                return 
            }
            const segment=this.videoSegments.find(item=>curTime>=item.start && curTime<=item.end)
            if(segment){
                const {cutStart,cutEnd}=segment
                if(curTime<cutStart){
                    this.$refs.v.currentTime=cutStart
                }
                if(curTime>cutEnd){
                    this.$refs.v.currentTime=cutStart
                }

            }
          
        }
    },
    created() {}
}
</script>

<style lang='less' scoped></style>