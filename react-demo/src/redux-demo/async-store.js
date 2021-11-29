// redux是一个状态（数据）管理的库，本质上是一个大对象，要修改对象中的数据必须按照一定的规范。 State+Action->New State
// 状态管理库都是这样的
// redux流程
// 1. 创建Store
// 2. 修改Action和Reducer修改Store
// 3. 利用subscribe监听store变化


import { createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
console.log("thunkMiddleware", thunkMiddleware)

const initState={data:null,error:null,loading:false}

const asyncReducer=(state=initState,{type,data=null,error=null})=>{
    switch (type) {
        case 'FETCH_DATA_BEGIN':
            return {data:null,error:null,loading:true}
        case 'FETCH_DATA_SUCCESS':  
            return {data,error:null,loading:false}
        case 'FETCH_DATA_FAILURE':
            return {data:null,loading:false,error:error}
        default:
           return state
    }

}
const composedEnhancer=applyMiddleware(thunkMiddleware)
export const store=createStore(asyncReducer,composedEnhancer)

store.subscribe(()=>{console.log(store.getState())})


function fetchData() {
    return dispatch => {
      dispatch({ type: 'FETCH_DATA_BEGIN' });
      fetch('/some-url').then(res => {
        dispatch({ type: 'FETCH_DATA_SUCCESS', data: res });
      }).catch(err => {
        dispatch({ type: 'FETCH_DATA_FAILURE', error: err });
      })
    }
  }