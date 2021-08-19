const fs=require('fs')
function removeRepeat(arr){
    return [...new Set(arr)]

}

;(function(){
    const list=JSON.parse(fs.readFileSync('./big.json'))
    console.log("list", list.length)
    const statMap={
        '随机限量徽章':{numbers:0,users:[],rate:0},
        'Yoyo抱枕':{numbers:0,users:[],rate:0},
        '掘金新款T恤':{numbers:0,users:[],rate:0},
        '掘金限量桌垫':{numbers:0,users:[],rate:0},
        'Switch':{numbers:0,users:[],rate:0},
        '乐高海洋巨轮':{numbers:0,users:[],rate:0},
        '掘金限量鼠标垫':{numbers:0,users:[],rate:0},
    }
    // const allCategories= removeRepeat(list.map(item=>item.lottery_name))
    // console.log("allCategories", allCategories)
    // 统计中奖数，中奖用户
    list.forEach(item=>{
        statMap[item.lottery_name].numbers++
        statMap[item.lottery_name].users.push(item.user_name)
    })
    // 计算中奖率numbers/allMounts
    const allMounts=list.length+41473
    for(let key in statMap){
        statMap[key].rate=statMap[key].numbers/allMounts *100 +'%'
    }
    // 统计中奖用户抽奖时间，看集中在哪个范围
    //统计中奖用户抽奖次数
    console.log(JSON.stringify(statMap))
}())