<template>
    <section style="overflow-y: auto">
        <mavon-editor
            v-bind="{
                subfield: false,
                defaultOpen: 'preview',
            }"
            v-model="tip"
        />
        <Button @click="getPosition">获取位置</Button>
        <section class="drag-wrapper" style="position: relative" id="wrapper">
            <div
                class="box"
                :style="boxStyle"
                @mousedown="handleMousedown"
                id="box"
            ></div>
        </section>
    </section>
</template>

<script>
const tip = `
### 首先需要将容器设为相对定位 position: relative，然后将每个组件设为绝对定位 position: absolute
### 然后pc端使用以下三个鼠标事件实现元素的拖动
- mousedown  在组件上按下鼠标时，记录组件当前的位置，即 xy 坐标 （xy 对应的是 css 中的 left 和 top）
- mousemove  每次鼠标移动时，都用当前最新的 xy 坐标减去最开始的 xy 坐标，从而计算出移动距离，再改变组件位置。
- mouseup ，鼠标抬起时结束移动
`
export default {
    name: 'move-base',
    data() {
        return {
            tip: tip,
            pos: {
                left: 100,
                top: 100,
            },
        }
    },
    computed: {
        boxStyle() {
            const { left, top } = this.pos
            return {
                left: left + 'px',
                top: top + 'px',
            }
        },
    },
    methods: {
        handleMousedown(e) {
            console.log('handle mousedown')
            e.stopPropagation()
            // this.$store.commit('setCurComponent', {
            //     component: this.element,
            //     zIndex: this.zIndex,
            // })

            const pos = { ...this.pos }
            const startY = e.clientY
            const startX = e.clientX
            // 如果直接修改属性，值的类型会变为字符串，所以要转为数值型
            const startTop = Number(pos.top)
            const startLeft = Number(pos.left)

            // 鼠标拖拽
            const move = (moveEvent) => {
                const currX = moveEvent.clientX
                const currY = moveEvent.clientY
                pos.top = currY - startY + startTop
                pos.left = currX - startX + startLeft
                this.pos = pos
            }

            const up = () => {
                document.removeEventListener('mousemove', move)
                document.removeEventListener('mouseup', up)
            }

            document.addEventListener('mousemove', move)
            document.addEventListener('mouseup', up)
        },
        getPosition() {
            const wrapperLeft = document
                .getElementById('wrapper')
                .getBoundingClientRect().left
            console.log('getPosition -> wrapperLeft', wrapperLeft)
            const childLeft =
                document.getElementById('box').getBoundingClientRect().left - 1
            console.log('getPosition -> childLeft', childLeft)

            console.log('left', childLeft - wrapperLeft)
        },
    },
    created() {},
}
</script>

<style lang="less" scoped>
.drag-wrapper {
    width: 800px;
    height: 500px;
    border: 1px solid #333;
}
</style>
