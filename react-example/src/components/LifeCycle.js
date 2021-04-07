import axios from 'axios'
import React from 'react'
class LifeCycle extends React.Component {
    constructor(props) {
        super(props)
     
    }
    async getData(){
        const res=await axios.get('http://localhost:65136/util/test')
        console.log("LifeCycle -> getData -> res", res)
    }
    componentDidMount() { //mounted
        // dom操作、数据请求
        document.title='LifeCycle'
        this.getData()
    }
  
    componentWillUnmount() {//
        //销毁前  事件取消绑定 清理计时器
        document.title='react example'
    }
  
    render() {
        return (<section style={{border:'1px solid #fff',margin:'10px'}}>
            <h1>class组件-生命周期</h1>
            <h2>componentDidMount</h2>
            <h2>componentWillUnmount</h2>
           
        </section>)
    }
}

export default LifeCycle
