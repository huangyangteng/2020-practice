#!/usr/bin/env node
const shell=require('shelljs')
const {getList}=require('./taobaoApi')
const dayjs=require('dayjs')
const axios=require('axios')
function getBase64(url){
    return new Promise((resolve)=>{
        axios.get(url, {responseType: 'arraybuffer'}).then(image=>{
            resolve( Buffer.from(image.data).toString('base64'))
        })
    })
}
//  const mediaList=item.rateContent.mainRate.mediaList.map(item=>'https'+item.thumbnail)
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
// const list = [1, 2, 3, 4, 5] //...an array filled with values

// const functionWithPromise = item => { //a function that returns a promise
//   return Promise.resolve('ok')
// }

// const anAsyncFunction = async item => {
//   return functionWithPromise(item)
// }

// const getData = async () => {
//   return Promise.all(list.map(item => anAsyncFunction(item)))
// }

// getData().then(data => {
//   console.log(data)
// })



;(function(){
    shell.exec(getList(),{silent:true}, (code, output, stderr) => {
        if (code == 0) {
            let list=JSON.parse(output).data.dataSource
            list=formatList(list)
          
        }
    })
}())



// 图片 记录图片数 坐标和大小  [{},{},{}]

