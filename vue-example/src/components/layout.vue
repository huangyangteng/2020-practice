<template>
    <section class="layout-wrapper">
        <section class="layout-section1">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'layout',
    data() {
        return {}
    },
    computed: {},
    methods: {},
    created() {}
}
</script>

<style lang='css' scoped>
    .layout-wrapper{
        min-width: 1200px;
        max-width: 1400px;
        margin:0 auto;
        border: 1px solid rebeccapurple;
        border-radius: 10px;
    }
    .layout-section1{
        display: flex;
        justify-content: space-between;
    }
    .box{
        background: gold;
        height: 112px;
        flex:1;
        transition: 0.5s;
    }
    .box:not(:last-child){
        margin-right: 16px;
    }
    .box:first-child{
        flex:3;
    }
    @media (min-width: 1440px) {
        
    }   
    /* 大于1760的屏幕 */
    @media (min-width: 1760px) {

        .box{
            height:142px ;
        }
        /* 任意元素 */
    }   
/* 600  */
</style>