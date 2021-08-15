<template>
    <section>
        <input type="file" @change="onChange">
        <div>进度：{{showProcess}}</div>
    </section>
</template>

<script>
import {getFormData} from '../tools/index'
import { USER_API } from '../api/user'
export default {
    name: 'upload',
    data() {
        return {
            process:0
        }
    },
    computed: {
        showProcess(){
            return  this.process*100+'%'
        }
    },
    methods: {
        async onChange(e){
            console.log("onChange -> e", e)
            const res = await USER_API.testUpload(getFormData({file:e.target.files[0]}),this.handleProcee)
            console.log("onChange -> res", res)

        },
        handleProcee(e){
            console.log("handleProcee -> e", e)
            this.process=e.loaded/e.total

        }
    },
    created() {}
}
</script>

<style lang='less' scoped></style>