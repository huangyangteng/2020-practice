<template>
    <section>
        <p>duration:{{ duration }}</p>
        <p>curTime:{{ curTime }}</p>
        <p>cutInfo:{{ cutInfo }}</p>
        <br />
        <BaseCut
            :duration="duration"
            :cur="curTime"
            @timeChange="onTimeChange"
            @rangeChange="onRangeChange"
        ></BaseCut>
    </section>
</template>

<script>
import BaseCut from './base-cut.vue'
export default {
    name: 'test-base-cut',
    data() {
        return {
            duration: 10,
            curTime: 0,
            cutInfo: null,
        }
    },
    methods: {
        onTimeChange(cur) {
            this.curTime = cur
        },
        onRangeChange(cutInfo) {
            this.cutInfo = cutInfo
        },
    },
    components: { BaseCut },
}
</script>

<style lang="less" scoped></style>
