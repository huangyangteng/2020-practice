<template>
    <div id="app">
        <Query @on-change="onQuery"></Query>
        <ComponentExample></ComponentExample>
    </div>
</template>
<script>
import Query from './components/Query'
import ComponentExample from './components/ComponentExample'
export default {
    components: { Query, ComponentExample },
    methods: {
        onQuery(value) {
            console.log('onQuery -> value', value)
        }
    }
}
</script>
<style lang="less">
body {
    background: #000;
    color: #fff;
    text-align: center;
    padding: 40px;
}
</style>
