
// 查询完毕后，把参数传给父元素

function Query(props){
    return (
        <section style={{border:'1px solid #fff',margin:'10px'}}>
            <h1>搜索组件</h1>
            <span>输入id：</span><input type="text" onChange={props.callback} />
        </section>
    )
}

export default Query