import React from 'react'
class List extends React.Component{
    constructor(props){
        super(props)
        console.log()
        //父组件传递list  :[{},{}]
        //vue 渲染列表 v-for
        //react 渲染列表 
        // map    {} ->  <div></div>
        //JSX
        //vue  v-if v-show
        //react  ?   {showData&&<div>data</div>}
    }
    get noData(){//computed 
        return this.props.list.length===0
    }
    getList(){
        return this.props.list.map(item=>{
            return <div key={item.name}> ID：{ item.id } 姓名：{ item.name } 年龄：{ item.age }</div>
        })
    }
    
    render(){
        const list=this.getList()
        const dom=this.noData?<div>暂无数据</div>:<div>{list}</div>
        return <div>{dom} </div>
    }
}
export default List