import React, { useEffect, useState } from 'react';
import Query from './QueryHook'
import List from './ListHook'
import axios from 'axios'

const useMount=(callback)=>{
  useEffect(()=>{
      callback()
  },[])
}
function QueryListHook(){
    const [list,setList]=useState([])

    // 每次有状态变更就会执行
    //状态变更  list改变
    useMount(()=>{
      getList()
    })
    // useEffect(()=>{
    //     getList()
      
    // },[])//添加一个空数组,只会执行一次,相当于声明周期的 componentDidMount

    const  getList=async(id=-1)=>{
        const res=await axios.request({
          method:'get',
          url:'http://111.229.14.189/gk-api/util/list',
          params:{
            id:id
          }
        })
        setList(res.data)
      
      }
    function handleQuery(value){
       getList(value)
    }

    return (//没有this
        <div className="App">
          <Query onQuery={handleQuery}></Query>
          <List list={list}></List>
        </div>
      );  

}

export default QueryListHook;
