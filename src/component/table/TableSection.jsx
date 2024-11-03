import React from "react";
import Table from "./Table";


const TableSection = ({ data }) => {
  
 console.log(" hdhhd",data)

  return (
    <>
      {data?.loading ? (
        <div>Loading</div>
      ) : data?.data?.length <= 0 ? (
        <div className="h-[100%] w-full flex justify-center items-center   Gilroy-Medium dark:text-slate-700">
          <div className="space-y-4 flex flex-col items-center">
            <div className="text-lg sm:text-xl">No Data's Available..</div>
            <button
              onClick={data?.toggleSidebar}
              className="py-2 px-3 w-max bg-dark-blue text-white rounded-md flex items-center space-x-2"
            >
            </button>
          </div>
        </div>
      ) : (
        <div className="   bg-white rounded-md mt-1 xs:mt-10  w-full ">
          <div className="p-5 space-y-10">
            <div className=" flex justify-end ">
              <button
                onClick={data?.toggleSidebar}
                className="py-2 px-3 bg-dark-blue text-white rounded-md flex items-center space-x-2"
              >
                {/* <GoPlus className="w-6 h-6" /> <span>{data?.buttonValue}</span> */}
              </button>
            </div>
            <div className=" w-full  md:space-x-3 space-y-2 sm:space-y-0 flex flex-col sm:flex-row justify-between text-gray-900 Gilroy-Medium ">
              <div className="flex items-center space-x-3">
                <span>Show</span>
                <select
                  onChange={data?.handleLimit}
                  defaultValue={data?.limit}
                  name=""
                  className="border border-slate-300 rounded-md py-2 px-3  dark:border-slate-300/20"
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
                  className="border-2 border-black p-1 rounded-md  "
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
           
          </div>
        </div>
      )}
     
    </>
  );
};

export default TableSection;
