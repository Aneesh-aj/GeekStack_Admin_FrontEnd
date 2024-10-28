import { useEffect, useState } from "react";
import React from "react";
import AddBussinessSection from "./bussinessModalParts/AddBussinessSection";
import LocationDetails from "./bussinessModalParts/LocationDetails";
import ContactDetails from "./bussinessModalParts/ContactDetails";
import Map from "../businessPannel/Map";
import { useDispatch } from "react-redux";
import { removeDetails } from "../../redux/slice/businnessModalSlice";


const BusinessModal = ({ open, onClose }) => {

    const modalData = useSelector((state) => state.sectionStorage.businessData);
    const dispatch = useDispatch()
    const [location, setLocation] = useState(null)

    useEffect(()=>{
        dispatch(removeDetails())
    },[])

    if (!open) return null;

    return (
        <div className="fixed inset-0 flex bg-black bg-opacity-50 justify-end right-0">
            <div className="bg-white p-9 rounded-md shadow-md w-1/3">
                <div className="w-full flex justify-between items-center ">
                    <h2 className="text-2xl font-semibold mb-4">Add New Business</h2>
                    <button
                        className=" bg-red-500 text-white rounded-md p-2"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
                 <div className="border-b-2 border border-black mt-4 mb-4"></div>
                <div className=" w-full h-full overflow-auto  flex flex-col gap-3 " >
                    <AddBussinessSection/>
                      <LocationDetails/>
                      <ContactDetails/>
                </div>
                    {
                        modalData.businessName && modalData.businessCategory&&modalData.businessSubCategory&&modalData.log&&modalData.badge1&&modalData.badge2&&(
                            <>
                             <div className="w-full">
                                <button className="p-2">Prev</button>
                                <button className="p-2">Next</button>
                             </div>
                            </>
                        )
                    }

            </div>
        </div>
    );
};

export default BusinessModal;
