import React, { useState, useEffect } from "react";
import SideBar from "../../component/sidebar/SideBar";
import BusinessPannel from "../../component/businessPannel/BusinnessPannel";
import Category from "../category/Category";
import AdsManager from "../adsManager/AdsManager";
import BadgeManager from "../badgeManager/BadgeManager";

const DashBoard = ({ selectedOptionProp }) => {
    const [selectedOption, setSelectedOption] = useState(selectedOptionProp || "Business");

    useEffect(() => {
        setSelectedOption(selectedOptionProp);
    }, [selectedOptionProp]);

    console.log(selectedOption)

    const renderContent = () => {
        switch (selectedOption) {
            case "Business":
                return <BusinessPannel />;
            case "Categories":
                return <Category />;
            case "Ads Manager":
                return <AdsManager />;
            case "Badge Manager":
                return <BadgeManager />;
            default:
                return <div>Select an option from the sidebar</div>;
        }
    };

    return (
        <div className="w-full flex bg-red-500">
            <SideBar onSelectOption={setSelectedOption} selectedOption={selectedOption} />
            <div className="flex-1 p-3 bg-gray-200">{renderContent()}</div>
        </div>
    );
};

export default DashBoard;
