var m3u8ToMp4 = require("m3u8-to-mp4");
var converter = new m3u8ToMp4();
(async function() {
    await converter
      .setInputFile("https://res001.geekbang.org//media/audio/3b/87/3b1729fc5eaa20f711b753f65d147d87/ld/ld.m3u8")
      .setOutputFile("dummy.mp4")
      .start();
   
    console.log("File converted");
  })();
  