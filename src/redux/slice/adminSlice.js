
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:"",
    token:"",
    email:'',
    role:{value:null,admin:''}
}


const adminSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{
        addAdmin:(state,action)=>{
             state.admin = {...state.admin,...action.payload}
        },
        removeAdmin:(state,action)=>{
            state.adminData.admin = {
                id:"",
                token:'',
                email:"",
                role:{value:null,admin:''}
            }
        }
    }
})


export const {addAdmin,removeAdmin} = adminSlice.actions
export default adminSlice.reducer