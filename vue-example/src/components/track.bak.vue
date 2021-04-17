<template>


    <section class="wrapper">
    <button style="margin-bottom:10px" @click="cutVideo">裁剪</button>
    <input style="padding:10px" v-model="curTime" type="number">
    <section class="video-track-wrapper">
         <VueDragResize :style={background:item.color}  v-for="item in list" :key="item.id" v-bind="config" :isActive="item.id==activeId" :w="item.width"  @dragstop="handleChange" @resizestop="handleChange">
            <h3 >Hello World!</h3>
        </VueDragResize>
    </section>
    </section>
</template>

<script>
import VueDragResize from 'vue-drag-resize'

export default {
    name: 'Track',
    components:{
        VueDragResize
    },
    data() {
        return {
            config:{
                parentW:1200,
                parentH:64,
                h:64,
                'parentLimitation':true,
                sticks:['ml','mr'],
            },
            list:[
                {id:0,left:0,width:1200,start:0,end:32,cutStart:0,cutEnd:32,color:'red'}
            ],
            activeId:0,
            duration:30,
            wrapperWidth:1200,
            curTime:10
        }
    },
    computed: {
        activeSegment(){
            return this.list.find(item=>item.id==this.activeId)
        }
    },
    methods: {
        addSeg(args){
            this.list.push({
                ...args,
                id:Math.random(),
            })

        },
        cutVideo(){
            // 找到当前选中的视频，修改cutStart cutEnd
            // 新增片段
            // const this.activeSegment
            const {start,end,left,width,cutEnd}=this.activeSegment
            
            const newWidth=this.percentDistance(this.curTime-start)
            const newCutEnd=this.curTime-start

            let newSeg={
                left:left+newWidth,
                width:width-newWidth,
                cutStart:newCutEnd,
                cutEnd:cutEnd,
                start:this.curTime,
                end:end,
                color:'yellow'
            }
            // this.addSeg(newSeg)
            console.log("cutVideo -> newSeg", newSeg)

            console.log(newWidth,this.curTime-start)
            this.handleActiveSegemnt({
                width:newWidth,
                cutEnd:this.curTime-start,
                end:this.curTime
            })

        },
        percentDuration(x){
            return this.duration/this.wrapperWidth*x
        },
        percentDistance(time){
            return 1200/32*time

        },
        handleActiveSegemnt(obj){
            let index=this.list.findIndex(item=>item.id==this.activeId)
            if(index==-1)return 
            let item=this.list[index]
            item=Object.assign({},item,obj)
            this.list.splice(index,1,item)
        },
        handleChange({left,width}){
            let start=this.percentDuration(left)
            let end=this.percentDuration(left+width)
            console.log("handleChange -> start", start)
            console.log("handleChange -> end", end)
            this.handleActiveSegemnt({
                left,width,start,end
            })
            // start通过left计算 end通过left+width计算
            //cutStart
        },
      
    },
    created() {
        console.log(this.percentDuration(1200))
    }
}
</script>

<style  >
.vdr{
    background: #333;
}
.wrapper{
     margin:200px auto;
     text-align: left;
     width:1600px;
}
    .video-track-wrapper{
        width:1200px;
        border: 1px solid #333;
        height: 64px;
       
        position: relative;
        border-radius: 8px;

    }
</style>