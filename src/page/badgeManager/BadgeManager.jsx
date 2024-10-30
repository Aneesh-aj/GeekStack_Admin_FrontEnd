import React, { useState } from "react";
import BadgeManagerSection from "../../component/badgeManager/BadgeManagerSection";
import BadgeModal from "../../component/modal/badgeModal/BadgeModal";


const BadgeManager=()=>{
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => {
        setOpenModal((prev) => !prev);
    };
    return(
        <div className="w-full">
             <div className="w-full flex justify-end">
                 <button className="p-2 ps-3 pe-3 bg-black rounded-md text-white" onClick={toggleModal}>Add Badge</button>
                 <BadgeModal open={openModal} onClose={toggleModal}  />
             </div>
             <BadgeManagerSection/>
        </div>
    )
}

export default BadgeManager
