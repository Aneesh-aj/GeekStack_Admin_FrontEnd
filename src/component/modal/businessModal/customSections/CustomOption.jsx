import React from "react";

const CustomOption = ({ innerRef, innerProps, data }) => (
    <div ref={innerRef} {...innerProps} className="flex items-center gap-2 p-2">
        {console.log(" the dat one",data)}
        <img src={data.icon} alt={data.label} className="w-6 h-6" />
        <span>{data.label}</span>
    </div>
);

export default CustomOption