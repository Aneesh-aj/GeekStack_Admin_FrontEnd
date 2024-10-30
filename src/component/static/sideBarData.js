import { FaBullhorn, FaCog, FaHome, FaTag, FaUsers, FaUserShield } from "react-icons/fa";

export const menuItems = [
    {
        category: "Business",
        label: "Business",
        icon: FaHome,
    },
    {
        category: "Categories",
        label: "Categories",
        icon: FaHome,
        subItems: ["Manage Category"],
    },
    // {
    //     category: "Admin Role",
    //     label: "Admin Role",
    //     icon: FaUserShield,
    //     subItems: ["Assign Role", "Manage Role"],
    // },
    {
        category: "Customers",
        label: "Customers",
        icon: FaUsers,
        subItems: ["Manage Customers", "Customer History"],
    },
    {
        category: "Ads Manager",
        label: "Ads Manager",
        icon: FaBullhorn,
        subItems: ["Manage Ads", "Ad Performance"],
    },
    {
        category: "Badge Manager",
        label: "Badge Manager",
        icon: FaTag,
        subItems: ["Assign Badges", "Manage Badges"],
    },
    {
        category: "Settings",
        label: "Settings",
        icon: FaCog,
        subItems: ["Account Settings", "Privacy Settings"],
    },
];