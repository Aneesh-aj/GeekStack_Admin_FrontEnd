import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDetails } from "../../../redux/slice/businnessModalSlice";

const AddBusinessSection = () => {
    const modalData = useSelector((state) => state.sectionStorage.businessData);
    const [customUrl, setCustomUrl] = useState()
    const [url, setUrl] = useState()
    const dispatch = useDispatch();


    const logos = [
        { label: "Logo One", value: "logo1", src: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" },
        { label: "Logo Two", value: "logo2", src: "https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png" },
        { label: "Logo Three", value: "logo3", src: "https://st2.depositphotos.com/5142301/7551/v/450/depositphotos_75512255-stock-illustration-abstract-sphere-logo.jpg" },
    ];

    const [businessName, setBusinessName] = useState()
    const [businessCategory, setBusinessCategory] = useState()
    const [businessSubCategory, setBusinessSubCategory] = useState()
    const [selectedLogo, setSelectedLogo] = useState(logos[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedFirstBadge, setSelectedFirstBadge] = useState(logos[0])
    const [firstBadgeDropdown, setFirstBadgeDropdown] = useState(false)
    const [selectedSecondBadge, setSelectedSecondBadge] = useState(logos[1])
    const [secondBadgeDropdown, setSecondBadgeDropdown] = useState(false)


    dispatch(addDetails({logo:logos[0],badge1:logos[0],badge2:logos[0]}))

    useEffect(() => {

        if (modalData.businessCategory && modalData.businessName && modalData.businessSubCategory) {
            setCustomUrl(`/${modalData.businessName}`)
            setUrl(`www.coimbatore.ai/${modalData.businessCategory}/${modalData.businessSubCategory}`)
            dispatch(addDetails({ url: url + customUrl }))
        }
    }, [businessName, businessCategory, businessSubCategory])


    const handleLogoChange = (logo) => {
        setSelectedLogo(logo);
        dispatch(addDetails({ logo: logo.src }));
        setDropdownOpen(false);
    };

    const handleFirstBadgeChange = (logo) => {
        setSelectedFirstBadge(logo);
        dispatch(addDetails({ badge1: logo.src }));
        setFirstBadgeDropdown(false);
    };

    const handleSecondBadgeChange = (logo) => {
        setSelectedSecondBadge(logo);
        dispatch(addDetails({ badge2: logo.src }));
        setSecondBadgeDropdown(false);
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        dispatch(addDetails({ businessCategory: selectedCategory, businessSubCategory: "" }));
        setBusinessCategory(selectedCategory)
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
        <div className="flex flex-col gap-3">
            <span className="flex flex-col gap-1">
                <label className="text-lg">Business Name</label>
                <input
                    type="text"
                    value={modalData.businessName}
                    placeholder="eg : Restaurant"
                    className="w-full border h-[2rem] bg-gray-100 rounded-md border-gray-400 ps-4 text-gray-700"
                    onChange={(e) => {
                        dispatch(addDetails({ businessName: e.target.value }))
                        setBusinessName(e.target.value)
                    }}
                />
            </span>
            <span className="flex flex-col gap-1">
                <label className="text-lg">Business Category</label>
                <select
                    value={modalData.businessCategory || ""}
                    className="w-full border h-[2rem] bg-gray-100 rounded-md border-gray-400 ps-4"
                    onChange={handleCategoryChange}
                >
                    {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                            {category.label}
                        </option>
                    ))}
                </select>
            </span>
            <span className="flex flex-col gap-1">
                <label className="text-lg">Business Sub Category</label>
                <select
                    value={modalData.businessSubCategory || ""}
                    className="w-full border h-[2rem] bg-gray-100 rounded-md border-gray-400 ps-4"
                    onChange={(e) => {
                        dispatch(addDetails({ businessSubCategory: e.target.value }))
                        setBusinessSubCategory(e.target.value)
                    }
                    }
                    disabled={!modalData.businessCategory}
                >
                    {(subCategories[modalData.businessCategory] || []).map((subCategory) => (
                        <option key={subCategory.value} value={subCategory.value}>
                            {subCategory.label}
                        </option>
                    ))}
                </select>
            </span>
            <span className="flex flex-col gap-1">
                <label className="text-lg">Logo</label>
                <div className="relative w-[10rem]">
                    <button
                        className="w-[3rem] h-[2rem] border rounded-lg bg-gray-100 border-gray-400 flex items-center gap-2 ps-2"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <img src={`${modalData.logo ? modalData.logo : selectedLogo.src}`} alt={selectedLogo.label} className="w-6 h-6" />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute top-full mt-1 w-[3rem] bg-white border border-gray-400 rounded-lg shadow-md z-10">
                            {logos.map((logo) => (
                                <div
                                    key={logo.value}
                                    onClick={() => handleLogoChange(logo)}
                                    className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200"
                                >
                                    <img src={logo.src} alt={logo.label} className="w-6 h-6" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </span>

            <span className="flex flex-col gap-1">
                <label className="text-lg">Select Badge</label>
                <span className="flex gap-2">
                    <div className="relative w-[5rem]">
                        <button
                            className="w-[4rem] h-[2rem] border rounded-lg bg-gray-100 border-gray-400 flex items-center gap-2 ps-2"
                            onClick={() => setFirstBadgeDropdown(!firstBadgeDropdown)}
                        >
                            <img src={`${modalData.badge1 ? modalData.badge1 : selectedFirstBadge.src}`} alt={selectedFirstBadge.label} className="w-6 h-6" />
                        </button>

                        {firstBadgeDropdown && (
                            <div className="absolute top-full mt-1 w-[4rem] bg-white border border-gray-400 rounded-lg shadow-md z-10">
                                {logos.map((logo) => (
                                    <div
                                        key={logo.value}
                                        onClick={() => handleFirstBadgeChange(logo)}
                                        className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200"
                                    >
                                        <img src={logo.src} alt={logo.label} className="w-6 h-6" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="relative w-[5rem]">
                        <button
                            className="w-[4rem] h-[2rem] border rounded-lg bg-gray-100 border-gray-400 flex items-center gap-2 ps-2"
                            onClick={() => setSecondBadgeDropdown(!secondBadgeDropdown)}
                        >
                            <img src={`${modalData.badge2 ? modalData.badge2 : selectedSecondBadge.src}`} alt={selectedSecondBadge.label} className="w-6 h-6" />
                        </button>

                        {secondBadgeDropdown && (
                            <div className="absolute top-full mt-1 w-[4rem] bg-white border border-gray-400 rounded-lg shadow-md z-10">
                                {logos.map((logo) => (
                                    <div
                                        key={logo.value}
                                        onClick={() => handleSecondBadgeChange(logo)}
                                        className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200"
                                    >
                                        <img src={logo.src} alt={logo.label} className="w-6 h-6" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </span>
            </span>
            <span className="flex flex-col gap-1">
                <label>SEO Friendly URL</label>
                <input
                    type="text"
                    value={`${url && customUrl ? url + customUrl : ""}`}
                    className="w-full h-[2rem] rounded-md border border-gray-400 bg-gray-100 ps-4"
                    onChange={(e) => dispatch(addDetails({ url: e.target.value }))}
                />
            </span>
            <p className="text-gray-500"> www.coimbatore.ai/category/sub-cat/haribavanam-peelamedu-</p>
        </div>
    );
};

export default AddBusinessSection;




