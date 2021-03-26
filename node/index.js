const xlsx = require('node-xlsx');
const fs=require('fs')
const list=require('./data')
// const list=data1.map(item=>{
//     return [
//         item.date,
//         item.number,
//         item.account,
//         item.comment,
//         item.zhuiping,
//         item.tupian,
//         item.pinzhong,
//         item.reason
//     ]
// })

var data = [{
    name: 'sheet1',
    data: [
        [
            '时间',
            '数量',
            '账号',
            '评论',
            '追评',
            '图片',
            '品种',
            '原因',
            '处理进度'
        ],
        ...list
       
    ]
},

]
var buffer = xlsx.build(data);

// 写入文件
fs.writeFile('a.xlsx', buffer, function(err) {
if (err) {
    console.log("Write failed: " + err);
    return;
}

console.log("Write completed.");
});