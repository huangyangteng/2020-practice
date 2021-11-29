const schedule = require('node-schedule');
const shell=require('shelljs')
const COOKIE=`_ga=GA1.2.151728167.1605962485; n_mh=QqqO9vdPyoUgGdMUK7bmzGg_3PdkxHeXQjID5mYHilk; MONITOR_WEB_ID=f9b5a304-d583-464d-ac25-bd0fc1849132; passport_csrf_token_default=f7679ca6394e8f00f3b61853da4865b1; passport_csrf_token=f7679ca6394e8f00f3b61853da4865b1; passport_auth_status=41ec0aa013d3886d2ae85f2b7fad2b69%2C; passport_auth_status_ss=41ec0aa013d3886d2ae85f2b7fad2b69%2C; sid_guard=4941bc071d2ca76217c24dd9e1924ec6%7C1632449312%7C5184000%7CTue%2C+23-Nov-2021+02%3A08%3A32+GMT; uid_tt=4f56b2c75e01fa983c834fb38dbff797; uid_tt_ss=4f56b2c75e01fa983c834fb38dbff797; sid_tt=4941bc071d2ca76217c24dd9e1924ec6; sessionid=4941bc071d2ca76217c24dd9e1924ec6; sessionid_ss=4941bc071d2ca76217c24dd9e1924ec6; sid_ucp_v1=1.0.0-KGY2MTkyYWNlMmFjZmNkNDQxNWI1OWM3YjZhMDI4ZWU1NGI1NTkyNjEKFwjn6bC__fXlBxCg5rSKBhiwFDgCQPEHGgJsZiIgNDk0MWJjMDcxZDJjYTc2MjE3YzI0ZGQ5ZTE5MjRlYzY; ssid_ucp_v1=1.0.0-KGY2MTkyYWNlMmFjZmNkNDQxNWI1OWM3YjZhMDI4ZWU1NGI1NTkyNjEKFwjn6bC__fXlBxCg5rSKBhiwFDgCQPEHGgJsZiIgNDk0MWJjMDcxZDJjYTc2MjE3YzI0ZGQ5ZTE5MjRlYzY; _tea_utm_cache_2608={%22utm_source%22:%22juejinjiang_pyq2%22%2C%22utm_medium%22:%22wechat%22%2C%22utm_campaign%22:%22zhuanti_xingneng_20211011%22}; _gid=GA1.2.1272688293.1634610733`
const {sendErrorEmail,sendSuccessEmail}=require('./node-email')
// 签到
function signIn(){
    return `
     curl 'https://api.juejin.cn/growth_api/v1/check_in?_signature=_02B4Z6wo00101ko.H4gAAIDDtHNjubVswAZKOxsAAPOuAAlx6VxXpAuTLBl4IC1eYOBrCQaJL2bxRG2WMew4GQseXw5FTF7DWUseoJnrvSHnaYcWquty-lQ3DaLLkODkvNHe9Msoy7jWBaIz39' \
        -H 'authority: api.juejin.cn' \
        -H 'pragma: no-cache' \
        -H 'cache-control: no-cache' \
        -H 'sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"' \
        -H 'sec-ch-ua-mobile: ?0' \
        -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36' \
        -H 'content-type: application/json' \
        -H 'accept: */*' \
        -H 'origin: https://juejin.cn' \
        -H 'sec-fetch-site: same-site' \
        -H 'sec-fetch-mode: cors' \
        -H 'sec-fetch-dest: empty' \
        -H 'referer: https://juejin.cn/' \
        -H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7' \
        -H 'cookie:${COOKIE} ' \
	--data '{}' \
        --compressed
  `
}
// 抽奖
function luckyDraw(){
    return `
    curl 'https://api.juejin.cn/growth_api/v1/lottery/draw' \
        -H 'authority: api.juejin.cn' \
        -H 'pragma: no-cache' \
        -H 'cache-control: no-cache' \
        -H 'sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"' \
        -H 'sec-ch-ua-mobile: ?0' \
        -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36' \
        -H 'content-type: application/json' \
        -H 'accept: */*' \
        -H 'origin: https://juejin.cn' \
        -H 'sec-fetch-site: same-site' \
        -H 'sec-fetch-mode: cors' \
        -H 'sec-fetch-dest: empty' \
        -H 'referer: https://juejin.cn/' \
        -H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7' \
        -H 'cookie: ${COOKIE}' \
	--data '{}' \
        --compressed
    `
}

function logic(){
    console.log('run logic')
    try {
        const res= JSON.parse(shell.exec(signIn(),{silent:true})) 
        // err_no为0表示签到成功 err_no为15001为重复签到
        sendSuccessEmail()
        if(res.err_no==0){
            sendSuccessEmail()
            // 签到成功，执行以下自动抽奖，因为签到成功之后有一次免费的自动抽奖
           shell.exec(luckyDraw(),{silent:true})
        }
    } catch (error) {
        console.log('签到失败',error)
        // 如果自动签到失败，发送一封邮件通知自己
        sendErrorEmail()
    }
    
}
const scheduleTask = ()=>{
    // 每天早上7点执行
    schedule.scheduleJob({second:0,minute:0,hour:7},()=>{
        logic()
    }); 
}

;(function(){
    scheduleTask();
}())

