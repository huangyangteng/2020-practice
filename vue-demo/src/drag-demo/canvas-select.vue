<template>
    <section id="editor" class="canvas-wrapper" @mousedown="mousedown">
        <div v-show="isShowArea" class="line" :style="boxStyle"></div>
        <div
            v-for="item in elements"
            class="box"
            :key="item.id"
            :style="getStyle(item)"
        ></div>
    </section>
</template>

<script>
export default {
    name: 'canvas-select',
    data() {
        return {
            editorX: 0,
            editorY: 0,
            // 选中区域坐标
            start: {
                x: 0,
                y: 0,
            }, //宽、高
            width: 0,
            height: 0,
            isShowArea: false, //是否展示选中区域
            elements: [
                { id: 0, x: 200, y: 200, w: 100, h: 100 },
                { id: 1, x: 300, y: 300, w: 100, h: 100 },
            ],
        }
    },
    computed: {
        boxStyle() {
            return {
                left: this.start.x + 'px',
                top: this.start.y + 'px',
                width: this.width + 'px',
                height: this.height + 'px',
            }
        },
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
            const up = () => {
                document.removeEventListener('mousemove', move)
                document.removeEventListener('mouseup', up)
                this.createGroup()
                // this.isShowArea = false
                // this.start={
                //     x:0,
                //     y:0
                // }
                // this.width=0
                // this.height=0
            }
            document.addEventListener('mousemove', move)
            document.addEventListener('mouseup', up)
        },
        createGroup() {
            const areaData = this.getSelectArea()
            console.log(areaData)
            if (areaData.length <= 1) {
                this.hideArea()
                return
            }
        },
        hideArea(){
            this.isShowArea = false
        },
        getSelectArea() {
            const result = []
            // 区域起点坐标
            const { x, y } = this.start
            // 计算所有的组件数据，判断是否在选中区域内
            this.elements.forEach((component) => {
                const { x: left, y: top, w: width, h: height } = component
                if (
                    x <= left &&
                    y <= top &&
                    left + width <= x + this.width &&
                    top + height <= y + this.height
                ) {
                    result.push(component)
                }
            })

            // 返回在选中区域内的所有组件
            return result
        },

        getStyle({ x, y, w, h }) {
            return {
                left: x + 'px',
                top: y + 'px',
                width: w + 'px',
                height: h + 'px',
            }
        },
    },
    mounted() {
        this.editor = document.getElementById('editor')
    },
}
</script>

<style scoped>
.canvas-wrapper {
    width: 800px;
    height: 600px;
    background: #ccc;
    position: relative;
}
.line {
    position: absolute;
    border: 1px solid red;
    z-index: 111;
}
</style>
