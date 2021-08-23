import { useEffect, useState,useCallback } from "react"

// 获取位置
const getPosition=()=>{
    return {
        x:document.documentElement.scrollLeft,
        y:document.documentElement.scrollTop
    }
}

export const  useScroll=()=>{
    const [position,setPosition]=useState(getPosition())
    const handle=()=>{
        setPosition(getPosition())
    }
    useEffect(()=>{
        document.addEventListener('scroll',handle)
        return ()=>{
            document.removeEventListener('scroll',handle)
        }
    },[])
    return position

}

// 异步请求
export const  useAsync=(asyncFn)=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)


    const execute=useCallback(()=>{
        // 设置loading以及清除数据操作
        setLoading(true)
        setData(null)
        setError(null)

        return asyncFn().then((res)=>{
            setData(res)
            setLoading(false)

        }).catch((error)=>{
            setError(error)
            setData(null)
            setLoading(false)

        })
    },[asyncFn])
    return {execute,data,loading,error}

}