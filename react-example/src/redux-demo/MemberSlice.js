import {createSlice} from '@reduxjs/toolkit'
export const MemberSlice=createSlice({
    name:'member',
    initialState:{
        list:[]
    },
    reducers:{
        add:(state,action)=>{
        console.log("action", action)
            state.list=[...state.list,action.payload]
        }
    }
})

export const  {add}=MemberSlice.actions
export default MemberSlice.reducer