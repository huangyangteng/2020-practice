function List({list}){
    const del=(e)=>{
        // console.log(e.target.id)
        console.log('run')

    }
    //{}绑定表达式    
    const listDom=list.map(item=>{
       
        return <div key={item.name}> ID：{ item.id } 姓名：{ item.name } 年龄：{ item.age }</div>
    })
    const dom=list.length===0?<div>暂无数据</div>:<div>{listDom}</div>

    return <div>{dom} </div>

}

export default List