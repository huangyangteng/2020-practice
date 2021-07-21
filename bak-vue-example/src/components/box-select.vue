<template>
    <section>
        <div class="box" @mousedown="handleMouseDown">
            <div
                class="mask"
                v-show="is_show_mask"
                :style="
                    'width:' +
                        mask_width +
                        'left:' +
                        mask_left +
                        'height:' +
                        mask_height +
                        'top:' +
                        mask_top
                "
            ></div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'box-select',
    data() {
        return {
            is_show_mask: false,
            start_x: 0,
            start_y: 0,
            end_x: 0,
            end_y: 0,
            box_screen_left: 0,
            box_screen_top: 0
        }
    },
    computed: {
        mask_width() {
            return `${Math.abs(this.end_x - this.start_x)}px;`
        },
        mask_height() {
            return `${Math.abs(this.end_y - this.start_y)}px;`
        },
        mask_left() {
            return `${Math.min(this.start_x, this.end_x) -
                this.box_screen_left}px;`
        },
        mask_top() {
            return `${Math.min(this.start_y, this.end_y) -
                this.box_screen_top}px;`
        }
    },
    methods: {
        handleMouseDown(event) {
            this.is_show_mask = true
            this.start_x = event.clientX
            this.start_y = event.clientY
            this.end_x = event.clientX
            this.end_y = event.clientY

            document.body.addEventListener('mousemove', this.handleMouseMove)
            document.body.addEventListener('mouseup', this.handleMouseUp)
        },
        handleMouseMove(event) {
            this.end_x = event.clientX
            this.end_y = event.clientY
        },
        handleMouseUp() {
            this.is_show_mask = false
            document.body.removeEventListener('mousemove', this.handleMouseMove)
            document.body.removeEventListener('mouseup', this.handleMouseUp)
            //   this.handleDomSelect();
            this.resSetXY()
        },
        resSetXY() {
            this.start_x = 0
            this.start_y = 0
            this.end_x = 0
            this.end_y = 0
        }
    },
    mounted() {
        const dom_box = document.querySelector('.box')
        this.box_screen_left = dom_box.getBoundingClientRect().left
        this.box_screen_top = dom_box.getBoundingClientRect().top
    }
}
</script>

<style scoped>
.box {
    width: 800px;
    height: 800px;
    margin: 20px auto;
    position: relative;
    overflow: hidden;
    user-select: none;
    border: 1px solid red;
}
.mask {
    position: absolute;
    background: #409eff;
    opacity: 0.4;
}
</style>
