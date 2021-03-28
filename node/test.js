const  dayjs =require('dayjs') 
const axios=require('axios') 
function formatList(list){
    return list.map(item=>{
         return{
             date:dayjs(item.rateContent.mainRate.date).format('YYYY/MM/DD HH:mm'),
             num:1,
             userName:item.orderInfo.userName,
             content:item.rateContent.mainRate.content,
             addContent:'',
             mediaList:item.rateContent.mainRate.mediaList.map(item=>'https'+item.thumbnail),
             variety:item.itemInfo.title,
             reason:'',
             process:'',
             note:''
         }
     })
 }

 let res=formatList([{
    "orderInfo": {
        "userName": "草头燕61",
        "userStar": "//img.alicdn.com/newrank/b_blue_2.gif",
        "orderId": "1650854089692607317"
    },
    "scoreStatus": {
        "imgUrl": "//img.alicdn.com/tps/TB1SZUjKVXXXXbpXFXXXXXXXXXX-21-23.png",
        "content": "生效中",
        "status": -1,
        "desc": "从2021年03月25日 17:06后48小时内生效"
    },
    "itemInfo": {
        "link": "//item.taobao.com/item.htm?id=631154094179",
        "itemId": 631154094179,
        "title": "海蒂的花园香织装饰直立月季好养抗病开花机器阳台庭院花卉盆栽苗",
        "price": "￥158.0"
    },
    "rateContent": {
        "mainRate": {
            "date": 1616663177000,
            "mediaList": [
                {
                    "uiType": "image",
                    "thumbnail": "//img.alicdn.com/i1/O1CN01kNdaMO1Oy4tO6kt4O_!!0-rate.jpg"
                },
                {
                    "uiType": "image",
                    "thumbnail": "//img.alicdn.com/i3/O1CN016GlLC41Oy4tRxF2Yy_!!0-rate.jpg"
                },
                {
                    "uiType": "image",
                    "thumbnail": "//img.alicdn.com/i4/O1CN01t0n3YA1Oy4tT5N91j_!!0-rate.jpg"
                },
                {
                    "uiType": "image",
                    "thumbnail": "//img.alicdn.com/i4/O1CN01n1hcTb1Oy4tTKy9VN_!!0-rate.jpg"
                }
            ],
            "feedId": "1126820599490",
            "content": "苗挺壮的，没有牵拉好，杆子上几乎没有侧芽，最不理解的是头部几个分枝的花苞为啥都掐掉了，不是先看花吗？这颗苗子不是很满意，比起一起拍的葡萄冰山实在是差远了。"
        }
    },
    "operator": {
        "dataSource": [
            {
                "rateType": "1",
                "method": "",
                "feedId": "",
                "asyncUrl": "",
                "uiType": "text",
                "params": 0,
                "content": "无需解释"
            },
            {
                "rateType": 0,
                "method": "GET",
                "feedId": 1126820599490,
                "asyncUrl": "",
                "complaintSource": "5",
                "uiType": "complaint",
                "params": {},
                "content": "投诉主评"
            }
        ]
    }
}])
console.log(res)


function getBase64(url){
    return new Promise((resolve)=>{
        axios.get(url, {responseType: 'arraybuffer'}).then(image=>{
            resolve( Buffer.from(image.data).toString('base64'))
        })
    })
}
// const  getBase64Async =async (url)=>{
//     return getBase64(url)
// }

// const getData=async ()=>{
//     console.log(res[0].mediaList)
//     return Promise.all(res[0].mediaList.map(url=>getBase64Async(url)))
// }
// getData().then(data=>{
//     console.log(data)
// }).catch(error=>{
//     console.log(error)
// })

const mediaList=[ 'https://img.alicdn.com/i1/O1CN01iHealI1NVqs0IDrQG_!!0-rate.jpg', 
'https//img.alicdn.com/i3/O1CN016GlLC41Oy4tRxF2Yy_!!0-rate.jpg', 
'https//img.alicdn.com/i4/O1CN01t0n3YA1Oy4tT5N91j_!!0-rate.jpg', 
'https//img.alicdn.com/i4/O1CN01n1hcTb1Oy4tTKy9VN_!!0-rate.jpg' ] 

getBase64(mediaList[0]).then(res=>{console.log(res)}).catch(error=>console.log(error))