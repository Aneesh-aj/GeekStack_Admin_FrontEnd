import { useState } from "react";
import React from "react";
import { menuItems } from "../static/sideBarData";
import { useNavigate } from "react-router-dom";
import { submitBusinessData } from "../../utils/api";

const SideBar = ({ onSelectOption, selectedOption }) => {
    const [openCategory, setOpenCategory] = useState(null);
    const navigate = useNavigate();

    const toggleCategory = (category) => {
        setOpenCategory((prevCategory) => (prevCategory === category ? null : category));
        onSelectOption(category);

        

        navigate(`/admin/${category.toLowerCase().replace(/ /g, "-")}`);
    };

    return (
        <section className="w-[18%] h-[100vh] bg-black p-7">
            <h1 className="text-3xl font-bold mb-6 text-orange-500">
                coimbatore<span className="text-white">.ai</span>
            </h1>

            <ul className="space-y-3 text-white">
                {menuItems.map((item, index) => (
                    <li key={index} className="flex flex-col">
                        <button
                            className={`flex items-center space-x-2 w-full text-start p-2 rounded-md ${
                                selectedOption === item.category ? "bg-gray-600" : ""
                            } hover:bg-gray-700 transition-colors`}
                            onClick={() => toggleCategory(item.category)}
                        >
                            <item.icon />
                            <span className="w-[90%]">{item.label}</span>
                        </button>

                        {openCategory === item.category && item.subItems && (
                            <ul className="ms-6 border-l-2 p-1 mt-1 flex flex-col gap-1">
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
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SideBar;
