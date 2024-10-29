import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select"; // Import react-select
import { addDetails } from "../../../redux/slice/businnessModalSlice";
import CustomOption from "../customSections/CustomOption";
import CustomMultiValue from "../customSections/CustomMultiValue";



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

        if (modalData.businessCategory && modalData.businessName && modalData.businessSubCategory&&!customUrl) {
            setCustomUrl(`/${modalData.businessName}`);
            setUrl(`www.coimbatore.ai/${modalData.businessCategory}/${modalData.businessSubCategory}`);
            dispatch(addDetails({ url: url + customUrl }));
        }
    }, [businessName, businessCategory, businessSubCategory]);

    const handleLogoChange = (logo) => {
        setSelectedLogo(logo);
        dispatch(addDetails({ logo: logo.src }));
        setDropdownOpen(false)
    };

    const handleBadgeChange = (selectedOptions) => {
        const selected = selectedOptions || [];
        if (selected.length <= 2) {
            setSelectedBadges(selected);
            console.log(selected)
            dispatch(addDetails({
                badge1: selected[0]?.value || "",
                badge2: selected[1]?.value || "",
            }));
        }
    };

    const changeUrl=(e)=>{
        const newURL = e.target.value
        setCustomUrl(newURL)
        dispatch(addDetails({url:url+customUrl}))
    }

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
        <div className="flex flex-col gap-3">
            <span className="flex flex-col gap-1">
                <label className="text-lg">Business Name</label>
                <input
                    type="text"
                    value={modalData.businessName}
                    placeholder="eg : Restaurant"
                    className="w-full border h-[2rem] bg-gray-100 rounded-md border-gray-400 ps-4 text-gray-700"
                    onChange={(e) => {
                        dispatch(addDetails({ businessName: e.target.value }));
                        setBusinessName(e.target.value);
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
                <label className="text-lg">Select Badges</label>
                <Select
                    options={logos.map((logo) => ({ value: logo.src, label: logo.label }))}
                    isMulti
                    onChange={handleBadgeChange}
                    value={selectedBadges.map((badge) => ({ value: badge.value, label: badge.label }))}
                    isClearable={false}
                    closeMenuOnSelect={false}
                    components={{ Option: CustomOption, MultiValue: CustomMultiValue }} // Use custom components
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
                <p className="text-sm text-gray-500">Select up to 2 badges</p>
            </span>
            <span className="flex flex-col gap-1">
                <label>SEO Friendly URL</label>
                 <label className="text-gray-500"> URL : {`${url && customUrl ?url+customUrl:""}`}</label>
                <input
                    type="text"
                    value={`${customUrl ? customUrl : ""}`}
                    className="w-full h-[2rem] rounded-md border border-gray-400 bg-gray-100 ps-4"
                    onChange={(e)=>changeUrl(e)}
                />
            </span>
            <p className="text-gray-500"> www.coimbatore.ai/category/sub-cat/haribavanam-peelamedu-</p>
        </div>
    );
};

export default AddBusinessSection;
