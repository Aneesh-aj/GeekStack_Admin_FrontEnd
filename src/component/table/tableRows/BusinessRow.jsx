import React, { useRef, useState } from "react"
import { useSelector } from "react-redux";


const BusinessRow=({data})=>{
    const { admin } = useSelector((state) => state.adminData.admin);
    const [dropdown, setDropdown] = useState(false);
    const [openDrawer, setOpenDrewer] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [openStatusModal, setOpenStatusModal] = useState(false);
    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };
    const handleOpenStatusModal = () => {
      setOpenStatusModal(true);
    };
  
    const handleClosStatuseModal = () => {
      setOpenStatusModal(false);
    };
    const ref = useRef();
    // useClickAway(ref, () =>{
    //   setOpenDrewer(false)
    //   setDropdown(false)
    // } );
    const toggleSidebar = () => setOpenDrewer((prev) => !prev);
    const colors = ["#00cfe8", "#ff9f43", "#ea5455", "#28c76f"];
    const getRandomColor = () => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      const color = colors[randomIndex];
  
      const hexToRgb = (hex) =>
        hex
          .replace(
            /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            (m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`
          )
          .substring(1)
          .match(/.{2}/g)
          .map((x) => parseInt(x, 16));
  
      const [r, g, b] = hexToRgb(color);
  
      const opacity = 0.2;
  
      const textColor = color;
  
      return {
        backgroundColor: `rgba(${r}, ${g}, ${b}, ${opacity})`,
        color: textColor,
      };
    };
  
    const { backgroundColor, color } = getRandomColor();
  
    const handleDelete = (id) => {
      console.log(id);
      DeleteConfirmationModal(
        deleteLeadHandler,
        id,
        admin?.token,
        refresh,
        setRefresh
      );
    };
  
    return (
      <>
        <tr className="ease-in-out delay-150 duration-75">
        <td className="p-2 whitespace-nowrap">
            <div className="text-center font-medium">{1}</div>
          </td>
          <td className="p-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="font-medium flex items-center space-x-1">
                <div
                  style={{
                    backgroundColor: backgroundColor,
                    color: color,
                  }}
                  className="flex justify-center w-8 h-8 rounded-full   items-center text-lg"
                >
                  {data?.name[0]}
                </div>
                <span>{data?.name}</span>
              </div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium">{data?.number}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium">{data?.email}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium">
              {/* {dateFormater(data?.createdAt)} */}
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium">{data?.course}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium">{data?.workingStatus}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium">{data?.leadFrom || "-"} </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium">{data?.demoClass || "-"} </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium">{data?.leadScore || "-"} </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div onClick={handleOpenStatusModal} className="text-left cursor-pointer font-medium px-3 py-1 w-max rounded-md bg-dark-blue/25  dark:bg-dark-blue/80 text-dark-blue dark:text-white">
              {/* {data?.status} */}
              view
            </div>
          </td>
  
          <td className="p-2 whitespace-nowrap">
            <div className=" hover:text-slate-800 font-medium text-center flex justify-center items-center space-x-5 ">
              {/* <AiOutlineDelete
                onClick={() => handleDelete(data?._id)}
                className="text-black w-6 h-6 dark:text-white cursor-pointer"
              /> */}
              ddd
              <div className="relative">
                {/* <IoMdMore
                  onClick={() => {
                    setDropdown(!dropdown);
                    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
                  }}
                  className="text-black w-6 h-6 dark:text-white cursor-pointer"
                /> */}
                dddss
                {dropdown &&openDropdownIndex === index && (
                 <div
                 className={`absolute right-0 z-10 origin-top-right bg-white rounded-md text-gray-600 shadow-lg focus:outline-none border dark:text-slate-300 dark:bg-gray-800 dark:border-slate-300/20`}
               >
                    <div
                      // onClick={() => handleDelete(department._id)}
                      className="py-1"
                    >
                      <span
                        onClick={handleOpenModal}
                        className="block px-4 py-2  cursor-pointer  hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-slate-300"
                      >
                        Update Status
                      </span>
                    </div>
                    <div
                      // onClick={handleOpenModal}
                      className="py-1 border-t dark:border-slate-500/25"
                    >
                      <span
                        onClick={toggleSidebar}
                        className="block px-4 py-2 cursor-pointer   hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-slate-300"
                      >
                        Edit
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </td>
        </tr>
      
      </>
    );
}

export default BusinessRow