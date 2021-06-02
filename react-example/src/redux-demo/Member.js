import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {add} from './MemberSlice'
import React from 'react'
export function Member(){
    const [name,setName]=useState(null)
    const members=useSelector(state=>state.member.list)
    const dispatch=useDispatch()
    const addMember=()=>{
        console.log('add member')
        dispatch(add({id:Math.random(),name:name}))
        
    }
    return (
        <section>
            <input onInput={(e)=>{setName(e.target.value)}}></input>
            <button onClick={()=>{addMember()}}>add</button>
            <ul>
                {members.map(item=><li key={item.id}>{item.name}</li>)}
            </ul>
        </section>
    )
}