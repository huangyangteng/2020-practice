<template>
    <section>
        <!-- 外部容器，宽度有限，超出显示滚动条 -->
        <div class="wrapper">
            <!-- 内容 -->
            <div class="content">
                <div
                    @mousedown="onMouseDown"
                    :style="{ left: left + 'px' }"
                    class="drag-item"
                ></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'scroll-drag',
    data() {
        return {
            left: 0,
        }
    },
    computed: {},
    methods: {
        onMouseDown(e) {
            //起始坐标
            const startX = e.clientX
            //起始位置
            const startLeft = this.left
            // 设置一次移动10px
            const grid = 10
            // --- mousemove事件
            const move = (moveEvent) => {
                const curX = moveEvent.clientX
                let distance = curX - startX
                let left = startLeft + Math.floor(distance / grid) * grid
                // 边界处理 限制移动范围
                if (left < 0) {
                    left = 0
                }
                this.left = left
            }
            // --- mouseup事件
            const up = () => {
                document.removeEventListener('mousemove', move)
                document.removeEventListener('mouseup', up)
            }

            document.addEventListener('mousemove', move)
            document.addEventListener('mouseup', up)
        },
    },
    created() {},
}
</script>

<style lang="less" scoped>
.wrapper {
    width: 1000px;
    height: 100px;
    border: 1px solid #ccc;
    overflow-x: auto;
    .content {
        width: 3000px;
        height: 100%;
        position: relative;
    }
}
.drag-item {
    height: 40px;
    width: 100px;
    background: yellow;
    position: absolute;
    left: 0;
}
</style>
