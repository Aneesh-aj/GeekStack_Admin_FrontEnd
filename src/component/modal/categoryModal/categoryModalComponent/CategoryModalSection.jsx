import { useState } from "react";
import React from "react";
import { createCategory } from "../../../../utils/api";
import { uploadImages } from "../../../../firebase/upload";
import toast, { ToastBar } from "react-hot-toast";

const CategoryModalSection = () => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryIcon, setCategoryIcon] = useState(null);
    const [subCategories, setSubCategories] = useState([]);
    const [newSubCategory, setNewSubCategory] = useState("");
    const [errors, setErrors] = useState({});

    const handleIconChange = async (e) => {
        try {
            const file = e.target.files[0];
            const image = await uploadImages(file);
            console.log("The image is .........", image);
            if (image) {
                setCategoryIcon(image);
                setErrors({ ...errors, categoryIcon: "" });
            }
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const addSubCategory = () => {
        if (newSubCategory.trim()) {
            const lowerCaseSubCategories = subCategories.map((sub) => sub.toLowerCase());
            if (lowerCaseSubCategories.includes(newSubCategory.trim().toLowerCase())) {
                setErrors({ ...errors, subCategories: "Sub-category must be unique." });
            } else {
                setSubCategories([...subCategories, newSubCategory.trim()]);
                setNewSubCategory("");
                setErrors({ ...errors, subCategories: "" });
            }
        } else {
            setErrors({ ...errors, subCategories: "Sub-category name cannot be empty." });
        }
    };
    
    const removeSubCategory = (index) => {
        setSubCategories(subCategories.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!categoryName) newErrors.categoryName = "Category name is required.";
        if (!categoryIcon) newErrors.categoryIcon = "Category icon is required.";
        if (!subCategories.length) newErrors.subCategories = "At least one sub-category is required.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const categoryData = {
                categoryName,
                categoryIcon,
                subCategory: subCategories,
            };
            console.log("Submitted data:", categoryData);

            const res = await createCategory(categoryData);
            // Optionally handle the response here
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* <ToastBar/> */}
            <div className="p-1">
                <label className="text-sm font-semibold text-gray-800">Category Name</label>
                <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="e.g., Electronics"
                    className="mt-1 w-full border h-10 rounded-md border-gray-300 bg-gray-50 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.categoryName && <p className="text-red-600 text-sm">{errors.categoryName}</p>}
            </div>

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

            <div className="p-1">
                <label className="text-sm font-semibold text-gray-800">Sub-Categories</label>
                <div className="flex items-center gap-2 mt-2">
                    <input
                        type="text"
                        value={newSubCategory}
                        onChange={(e) => setNewSubCategory(e.target.value)}
                        placeholder="e.g., Mobile Phones"
                        className="flex-grow border h-10 rounded-md border-gray-300 bg-gray-50 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        type="button"
                        onClick={addSubCategory}
                        className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
                    >
                        Add
                    </button>
                </div>
                {errors.subCategories && <p className="text-red-600 text-sm">{errors.subCategories}</p>}

                <ul className="mt-2 max-h-32 overflow-y-auto space-y-2 border border-gray-200 rounded-md p-2">
                    {subCategories.map((sub, index) => (
                        <li key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-md shadow-sm">
                            <span className="text-gray-700 text-sm">{sub}</span>
                            <button
                                type="button"
                                onClick={() => removeSubCategory(index)}
                                className="text-red-500 font-semibold text-sm hover:text-red-700"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-1">
                <button
                    type="submit"
                    className="w-full h-10 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition"
                >
                    Create Category
                </button>
            </div>
        </form>
    );
};

export default CategoryModalSection;
