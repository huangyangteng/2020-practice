import React from 'react'

function List({list=[]}){
    const noData=list.length==0
    if(noData){
        return <div>无数据</div>
    }else{
        return <section>
            {list.map(item=><li key={item.id}>{item.name}</li>)}
        </section>
    }
    
}
export default List