import React from "react";

const CustomMultiValue = ({ data, removeProps }) => (
    <div className="flex items-center gap-1 bg-gray-200 rounded-md py-1 px-2 me-1">
        <img src={data.value} alt={data.label} className="w-6 h-6" />
        <span>{data.label}</span>
        <button onClick={removeProps.onClick} className="ml-2 text-black">
            &times;
        </button>
    </div>
);

export default CustomMultiValue