
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email:'',
    password:'',
    role:""
}


const adminSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{
        addAdmin:(state,action)=>{
             state.admin = {...state.admin,...action.payload}
        },
        removeAdmin:(state,action)=>{
            state.admin = {
                email:"",
                password:"",
                role:""
            }
        }
    }
})


export const {addAdmin,removeAdmin} = adminSlice.actions
export default adminSlice.reducer