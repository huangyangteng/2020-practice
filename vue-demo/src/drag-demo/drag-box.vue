<template>
    <section style="position: relative">
        <div
            :style="{ left: left + 'px' }"
            @mousedown="onMouseDown"
            style="
                position: absolute;
                width: 100px;
                height: 100px;
                background: darkblue;
            "
        ></div>
    </section>
</template>

<script>
export default {
    name: 'drag-box',
    data() {
        return {
            left: 0,
        }
    },
    methods: {
        onMouseDown(e) {
            //起始坐标
            const startX = e.clientX
            //起始位置
            const startLeft = this.left
            // --- mousemove事件
            const move = (moveEvent) => {
                const curX = moveEvent.clientX
                let distance = curX - startX
                let left = startLeft + distance
                // 边界处理 限制移动范围
                if (left < 0) {
                    left = 0
                }
                if (left > 1000) {
                    left = 1000
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
}
</script>
