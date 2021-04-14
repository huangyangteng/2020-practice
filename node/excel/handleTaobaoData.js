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
       try {
        return{
            date:dayjs(item.rateContent.mainRate.date).format('YYYY/MM/DD HH:mm'),
            num:1,
            userName:item.orderInfo.userName,
            content:item.rateContent.mainRate.content,
            addContent:'',
            mediaList:item.rateContent.mainRate.mediaList.map(item=>'https:'+item.thumbnail),
            variety:item.itemInfo.title,
            reason:'',
            process:'',
            note:''
        }
       } catch (error) {
       console.log("formatList -> error", error)
       console.log(item)
       return{
        date:dayjs(item.rateContent.mainRate.date).format('YYYY/MM/DD HH:mm'),
        num:1,
        userName:item.orderInfo.userName,
        content:item.rateContent.mainRate.content,
        addContent:'',
        mediaList:[],
        variety:item.itemInfo.title,
        reason:'',
        process:'',
        note:''
    }
           
       }
       
    })
}



;(function(){
    shell.exec(getList(),{silent:true}, async (code, output, stderr) => {
        if (code == 0) {
            let list=JSON.parse(output).data.dataSource
            console.log("list", list)
            list=formatList(list)
            const arr=[]
            for(let i=0;i<list.length;i++){
                let item=list[i]
                const requests=item.mediaList.map(item=>getBase64(item))
                const imgs=await Promise.all(requests)
               item.imgs=imgs
               arr.push(item)
            }
            const {handleExcel}=require('./excel')
            handleExcel(arr)
          
        }
    })
}())



// 图片 记录图片数 坐标和大小  [{},{},{}]

