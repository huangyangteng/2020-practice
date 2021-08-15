<template>
    <div id="app">
        <h1>Axios Demo</h1>
        <Upload></Upload>
    </div>
</template>

<script>
import { USER_API } from '../src/api/user'
import Upload from './components/Upload'
export default {
    name: 'App',
    components:{
        Upload
    },
    methods: {
        async getRes() {
            const res = await USER_API.getList({
                id: 'ajdjfj'
            })
            console.log("getRes -> res", res)
        },
        async getFile() {
            const res = await USER_API.getFile('1.jpg')
            console.log("getFile -> res", res)
        }
    },
    created() {
        // this.getFile()
        // this.getRes()
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
