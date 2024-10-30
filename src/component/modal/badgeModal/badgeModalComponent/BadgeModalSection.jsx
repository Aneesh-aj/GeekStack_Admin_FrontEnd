import { Switch } from "@mui/material";
import React, { useRef, useState } from "react";

const BadgeModalSection = () => {
    const [business, setBusiness] = useState("");
    const [dayLimit, setDayLimit] = useState("");
    const [badgeName, setBadgeName] = useState("");
    const [budget, setBudget] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [isUntilTurnOff, setIsUntilTurnOff] = useState(false);
    const [image, setImage] = useState(null); 
    const fileInputRef = useRef(null);
    const [errors, setErrors] = useState({});

    const allBusiness = [
        { label: "Select Category", value: "" },
        { label: "Technology", value: "technology" },
        { label: "Health", value: "health" },
        { label: "Finance", value: "finance" },
    ];

    const limits = [
        { label: "Select Duration", value: "" },
        { label: "Daily", value: "daily" },
        { label: "Weekly", value: "weekly" },
        { label: "Monthly", value: "monthly" },
    ];

    const validate = () => {
        const newErrors = {};
        if (!badgeName) newErrors.badgeName = "Badge name is required";
        if (!business) newErrors.business = "Please select a business category";
        if (!budget || isNaN(budget) || budget <= 0) newErrors.budget = "Enter a valid budget amount";
        if (!dayLimit) newErrors.dayLimit = "Please select a duration";
        if (!startDate) newErrors.startDate = "Start date is required";
        if (!endDate && !isUntilTurnOff) newErrors.endDate = "End date is required if 'Until Turn Off' is not checked";
        if (startDate && endDate && new Date(startDate) > new Date(endDate)) newErrors.dateRange = "End date must be after start date";
        if (!image) newErrors.image = "An image is required"; 

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const formData = {
                business,
                dayLimit,
                badgeName,
                budget,
                startDate,
                endDate,
                isUntilTurnOff,
                image
            };
            console.log("Form submitted:", formData);
        } else {
            console.log("Validation failed");
        }
    };

    const handleLogoClick = () => {
        fileInputRef.current.click(); 
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const validTypes = ["image/jpeg", "image/png", "image/gif"];
            if (validTypes.includes(file.type)) {
                setImage(file);
                setErrors((prev) => ({ ...prev, image: null })); 
            } else {
                setErrors((prev) => ({ ...prev, image: "Please upload a valid image (JPEG, PNG, GIF)" }));
                setImage(null)
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg space-y-6 mb-20">
             <div>
                <label className="text-sm font-semibold text-gray-800">Ad Logo</label>
                <div className="w-full max-w-md rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 h-32 outline-dashed focus:ring-indigo-500 outline-gray-400 shadow-md flex justify-center items-center relative mt-2">
                    <button
                        type="button"
                        className="px-5 py-2 text-sm text-gray-800 bg-white rounded-lg font-medium shadow hover:shadow-md transition"
                        onClick={handleLogoClick}
                    >
                        + Add Logo
                    </button>
                    <input
                        type="file"
                        hidden
                        ref={fileInputRef} 
                        onChange={handleFileChange} // Handle file change
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 rounded-lg border-2 border-dashed border-gray-400 opacity-20 pointer-events-none"></div>
                </div>
                {errors.image && <p className="text-red-600 text-sm mt-1">{errors.image}</p>} {/* Display image error */}
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
                <label className="text-sm font-semibold text-gray-800">Select a Business</label>
                <select
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    className="mt-1 w-full border h-10 bg-gray-100 rounded-md border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    {allBusiness.map((category) => (
                        <option key={category.value} value={category.value}>
                            {category.label}
                        </option>
                    ))}
                </select>
                {errors.business && <p className="text-red-600 text-sm mt-1">{errors.business}</p>}
            </div>

            <div>
                <label className="text-sm font-semibold text-gray-800">Campaign Budget</label>
                <div className="flex gap-2 mt-1">
                    <input
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        placeholder="e.g., 500"
                        className="flex-grow border h-10 rounded-md border-gray-300 bg-gray-50 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <select
                        value={dayLimit}
                        onChange={(e) => setDayLimit(e.target.value)}
                        className="border h-10 bg-gray-100 rounded-md border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {limits.map((limit) => (
                            <option key={limit.value} value={limit.value}>
                                {limit.label}
                            </option>
                        ))}
                    </select>
                </div>
                {errors.budget && <p className="text-red-600 text-sm mt-1">{errors.budget}</p>}
                {errors.dayLimit && <p className="text-red-600 text-sm mt-1">{errors.dayLimit}</p>}
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
                <div className="w-full pt-4 flex items-center gap-2">
                    <Switch
                        checked={isUntilTurnOff}
                        onChange={(e) => setIsUntilTurnOff(e.target.checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <span className="text-sm font-semibold text-gray-800">Until Turn Off</span>
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
