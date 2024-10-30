import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import CustomOption from "../customSections/CustomOption";
import CustomMultiValue from "../customSections/CustomMultiValue";
import { addDetails } from "../../../../redux/slice/businessModalSlice";

const AddBusinessSection = () => {
    const modalData = useSelector((state) => state.businessModal.businessData);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [customUrl, setCustomUrl] = useState();
    const [url, setUrl] = useState();
    const dispatch = useDispatch();

    const logos = [
        { label: "Logo One", value: "logo1", src: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" },
        { label: "Logo Two", value: "logo2", src: "https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png" },
        { label: "Logo Three", value: "logo3", src: "https://st2.depositphotos.com/5142301/7551/v/450/depositphotos_75512255-stock-illustration-abstract-sphere-logo.jpg" },
    ];

    const [businessName, setBusinessName] = useState();
    const [businessCategory, setBusinessCategory] = useState();
    const [businessSubCategory, setBusinessSubCategory] = useState();
    const [selectedLogo, setSelectedLogo] = useState(logos[0]);
    const [selectedBadges, setSelectedBadges] = useState([]); 

    useEffect(() => {
        dispatch(addDetails({ logo: logos[0], badge1: logos[0], badge2: logos[0] }));

        if (modalData.businessCategory && modalData.businessName && modalData.businessSubCategory && !customUrl) {
            setCustomUrl(`/${modalData.businessName}`);
            setUrl(`www.coimbatore.ai/${modalData.businessCategory}/${modalData.businessSubCategory}`);
            dispatch(addDetails({ url: url + customUrl }));
        }
    }, [businessName, businessCategory, businessSubCategory]);

    const handleLogoChange = (logo) => {
        setSelectedLogo(logo);
        dispatch(addDetails({ logo: logo.src }));
        setDropdownOpen(false);
    };

    const handleBadgeChange = (selectedOptions) => {
        const selected = selectedOptions || [];
        console.log(" sls",selected)
        if (selected.length <= 2) {
            setSelectedBadges(selected);
            dispatch(addDetails({
                badge: [...modalData.badge, ...selected.value]
            }));
            
            
            console.log(" data modalD",modalData.badge)
        }
    };

    const changeUrl = (e) => {
        const newURL = e.target.value;
        setCustomUrl(newURL);
        dispatch(addDetails({ url: url + customUrl }));
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        dispatch(addDetails({ businessCategory: selectedCategory, businessSubCategory: "" }));
        setBusinessCategory(selectedCategory);
    };

    const categories = [
        { label: "Select Category", value: "" },
        { label: "Technology", value: "technology" },
        { label: "Health", value: "health" },
        { label: "Finance", value: "finance" },
    ];

    const subCategories = {
        technology: [
            { label: "Select Sub Category", value: "" },
            { label: "Software", value: "software" },
            { label: "Hardware", value: "hardware" },
        ],
        health: [
            { label: "Select Sub Category", value: "" },
            { label: "Wellness", value: "wellness" },
            { label: "Medicine", value: "medicine" },
        ],
        finance: [
            { label: "Select Sub Category", value: "" },
            { label: "Banking", value: "banking" },
            { label: "Investment", value: "investment" },
        ],
    };

    return (
        <div className=" bg-white rounded-lg  p-2 space-y-5">
            <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Business Name</label>
                <input
                    type="text"
                    value={modalData.businessName}
                    placeholder="e.g., Restaurant"
                    className="w-full border h-10 bg-gray-100 rounded-md px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => {
                        dispatch(addDetails({ businessName: e.target.value }));
                        setBusinessName(e.target.value);
                    }}
                />
            </div>

            <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Business Category</label>
                <select
                    value={modalData.businessCategory || ""}
                    className="w-full border h-10 bg-gray-100 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleCategoryChange}
                >
                    {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                            {category.label}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Business Sub Category</label>
                <select
                    value={modalData.businessSubCategory || ""}
                    className="w-full border h-10 bg-gray-100 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => {
                        dispatch(addDetails({ businessSubCategory: e.target.value }));
                        setBusinessSubCategory(e.target.value);
                    }}
                    disabled={!modalData.businessCategory}
                >
                    {(subCategories[modalData.businessCategory] || []).map((subCategory) => (
                        <option key={subCategory.value} value={subCategory.value}>
                            {subCategory.label}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Logo</label>
                <div className="relative w-24">
                    <button
                        className="w-10 h-10 border rounded-lg bg-gray-100 border-gray-400 flex items-center justify-center"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <img src={selectedLogo?.src} alt={selectedLogo.label} className="w-8 h-8" />
                    </button>
                    {dropdownOpen && (
                        <div className="absolute top-full mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            {logos.map((logo) => (
                                <div
                                    key={logo.value}
                                    onClick={() => handleLogoChange(logo)}
                                    className="p-2 cursor-pointer hover:bg-gray-200 flex items-center justify-center"
                                >
                                    <img src={logo.src} alt={logo.label} className="w-8 h-8" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Select Badges</label>
                <Select
                    options={logos.map((logo) => ({ value: logo.src, label: logo.label }))}
                    isMulti
                    onChange={handleBadgeChange}
                    value={selectedBadges.map((badge) => ({ value: badge.value, label: badge.label }))}
                    isClearable={false}
                    closeMenuOnSelect={false}
                    components={{ Option: CustomOption, MultiValue: CustomMultiValue }}
                    styles={{
                        multiValue: (base) => ({
                            ...base,
                            backgroundColor: "#e5e7eb",
                        }),
                        multiValueLabel: (base) => ({
                            ...base,
                            display: "flex",
                            alignItems: "center",
                        }),
                        multiValueRemove: (base) => ({
                            ...base,
                            cursor: "pointer",
                        }),
                    }}
                />
                <p className="text-sm text-gray-500 mt-1">Select up to 2 badges</p>
            </div>

            <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">SEO Friendly URL</label>
                <div className="text-gray-500 text-sm mb-1">URL: {`${url && customUrl ? url + customUrl : ""}`}</div>
                <input
                    type="text"
                    placeholder="Custom URL"
                    value={customUrl || ""}
                    className="w-full h-10 border rounded-md bg-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => changeUrl(e)}
                />
            </div>
        </div>
    );
};

export default AddBusinessSection;
