import React, { useImperativeHandle, useState,forwardRef } from 'react'
import { Input,Button } from 'antd';


function Query({onQuery},ref){
    console.log(arguments)
    // 子组件使用useImperativeHandle暴露ref自动已的实例值
    useImperativeHandle(ref, () => ({
        hello: () => console.log('hello world!')
    }))
    const [params,setParams]=useState({
        name:'',
        phone:'',
        sex:''
    })
    const onNameChange=(e)=>{
        setParams(Object.assign({},params,{name:e.target.value}))
    }
    const onPhoneChange=(e)=>{
        setParams(Object.assign({},params,{phone:e.target.value}))
    }
    const onParamsChange=(value,key)=>{
        setParams(Object.assign({},params,{[key]:value}))
    }
    return <section>
        <Input value={params.name} onChange={onNameChange}  style={{width:'200px',marginRight:'10px'}} placeholder="请输入用户名称" />
        <Input value={params.phone} onChange={onPhoneChange}  style={{width:'200px'}} placeholder="请输入用户名称" />
        <Input value={params.sex} onChange={(e)=>{onParamsChange(e.target.value,'sex')}}  style={{width:'200px'}} placeholder="请输入性别" />
        <Button  type="primary" onClick={()=>{onQuery(params)}}>查询</Button>
        {JSON.stringify(params)}
    </section>
}
export default forwardRef(Query)