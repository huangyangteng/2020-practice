<template>
    <section class="base-cut-wrapper" :style="wrapperStyle">
        <!--        drag-bar 拖拽改变时长-->
        <div
            class="cut-pointer"
            :style="{
                left: (curTime / duration) * 100 + '%',
            }"
        >
            <div class="drag-bar"></div>
        </div>
        <!--        裁剪范围-->
        <div :style="cutItemStyle" class="cut-item">
            <div class="tri-bar left"></div>
            <div class="tri-bar right"></div>
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
    data() {
        return {
            curTime: 0,
            startTime: 0,
            endTime: this.duration,
            minRange: 0.2, //裁剪的最小距离
        }
    },
    computed: {
        wrapperStyle() {
            return {
                width: this.width + 'px',
            }
        },
        grid() {
            //一次最少移动0.1s
            return this.timeToDis(0.1)
        },
        cutItemStyle() {
            let range = this.endTime - this.startTime
            return {
                width: (range / this.duration) * 100 + '%',
                left: (this.startTime / this.duration) * 100 + '%',
            }
        },
    },
    methods: {
        timeToDis(curTime) {
            return formatNum((curTime * this.width) / this.duration)
        },
        disToTime(distance) {
            return formatNum((distance * this.duration) / this.width)
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
