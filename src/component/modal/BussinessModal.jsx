import { useEffect, useState } from "react";
import React from "react";
import AddBussinessSection from "./bussinessModalParts/AddBussinessSection";
import LocationDetails from "./bussinessModalParts/LocationDetails";
import ContactDetails from "./bussinessModalParts/ContactDetails";
import { useDispatch, useSelector } from "react-redux";
import { addDetails, removeDetails } from "../../redux/slice/businnessModalSlice";

const BusinessModal = ({ open, onClose }) => {
    const modalData = useSelector((state) => state.businessModal.businessData);
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);

    useEffect(() => {
        if (open) {
            dispatch(removeDetails());
            dispatch(addDetails({ url: '' }));
            setStep(1);
        }
    }, [open, dispatch]);

    if (!open) return null;

    const isCurrentStepComplete = () => {
        switch (step) {
            case 1:
                return (
                    modalData.businessName &&
                    modalData.businessCategory &&
                    modalData.businessSubCategory &&
                    modalData.logo &&
                    modalData.badge1 &&
                    modalData.badge2
                );
            case 2:
                return (
                    modalData.latitude &&
                    modalData.longitude &&
                    modalData.whatsappAvailable &&
                    modalData.websiteLink
                );
            case 3:
                return modalData.contactDetails;
            default:
                return false;
        }
    };

    const handleNext = () => {
        if (isCurrentStepComplete()) setStep((prevStep) => prevStep + 1);
    };

    const handlePrev = () => {
        if (step > 1) setStep((prevStep) => prevStep - 1);
    };

    return (
        <div className="fixed inset-0 flex bg-black bg-opacity-50 justify-end right-0">
            <div className="bg-white p-9 rounded-md shadow-md w-1/3">
                <div className="w-full flex justify-between items-center">
                    <h2 className="text-2xl font-semibold mb-4">Add New Business</h2>
                    <button
                        className="bg-red-500 text-white rounded-md p-2"
                        onClick={onClose} 
                    >
                        Close
                    </button>
                </div>
                <div className="border-b-2 border-black mt-4 mb-4"></div>
                <div className="w-full h-full overflow-auto flex flex-col gap-3 mb-[3rem]">
                    {step === 1 && <AddBussinessSection />}
                    {step === 2 && <LocationDetails />}
                    {step === 3 && <ContactDetails />}
                    <div className="w-full flex justify-between mt-4 mb-[5rem]">
                        {step > 1 && (
                            <button className="p-2 bg-gray-300 rounded" onClick={handlePrev}>
                                Prev
                            </button>
                        )}
                        {isCurrentStepComplete() && step < 3 && (
                            <button className="p-2 bg-blue-500 text-white rounded" onClick={handleNext}>
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessModal;
