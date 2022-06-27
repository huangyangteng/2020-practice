<template>
    <section class="base-cut-wrapper" :style="wrapperStyle">
        <!--        drag-bar 拖拽改变时长-->
        <div
            class="cut-pointer"
            :style="{
                left: (curTime / duration) * 100 + '%',
            }"
            @mousedown="dragBarMouseDown"
        >
            <div class="drag-bar"></div>
        </div>
        <!--        裁剪范围-->
        <div
            @mousedown="mouseDownCutItem($event, 'center')"
            :style="cutItemStyle"
            class="cut-item"
        >
            <div
                @mousedown="mouseDownCutItem($event, 'start')"
                class="tri-bar left"
            ></div>
            <div
                @mousedown="mouseDownCutItem($event, 'end')"
                class="tri-bar right"
            ></div>
        </div>
    </section>
</template>

<script>
function formatNum(num) {
    return Number(num.toFixed(1))
}

export default {
    name: 'BaseCut',
    props: {
        duration: {
            // 总时长
            type: Number,
            required: true,
        },
        cur: {
            //当前播放时间
            type: Number,
            default: 0,
        },
        width: {
            //刻度与拖拽区域宽度
            type: [Number, String],
            default: 800,
        },
    },
    watch: {
        duration: {
            immediate: true,
            handler(duration) {
                console.log(duration)
                this.endTime = duration
                // 初始化时，向父组件发送裁剪信息(0-duration)
                this.emitRangeChange()
            },
        },
        start: {
            immediate: true,
            handler(start) {
                if (start && this.startTime !== start) {
                    this.startTime = start
                }
            },
        },
        end: {
            immediate: true,
            handler(end) {
                if (end && this.endTime !== end) {
                    this.endTime = end
                }
            },
        },
    },
    data() {
        return {
            curTime: 0,
            startTime: 0,
            endTime: 0,
            minRange: 0.2, //裁剪的最小距离
        }
    },
    computed: {
        wrapperStyle() {
            return {
                width: this.width + 'px',
            }
        },
        cutItemStyle() {
            let range = this.endTime - this.startTime
            return {
                width: (range / this.duration) * 100 + '%',
                left: (this.startTime / this.duration) * 100 + '%',
            }
        },
        grid() {
            //一次最少移动0.1s
            return formatNum((0.1 * this.width) / this.duration)
        },
    },
    methods: {
        dragBarMouseDown(e) {
            e.stopPropagation()

            const startX = e.clientX

            //记录开始位置
            const startSteps = this.curTime * 10

            const move = (moveEvent) => {
                const curX = moveEvent.clientX
                let movedSteps = Math.floor((curX - startX) / this.grid)
                if (movedSteps === 0) return
                let endSteps = startSteps + movedSteps
                let curTime = endSteps / 10
                if (curTime < 0) {
                    curTime = 0
                }
                if (curTime > this.duration) {
                    curTime = this.duration
                }
                this.curTime = curTime
                this.$emit('timeChange', formatNum(this.curTime))
            }

            const up = () => {
                document.removeEventListener('mousemove', move)
                document.removeEventListener('mouseup', up)
            }

            document.addEventListener('mousemove', move)
            document.addEventListener('mouseup', up)
        },

        mouseDownCutItem(e, type) {
            e.preventDefault()
            e.stopPropagation()

            const startX = e.clientX

            //开始时的步数
            let startSteps = this.startTime * 10
            if (type === 'end') {
                startSteps = this.endTime * 10
            }

            const move = (moveEvent) => {
                const curX = moveEvent.clientX
                //移动的步数
                let movedSteps = Math.floor((curX - startX) / this.grid)
                if (movedSteps === 0) {
                    return
                }
                //结束时的步数
                let endSteps = startSteps + movedSteps
                if (type === 'start') {
                    //拖左边
                    let startTime = endSteps / 10
                    //左边界
                    if (startTime < 0) startTime = 0
                    //右边界
                    if (startTime > this.endTime - this.minRange) {
                        startTime = this.endTime - this.minRange
                        // 提示用户最短时间间隔
                    }
                    this.startTime = startTime
                    this.followMove('start')
                } else if (type === 'end') {
                    //拖右边
                    let endTime = endSteps / 10
                    //左边界
                    if (endTime < this.startTime + this.minRange) {
                        endTime = this.startTime + this.minRange
                    }
                    //右边界
                    if (endTime > this.duration) {
                        endTime = this.duration
                    }
                    this.endTime = endTime
                    this.followMove('end')
                } else {
                    //拖中间
                    let range = this.endTime - this.startTime
                    let startTime = endSteps / 10
                    let endTime = startTime + range
                    if (startTime < 0) startTime = 0
                    if (endTime > this.duration) endTime = this.duration
                    if (endTime < range) endTime = range
                    if (startTime > this.duration - range)
                        startTime = this.duration - range
                    this.startTime = startTime
                    this.endTime = endTime
                    this.followMove('start')
                }
                this.emitRangeChange()
            }

            const up = () => {
                document.removeEventListener('mousemove', move)
                document.removeEventListener('mouseup', up)
            }

            document.addEventListener('mousemove', move)
            document.addEventListener('mouseup', up)
        },
        followMove(type) {
            if (type === 'start') {
                this.curTime = this.startTime
            } else if (type === 'end') {
                this.curTime = this.endTime
            }
            this.emitTimeChange()
        },
        emitRangeChange() {
            this.$emit('rangeChange', {
                startTime: formatNum(this.startTime),
                endTime: formatNum(this.endTime),
            })
        },
        emitTimeChange() {
            this.$emit('timeChange', this.curTime)
        },
    },
}
</script>

<style lang="less" scoped>
@primary-color: #106fff; //主题色
@color-bg: #f2f6fc; //用于背景底色
.base-cut-wrapper {
    position: relative;
    background: @color-bg;
    height: 40px;
}

.cut-pointer {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 99;
    user-select: none;
    margin-left: -3px;
    margin-top: -30px;

    .drag-bar {
        position: relative;
        width: 10px;
        height: 16px;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        background: @primary-color;
        user-select: none;
        // cursor: move;

        &::before {
            content: ' ';
            display: block;
            position: absolute;
            top: 0;
            left: 50%;
            z-index: 10;
            transform: translateX(-50%);
            width: 2px;
            height: 70px;
            background: @primary-color;
        }

        &::after {
            content: '';
            position: absolute;
            top: -10px;
            bottom: -10px;
            left: -10px;
            right: -10px;
            z-index: 1;
        }
    }
}

.cut-item {
    position: absolute;
    width: 100%;
    height: 100%;
    background: fade(@primary-color, 20);
    left: 0;
    top: 0;
}

.tri-bar {
    width: 10px;
    height: 100%;
    background: @primary-color;
    position: absolute;
    cursor: col-resize;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 16px;
        background: #fff;
    }
}

.tri-bar.left {
    left: 0;
    margin-left: -8px;
    border-radius: 2px 0 0 2px;
}

.tri-bar.right {
    right: 0;
    margin-right: -10px;
    border-radius: 0 2px 2px 0;
}
</style>
