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

    logout=()=>{
        console.log(this)
        this.setState({
            isLogin:false
        })
    }

  
    render() {
        return (<section style={{border:'1px solid #fff',margin:'10px'}}>
           {this.state.isLogin? <section>
               <p>已登录</p>
                <button onClick={this.logout}>点击注销hahahhahahhahah</button> 

           </section>:
           <section>
               <p>未登录</p>
               <button onClick={()=>{this.login()}}>点击登录hahahhahah</button>

           </section>}
           
           
        </section>)
    }
}

export default LifeCycle
