import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    businessData: {
        businessName: "",
        businessCategory: "",
        businessSubCategory: "",
        logo: "",
        Badge1: "",
        Badge2: "",
        url: "",
        location: "",
        latitude: "",
        longitude: "",
        phoneNumber: "",
        whatsappAvailable: false,
        websiteLink: "",
        facebookLink: "",
        instagramLink: "",
        youtubeLink: "",
        xLink:""
    },
};

const businessModalSlice = createSlice({
    name: "businessModalData",
    initialState,
    reducers: {
        addDetails: (state, action) => {
            state.businessData = {
                ...state.businessData,
                ...action.payload,
            };
        },
        removeDetails:(state,action)=>{
            state.businessData={
                businessName: "",
                businessCategory: "",
                businessSubCategory: "",
                logo: "",
                Badge1: "",
                Badge2: "",
                url: "",
                location: "",
                latitude: "",
                longitude: "",
                phoneNumber: "",
                whatsappAvailable: false,
                websiteLink: "",
                facebookLink: "",
                instagramLink: "",
                youtubeLink: "",
                xLink:""
            }
        }
    },
});

export const { addDetails,removeDetails} = businessModalSlice.actions;
export default businessModalSlice.reducer;
