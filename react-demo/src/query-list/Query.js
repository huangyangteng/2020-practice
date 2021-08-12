import React from 'react'
class Query extends React.Component{
    constructor(props){
        super(props)
        //react 向父组件发送消息 this.$emit()
        //react   this.props.callback
        console.log(this)
    }
    testThis(){
        console.log(this)
    }
    onChange=(e)=>{//防止this丢失
        // 向父组件发送消息
        this.props.onQuery(e.target.value)
    }
    render(){
        return <input style={{padding:'10px',fontSize:'20px'}} placeholder="输入id" onChange={this.onChange}  />
    }
}

export default Query