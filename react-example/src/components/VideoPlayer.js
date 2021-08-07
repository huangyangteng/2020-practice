
import React, { createRef, useState } from 'react'
import './VideoPlayer.css'
function VideoPlayer({src}){
    const videoDom=createRef()
    // 视频当前播放时间
    const [curTime,setCurTime]=useState(0)
    // 视频时长
    const [duration,setDuration]=useState(0)
    // 视频状态，是否暂停
    const [isPause,setPause]=useState(true)
    // 视频真是尺寸
    const [size,setSize]=useState({width:1920,height:1080})
    // 视频加载中
    const [waiting,setWaiting]=useState(true)

    // 视频元数据加载成功
    const onLoad=(e)=>{
        const {duration,videoWidth,videoHeight}=e.target
        setDuration(duration)
        setSize({width:videoWidth,height:videoHeight})
        setWaiting(false)
    }
    // 控制播放暂停
    const handlePlay=(play)=>{
        const v=videoDom.current
        if(play){
            setPause(false)
            v.play()
        }else{
            setPause(true)
            v.pause()
        }

    }
    // 拖动slider时改变视频currentTime
    const onSliderChange=(e)=>{
        setCurTime(e.target.value)
        videoDom.current.currentTime=e.target.value

    }
    // 监听video timeupdate
    const onTimeUpdate=()=>{
        const v=videoDom.current
        setCurTime(v.currentTime)
        if(v.ended){
            handlePlay(false)
            v.currentTime=0
        }
    }
    // 卡顿时，显示加载中提示
    const onWaiting=()=>{
        setWaiting(true)
    }
    // 可以播放时，隐藏加载中提示
    const onCanPlay=()=>{
        setWaiting(false)
    }
    return <div className="video-wrapper">
            <video ref={videoDom}  src={src} onLoadedMetadata={onLoad} onTimeUpdate={onTimeUpdate} onWaiting={onWaiting} onCanPlay={onCanPlay}  ></video>
            {/* 视频加载时显示loading */}
            {waiting && <div className="waiting">loading...</div>}
            <div className="video-controls">
                {/* 播放按钮 */}
                {isPause? <button onClick={()=>{handlePlay(true)}}>播放</button>: <button onClick={()=>{handlePlay(false)}}>暂停</button>}
                {/* 进度条 */}
                <input type="range" min="0" max={duration}  value={curTime} onChange={onSliderChange}/>
                {/* 时间信息和分辨率信息 */}
                <span>{formatDuration(curTime)}/{formatDuration(duration)}</span>
                <span>分辨率：{size.width}x{size.height}</span>
            </div>
        </div>
}
export default VideoPlayer

function formatDuration(duration) {
    var sec_num = parseInt(duration, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}