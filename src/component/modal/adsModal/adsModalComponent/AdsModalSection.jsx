


import { Switch } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { createAds, getAllBusiness } from "../../../../utils/api";
import toast, {  Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdsModalSection = () => {
    const [allBusiness, setAllBusiness] = useState([]);
    const [business, setBusiness] = useState("");
    const [dayLimit, setDayLimit] = useState("");
    const [adName, setAdName] = useState("");
    const [budget, setBudget] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [isUntilTurnOff, setIsUntilTurnOff] = useState(false);
    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const fileInputRef = useRef(null);
    const [errors, setErrors] = useState({});
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const businessData = await getAllBusiness();
        setAllBusiness(businessData.allBusiness);
    }

    const limits = [
        { label: "Select Duration", value: "" },
        { label: "Daily", value: "daily" },
        { label: "Weekly", value: "weekly" },
        { label: "Monthly", value: "monthly" },
    ];

    const validate = () => {
        const newErrors = {};
        if (!adName) newErrors.adName = "Ad name is required";
        if (!business) newErrors.business = "Please select a business category";
        if (!budget || isNaN(budget) || budget <= 0) newErrors.budget = "Enter a valid budget amount";
        if (!dayLimit) newErrors.dayLimit = "Please select a duration";
        if (!startDate) newErrors.startDate = "Start date is required";
        if(!endDate) newErrors.endDate = "End date is required";
        if (!endDate && !isUntilTurnOff) newErrors.endDate = "End date is required if 'Until Turn Off' is not checked";
        if (startDate && endDate && new Date(startDate) > new Date(endDate)) newErrors.dateRange = "End date must be after start date";
        if (images.length === 0) newErrors.image = "At least one image is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const formData = {
                business,
                dayLimit,
                adName,
                budget,
                startDate,
                endDate,
                isUntilTurnOff,
                images
            };
            try {
                console.log("Form submitted:", formData);
                setLoading(true)
                const res = await createAds(formData);
                console.log("Response:", res);
                setLoading(false)
                
                if (res.ads) {
                    console.log(" mess",res?.message)
                    toast.success(res.message);
                    navigate("/admin/ads-manager")
                } else if (res.status == 409) {
                    console.log("Conflict error:", res.response.data.message);
                    toast.error(res.response.data.message);
                } else if (res.status === 400) {
                    console.log("Conflict error:", res.response.data.message);
                    toast.error(res.response.data.message);
                } else {
                    toast.error("Unexpected error occurred.");
                }
            } catch (error) {
                console.error("Error occurred:", error);
                if (error.response) {
                    toast.error(error.response.data.message || "Error occurred during the request.");
                } else {
                    toast.error("Error occurred: " + error.message);
                }
            }
            
        } else {
            console.log("Validation failed");
        }
    };

    const handleLogoClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length + images.length > 4) {
            setErrors((prev) => ({ ...prev, image: "You can only upload a maximum of 4 images." }));
            return;
        }
        const validTypes = ["image/jpeg", "image/png", "image/gif"];
        const newImages = selectedFiles.filter(file => validTypes.includes(file.type));
        if (newImages.length === 0) {
            setErrors((prev) => ({ ...prev, image: "Please upload valid images (JPEG, PNG, GIF)" }));
            return;
        }
        setImages((prev) => [...prev, ...newImages]);
        setImagePreviews((prev) => [
            ...prev,
            ...newImages.map(file => URL.createObjectURL(file)),
        ]);
        setErrors((prev) => ({ ...prev, image: null }));
    };

    const handleRemoveImage = (index) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
        setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    };

    const resetForm = () => {
        setBusiness("");
        setDayLimit("");
        setAdName("");
        setBudget("");
        setStartDate("");
        setEndDate("");
        setIsUntilTurnOff(false);
        setImages([]);
        setImagePreviews([]);
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit} className="w-full p-4 bg-gray-50 rounded-lg shadow-lg space-y-6 flex mb-16">
                           <Toaster position="top-center" reverseOrder={false} />
            <div className="space-y-6 w-[50%]">
                <div>
                    <label className="text-sm font-semibold text-gray-800">Ad Logos</label>
                    <div className="w-full h-32 max-w-md bg-gray-200 rounded-lg flex justify-center items-center cursor-pointer border-dashed border-2 border-gray-400 mt-2"
                        onClick={handleLogoClick}>
                        <button
                            type="button"
                            className="px-4 py-2 text-sm text-gray-800 bg-white rounded-md font-medium shadow hover:shadow-md transition"
                        >
                            + Add Logo
                        </button>
                        <input
                            type="file"
                            hidden
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            multiple
                            className="w-full h-full"
                        />
                    </div>
                    {errors.image && <p className="text-red-600 text-sm mt-1">{errors.image}</p>}
                </div>
                <div className="flex flex-col">
                       <label className="text-sm font-semibold text-gray-800">Campaign Name</label>                     <input
                        type="text"
                        value={adName}
                        onChange={(e) => setAdName(e.target.value)}
                        placeholder="e.g., Campaign Name"
                        className="mt-1 w-full border h-10 rounded-md border-gray-300 bg-gray-50 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.adName && <p className="text-red-600 text-sm mt-1">{errors.adName}</p>}
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-800">Select a Business</label>
                    <select
                        value={business}
                        onChange={(e) => setBusiness(e.target.value)}
                        className="mt-1 w-full border h-10 bg-gray-100 rounded-md border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Select a Business</option>
                        {allBusiness.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.businessName}
                            </option>
                        ))}
                    </select>
                    {errors.business && <p className="text-red-600 text-sm mt-1">{errors.business}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-semibold text-gray-800">Campaign Budget</label>
                        <input
                            type="number"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            placeholder="e.g., 500"
                            className="mt-1 w-full border h-10 rounded-md border-gray-300 bg-gray-50 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.budget && <p className="text-red-600 text-sm mt-1">{errors.budget}</p>}
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-800">Duration</label>
                        <select
                            value={dayLimit}
                            onChange={(e) => setDayLimit(e.target.value)}
                            className="mt-1 w-full border h-10 bg-gray-100 rounded-md border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            {limits.map((limit) => (
                                <option key={limit.value} value={limit.value}>
                                    {limit.label}
                                </option>
                            ))}
                        </select>
                        {errors.dayLimit && <p className="text-red-600 text-sm mt-1">{errors.dayLimit}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-semibold text-gray-800">Start Date</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="mt-1 w-full border h-10 rounded-md border-gray-300 bg-gray-50 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.startDate && <p className="text-red-600 text-sm mt-1">{errors.startDate}</p>}
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-800">End Date</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            disabled={isUntilTurnOff}
                            className="mt-1 w-full border h-10 rounded-md border-gray-300 bg-gray-50 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.endDate && <p className="text-red-600 text-sm mt-1">{errors.endDate}</p>}
                    </div>
                </div>
                <div className="flex items-center">
                    <Switch
                        checked={isUntilTurnOff}
                        onChange={(e) => {
                            setIsUntilTurnOff(e.target.checked);
                           
                        }}
                    />
                    <span className="ml-2 text-sm text-gray-800">Until Turn Off</span>
                </div>


                <button type="submit" className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md" disabled={loading}>{loading ? "Loading..":"Submit"}</button>
            </div>
            <div className="w-[50%] ps-3">
                <div className="mt-2 p-2 flex flex-col gap-2 bg-gray-100 rounded-lg shadow-md border min-h-[100%] h-auto">
                    <h1 className="text-sm font-bold ps-3">Preview</h1>
                    {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative w-full h-28">
                            <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
                            <button
                                type="button"
                                onClick={() => handleRemoveImage(index)}
                                className="absolute  bg-red-600  w-4 h-4  top-3 right-3 text-white  rounded-full flex justify-center items-center"
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </form>
    );
};

export default AdsModalSection;
