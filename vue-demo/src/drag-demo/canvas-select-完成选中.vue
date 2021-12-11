<template>
    <section id="editor" class="canvas-wrapper" @mousedown="mousedown">
        <div v-show="isShowArea" class="line" :style="boxStyle"></div>
    </section>
</template>

<script>
export default {
    name: 'canvas-select',
    data() {
        return {
            editorX:0,
            editorY:0,
            // 选中区域坐标
            start:{
                x:0,
                y:0
            },//宽、高
            width:0,
            height:0,
            isShowArea:false  //是否展示选中区域
        }
    },
    computed: {
        boxStyle(){
            return {
                left:this.start.x+'px',
                top:this.start.y+'px',
                width:this.width+'px',
                height:this.height+'px'
            }
        }
    },
    methods: {
        mousedown(e) {
            // 获取编辑器的位移信息
            const rectInfo = this.editor.getBoundingClientRect()

            this.editorX = rectInfo.x
            this.editorY = rectInfo.y
            const startX = e.clientX
            const startY = e.clientY
            this.start.x = startX - this.editorX
            this.start.y = startY - this.editorY
            // 展示选中区域
            this.isShowArea = true

            const move = (moveEvent) => {

                this.width = Math.abs(moveEvent.clientX - startX)
                this.height = Math.abs(moveEvent.clientY - startY)
                if (moveEvent.clientX < startX) {
                    this.start.x = moveEvent.clientX - this.editorX
                }

                if (moveEvent.clientY < startY) {
                    this.start.y = moveEvent.clientY - this.editorY
                }
            }
            const up=()=>{
                document.removeEventListener('mousemove',move)
                document.removeEventListener('up',up)
                this.isShowArea = false
                this.start={
                    x:0,
                    y:0
                }
                this.width=0
                this.height=0
            }
            document.addEventListener('mousemove',move)
            document.addEventListener('mouseup',up)
        },
    },
    mounted() {
        this.editor=document.getElementById('editor')
    },
}
</script>

<style  scoped>
.canvas-wrapper {
    width: 800px;
    height: 600px;
    background: #ccc;
    position: relative;
}
.line{
    position: absolute;
    border: 1px solid red;
}
</style>
