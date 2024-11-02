import React, { useState } from "react";
import { uploadImages } from "../../../../firebase/upload";
import { createBadge } from "../../../../utils/api";

const BadgeModalSection = () => {
    const [categoryIcon, setCategoryIcon] = useState(null);

    const [badgeName, setBadgeName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!badgeName) newErrors.badgeName = "Badge name is required";
        if(!endDate) newErrors.endDate = "End date is required"
        if (!startDate) newErrors.startDate = "Start date is required";
        if (startDate && endDate && new Date(startDate) > new Date(endDate)) newErrors.dateRange = "End date must be after start date";
        if (!categoryIcon) newErrors.categoryIcon = "An icon image is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const formData = {

                badgeName,
                startDate,
                endDate,
                categoryIcon
            };
            console.log("Form submitted:", formData);
            const res = await createBadge(formData)
        } else {
            console.log("Validation failed");
        }
    };

    const handleIconChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const validTypes = ["image/jpeg", "image/png"];
            if (validTypes.includes(file.type)) {
                const image = await uploadImages(file)
                setCategoryIcon(image);
                setErrors((prev) => ({ ...prev, categoryIcon: null }));
            } else {
                setErrors((prev) => ({ ...prev, categoryIcon: "Please upload a valid image (JPEG, PNG)" }));
                setCategoryIcon(null);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg space-y-6 mb-20">
            <div className="p-1">
                <label className="text-sm font-semibold text-gray-800">Category Icon</label>
                <div className="mt-1 flex items-center gap-4">
                    <label className="relative cursor-pointer bg-indigo-600 text-white rounded-md px-4 py-2 font-semibold hover:bg-indigo-700 transition">
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleIconChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        Upload Icon
                    </label>
                    {categoryIcon && (
                        <img
                            src={categoryIcon}
                            alt="Category Icon Preview"
                            className="h-12 w-12 object-cover rounded-md border border-gray-300 shadow-sm"
                        />
                    )}
                </div>
                {errors.categoryIcon && <p className="text-red-600 text-sm">{errors.categoryIcon}</p>}
            </div>

            <div>
                <label className="text-sm font-semibold text-gray-800">Badge Name</label>
                <input
                    type="text"
                    value={badgeName}
                    onChange={(e) => setBadgeName(e.target.value)}
                    placeholder="e.g., Badge Name"
                    className="mt-1 w-full border h-10 rounded-md border-gray-300 bg-gray-50 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.badgeName && <p className="text-red-600 text-sm mt-1">{errors.badgeName}</p>}
            </div>

            <div>
                <h2 className="text-lg font-semibold text-gray-800">Schedule Campaign</h2>
                <div className="w-full border-b-2 border-gray-200 mt-2 mb-4"></div>
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label htmlFor="campaign-start" className="text-sm font-semibold text-gray-800">Campaign Start</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            id="campaign-start"
                            min={new Date().toISOString().split("T")[0]} 
                            className="mt-1 w-full border h-10 rounded-md border-gray-300 bg-gray-50 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.startDate && <p className="text-red-600 text-sm mt-1">{errors.startDate}</p>}
                    </div>

                    <div className="w-1/2">
                        <label htmlFor="campaign-end" className="text-sm font-semibold text-gray-800">Campaign End</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            id="campaign-end"
                            className="mt-1 w-full border h-10 rounded-md border-gray-300 bg-gray-50 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.endDate && <p className="text-red-600 text-sm mt-1">{errors.endDate}</p>}
                        {errors.dateRange && <p className="text-red-600 text-sm mt-1">{errors.dateRange}</p>}
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="w-full h-10 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
                Create Badge
            </button>
        </form>
    );
};

export default BadgeModalSection;
