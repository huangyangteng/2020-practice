// redux是一个独立的库，可以单独使用。我们在react中使用的话,需要建立redux和react的联系，主要有以下两点：
// 1. react中使用redux中的数据进行渲染，并且要在redux中的数据改变时，重新渲染
// 2. react的组件可以提交action，修改redux中的数据



// 桥梁： react-redux


// 为了保证第一点：利用Context机制,将state从最顶级注入

import {store} from './simple-store'
import { Provider,useSelector,useDispatch } from 'react-redux';


export const ReactReduxDemo=()=>{
    return <Provider store={store}>
        <App></App>
    </Provider>
}
function App(){
    return <section>
        <h1>react redux </h1>
        <ChildCounter></ChildCounter>
    </section>
}

function ChildCounter(){
    // 从store中获取当前计算值
    const count=useSelector(state=>state.value)

    const dispatch=useDispatch()
    return <section>
        <button onClick={()=>{dispatch({type:'add'})}}>add</button>
        <span>{count}</span>
        <button onClick={()=>{dispatch({type:'reduce'})}}>reduce</button>

    </section>
}