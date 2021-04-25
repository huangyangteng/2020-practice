<template>
    <section class="wrapper">
       
        
        <input style="padding:10px" v-model="curTime" type="number" />
         <button v-if="canCut" style="margin-left:10px;margin-bottom:10px" @click="cutVideo">裁剪</button>
            <vdr v-bind="marker"></vdr>
        <section class="video-track-wrapper">
            <vdr
                :style="{ background: item.color }"
                :active="item.id==activeId"
                @activated="tapSegment(item)"
                v-for="item in list"
                :key="item.id"
                v-bind="config"
                :w="item.width"
                :x="item.left"
                :z="item.z"
                @dragstop="dragstop"
                :onResize="onResizing"
                @resizestop="resizestop"
                :grid="grid"
            >
                   
            </vdr>
        </section>
        <section v-if="false">
            <div>左边 向左拖：{{this.leftToLeft}}</div>
            <div>左边 向右拖：{{this.leftToRight}}</div>
            <div>右边 向右拖：{{this.rightToRight}}</div>
            <div>右边 向左拖：{{this.rightToLeft}}</div>
        </section>
        <section>
            <div class="debug-wrapper" :class="{active:item.id==activeId}" v-for="item in degbugList" :key="item.key">
                <span>id：{{ item.id }}</span>
                <span>start：{{ item.start }}</span>
                <span>end：{{ item.end }}</span>
                <span>cutStart：{{ item.cutStart }}</span>
                <span>cutEnd：{{ item.cutEnd }}</span>
            </div>
        </section>
    </section>
</template>

<script>
function _formatNum(num){
    return Number(num.toFixed(3))

}
export default {
    name: 'Track',
    props:{
        frames:{
            type:Array,
            required:false
        }
    },
    data() {
        return {
            marker:{
                x:0,
                w:10,
                h:150,
                z:100,
                y:0,
                  handles: [],
                // 'class-name':'track-marker',
                resizable:false,
                parent:true,
                axis:'x'

                  
            },
            markerConfig:{
              

            },
            tmp:'',
            config: {
                parent: true,
                h: 64,
                handles: ['ml', 'mr'],
                'prevent-deactivation':true
            },
            list: [
                {
                    id: '00000000',
                    left: 0,
                    width: 1200,
                    start: 0,
                    end: 30,
                    cutStart: 0,
                    cutEnd: 30,
                    color: 'red',
                    z: 0
                }
            ],
            activeId: 0,
            duration: 30,
            wrapperWidth: 1200,
            curTime: 10,
            toTheLeft:false,
            leftToLeft:false,
            leftToRight:false,
            rightToRight:false,
            rightToLeft:false
        }
    },
    computed: {
        grid(){
             let dis=this._percentDistance(0.01)
            return [dis,1]
        },
        activeSegment() {
            return this.list.find((item) => item.id == this.activeId)
        },
        maxZ() {
            return Math.max(...this.list.map((item) => item.z))
        },
        cutElement() {
            // 只要curTime在某一个元素start和end范围之间
            return this.list.find((item) => {
                return this.curTime > item.start && this.curTime < item.end
            })
        },
        canCut() {
            return this.cutElement ? true : false
        },
        degbugList(){
            let newList=JSON.parse(JSON.stringify(this.list))
            newList.sort((r1,r2)=>{
                return r1.start-r2.start
            })
            return newList
        }
    },
    methods: {
        // getGrid(){
        //     let dis=this._percentDistance(0.01)
        //     return [dis,1]
        // },
        tapSegment(segment) {
            this.activeId = segment.id
            this.updatectiveSegemnt({
                z: this.maxZ + 1
            })
        },
        addSeg(args) {
            this.list.push({
                ...args,
                id: Math.floor(Math.random()*100000000),
                z: this.maxZ + 1
            })
        },
        cutVideo() {
            if (!this.canCut) {
                return
            }
            // 找到当前要裁剪的视频，修改cutStart cutEnd
            // 新增片段

            const { start, end, left, width, cutEnd } = this.cutElement

            const newWidth = this._percentDistance(this.curTime - start)
            const newCutEnd = this.curTime - start

            let newSeg = {
                left: left + newWidth,
                width: width - newWidth,
                cutStart: newCutEnd,
                cutEnd: cutEnd,
                start: this.curTime,
                end: end,
                color: 'yellow'
            }
            this.addSeg(newSeg)

            this._updateSegment(this.cutElement.id,{
                width: newWidth,
                cutEnd: _formatNum(this.curTime - start),
                end: this.curTime
            })
        },
        _percentDuration(x) {
            let result= (this.duration / this.wrapperWidth) * x
            return _formatNum(result)
        },
        _percentDistance(time) {
            let result= (this.wrapperWidth / this.duration) * time
            return _formatNum(result)

        },
        _updateSegment(id, props) {
            let index = this.list.findIndex((item) => item.id == id)
            if (index == -1) return
            let item = this.list[index]
            item = Object.assign({}, item, props)
            this.list.splice(index, 1, item)
        },
        updatectiveSegemnt(props) {
            this._updateSegment(this.activeId, props)
        },
        handleChange({ left, width }) {
            if (!width) {
                width = this.activeSegment.width
            }

            let start = this._percentDuration(left)
            let end = this._percentDuration(left + width)

            let oldWidth=this.activeSegment.width
            let distance= this._percentDuration(Math.abs(width-oldWidth))
            // 宽度改变也会影响cutStart,cutEnd
            let {cutStart,cutEnd}=this.activeSegment

            if(this.leftToLeft){//width增大，cutStart减少
                cutStart=cutStart-distance
            }
            if(this.leftToRight){
                cutStart=cutStart+distance
            }
            if(this.rightToRight){
                cutEnd=cutEnd+distance
            }
            if(this.rightToLeft){
                cutEnd=cutEnd-distance
            }
            if(cutStart<0){
                cutStart=0
            }
            if(cutEnd>this.duration){
               cutEnd=this.duration
            }
            
           
            this.updatectiveSegemnt({
                left,
                width,
                start:_formatNum(start),
                end:_formatNum(end),
                cutStart:_formatNum(cutStart),
                cutEnd:_formatNum(cutEnd)
            })
            // start通过left计算 end通过left+width计算
            //cutStart
        },
        dragstop(left) {
            this.handleChange({ left })
        },
        resizestop(left, top, width) {
            this.handleChange({ left, width })
        },
        resetDirection(){
            this.leftToLeft=false
            this.leftToRight=false
            this.rightToRight=false
            this.rightToLeft=false
        },
        onResizing(handle,x,y,width) {
            this.tmp=y
            

            // 拖左边的
            let dragLeft = handle == 'ml'
            // 拖右边的
            let dragRight = handle == 'mr'
            this.resetDirection()
            if(dragLeft){
                if(x<this.activeSegment.left){
                    this.leftToLeft=true
                }else{
                    this.leftToRight=true
                }
            }
            if(dragRight){
                if(width>this.activeSegment.width){
                    this.rightToRight=true
                }else{
                    this.rightToLeft=true
                }
            }


            const { cutStart, cutEnd,width:oldWidth } = this.activeSegment
            // cutStart为0，不能再向左拖
            if(cutStart<=0 && this.leftToLeft){
                return false
            }
            // cutEnd>=duration，不能在向右拖
            if(cutEnd>=this.duration && this.rightToRight){
                return false
            }   


            let distance= this._percentDuration(Math.abs(width-oldWidth))            
            if(this.leftToLeft && cutStart-distance<=0 ){
                return false
            }
            if(this.rightToRight &&  cutEnd+distance>=this.duration){
                return false
            }

            // 判断一次最少拖动0.1

            return true
          
            
        }
    },
    created() {
        
    }
}
</script>

<style>
.vdr {
    background: #333;
}
.wrapper {
    margin: 200px auto;
    text-align: left;
    width: 1600px;
}
.video-track-wrapper {
    width: 1200px;
    border: 1px solid #333;
    height: 64px;

    position: relative;
    border-radius: 8px;
}
.debug-wrapper {
    margin-top: 30px;
}
.debug-wrapper.active{
    font-weight: 800;
}
.debug-wrapper > span {
    margin-left: 10px;
    margin-right: 10px;
}
</style>
