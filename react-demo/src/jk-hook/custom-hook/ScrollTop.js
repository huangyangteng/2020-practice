import { useScroll } from "."
import { useCallback } from 'react';

const style={
    position:'fixed',
    right:'10px',
    bottom:'10px'
}
export const ScrollTop=()=>{
    const {y}=useScroll()
    const getTop=useCallback(()=>{
        document.documentElement.scrollTop=0
    },[])

    if(y>300){
        return <button onClick={getTop} style={style}>Back to Top </button>
    }else{
        return <button>null</button>
    }
}