import React from "react";
import Table from "./Table";

// import CustomPagination from "../paginations/CustomPagination";
// import { GoPlus } from "react-icons/go";
// import TableShimmer from "../shimmers/TableShimmer";

const TableSection = ({ data }) => {
//   const DrawerComponent = data?.Drawer;
  
 console.log(" hdhhd",data)

  return (
    <>
      {data?.loading ? (
        // <TableShimmer />
        <div>hhh</div>
      ) : data?.data?.length <= 0 ? (
        <div className="h-[90%] w-full flex justify-center items-center   Gilroy-Medium dark:text-slate-300">
          <div className="space-y-4 flex flex-col items-center">
            <div className="text-lg sm:text-xl">No Data's Available..</div>
            <button
              onClick={data?.toggleSidebar}
              className="py-2 px-3 w-max bg-dark-blue text-white rounded-md flex items-center space-x-2"
            >
              {/* <GoPlus className="w-6 h-6" /> <span>{data?.buttonValue}</span> */}
            </button>
          </div>
        </div>
      ) : (
        <div className="  shadow-md bg-white rounded-md mt-6 xs:mt-10 dark:bg-gray-800 w-full ">
          <div className="p-5 space-y-10">
            <div className=" flex justify-end ">
              <button
                onClick={data?.toggleSidebar}
                className="py-2 px-3 bg-dark-blue text-white rounded-md flex items-center space-x-2"
              >
                {/* <GoPlus className="w-6 h-6" /> <span>{data?.buttonValue}</span> */}
              </button>
            </div>
            <div className=" w-full  md:space-x-3 space-y-2 sm:space-y-0 flex flex-col sm:flex-row justify-between text-[#6f6b7d] Gilroy-Medium dark:text-slate-300">
              <div className="flex items-center space-x-3">
                <span>Show</span>
                <select
                  onChange={data?.handleLimit}
                  defaultValue={data?.limit}
                  name=""
                  className="border border-slate-300 rounded-md py-2 px-3 dark:bg-gray-800 dark:border-slate-300/20"
                  id=""
                >
                  <option value="2">2</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
                <span>entries</span>
              </div>
              <div className="flex space-x-2 items-center">
                <label htmlFor="">Search :</label>
                <input
                  onChange={(e) => data?.setSearch(e.target.value)}
                  type="text"
                  className="border border-slate-300 p-1 rounded-md dark:bg-gray-800 dark:border-slate-300/20"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-2 mx-auto">
            <div className="max-w-full overflow-x-auto no-scrollbar">
            <Table
                headings={data?.headings}
                data={data?.data}
             
              />
            </div>
          </div>
          <div className="p-6 flex ">
            {/* <CustomPagination
              page={data?.currentPage}
              totalPages={data?.totalPages}
              limit={data?.limit}
              onPageChange={data?.handlePageChange}
            /> */}
          </div>
        </div>
      )}
      {/* <DrawerComponent
        open={data?.open}
        refresh={data?.refresh}
        setRefresh={data?.setRefresh}
        setOpen={data?.setOpen}
        toggleSidebar={data?.toggleSidebar}
      /> */}
    </>
  );
};

export default TableSection;