import React, { useState } from "react";
import CategorySection from "../../component/category/CategorySection";
import CategoryModal from "../../component/modal/categoryModal/CategoryModal";

const Category=()=>{
    
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => {
        setOpenModal((prev) => !prev);
    };

    return(
        <div className="w-full">
             <div className="w-full flex justify-end">
                 <button className="p-2 ps-3 pe-3 bg-black rounded-md text-white" onClick={toggleModal} >Add Category</button>
                 <CategoryModal open={openModal} onClose={toggleModal} />
             </div>
               <CategorySection   />
        </div>
    )
}

export default Category