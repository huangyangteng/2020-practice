const shell = require('shelljs')
const schedule = require('node-schedule')

// 签到
function view(article_id) {
    return `
    curl 'https://api.juejin.cn/content_api/v1/article/detail?aid=2608&uuid=6937097118519854603' \
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
    -H 'cookie: _ga=GA1.2.151728167.1605962485; n_mh=QqqO9vdPyoUgGdMUK7bmzGg_3PdkxHeXQjID5mYHilk; MONITOR_WEB_ID=f9b5a304-d583-464d-ac25-bd0fc1849132; passport_csrf_token_default=6ae74227ec74685add0271300bf1f275; passport_csrf_token=6ae74227ec74685add0271300bf1f275; sid_guard=5d56b314e811199a40ac8d4a1a03774b%7C1627264731%7C5184000%7CFri%2C+24-Sep-2021+01%3A58%3A51+GMT; uid_tt=df38a08a79a50cfc2bde3f330d5cef2c; uid_tt_ss=df38a08a79a50cfc2bde3f330d5cef2c; sid_tt=5d56b314e811199a40ac8d4a1a03774b; sessionid=5d56b314e811199a40ac8d4a1a03774b; sessionid_ss=5d56b314e811199a40ac8d4a1a03774b; _gid=GA1.2.1703676324.1627819267; _tea_utm_cache_2608={%22utm_source%22:%2220210812%22%2C%22utm_medium%22:%22Push%22%2C%22utm_campaign%22:%2231day%22}; _gat=1' \
    --data-raw '{"article_id":"${article_id}"}' \
    --compressed
    `
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
function logic(){
    const list = [
        '6998053123457548301',
        '6998051753241346055',
        '6997951227476574239',
        '6997735887115124766',
        '6997229914516619277',
        '6996809642500161544',
        '6996589872265822221',
        '6996083934815600654',
        '6995577333298135048',
        '6995356588458377253'
    ]
    const fn = async () => {
        for (let i = 0; i < list.length; i++) {
            // const res=JSON.parse(shell.exec(view(list[i]),{silent:true}))
            console.log(i)
            shell.exec(view(list[i]), { silent: true })
            await sleep(1500)
            shell.exec(view(list[i]), { silent: true })
            await sleep(1500)
        }
    }
    fn()
}
const scheduleTask = () => {
    schedule.scheduleJob({ second: 0}, () => {
        logic()
    })
}

;(function () {
    scheduleTask()
}())

//4240
