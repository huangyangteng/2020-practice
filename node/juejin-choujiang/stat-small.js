const fs=require('fs')
const dayjs=require('dayjs')
function time(time = +new Date()) {
    var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
    return date.toJSON().substr(0, 19).replace('T', ' ');
}
//1629120170805 1629119557
;(function(){
    const list=JSON.parse(fs.readFileSync('./small.json'))
    let result=list.filter(item=>item.user_name=='淤于雨钰')
    result=result.map(item=>({...item,date:time(Number(item.date+'000'))}))
    console.log("result", result)
}())