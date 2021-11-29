const shell = require('shelljs')
const schedule = require('node-schedule')

// 签到
function view(article_id) {
    return `
    curl 'https://api.juejin.cn/content_api/v1/article/detail?aid=2608&uuid=6998124906836215333' \
-X 'POST' \
-H 'Accept: */*' \
-H 'Content-Type: application/json' \
-H 'Origin: https://juejin.cn' \
-H 'Cookie: MONITOR_WEB_ID=3f0b11ca-a34c-4ade-80fb-4a42be10f138; _ga=GA1.2.1186065375.1629377929; _gid=GA1.2.1130945048.1629377929; _gat=1; n_mh=3XV9u62Zm0BZQbgRh0KzdyYnkpoQoO7I1Ne8XgF_9aQ; odin_tt=eadb483b764887db502a62e18d8d1786a244db7003a87efbca3057ca52faa56aae2e39a90ec1617e1ea6971f738cf3d4feaf802db22228e0e67f00c0764d3d41; passport_auth_status=e1c48541ec15f6e6be3ed879ac571b55%2C; passport_auth_status_ss=e1c48541ec15f6e6be3ed879ac571b55%2C; sessionid=180d463750b0df99a426b5365bba549a; sessionid_ss=180d463750b0df99a426b5365bba549a; sid_guard=180d463750b0df99a426b5365bba549a%7C1629377962%7C5184000%7CMon%2C+18-Oct-2021+12%3A59%3A22+GMT; sid_tt=180d463750b0df99a426b5365bba549a; sid_ucp_v1=1.0.0-KGE2NjkwMDBiNjc2YzFkNTA2NzJlNzc5ZjE5ZGUxYTllZWJjNzNmNmEKFgito7CqnoxmEKqr-YgGGLAUOAJA7AcaAmxmIiAxODBkNDYzNzUwYjBkZjk5YTQyNmI1MzY1YmJhNTQ5YQ; ssid_ucp_v1=1.0.0-KGE2NjkwMDBiNjc2YzFkNTA2NzJlNzc5ZjE5ZGUxYTllZWJjNzNmNmEKFgito7CqnoxmEKqr-YgGGLAUOAJA7AcaAmxmIiAxODBkNDYzNzUwYjBkZjk5YTQyNmI1MzY1YmJhNTQ5YQ; uid_tt=90539a027c3bae62b4b00c893928e081; uid_tt_ss=90539a027c3bae62b4b00c893928e081; passport_csrf_token=dca0f0ca93c71914b548baf1362fb02c; passport_csrf_token_default=dca0f0ca93c71914b548baf1362fb02c' \
-H 'Content-Length: 36' \
-H 'Accept-Language: zh-cn' \
-H 'Host: api.juejin.cn' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15' \
-H 'Referer: https://juejin.cn/post/${article_id}' \
-H 'Accept-Encoding: gzip, deflate, br' \
-H 'Connection: keep-alive' \
--data-binary '{"article_id":"${article_id}"}'
    `
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
function logic(){
    const list = [
    '7006914548179402783', 
    '7001730423457841183', 
    '7006914548179402783', 
    '7002288264413446157', 
    '7006914548179402783', 
    '7002288264413446157', 
    '7006914548179402783', 
    '7006914548179402783', 
    '7001730423457841183' ] 
    const fn = async () => {
        for (let i = 0; i < list.length; i++) {
            // const res=JSON.parse(shell.exec(view(list[i]),{silent:true}))
            console.log('zzz',i)
            shell.exec(view(list[i]), { silent: true })
            await sleep(1500)
            shell.exec(view(list[i]), { silent: true })
            await sleep(1500)
        }
    }
    fn()
}
const scheduleTask = () => {
    const articleId='7006914548179402783'
    schedule.scheduleJob({ second: 0}, () => {
        logic()
    })
    schedule.scheduleJob({ second: 50}, () => {
        console.log('run')
        shell.exec(view(articleId),{silent:true})
    })
    schedule.scheduleJob({ second: 30}, () => {
        console.log('run')
        shell.exec(view(articleId),{silent:true})
    })
    schedule.scheduleJob({ second: 59}, () => {
        console.log('run')
        shell.exec(view(articleId),{silent:true})
    })
    schedule.scheduleJob({ second: 10}, () => {
        console.log('run')
        shell.exec(view(articleId),{silent:true})
    })
    schedule.scheduleJob({ second: 20}, () => {
        console.log('run')
        shell.exec(view(articleId),{silent:true})
    })
    schedule.scheduleJob({ second: 40}, () => {
        console.log('run')
        shell.exec(view(articleId),{silent:true})
    })
}

;(function () {
    scheduleTask()
}())

//4240
