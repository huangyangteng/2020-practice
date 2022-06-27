<template>
    <section style="margin: 100px">
        <!-- 外部容器，宽度有限，超出显示滚动条 -->
        <div class="wrapper" ref="wrapper">
            <!-- 内容 -->
            <div class="content" :style="{ width: wrapperWidth + 'px' }">
                <div
                    class="calibration"
                    v-for="item in wrapperWidth / 50"
                    :key="item"
                    :style="{ left: item * 50 + 'px' }"
                >
                    {{ item * 50 }}
                </div>
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
            wrapperWidth: 3000,
        }
    },
    computed: {},
    methods: {
        onMouseDown(e) {
            const width = e.target.offsetWidth
            //起始坐标
            const startX = e.pageX
            //起始位置
            let startLeft = this.left
            // 设置一次移动10px
            const grid = 1

            let maxLeft = this.wrapperWidth - width
            let maxScrollLeft =
                this.wrapperWidth - this.$refs.wrapper.offsetWidth
            console.log(maxScrollLeft)
            // 向右拖动，最大的left
            let wrapperMaxLeft =
                this.$refs.wrapper.offsetWidth + this.$refs.wrapper.scrollLeft

            // --- mousemove事件
            let direction = ''
            let oldX = 0
            const move = (moveEvent) => {
                const curX = moveEvent.pageX
                if (curX < oldX) {
                    direction = 'left'
                } else if (curX > oldX) {
                    direction = 'right'
                }
                oldX = curX
                let distance = curX - startX
                let left = startLeft + Math.floor(distance / grid) * grid
                // 边界处理 限制移动范围
                if (left < 0) {
                    left = 0
                }
                if (left > maxLeft) {
                    left = maxLeft
                }
                if (direction === 'left') {
                    if (this.left <= this.$refs.wrapper.scrollLeft) {
                        if (this.$refs.wrapper.scrollLeft > 0) {
                            this.$refs.wrapper.scrollLeft -= 10
                            this.left -= 10
                            console.log(
                                this.$refs.wrapper.scrollLeft,
                                this.left
                            )
                        } else {
                            this.left = 0
                            this.startLeft = this.left
                        }
                    } else {
                        this.left = left
                    }
                }
                if (direction === 'right') {
                    if (this.left + width >= wrapperMaxLeft) {
                        if (this.$refs.wrapper.scrollLeft >= maxScrollLeft) {
                            this.$refs.wrapper.scrollLeft = maxScrollLeft
                            this.left = maxLeft
                            this.startLeft = this.left
                        } else {
                            this.$refs.wrapper.scrollLeft += 20
                            this.left += 20
                        }
                    } else {
                        this.left = left
                    }
                }
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
    outline: 1px solid #ccc;
    overflow-x: auto;
    .content {
        width: 3000px;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
}
.drag-item {
    height: 40px;
    width: 100px;
    background: yellow;
    position: absolute;
    left: 0;
}
.calibration {
    position: absolute;
    font-size: 12px;
    user-select: none;
}
</style>
