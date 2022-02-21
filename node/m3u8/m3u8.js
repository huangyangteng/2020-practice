var m3u8ToMp4 = require("m3u8-to-mp4");
var converter = new m3u8ToMp4();
(async function() {
    await converter
      .setInputFile("https://media001.geekbang.org/371e2463193b4e96b9ae18db0b082a95/26f0c056892142999d626b249aa25220-7a367853e3a18ea8b89cecd50c17f588-ld-encrypt-stream.m3u8")
      .setOutputFile("dummy.mp4")
      .start();
   
    console.log("File converted");
  })();
  