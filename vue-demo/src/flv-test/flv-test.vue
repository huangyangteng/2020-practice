<template>
    <section>
        <video id="videoElement"></video>
    </section>
</template>

<script>
import flvjs from 'flv.js'
export default {
    name: 'flv-test',
    data() {
        return {}
    },
    computed: {},
    methods: {},
    mounted() {

    if (flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement');
        var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: 'https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/89/11/561951189/561951189-1-80.flv?e=ig8euxZM2rNcNbRznwdVhwdlhWh3hwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1655737418&gen=playurlv2&os=cosbv&oi=0&trid=a8a47736d09446b9ac873c453d882d36u&mid=33442297&platform=pc&upsig=c2c2fcf08025678832a4898d433828e2&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=0,2&agrr=0&bw=138193&logo=80000000'
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
    }
}
</script>

<style lang='less' scoped></style>