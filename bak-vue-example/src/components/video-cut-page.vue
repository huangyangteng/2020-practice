<template>
    <section>
        <input type="file" @change="onUpload">
        <video v-show="false" ref="v" @loadedmetadata="loadImageList"></video>
        <div v-if="loading">loading....</div>
        <cover-list :list="coverList"></cover-list>
        <Track :frames="coverList"></Track>
    </section>
</template>

<script>
import {getCoverList} from './video-cut-tools'
export default {
    name: 'video-cut-page',
    data() {
        return {
            loading:false,
            coverList:[]
        }
    },
    computed: {},
    methods: {
        onUpload(e){
            let file = e.target.files[0]
            if(!file)return
            const url=URL.createObjectURL(file)   
            this.$refs.v.src=url

        },
        async loadImageList(){
            console.log('load-image-list')
            this.loading=true
            const list=await getCoverList(this.$refs.v,10)
            this.coverList=list
            this.loading=false
        }
    },
    created() {}
}
</script>

<style lang='less' scoped></style>