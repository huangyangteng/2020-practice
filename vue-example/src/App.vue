<template>
  <div id="app">
    <CanvasVideo v-if="false"></CanvasVideo>
    <Track></Track>
   
  </div>
</template>

<script>
import CanvasVideo from './components/canvas-video'
import Track from './components/track'
export default {
  name: 'App',
  components: {
    CanvasVideo,
    Track
  }
}
</script>

<style>
body,html{
  margin: 0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #fff;
  background: #000; */
  height: 100vh;
}
</style>
