// redux是一个状态（数据）管理的库，本质上是一个大对象，要修改对象中的数据必须按照一定的规范。 State+Action->New State
// 状态管理库都是这样的
// redux流程
// 1. 创建Store
// 2. 修改Action和Reducer修改Store
// 3. 利用subscribe监听store变化


import { createStore } from 'redux';

const initState={value:0}

const counterReducer=(state=initState,action)=>{
    switch (action.type) {
        case 'add':
            return {value:state.value+1}
        case 'reduce':  
        return {value:state.value-1}
    
        default:
           return state
    }

}

export const store=createStore(counterReducer)

store.subscribe(()=>{console.log(store.getState())})


store.dispatch({type:'add'})

store.dispatch({type:'reduce'})

// 问题：1. 如何在store中传递多个reducer
// 2. 如何将redux用于react中