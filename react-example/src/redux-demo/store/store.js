import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../counterSlice'
import MemberReducer from '../MemberSlice'
export default configureStore({
    reducer:{
        counter:CounterReducer,
        member:MemberReducer
    }
})