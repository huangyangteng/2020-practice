
function List({list}){
    const doms=list.map(item=>(
        <li key={item.name}>
            name:{item.name}-age {item.age}
        </li>
    ))
    return (
        <section className="example-item">
            <h1>列表渲染</h1>
            {doms}
        </section>
    )
}
export default List