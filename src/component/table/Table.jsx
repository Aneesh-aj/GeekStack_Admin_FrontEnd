import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import BusinessRow from "./tableRows/BusinessRow";
import CategoryRow from "./tableRows/CategoryRow";

const Table = ({ data, headings }) => {
  const location = useLocation();
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  console.log( " the data",data)

  const rows = [
    {
      route: "/admin/business",
      component: <BusinessRow data={data} />,
    },
    {
      route: "/admin/categories",
      component: <CategoryRow data={data} />,
    },
  ];
  return (
    <table className="table-auto w-full  border-b border-gray-500/25">
      <thead className="text-sm uppercase text-[#6f6b7d] border-b border-gray-500/25 dark:text-slate-300">
        <tr>
          {headings?.map((ele, index) => (
            <th key={index} className="p-3">
              <div
                className={`${
                  index === headings.length - 1 ? "text" : "text-left"
                } `}
              >
                {ele}
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="text-sm divide-y text-[#6f6b7d] Gilroy-Medium divide-gray-500/25 dark:text-slate-300">
    
        {data?.map((ele, index) => (
          <Fragment key={index}>
            {rows.map((row, ind) => {
              return (
                location.pathname === row.route && (
                  <Fragment key={ind}>
                    {React.cloneElement(row.component, {
                      key: ind,
                      index: index ,
                      data: ele,
                      openDropdownIndex:openDropdownIndex,
                      setOpenDropdownIndex:setOpenDropdownIndex
                    })}
                  </Fragment>
                )
              );
            })}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
