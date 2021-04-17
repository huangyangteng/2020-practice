<template>
    <section class="wrapper">
       
        
        <input style="padding:10px" v-model="curTime" type="number" />
         <button v-if="canCut" style="margin-left:10px;margin-bottom:10px" @click="cutVideo">裁剪</button>
        <section class="video-track-wrapper">
            <vdr
                :style="{ background: item.color }"
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
            >
                <h3>Hello World!</h3>
            </vdr>
        </section>
        <section>
            <div class="debug-wrapper" v-for="item in degbugList" :key="item.key">
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
export default {
    name: 'Track',
    data() {
        return {
            config: {
                parent: true,
                h: 64,
                parentLimitation: true,
                handles: ['ml', 'mr']
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
            toTheLeft:false
        }
    },
    computed: {
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

            const newWidth = this.percentDistance(this.curTime - start)
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

            this.updateSegment(this.cutElement.id,{
                width: newWidth,
                cutEnd: this.curTime - start,
                end: this.curTime
            })
        },
        percentDuration(x) {
            return (this.duration / this.wrapperWidth) * x
        },
        percentDistance(time) {
            return (1200 / 32) * time
        },
        updateSegment(id, props) {
            let index = this.list.findIndex((item) => item.id == id)
            if (index == -1) return
            let item = this.list[index]
            item = Object.assign({}, item, props)
            this.list.splice(index, 1, item)
        },
        updatectiveSegemnt(props) {
            this.updateSegment(this.activeId, props)
        },
        handleChange({ left, width }) {
            if (!width) {
                width = this.activeSegment.width
            }
            let start = this.percentDuration(left)
            let end = this.percentDuration(left + width)
            // 宽度改变也会影响cutStart,cutEnd

            this.updatectiveSegemnt({
                left,
                width,
                start,
                end
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
        onResizing(handle,x) {
            this.toTheLeft=x<this.activeSegment.left
            let direaction=this.toTheLeft?'向左':'向右'
            console.log(x,this.activeSegment.left,direaction)


            const { cutStart, cutEnd } = this.activeSegment
            if(cutStart==0 && cutEnd==this.duration){
                return true
            }
            // 向右拖
            // 向左拖
            
            // 拖左边的
            let dragLeft = handle == 'ml'
            // 拖右边的
            let dragRight = handle == 'mr'
            
            // 向左拖，且cutStart为0
            if (dragLeft && cutStart == 0) {
                return false
            }
            //向右拖，且cutEnd=duration
            if (dragRight && cutEnd == this.duration) {
                return false
            }
            
        }
    },
    created() {
        console.log(this.percentDuration(1200))
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
.debug-wrapper > span {
    margin-left: 10px;
    margin-right: 10px;
}
</style>
