import React from "react";
import CategorySection from "../../component/category/CategorySection";

const Category=()=>{

    return(
        <div className="w-full">
             <div className="w-full flex justify-end">
                 <button className="p-2 ps-3 pe-3 bg-black rounded-md text-white">Add Category</button>
             </div>
               <CategorySection/>
        </div>
    )
}

export default Category