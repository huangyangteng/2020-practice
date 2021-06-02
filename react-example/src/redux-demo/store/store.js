import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../counterSlice'
import MemberReducer from '../MemberSlice'
console.log("CounterReducer", CounterReducer)
export default configureStore({
    reducer:{
        counter:CounterReducer,
        member:MemberReducer
    }
})