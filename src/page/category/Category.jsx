import React, { useState } from "react";
import CategorySection from "../../component/category/CategorySection";
import CategoryModal from "../../component/modal/categoryModal/CategoryModal";

const Category=()=>{
    
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => {
        setOpenModal((prev) => !prev);
    };

    return(
        <div className="w-full min-h-[600px] shadow-[0_4px_8px_rgba(0,0,0,0.1),0_-4px_8px_rgba(0,0,0,0.1)] rounded-lg">
             <div className="w-full flex justify-end p-3">
                 <button className="p-2 ps-3 pe-3 bg-black rounded-md text-white" onClick={toggleModal} >Add Category</button>
                 <CategoryModal open={openModal} onClose={toggleModal} />
             </div>
               <CategorySection   />
        </div>
    )
}

export default Category