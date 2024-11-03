import React, { useState } from "react";
import { useSelector } from "react-redux";

const BusinessRow = ({ data, index }) => {
  const { admin } = useSelector((state) => state.adminData.admin);
  const [dropdown, setDropdown] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [openStatusModal, setOpenStatusModal] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const colors = ["#00cfe8", "#ff9f43", "#ea5455", "#28c76f"];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <>
      <tr className="ease-in-out delay-150 duration-75">
        <td className="p-2 whitespace-nowrap">
          <div className="text-center font-medium">{index + 1}</div>
        </td>
        <td className="p-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="font-medium flex items-center space-x-1">
              <div
                style={{
                  backgroundColor: getRandomColor(),
                  color: "#ffffff",
                }}
                className="flex justify-center w-8 h-8 rounded-full items-center text-lg"
              >
                {data.businessName[0]}
              </div>
              <span>{data.businessName}</span>
            </div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium">{data.phoneNumber}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center space-x-2">
            {data.badge.map((badge, index) => (
              <img
                key={index}
                src={badge.badgeIcon}
                alt={`Badge ${index + 1}`}
                className="w-6 h-6"
              />
            ))}
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium">{data?.businessCategory?.categoryName}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium">
            {new Date(data.createdAt).toLocaleDateString()}
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium">{data.businessSubCategory}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium">{data.whatsAppAvailable ? "Yes" : "No"}</div>
        </td>
       
        <td className="p-2 whitespace-nowrap">
          <div
            onClick={handleOpenModal}
            className="text-left cursor-pointer font-medium px-3 py-1 w-max rounded-md bg-dark dark:bg-dark-blue/80 text-dark-blue dark:text-black"
          >
            View
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div
            className="text-left cursor-pointer font-medium px-3 py-1 w-max rounded-md bg-dark-blue/25 dark:bg-dark-blue/80 text-dark-blue dark:text-white"
          >
            --
          </div>
        </td>
      </tr>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 text-lg"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Business Details</h2>
            <div className="space-y-2">
              <p><strong>latitude :</strong> {data.latitude}</p>
              <p><strong>longitude :</strong> {data.longitude}</p>
              <p><strong>websiteLink:</strong> {data.websiteLink}</p>
              <p><strong>facebookLink:</strong> {data.facebookLink}</p>
              <p><strong>instagramLink:</strong> {data.instagramLink}</p>
              <p><strong>youtubeLink:</strong> {data.youtubeLink}</p>
              <p><strong>xLink:</strong> <a href={data.xLink} target="_blank" rel="noopener noreferrer">{data.xLink}</a></p>
              <p><strong>URL:</strong> <a href={data.url} target="_blank" rel="noopener noreferrer">{data.url}</a></p>
            </div>
            <button
              onClick={handleCloseModal}
              className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BusinessRow;
