<template>
  <div id="nav">
    <a-button>hello</a-button>
  </div>
  <router-view />
</template>
<script>
export default {
  setup(props,context){
    console.log("setup -> props,context", props,context)
    // 默认只执行一次

  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
