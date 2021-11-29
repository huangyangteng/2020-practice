<template>
    <section class="scroll-wrapper"  v-infinite-scroll="loadMore" :infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div v-for="item in 20" :key="item" class="scroll-item"></div>
    </section>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll'
export default {
    name: 'vue-scroll',
    directives:{infiniteScroll},
    data() {
        return {
            busy:false
        }
    },
    computed: {},
    methods: {
        loadMore(){
            this.busy=true
            setTimeout(()=>{
                this.busy=false
            },5000)
            console.log('load more')
        }
    },
    created() {}
}
</script>

<style scoped>
    .scroll-wrapper{
        border: 1px dotted;
        height: 400px;
        width: 400px;
        overflow-y: auto;
    }
    .scroll-item{
        height: 100px;
        background: #ccc;
        margin: 10px;
    }
</style>