const shell = require('shelljs')
function draw(){
    return `curl 'https://api.juejin.cn/growth_api/v1/lottery/draw?aid=2608&uuid=6937097118519854603' \
    -H 'authority: api.juejin.cn' \
    -H 'pragma: no-cache' \
    -H 'cache-control: no-cache' \
    -H 'sec-ch-ua: "Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"' \
    -H 'sec-ch-ua-mobile: ?0' \
    -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36' \
    -H 'sec-ch-ua-platform: "macOS"' \
    -H 'content-type: application/json' \
    -H 'accept: */*' \
    -H 'origin: https://juejin.cn' \
    -H 'sec-fetch-site: same-site' \
    -H 'sec-fetch-mode: cors' \
    -H 'sec-fetch-dest: empty' \
    -H 'referer: https://juejin.cn/' \
    -H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7' \
    -H 'cookie: _ga=GA1.2.151728167.1605962485; n_mh=QqqO9vdPyoUgGdMUK7bmzGg_3PdkxHeXQjID5mYHilk; MONITOR_WEB_ID=f9b5a304-d583-464d-ac25-bd0fc1849132; passport_csrf_token_default=6ae74227ec74685add0271300bf1f275; passport_csrf_token=6ae74227ec74685add0271300bf1f275; sid_guard=5d56b314e811199a40ac8d4a1a03774b%7C1627264731%7C5184000%7CFri%2C+24-Sep-2021+01%3A58%3A51+GMT; uid_tt=df38a08a79a50cfc2bde3f330d5cef2c; uid_tt_ss=df38a08a79a50cfc2bde3f330d5cef2c; sid_tt=5d56b314e811199a40ac8d4a1a03774b; sessionid=5d56b314e811199a40ac8d4a1a03774b; sessionid_ss=5d56b314e811199a40ac8d4a1a03774b; _tea_utm_cache_2608={%22utm_source%22:%22timeline_5%22%2C%22utm_medium%22:%22banner%22%2C%22utm_campaign%22:%22zhongqiu_hl_202109%22}; _gid=GA1.2.1214201236.1630815455; _gat=1' \
    --data-raw '{}' \
    --compressed`
}

;(function(){
    let i=0
    setInterval(()=>{
        let res= JSON.parse(shell.exec(draw(),{silent:true}))
        if(res.err_no==0){
            console.log(`第${i++}次`,res.data.lottery_name)
        }
    },2000)
  
   
}())