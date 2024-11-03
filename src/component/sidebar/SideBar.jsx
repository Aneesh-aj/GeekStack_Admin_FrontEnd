import { useState } from "react";
import React from "react";
import { menuItems } from "../static/sideBarData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAdmin } from "../../redux/slice/adminSlice";
import { removeDetails } from "../../redux/slice/businessModalSlice";

const SideBar = ({ onSelectOption, selectedOption }) => {
    const [openCategory, setOpenCategory] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleCategory = (category) => {
        setOpenCategory((prevCategory) => (prevCategory === category ? null : category));
        onSelectOption(category);
        navigate(`/admin/${category.toLowerCase().replace(/ /g, "-")}`);
    };

    const handleMouseEnter = () => setIsExpanded(true);
    const handleMouseLeave = () => setIsExpanded(false);

    function refreshing() {
        dispatch(removeAdmin());
        dispatch(removeDetails());
    }

    return (
        <section
            className={`fixed top-0 left-0 h-full bg-black p-3 transition-all duration-300 ease-in-out z-50 ${
                isExpanded ? "w-[18%]" : "w-[6rem]"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? "w-full" : "w-8"
                }`}
            >
                <h1 className="text-3xl font-bold mb-6 text-orange-500 transition-all duration-300">
                    <span>coimbatore</span>
                    <span className="text-white">.ai</span>
                </h1>
            </div>

            <ul className="space-y-3 text-white">
                {menuItems.map((item, index) => (
                    <li key={index} className="flex flex-col">
                        <button
                            className={`flex items-center w-full text-start p-2 rounded-md ${
                                selectedOption === item.category ? "bg-gray-600" : ""
                            } hover:bg-gray-700 transition-colors`}
                            onClick={() => toggleCategory(item.category)}
                        >
                            {/* Icon size and spacing change based on sidebar width */}
                            <item.icon
                                className={`${
                                    isExpanded ? "text-lg w-8" : "text-2xl w-24"
                                } mr-2 transition-all duration-300`}
                            />

                            <span
                                className={`ml-2 whitespace-nowrap overflow-hidden transition-all duration-300 ${
                                    isExpanded ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                {item.label}
                            </span>
                        </button>

                        {/* 
                        {openCategory === item.category && item.subItems && (
                            <ul className="ml-6 border-l-2 p-1 mt-1 flex flex-col gap-1">
                                {item.subItems.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <button
                                            className={`w-[90%] p-1 rounded-md ${
                                                selectedOption === subItem ? "bg-gray-600" : ""
                                            } hover:bg-gray-700 transition-colors`}
                                            onClick={() => onSelectOption(subItem)}
                                        >
                                            {subItem}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )} */}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SideBar;
