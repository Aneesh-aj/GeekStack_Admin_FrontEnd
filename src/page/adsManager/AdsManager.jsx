import React, { useState } from "react";
import AdsManagerSection from "../../component/adsManager/AdsManagerSection";
import AdsModal from "../../component/modal/adsModal/AdsModal";


const AdsManager=()=>{
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => {
        setOpenModal((prev) => !prev);
    };
    return(
        <div className="w-full">
             <div className="w-full flex justify-end">
                 <button className="p-2 ps-3 pe-3 bg-black rounded-md text-white"  onClick={toggleModal}>Add Ads</button>
                 <AdsModal  open={openModal} onClose={toggleModal} />
             </div>
             <AdsManagerSection/>
        </div>
    )
}

export default AdsManager
