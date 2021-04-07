import React from 'react'
class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        // state setState    Vue   data(){return {status:'pause'}}   this.status='play'
        this.state={
            status:'pause'
        }
    }
    handleStatus(){
        if(this.state.status==='pause'){
            this.setState({status:'play'})

        }else{
            this.setState({status:'pause'})
        }
    }
    render() {
        return (<section style={{border:'1px solid #fff',margin:'10px'}}>
            <h1>我是class组件</h1>
            <h2>props:{JSON.stringify(this.props)}</h2>
            <button onClick={()=>{this.handleStatus()}}>{this.state.status}</button>
        </section>)
    }
}

export default ClassComponent
