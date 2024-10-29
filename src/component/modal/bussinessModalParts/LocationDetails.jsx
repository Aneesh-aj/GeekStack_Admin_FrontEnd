import axios from "axios"
import React from "react"
import { Switch } from "@mui/material"
import { useState } from "react"
import Map from "../../businessPannel/Map"
import { useDispatch, useSelector } from "react-redux"
import { addDetails } from "../../../redux/slice/businnessModalSlice"

const LocationDetails = () => {
    const modalData = useSelector((state) => state.businessModal.businessData)
    const dispatch = useDispatch()

    const api = import.meta.env.VITE_GOOLE_API

    async function searchLocation(searchText) {
        try {
            const response = await axios.get(`/api/maps/place/textsearch/json`, {
                params: {
                    query: `restaurants in ${searchText}`,
                    key: api, 
                },
            });
            console.log("Search Results:", response.data);
        } catch (error) {
            console.error("Error fetching location details:", error);
        }
    }
    



    return (
        <>
            <h1 className="text-xl">Contact Details</h1>
            <div className="w-full border-[1px] border-gray-200"></div>
            <span className="py-1">
                <label htmlFor="" className="text-lg">Business Loction</label>
                <input type="text" className="w-full border bg-gray-100 h-[2rem] rounded-md border-gray-400 ps-4" onChange={(e) => { searchLocation(e.target.value) }} />
            </span>
            <Map />
            <div className="w-full flex ">
                <div className="w-[50%]">Latitude : {modalData.latitude}</div>
                <div className="w-[50%]" >Longitude : {modalData.longitude}</div>
            </div>
            <span className="py-1 flex flex-col gap-2">
                <label htmlFor="">Phone Number</label>
                <span className="flex gap-3">
                    <input disabled type="text" className="border w-[4rem] h-[2rem] rounded-md border-gray-400 bg-gray-100 text-center" placeholder="+91"  />
                    <input type="number" className="border h-[2rem] rounded-md border-gray-400 bg-gray-100 ps-4" onChange={(e)=>dispatch(addDetails({phoneNumber:e.target.value}))} />
                </span>
            </span>
            <span>
                <Switch color="success" value={modalData.whatsAppAvalible} onChange={()=>dispatch(addDetails({whatsappAvailable : !modalData.whatsappAvailable}))} />
                <label htmlFor="">Avalible on Whatsapp</label>
            </span>
            <span className="py-1">
                <label htmlFor="" className="text-lg">WebSite</label>
                <input type="text" className="w-full border h-[2rem] rounded-md border-gray-400 bg-gray-100 ps-4" onChange={(e)=>dispatch(addDetails({websiteLink:e.target.value}))} />
            </span>
        </>
    )
}

export default LocationDetails