import React from 'react'

export const List=(list:[])=>{
    return <div>
        {list.map(item=><li>{item}</li>)}
    </div>
}