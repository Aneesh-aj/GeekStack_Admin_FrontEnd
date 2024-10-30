
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin :{
        id: "",
        accessToken: "",
        refreshToken: "",
        email: '',
        role: { value: null, admin: '' }
    }
}


const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        addAdmin: (state, action) => {
            console.log(" the admin ",state.admin)
            state.admin = { ...state.admin, ...action.payload };
        },
        removeAdmin: (state) => {
            state.admin = {
                id: "",
                accessToken: "",
                refreshToken: "",
                email: "",
                role: { value: null, admin: '' }
            };
        }
    }
});



export const { addAdmin, removeAdmin } = adminSlice.actions
export default adminSlice.reducer