<template>
    <section class="frames" :style="{ width: width + 'px' }">
        <div
            class="frame-item"
            v-for="(item, index) in list"
            :style="getStyle(item, index)"
            :key="index"
            :title="item.start + '_' + item.end"
        ></div>
    </section>
</template>

<script>
export default {
    name: 'frames-cover',
    props: {
        list: {
            type: Array,
            default: () => []
        },
        dragLeft: {
            type: Boolean,
            default: false
        },
        width: {
            type: Number,
            default: 1200
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        getStyle(item, index) {
            // const wrapperWidth = this.width
            if (this.dragLeft) {
                return {
                    right: this.width - (index + 1) * 50 + 'px',
                    'background-image': `url(${item.img})`
                }
            } else {
                return {
                    left: index * 50 + 'px',
                    'background-image': `url(${item.img})`
                }
            }
        }
    },
    created() {}
}
</script>

<style scoped>
.frames {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.frame-item {
    position: absolute;
    top: 0;
    width: 50px;
    height: 50px;
    background-size: cover;
    background-position: 50%;
}
</style>
