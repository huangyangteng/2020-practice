<template>
    <section>
        <mavon-editor
            v-bind="{
                subfield: false,
                defaultOpen: 'preview',
            }"
            v-model="tip"
        >
        </mavon-editor>
        <!-- 可拖拽元素1 -->
        <div data-index="0" draggable @dragstart="handleDragStart" class="box">
            box1
        </div>
        <!-- 可拖拽元素2 -->
        <div
            data-index="1"
            draggable
            @dragstart="handleDragStart"
            class="box green"
            style="margin-top: 110px"
        >
            box2
        </div>
        <!-- 画布 -->
        <div
            @drop="handleDrop"
            @dragover="handleDragOver"
            class="canvas"
            style="margin-left: 400px"
        >
            <div
                class="box"
                :style="{ backgroundColor: item.color }"
                v-for="(item, index) in canvasElements"
                :key="item.name + '_' + index"
            >
                {{ item.name }}
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'base-drag',
    components: {},
    data() {
        return {
            tip: `一个元素如果要设为可拖拽，必须给它添加一个**draggable**属性。
            另外，在将box拖拽到画布中，还有两个事件是起到关键作用的： 
            - dragstart事件，在拖拽刚开始时触发。它主要用于将拖拽的组件信息传递给画布。
            - drop 事件，在拖拽结束时触发。主要用于接收拖拽的组件信息。`,
            elements: [
                { name: 'box1', color: 'rgba(77, 77, 255, 1)' },
                { name: 'box2', color: 'greenyellow' },
            ],
            canvasElements: [],
        }
    },
    computed: {},
    methods: {
        handleDragStart(e) {
            e.dataTransfer.setData('index', e.target.dataset.index)
        },
        handleDrop(e) {
            e.preventDefault()
            e.stopPropagation()
            const index = e.dataTransfer.getData('index')
            this.canvasElements.push(this.elements[index])
        },
        handleDragOver(e) {
            //设置拖放目标，默认情况下浏览器阻止所有的拖放操作，所以需要监听dragenter或者dragover取消浏览器默认行为使元素可拖放.
            e.preventDefault()
        },
    },
    created() {},
}
</script>

<style lang="less" scoped></style>
