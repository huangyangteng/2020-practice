function Query(props){
    const onChange=(e)=>{
        props.onQuery(e.target.value)
    }
    return   <input style={{padding:'10px',fontSize:'20px'}} placeholder="输入id" onChange={onChange}  />
}
export default Query