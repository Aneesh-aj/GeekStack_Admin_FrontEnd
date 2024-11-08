// businessModalSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    businessData: {
        businessName: "",
        businessCategory: "",
        businessSubCategory: "",
        logo: "",
        badge: [],
        url: "",
        latitude: "",
        longitude: "",
        phoneNumber: "",
        whatsappAvailable: false,
        websiteLink: "",
        facebookLink: "",
        instagramLink: "",
        youtubeLink: "",
        xLink: ""
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
        removeDetails: (state) => {
            state.businessData = initialState.businessData;
        }
    },
});

export const { addDetails, removeDetails } = businessModalSlice.actions;
export default businessModalSlice.reducer;
