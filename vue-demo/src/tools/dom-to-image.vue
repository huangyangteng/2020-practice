<template>
    <section>
        <Button @click="toImage">dom to image</Button>
        <div class="dom-to-image-wrapper">
            <img src="http://111.229.14.189/file/2.jpg" alt="" srcset="" />
        </div>
    </section>
</template>

<script>
import domToImage from 'dom-to-image'

export default {
    name: 'dom-to-image',
    data() {
        return {}
    },
    computed: {},
    methods: {
        async toImage() {
            const node = document.querySelector('.dom-to-image-wrapper')
            const res = await domToImage.toPng(node)
            let img = new Image()
            img.src = res
            document.body.appendChild(img)
            console.log(res)
        },
    },
    created() {},
}
</script>

<style lang="less" scoped>
.dom-to-image-wrapper {
    border: 3px solid red;
}
</style>
