import React, { useState, useEffect } from "react";
import SideBar from "../../component/sidebar/SideBar";
import BusinessPannel from "../../component/businessPannel/BusinnessPannel";
import Category from "../category/Category";
import AdsManager from "../adsManager/AdsManager";
import BadgeManager from "../badgeManager/BadgeManager";
import Breadcrumb from "../../component/bredcrumb/Breadcrumb";

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
        <div className="w-full h-screen flex ">
            <SideBar onSelectOption={setSelectedOption} selectedOption={selectedOption} />
            <div className="ms-24 w-full overflow-y-scroll scrollbar-hide" >
                <div className="w-full   p-2 mt-5 ">
                    <div className="bg-white flex items-center  p-2 rounded-lg w-full h-[4rem] shadow-[0_4px_8px_rgba(0,0,0,0.1),0_-4px_8px_rgba(0,0,0,0.1)]">
                        <svg className="w-5 h-5 text-gray-400 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M9.75 17.75a8 8 0 1 1 11.31-11.31 8 8 0 0 1-11.31 11.31z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search.."
                            className="w-full bg-transparent outline-none px-2 text-gray-700 placeholder-gray-400"
                        />

                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">

                        </div>
                    </div>
                </div>
                <div className="w-full p-2">
                    <Breadcrumb  path={selectedOption}/>
                </div>
                <div className="flex-1 p-3 bg-white">{renderContent()}</div>
            </div>
        </div>
    );
};

export default DashBoard;
