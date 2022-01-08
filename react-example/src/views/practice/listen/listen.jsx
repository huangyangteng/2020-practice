import React, { useState } from 'react'
const listWrapperStyle={
    display:'flex'
}
const liStyle={
    marginBottom:'10px',
    cursor:'pointer'
}
export default  function ListenPage(){
   
    const [list,setList]=useState([])
    
    const handlePause=(e)=>{
        const currentTime=e.target.currentTime
        setList([...list,currentTime])
    }
    const handleClick=(curTime)=>{
        const videoDom=document.getElementById('videos')
        videoDom.currentTime=curTime
        videoDom.play()

    }
    return <section style={listWrapperStyle}>
        <video id="video"  onPause={(e)=>{handlePause(e)}}  controls src={require('../../../asserts/videos/1.mp4').default}></video>
        <ul>
           {list.map((item,index)=>{
               return (<li onClick={()=>{handleClick(item)}}  style={liStyle} key={item+'_'+index}>{item}</li>)
           })}
        </ul>
    </section>
}