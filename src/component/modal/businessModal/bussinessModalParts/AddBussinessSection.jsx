import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import CustomOption from "../customSections/CustomOption";
import CustomMultiValue from "../customSections/CustomMultiValue";
import { addDetails } from "../../../../redux/slice/businessModalSlice";
import { getAllBadges, getAllCategory } from "../../../../utils/api";
import { uploadImages } from "../../../../firebase/upload";

const AddBusinessSection = () => {
    const modalData = useSelector((state) => state.businessModal.businessData);
    const [businessName, setBusinessName] = useState("");
    const [businessCategory, setBusinessCategory] = useState("");
    const [businessSubCategory, setBusinessSubCategory] = useState("");
    const [customUrl, setCustomUrl] = useState("");
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [url, setUrl] = useState("");
    const dispatch = useDispatch();
    const [selectedLogo, setSelectedLogo] = useState(null);
    const [badges,setBadges] = useState([])
    const [selectedBadges, setSelectedBadges] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const constructedUrl = `www.coimbatore.ai/${businessCategory}/${businessSubCategory}/${customUrl || businessName}`;
        setUrl(constructedUrl);
        dispatch(addDetails({ url: constructedUrl }));
    }, [businessCategory, businessSubCategory, customUrl, businessName]);

    const handleBadgeChange = (selectedOptions) => {
        const selected = selectedOptions || [];
        if (selected.length <= 2) {
            setSelectedBadges(selected);
            dispatch(addDetails({ badge: selected }));
        } else {
            console.log("You can select only up to 2 badges.");
        }
    };

    const changeBusinessName = (e) => {
        const newBusinessName = e.target.value;
        setBusinessName(newBusinessName);
        dispatch(addDetails({ businessName: newBusinessName }));
    };

    const changeCustomUrl = (e) => {
        const newCustomUrl = e.target.value;
        setCustomUrl(newCustomUrl);
    };

    const handleCategoryChange = (e) => {
        const selectedCategoryId = e.target.value;
        const selectedCategory = categories.find(category => category._id === selectedCategoryId);
        if (selectedCategory) {
            setBusinessCategory(selectedCategoryId);
            setSubCategories(selectedCategory.subCategory);
            setBusinessSubCategory("");
            dispatch(addDetails({ businessCategory: selectedCategoryId, businessSubCategory: "" }));
        }
    };

    const handleSubCategoryChange = (e) => {
        const selectedSubCategory = e.target.value;
        setBusinessSubCategory(selectedSubCategory);
        dispatch(addDetails({ businessSubCategory: selectedSubCategory }));
    };

    const handleLogoChange = async(e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
             
            if(file){
               const image = await uploadImages(file)
               setSelectedLogo(image)
               dispatch(addDetails({logo:image}))
            }

        }
    };

    async function fetchData() {
        try {
            const categoryData = await getAllCategory();
            const badgeData = await getAllBadges()
            setCategories(categoryData.category);
            console.log(" b ",badgeData.badge);
            
            setBadges(badgeData.badge)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="bg-white rounded-lg p-5 space-y-3">
            <div className="p-1">
                <label className="text-sm font-semibold text-gray-800">Business Name</label>
                <input
                    type="text"
                    value={businessName}
                    placeholder="Enter custom business name"
                    className="mt-1 w-full border border-gray-300 h-10 bg-gray-100 rounded-md px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
                    onChange={changeBusinessName}
                />
            </div>

            <div className="p-1">
                <label className="text-sm font-semibold text-gray-800">Business Category</label>
                <select
                    value={businessCategory || ""}
                    className="mt-1 w-full border border-gray-300 h-10 bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-200 ease-in-out hover:border-indigo-400"
                    onChange={handleCategoryChange}
                >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.categoryName}
                        </option>
                    ))}
                </select>
            </div>

            <div className="p-1">
                <label className="text-sm font-semibold text-gray-800">Business Sub Category</label>
                <select
                    value={businessSubCategory || ""}
                    className="mt-1 w-full border border-gray-300 h-10 bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition duration-200 ease-in-out hover:border-indigo-400"
                    onChange={handleSubCategoryChange}
                    disabled={!businessCategory}
                >
                    <option value="">Select Sub Category</option>
                    {subCategories.map((subCategory, index) => (
                        <option key={index} value={subCategory}>
                            {subCategory}
                        </option>
                    ))}
                </select>
            </div>

            <div className="p-1">
                <label className="text-sm font-semibold text-gray-800">Logo</label>
                <div className="mt-1 flex items-center gap-4">
                    <label className="relative cursor-pointer bg-indigo-600 text-white rounded-md px-4 py-2 font-semibold hover:bg-indigo-700 transition">
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleLogoChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        Upload Logo
                    </label>
                    {selectedLogo && (
                        <img
                            src={selectedLogo}
                            alt="Selected Logo Preview"
                            className="h-12 w-12 object-cover rounded-md border border-gray-300 shadow-sm"
                        />
                    )}
                </div>
            </div>

            <div className="p-1">
                <label className="text-sm font-semibold text-gray-800">Select Badges</label>
                <Select
                    options={badges.map((badge) => ({ value: badge._id, label: badge.badgeName,icon : badge.badgeIcon }))}
                    isMulti
                    closeMenuOnSelect={false}
                    components={{ Option: CustomOption, MultiValue: CustomMultiValue }}
                    onChange={handleBadgeChange}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>

            <div className="p-1">
                <label className="text-sm font-semibold text-gray-800">Custom URL</label>
                <input
                    type="text"
                    value={customUrl}
                    placeholder="Enter custom URL"
                    className="mt-1 w-full border border-gray-300 h-10 bg-gray-100 rounded-md px-4 py-2 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
                    onChange={changeCustomUrl}
                />
            </div>

            <div className="p-1">
                <label className="text-sm font-semibold text-gray-800">Generated URL</label>
                 <span className="text-sm font-semibold break-words">{url}</span>
            </div>
        </div>
    );
};

export default AddBusinessSection;
