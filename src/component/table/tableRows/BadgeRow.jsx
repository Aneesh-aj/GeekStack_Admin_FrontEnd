import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

const BadgeRow = ({ data, index }) => {
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

    const handleCloseStatusModal = () => {
        setOpenStatusModal(false);
    };

    const ref = useRef();
    // useClickAway(ref, () => {
    //     setOpenDrewer(false);
    //     setDropdown(false);
    // });

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
    };

    return (
        <>
            <tr className="ease-in-out delay-150 duration-75">
                <td className="p-2 whitespace-nowrap">
                    <div className="text-center font-medium">{index + 1}</div>
                </td>
                <td className="p-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div
                            style={{
                                backgroundColor: backgroundColor,
                                color: color,
                            }}
                            className="flex justify-center w-8 h-8 rounded-full items-center text-lg"
                        >
                            {data?.badgeName[0]}
                        </div>
                        <span className="ml-2">{data?.badgeName}</span>
                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <img
                        src={data.badgeIcon}
                        alt={`${data.badgeName} icon`}
                        className="w-8 h-8 rounded-full"
                    />
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium">{new Date(data?.startDate).toLocaleString()}</div>
                </td>

                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium">{new Date(data?.endDate).toLocaleString()}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div onClick={handleOpenStatusModal} className="text-left cursor-pointer font-medium px-3 py-1 w-max rounded-md bg-dark-blue/25  dark:bg-dark-blue/80 text-dark-blue dark:text-black">
                        View
                    </div>
                </td>
            </tr>
        </>
    );
};

export default BadgeRow;
