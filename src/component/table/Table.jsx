import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import BusinessRow from "./tableRows/BusinessRow";
import CategoryRow from "./tableRows/CategoryRow";
import AdsRow from "./tableRows/AdsRow";
import BadgeRow from "./tableRows/BadgeRow";

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
    {
      route:"/admin/ads-manager",
      component:<AdsRow data={data}/>
    },
    {
      route:"/admin/badge-manager",
      component:<BadgeRow data={data}/>
    }
  ];
  return (
    <table className="table-auto w-full  border-b border-gray-500/25">
      <thead className="text-sm uppercase text-gray-500 border-b border-gray-500/25 ">
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

      <tbody className="text-sm divide-y text-gray-400 Gilroy-Medium divide-gray-500/25 ">
    
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
