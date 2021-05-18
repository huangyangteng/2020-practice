import { Button } from 'antd'
import React, { useEffect, useState,useRef } from 'react'
import List from './list'
import Query from './query'
import userStyle from './user.module.css'


function fetchList({name=''}){
    const list=[
        {id:0,name:'Jack'},
        {id:1,name:'Peter'},
        {id:2,name:'Mud'},
    ]
    let tmp=list
    if(name){
        tmp=tmp.filter(item=>item.name===name)
    }
  
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(tmp)
        },1000)
    })
}

function User(){
  
    const [queryParams,setQueryParams]=useState({})
    const [list,setList]=useState([])
    const childrenRef = useRef(null);


    const onQuery=(params)=>{
        setQueryParams(params)
    }
    const fetch=async()=>{
        const list=await fetchList(queryParams)
        setList(list)
    }
    useEffect(()=>{
        fetch()
    },
    [queryParams])

    const onReset=()=>{
        childrenRef.current.hello()
    }

    return <section className={userStyle.userPage}>
        <Button onClick={onReset}>重置表单</Button>
        <Query ref={childrenRef} onQuery={onQuery}></Query>
        <List list={list}></List>
        
    </section>
}
export default User