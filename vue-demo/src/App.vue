<template>
    <div id="app">
        <aside class="drag-demo-menu">
            <h1>DEMOS</h1>
            <router-link v-for="m in menus" :key="m.path" :to="m.path">{{
                m.label
            }}</router-link>
        </aside>
        <section class="drag-demo-content">
            <h1 style="margin-bottom: 40px" v-if="curMenu">
                {{ curMenu.label }}
            </h1>
            <router-view />
        </section>
    </div>
</template>
<script>
import './style/common.less'
export default {
    name: 'App',
    data() {
        return { url: '', offset: 10, left: 10 }
    },
    computed: {
        menus() {
            return this.$router.options.routes.filter((item) => !item.hide)
        },
        curMenu() {
            return this.menus.find((item) => item.path == this.$route.path)
        },
    },
}
</script>
<style lang="less">
html,
body {
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    height: 100vh;
}
.drag-demo-menu {
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #2c3e50;
    color: #fff;
    a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        margin-bottom: 10px;
    }
}
.drag-demo-content {
    padding: 20px;
    position: relative;
    // border: 2px solid red;
    flex: 1;
}
.router-link-active {
    color: #f5222d !important;
}
</style>
