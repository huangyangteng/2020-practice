<template>
    <section>
        <input type="file" @change="onChange"/>
        <video ref="video"  :src="src" controls @loadedmetadata="loadVideoData"></video>
    </section>
</template>

<script>
export default {
    name: 'my-video',
    data() {
        return {
            src:''
        }
    },
    computed: {},
    methods: {
        onChange(e){
            console.log("onChange -> e", e)
            console.log(e.target.files[0].type)
            this.src=URL.createObjectURL(e.target.files[0])

        },
        loadVideoData(){
            this.$refs.video.videoWidth
            console.log("loadVideoData -> this.$refs.video.videoWidth", this.$refs.video.videoWidth)
            console.log("loadVideoData -> this.$refs.video", this.$refs.video)
        }
    },
    created() {}
}
</script>

<style scoped></style>