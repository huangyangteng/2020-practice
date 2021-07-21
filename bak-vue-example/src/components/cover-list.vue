<template>
    <section class="frames">
        <div class="frame-item" v-for="(item,index) in list" :style="getStyle(item,index)" :key="index" ></div>
    </section>
</template>

<script>
export default {
    name: 'cover-list',
    props:{
        list:{
            type:Array,
            required:true
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        getStyle(item,index){
            return {
                left:50*index +'px',
                'background-image':`url(${item})`
            }
        }
    },
    created() {}
}
</script>

<style scoped>
    .frames{
        position: relative;
    }
    .frame-item{
           position: absolute;
        top: 0;
        width: 50px;
        height: 50px;
        background-size: cover;
        background-position: 50%;

    }

</style>