import { useEffect,useRef } from "react"

export const useMount=(callback)=>{
    useEffect(()=>{
        callback()
    },[])
}



// 创建一个自定义 Hook 用于执行一次性代码
export function useSingleton(callback) {
  // 用一个 called ref 标记 callback 是否执行过
  const called = useRef(false);
  // 如果已经执行过，则直接返回
  if (called.current) return;
  // 第一次调用时直接执行
  callback();
  // 设置标记为已执行过
  called.current = true;
}