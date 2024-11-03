import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

const AdsRow = ({ data, index }) => {
    const { admin } = useSelector((state) => state.adminData.admin);
    const [openBannerModal, setOpenBannerModal] = useState(false);

    const handleOpenBannerModal = () => {
        setOpenBannerModal(true);
    };

    const handleCloseBannerModal = () => {
        setOpenBannerModal(false);
    };

    const handleDelete = (id) => {
        console.log(id);
    };

    return (
        <>
            <tr className="ease-in-out delay-150 duration-75">
                <td className="p-2 whitespace-nowrap">
                    <div className="text-center font-medium">{index + 1}</div>
                </td>
                <td className="p-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <span className="ml-2">{data?.campaignName}</span>
                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                        <span className="ml-2">{data?.business?.businessName}</span>
                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium">{new Date(data?.createdAt).toLocaleString()}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium">{data?.dayLimit}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium">${data?.campaignBudget}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium">{new Date(data?.campaignStartDate).toLocaleDateString()}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium">{new Date(data?.campaignEndDate).toLocaleDateString()}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium">{data?.stopCampaign ? "Stopped" : "Active"}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div onClick={handleOpenBannerModal} className="text-left cursor-pointer font-medium px-3 py-1 w-max rounded-md bg-dark-blue/25 dark:bg-dark-blue/80 text-dark-blue dark:text-white">
                        View Banners
                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium">--</div>
                </td>
            </tr>

            {openBannerModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-5 max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-4">Banner Images</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {data.banner.map((bannerUrl, idx) => (
                                <img key={idx} src={bannerUrl} alt={`Banner ${idx + 1}`} className="w-full h-[8rem] rounded-lg border-2 shadow-lg" />
                            ))}
                        </div>
                        <button onClick={handleCloseBannerModal} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdsRow;
