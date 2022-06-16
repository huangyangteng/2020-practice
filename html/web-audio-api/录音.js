// server.js
const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer((request, response) => {
    // 请求体
    console.log(new Date(), ':', JSON.stringify(request));
    // 需要加载的html文件
    const file = path.resolve(__dirname, './采集麦克风数据.html');
    // 判断文件是否存在
    fs.exists(file, exists => {
        if(!exists) console.log ('文件不存在，沙雕！');
        else {
            response.writeHeader(200, { "Content-Type" : "text/html" });
            response.end(fs.readFileSync(file, 'utf-8'));
        }
    });

}).listen(8090); // 监听8090端口

