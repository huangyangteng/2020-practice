<template>
    <section>
        <div id="waveform" class="waveform"></div>
    </section>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'
export default {
    name: 'audio-wave',
    data() {
        return {}
    },
    computed: {},
    methods: {},
    created() {},
    mounted() {
        var wavesurfer = WaveSurfer.create({
            container: '#waveform'
        });
        wavesurfer.on('ready', function () {
            // wavesurfer.play();
        });
        wavesurfer.load('http://localhost:8882/diyvrbt/material/2021-04-16/202104_1_O8EDQJmiaRLsNxbM5JtA3WCdK9lnyoa70qcEwDwN61GhvktJ4Q.mp3');

        
        console.log("mounted -> wavesurfer", wavesurfer)
    },
}
</script>

<style scoped>
    .waveform {
    max-width: 800px;
    height: 150px;
    margin: auto;    
}
</style>