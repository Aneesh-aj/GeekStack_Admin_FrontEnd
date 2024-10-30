

import { Switch } from "@mui/material";
import React, { useState } from "react";

const BadgeModalSection = () => {
    const [business, setBusiness] = useState("");
    const [dayLimit, setDayLimit] = useState("");

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

    const handleCategoryChange = (e) => setBusiness(e.target.value);
    const handleLimitChange = (e) => setDayLimit(e.target.value);

    return (
        <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg  space-y-6 mb-20">
            <div>
                <label className="text-sm font-semibold text-gray-800">Ad Logo</label>
                <div className="w-full max-w-md rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 h-32 outline-dashed focus:ring-indigo-500 outline-gray-400 shadow-md flex justify-center items-center relative mt-2">
                    <button className="px-5 py-2 text-sm text-gray-800 bg-white rounded-lg font-medium shadow hover:shadow-md transition">
                        + Add Logo
                    </button>
                    <div className="absolute inset-0 rounded-lg border-2 border-dashed border-gray-400 opacity-20 pointer-events-none"></div>
                </div>
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-800">Badge Name</label>
                <input
                    type="text"
                    placeholder="e.g., Badge Name"
                    className="mt-1 w-full border h-10 rounded-md border-gray-300 bg-gray-50 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-800">Select a Business</label>
                <select
                    value={business}
                    onChange={handleCategoryChange}
                    className="mt-1 w-full border h-10 bg-gray-100 rounded-md border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    {allBusiness.map((category) => (
                        <option key={category.value} value={category.value}>
                            {category.label}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-800">Campaign Budget</label>
                <div className="flex gap-2 mt-1">
                    <input
                        type="number"
                        placeholder="e.g., 500"
                        className="flex-grow border h-10 rounded-md border-gray-300 bg-gray-50 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <select
                        value={dayLimit}
                        onChange={handleLimitChange}
                        className=" border h-10 bg-gray-100 rounded-md border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {limits.map((limit) => (
                            <option key={limit.value} value={limit.value}>
                                {limit.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <label className="text-sm font-semibold text-gray-800 ">Prev</label>
                <div className="w-full max-w-md rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 h-32 outline-dashed focus:ring-indigo-500 outline-gray-400 shadow-md flex justify-center items-center relative mt-2">
                    <button className="px-5 py-2 text-sm text-gray-800 bg-white rounded-lg font-medium shadow hover:shadow-md transition">
                        Prev
                    </button>
                    <div className="absolute inset-0 rounded-lg border-2 border-dashed border-gray-400 opacity-20 pointer-events-none"></div>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold text-gray-800">Schedule Campaign</h2>
                <div className="w-full border-b-2 border-gray-200 mt-2 mb-4"></div>
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label htmlFor="campaign-start" className="text-sm font-semibold text-gray-800">Campaign Start</label>
                        <input
                            type="date"
                            id="campaign-start"
                            className="mt-1 w-full border h-10 rounded-md border-gray-300 bg-gray-50 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="campaign-end" className="text-sm font-semibold text-gray-800">Campaign End</label>
                        <input
                            type="date"
                            id="campaign-end"
                            className="mt-1 w-full border h-10 rounded-md border-gray-300 bg-gray-50 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>
                <div className="w-full pt-4">
                    <Switch color="success" />
                    <label htmlFor="">Until Turn off</label>
                </div>
                <div className="w-full mt-3">
                    <button className="p-2 rounded-lg bg-yellow-400 w-[100%] shadow-md font-bold">Create Capaign</button>
                </div>
            </div>
        </div>
    );
};

export default BadgeModalSection;
