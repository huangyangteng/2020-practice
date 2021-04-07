 function FunctionalComponent(props){
    return (
        <section style={{border:'1px solid #fff',margin:'10px'}}>
            <h1>我是函数类型组件</h1>
            <h2>接受到的props:{JSON.stringify(props)}</h2>
        </section>
    )
}

// 只接受父元素传递的prop，没有自己的状态
// 函数组件可以想象成一个函数，一个函数会接收参数，接收的参数就是父组件传递的props
// 接受的参数类型 可以是数据，也可以是方法
export default FunctionalComponent