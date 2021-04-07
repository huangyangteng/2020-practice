import React from 'react'
class LifeCycle extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            isLogin:false
        }
    }
    login(){
        this.setState({
            isLogin:true
        })
    }
    logout=(e)=>{
        console.log(this)
        console.log(e)
        console.log('logout')
        this.setState({
            isLogin:false
        })
    }
  
    render() {
        return (<section style={{border:'1px solid #fff',margin:'10px'}}>
           {this.state.isLogin?<button onClick={this.logout}>注销</button>:<button onClick={()=>{this.login()}}>登录</button>}
           
           
        </section>)
    }
}

export default LifeCycle
