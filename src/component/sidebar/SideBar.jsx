import { useState } from "react";
import { FaHome, FaUserShield, FaUsers, FaBullhorn, FaTag, FaCog } from "react-icons/fa";

const SideBar = () => {
    const [openCategory, setOpenCategory] = useState(null); // State to track open category
    const [selectedSubItem, setSelectedSubItem] = useState(null); // State to track selected sub-item

    const toggleCategory = (category) => {
        // Toggle the clicked category, close others
        setOpenCategory((prevCategory) => (prevCategory === category ? null : category));
    };

    const handleSubItemClick = (subItem) => {
        // Set the clicked subcategory as selected
        setSelectedSubItem(subItem);
    };

    const isCategoryOpen = (category) => openCategory === category;
    const isSubItemSelected = (subItem) => selectedSubItem === subItem;

    return (
        <section className="w-[18%] h-[100vh] bg-black p-7">
            <h1 className="text-3xl font-bold mb-6 text-orange-500">coimbatore<span className="text-white">.ai</span></h1>

            <ul className="space-y-3 text-white flex flex-col">
                {/* Business */}
                <li>
                    <button
                        className="flex items-center space-x-2 w-full "
                        onClick={() => toggleCategory("Business")} >
                        <FaHome />
                        <span className={`w-[90%] text-start p-2 rounded-md ${isCategoryOpen("Business") ? "bg-gray-600" : ""}`}>Business</span>
                    </button>
                </li>
                <li className="flex flex-col">
                    <button
                        className="flex items-center space-x-2 w-full"
                        onClick={() => toggleCategory("Categories")}
                    >
                        <FaHome />
                        <span className={`w-[90%] text-start p-2 rounded-md ${isCategoryOpen("Categories") ? "bg-gray-600" : ""}`}>Categories</span>
                    </button>
                    {isCategoryOpen("Categories") && (
                        <ul className="ms-6 border-l-2 p-1 mt-1 flex flex-col gap-1">
                            <li>
                                <button
                                    className={`w-[90%] p-1 rounded-md ${
                                        isSubItemSelected("Add Category") ? "bg-gray-600" : ""
                                    }`}
                                    onClick={() => handleSubItemClick("Add Category")}
                                >
                                    Add Category
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`w-[90%] p-1 rounded-md ${
                                        isSubItemSelected("Manage Category") ? "bg-gray-600" : ""
                                    }`}
                                    onClick={() => handleSubItemClick("Manage Category")}
                                >
                                    Manage Category
                                </button>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="flex flex-col">
                    <button
                        className="flex items-center space-x-2 w-full "
                        onClick={() => toggleCategory("Admin Role")}
                    >
                        <FaUserShield />
                        <span className={`w-[90%] text-start p-2 rounded-md ${isCategoryOpen("Admin Role") ? "bg-gray-600" : ""}`}>Admin Role</span>
                    </button>
                    {isCategoryOpen("Admin Role") && (
                        <ul className="ms-6 border-l-2 p-1 mt-1 flex flex-col gap-1">
                            <li>
                                <button
                                    className={`w-[90%] p-1 rounded-md ${
                                        isSubItemSelected("Assign Role") ? "bg-gray-600" : ""
                                    }`}
                                    onClick={() => handleSubItemClick("Assign Role")}
                                >
                                    Assign Role
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`w-[90%] p-1 rounded-md ${
                                        isSubItemSelected("Manage Role") ? "bg-gray-600" : ""
                                    }`}
                                    onClick={() => handleSubItemClick("Manage Role")}
                                >
                                    Manage Role
                                </button>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Customers */}
                <li className="flex flex-col">
                    <button
                        className="flex items-center space-x-2 w-full"
                        onClick={() => toggleCategory("Customers")}
                    >
                        <FaUsers />
                        <span className={`w-[90%] text-start p-2 rounded-md ${isCategoryOpen("Customers") ? "bg-gray-600" : ""}`}>Customers</span>
                    </button>
                    {isCategoryOpen("Customers") && (
                        <ul className="ms-6 border-l-2 p-1  mt-1 flex flex-col gap-1">
                            <li>
                                <button
                                    className={`w-[90%] p-2 rounded-md ${
                                        isSubItemSelected("Manage Customers") ? "bg-gray-600" : ""
                                    }`}
                                    onClick={() => handleSubItemClick("Manage Customers")}
                                >
                                    Manage Customers
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`w-[90%] p-2 rounded-md ${
                                        isSubItemSelected("Customer History") ? "bg-gray-600" : ""
                                    }`}
                                    onClick={() => handleSubItemClick("Customer History")}
                                >
                                    Customer History
                                </button>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Ads Manager */}
                <li className="flex flex-col">
                    <button
                        className={`flex items-center space-x-2 w-full ${
                            isCategoryOpen("Ads Manager") ? "bg-gray-600" : ""
                        }`}
                        onClick={() => toggleCategory("Ads Manager")}
                    >
                        <FaBullhorn />
                        <span className="w-[90%] text-start p-2 rounded-md">Ads Manager</span>
                    </button>
                    {isCategoryOpen("Ads Manager") && (
                        <ul className="ms-6 border-l-2 p-1 mt-1 flex flex-col gap-1">
                            <li>
                                <button
                                    className={`w-[90%] p-2 rounded-md ${
                                        isSubItemSelected("Manage Ads") ? "bg-gray-600" : ""
                                    }`}
                                    onClick={() => handleSubItemClick("Manage Ads")}
                                >
                                    Manage Ads
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`w-[90%] p-2 rounded-md ${
                                        isSubItemSelected("Ad Performance") ? "bg-gray-600" : ""
                                    }`}
                                    onClick={() => handleSubItemClick("Ad Performance")}
                                >
                                    Ad Performance
                                </button>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Badge Manager */}
                <li className="flex flex-col">
                    <button
                        className={`flex items-center space-x-2 w-full ${
                            isCategoryOpen("Badge Manager") ? "bg-gray-600" : ""
                        }`}
                        onClick={() => toggleCategory("Badge Manager")}
                    >
                        <FaTag />
                        <span className="w-[90%] text-start p-2 rounded-md">Badge Manager</span>
                    </button>
                    {isCategoryOpen("Badge Manager") && (
                        <ul className="ms-6 border-l-2 p-1 mt-1 flex flex-col gap-1">
                            <li>
                                <button
                                    className={`w-[90%] p-2 rounded-md ${
                                        isSubItemSelected("Assign Badges") ? "bg-gray-600" : ""
                                    }`}
                                    onClick={() => handleSubItemClick("Assign Badges")}
                                >
                                    Assign Badges
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`w-[90%] p-2 rounded-md ${
                                        isSubItemSelected("Manage Badges") ? "bg-gray-600" : ""
                                    }`}
                                    onClick={() => handleSubItemClick("Manage Badges")}
                                >
                                    Manage Badges
                                </button>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Settings */}
                <li className="flex flex-col">
                    <button
                        className={`flex items-center space-x-2 w-full ${
                            isCategoryOpen("Settings") ? "bg-gray-600" : ""
                        }`}
                        onClick={() => toggleCategory("Settings")}
                    >
                        <FaCog />
                        <span className="w-[90%] text-start p-2 rounded-md">Settings</span>
                    </button>
                    {isCategoryOpen("Settings") && (
                        <ul className="ms-6 border-l-2 p-1 mt-1 flex flex-col gap-1">
                            <li>
                                <button
                                    className={`w-[90%] p-2 rounded-md ${
                                        isSubItemSelected("Account Settings") ? "bg-gray-600" : ""
                                    }`}
                                    onClick={() => handleSubItemClick("Account Settings")}
                                >
                                    Account Settings
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`w-[90%] p-2 rounded-md ${
                                        isSubItemSelected("Privacy Settings") ? "bg-gray-600" : ""
                                    }`}
                                    onClick={() => handleSubItemClick("Privacy Settings")}
                                >
                                    Privacy Settings
                                </button>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </section>
    );
};

export default SideBar;
