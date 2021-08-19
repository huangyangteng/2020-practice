#!/usr/bin/env node
const shell = require('shelljs')
const fs=require('fs')
/**
 * 休眠xxxms
 * @param {Number} milliseconds
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
function getBig(page) {
    return `
        curl 'https://api.juejin.cn/growth_api/v1/lottery_history/global_big' \
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
        -H 'cookie: _ga=GA1.2.151728167.1605962485; n_mh=QqqO9vdPyoUgGdMUK7bmzGg_3PdkxHeXQjID5mYHilk; MONITOR_WEB_ID=f9b5a304-d583-464d-ac25-bd0fc1849132; passport_csrf_token_default=6ae74227ec74685add0271300bf1f275; passport_csrf_token=6ae74227ec74685add0271300bf1f275; sid_guard=5d56b314e811199a40ac8d4a1a03774b%7C1627264731%7C5184000%7CFri%2C+24-Sep-2021+01%3A58%3A51+GMT; uid_tt=df38a08a79a50cfc2bde3f330d5cef2c; uid_tt_ss=df38a08a79a50cfc2bde3f330d5cef2c; sid_tt=5d56b314e811199a40ac8d4a1a03774b; sessionid=5d56b314e811199a40ac8d4a1a03774b; sessionid_ss=5d56b314e811199a40ac8d4a1a03774b; _gid=GA1.2.1703676324.1627819267; _tea_utm_cache_2608={%22utm_source%22:%2220210812%22%2C%22utm_medium%22:%22Push%22%2C%22utm_campaign%22:%2231day%22}' \
        --data '{"page_no":${page}}}' \
        --compressed
    `
}

function getSmall(page) {
    return `
        curl 'https://api.juejin.cn/growth_api/v1/lottery_history/global_small' \
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
        -H 'cookie: _ga=GA1.2.151728167.1605962485; n_mh=QqqO9vdPyoUgGdMUK7bmzGg_3PdkxHeXQjID5mYHilk; MONITOR_WEB_ID=f9b5a304-d583-464d-ac25-bd0fc1849132; passport_csrf_token_default=6ae74227ec74685add0271300bf1f275; passport_csrf_token=6ae74227ec74685add0271300bf1f275; sid_guard=5d56b314e811199a40ac8d4a1a03774b%7C1627264731%7C5184000%7CFri%2C+24-Sep-2021+01%3A58%3A51+GMT; uid_tt=df38a08a79a50cfc2bde3f330d5cef2c; uid_tt_ss=df38a08a79a50cfc2bde3f330d5cef2c; sid_tt=5d56b314e811199a40ac8d4a1a03774b; sessionid=5d56b314e811199a40ac8d4a1a03774b; sessionid_ss=5d56b314e811199a40ac8d4a1a03774b; _gid=GA1.2.1703676324.1627819267; _tea_utm_cache_2608={%22utm_source%22:%2220210812%22%2C%22utm_medium%22:%22Push%22%2C%22utm_campaign%22:%2231day%22}' \
        --data '{"page_no":${page}}' \
        --compressed
    `
}
const statData=async(type='big')=>{
    const map={
        small:{
            file:'small-2.json',
            fetchFn:getSmall,
            step:10
        },
        big:{
            file:'big.json',
            fetchFn:getBig,
            step:10
        }
    }
    const {file,fetchFn,step}=map[type]
    let list = []
    let pageNo = 1284
    let maxSize=1288 //最大页数，先给个5,后面需要计算得到
    let flag=true//maxSize只设置一次
    while (pageNo<=maxSize) {
        try {
            await sleep(0)
            let res=shell.exec(fetchFn(pageNo), { silent: true })
            let {
                err_no,
                data
            } = JSON.parse(res)
            data=data || { lotteries:null,count:0}
            let { lotteries=null,count=0 }=data
            if(flag){
                maxSize=Math.floor((count+step)/step)
                flag=false
            }
            if (err_no == 0 && lotteries) {
                list.push(...lotteries)
                console.log("statData -> pageNo", pageNo)
                pageNo++
            } else {
                break
            }
        } catch (error) {
            console.log("statData -> error", error)
            break
            
        }
    }
    console.log(list.length)
    fs.writeFileSync(file,JSON.stringify(list))
}

;(function () {
    // statData('big')
    statData('small')
    // const res=JSON.parse(shell.exec(getSmall(1)))
    // console.log("res", res)
})()
