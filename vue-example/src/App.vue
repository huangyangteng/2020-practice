<template>
  <div id="app">
    <video-cut-page v-if="false"></video-cut-page>
    <CanvasVideo v-if="false"></CanvasVideo>
    <Track  v-if="false"></Track>
    <play-video-segment v-if="false"></play-video-segment>
    <test-player v-if="false"></test-player>
    <audio-wave v-if="false"></audio-wave>
    <anime  v-if="false"></anime>
    <anime-bounceInup v-if="false"></anime-bounceInup>
    <my-video v-if="false"></my-video>
    <layout v-if="false"></layout>
    <request-animation></request-animation>
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
