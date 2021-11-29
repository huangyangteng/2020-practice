const shell = require('shelljs')
const schedule = require('node-schedule')

// 获取列表数据
function getList() {
    return `
    curl 'https://api.juejin.cn/study_api/v1/translate/query_recommend_list?aid=2608&uuid=6937097118519854603' \
        -H 'authority: api.juejin.cn' \
        -H 'pragma: no-cache' \
        -H 'cache-control: no-cache' \
        -H 'sec-ch-ua: "Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"' \
        -H 'content-type: application/json' \
        -H 'sec-ch-ua-mobile: ?0' \
        -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36' \
        -H 'sec-ch-ua-platform: "macOS"' \
        -H 'x-tt-env: boe_juejin_pin' \
        -H 'accept: */*' \
        -H 'origin: https://juejin.cn' \
        -H 'sec-fetch-site: same-site' \
        -H 'sec-fetch-mode: cors' \
        -H 'sec-fetch-dest: empty' \
        -H 'referer: https://juejin.cn/' \
        -H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7' \
        -H 'cookie: _ga=GA1.2.151728167.1605962485; n_mh=QqqO9vdPyoUgGdMUK7bmzGg_3PdkxHeXQjID5mYHilk; MONITOR_WEB_ID=f9b5a304-d583-464d-ac25-bd0fc1849132; passport_csrf_token_default=6ae74227ec74685add0271300bf1f275; passport_csrf_token=6ae74227ec74685add0271300bf1f275; sid_guard=5d56b314e811199a40ac8d4a1a03774b%7C1627264731%7C5184000%7CFri%2C+24-Sep-2021+01%3A58%3A51+GMT; uid_tt=df38a08a79a50cfc2bde3f330d5cef2c; uid_tt_ss=df38a08a79a50cfc2bde3f330d5cef2c; sid_tt=5d56b314e811199a40ac8d4a1a03774b; sessionid=5d56b314e811199a40ac8d4a1a03774b; sessionid_ss=5d56b314e811199a40ac8d4a1a03774b; _gid=GA1.2.1214201236.1630815455; _tea_utm_cache_2608={%22utm_source%22:%22web_feed10%22%2C%22utm_medium%22:%22banner%22%2C%22utm_campaign%22:%22daka_xiaozhishi_20210924%22}' \
        --data '{"page_no":1,"page_size":9}' \
        --compressed
    `
}
// 每10分钟查询一次，每天只发送一次邮件

const scheduleTask = () => {
    schedule.scheduleJob({ second: 0}, () => {
        logic()
    })
}
const sendEmail=()=>{
    console.log('send email')
}

;(function () {
    // scheduleTask()
   const res= JSON.parse(shell.exec(getList(),{silent:true}))
   if(res.err_code==0){
        if(res.data.length>0){
            sendEmail()
        }
   }
  
}())

//4240
